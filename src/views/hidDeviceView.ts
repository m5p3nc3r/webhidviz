import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { HIDCollectionInfoView } from './hidCollectionInfoView';
import { HIDLitElement } from './hidlitelement';
import { BitInputStream } from "../data/bitInputStream"

@customElement('hid-device')
export class HIDDeviceView extends LitElement {

    @property({type: Boolean})
    test: boolean = false;

    @property({type: Number})
    vendorId: number = 0;

    @property({type: Number})
    productId: number = 0;

    @property({type: String})
    productName: string = "";

    device?: HIDDevice;

    constructor(device?: HIDDevice) {
        super();

        this.device = device;
    }

    // This function is called once after the first call to 'update'
    // This is the first time that the properties will be reflected properly
    firstUpdated() {
        // No need to run this code if we are in test mode.
        if(this.test) return;
        if(this.device==undefined) {
            // If a device wasn't set in the constructor, try and find a matching device from our attributes
            navigator.hid.getDevices().then((devices) => {
                let device = devices.find(d => d.vendorId == this.vendorId && d.productId == this.productId, this);
                this.setDevice(device);
            });
        } else {
            // Otherwise, setup based on the device that was given
            this.setDevice(this.device);
        }
    }

    private setDevice(device?: HIDDevice) {
        if(device) {
            this.device=device;

            this.vendorId = device.vendorId;
            this.productId = device.productId;
            this.productName = device.productName;

            for (let collection of device.collections) {
                let collectionView = new HIDCollectionInfoView(collection);
                this.appendChild(collectionView);
            }

            device.open();

            this.device.oninputreport = (e: HIDInputReportEvent) => this.processInputReport(e);
        }
    }

    private lastReport?: Uint8Array;

    private processInputReport(report: HIDInputReportEvent) {
        let { device, reportId, data } = report;
        this.lastReport = new Uint8Array(data.buffer);
        let stream = new BitInputStream(this.lastReport,0, data.byteLength);

        // TODO: Make sure we pass this to the correct reportID

        // Iterate over the children that are of type HIDLitElelement
        this.childNodes.forEach((e:ChildNode) => {
            if(e instanceof HIDLitElement) {
                e.processStream(stream);
            }
        });
    }

    public dumpLastReport() {
        console.log(this.lastReport||"");
    }

    render() {
        return html `
        <h1>Device</h1>
        <p>Product Name : ${this.productName}
        Product Id: ${this.productId?.toString()}
        Vendor Id : ${this.vendorId?.toString()}
        <slot></slot>
        `;
    }
}

