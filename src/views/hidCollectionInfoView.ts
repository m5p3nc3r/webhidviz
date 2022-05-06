import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { HIDDecode } from '../data/hidDecode';
import { HIDLitElement } from './hidlitelement';
import { HIDReportInfoView } from './hidReportInfoView';
import { BitInputStream } from "../data/bitInputStream"

@customElement('hid-collectioninfo')
export class HIDCollectionInfoView extends HIDLitElement {
    @property({type: Number})
    type: number;

    @property({type: Number})
    usagePage: number;

    @property({type: Number})
    usage: number;

    @property({type: String})
    usageString: string = "";


    constructor(collection?: HIDCollectionInfo) {
        super();

        // Extract required data from HIDCollectionInfo
        this.type = collection?.type||0;
        this.usagePage = collection?.usagePage||0;
        this.usage = collection?.usage||0;


        if(collection) {
            this.addReports("input", collection.inputReports);
            this.addReports("output", collection.outputReports);
            this.addReports("feature", collection.featureReports);
        }
    }

    firstUpdated() {
        HIDDecode.usage(this.usagePage, this.usage).then(usage => this.usageString = usage);
    }

    addReports(slot: string, reports?: HIDReportInfo[]) {
        if(reports) {
            for(let report of reports) {
                let reportView = new HIDReportInfoView(report);
                reportView.setAttribute('slot', slot);
                this.appendChild(reportView);
            }
        }

    }

    processStream(stream: BitInputStream) {
        this.childNodes.forEach((e:any) => {
            if(e instanceof HIDLitElement) {
                e.processStream(stream);
            }
        });
    }

    render() {
        return html `
        <p>Type : ${this.type.toString()},
        Usage Page : ${HIDDecode.usagePage(this.usagePage)},
        Usage : ${this.usageString}
        <slot name='input'></slot>
        <slot name='output'></slot>
        <slot name='feature'></slot>
        `;
    }

}
