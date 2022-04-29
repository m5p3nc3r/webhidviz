import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { HIDCollectionInfoView } from './hidCollectionInfoView';
import { HIDLitElement } from './hidlitelement';
import { BitInputStream } from "../data/bitInputStream"

@customElement('hid-device')
export class HIDDeviceView extends LitElement {

    @property({type: Number})
    vendorId?: number;

    @property({type: Number})
    productId?: number;

    @property({type: String})
    productName?: string;

    device?: HIDDevice;

    constructor(device?: HIDDevice) {
        super();

        this.device = device;
    }

    // This function is called once after the first call to 'update'
    // This is the first time that the properties will be reflected properly
    firstUpdated() {
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
                collectionView.setAttribute('slot', 'collection');
                this.appendChild(collectionView);
            }

            device.open();

            this.device.oninputreport = (e: HIDInputReportEvent) => this.processInputReport(e);
        }
    }
   

    private processInputReport(report: HIDInputReportEvent) {
        let { device, reportId, data } = report;
        let stream = new BitInputStream(new Uint8Array(data.buffer),0, data.byteLength);

        // TODO: Make sure we pass this to the correct reportID

        // Iterate over the children that are of type HIDLitElelement
        this.childNodes.forEach((e:ChildNode) => {
            if(e instanceof HIDLitElement) {
                e.processStream(stream);
            }
        });
    }

    render() {
        return html `
        <h1>Device</h1>
        <p>Product Name : ${this.productName?.toString()}
        Product Id: ${this.productId?.toString()}
        Vendor Id : ${this.vendorId?.toString()}
        <slot name='collection'></slot>
        `;
    }
}

