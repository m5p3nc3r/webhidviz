import { html } from 'lit';
import { customElement } from 'lit/decorators.js'
import { HIDDecode } from '../data/hidDecode';
import { HIDLitElement } from './hidlitelement';
import { HIDReportInfoView } from './hidReportInfoView';
import { BitInputStream } from "../data/bitInputStream"
import { HIDReportType } from './hidReportItemView';

@customElement('hid-collectioninfo')
export class HIDCollectionInfoView extends HIDLitElement {
    private collection: HIDCollectionInfo;

    constructor(collection: HIDCollectionInfo) {
        super();

        this.collection = collection;

        this.addReports("input", HIDReportType.Input, collection.inputReports);
        this.addReports("output", HIDReportType.Output, collection.outputReports);
        this.addReports("feature", HIDReportType.Feature, collection.featureReports);
    }

    addReports(slot: string, type: HIDReportType, reports?: HIDReportInfo[]) {
        if(reports) {
            for(let report of reports) {
                let reportView = new HIDReportInfoView(report, type);
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
        <p>Type : ${this.collection.type?.toString()},
        Usage Page : ${HIDDecode.usagePage(this.collection.usagePage)},
        Usage : ${HIDDecode.usage(this.collection.usagePage, this.collection.usage)}
        <slot name='input'></slot>
        <slot name='output'></slot>
        <slot name='feature'></slot>
        `;
    }

}
