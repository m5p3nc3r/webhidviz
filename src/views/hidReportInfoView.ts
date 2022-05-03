import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { HIDLitElement } from './hidlitelement';
import { HIDReportItemView, HIDReportType } from './hidReportItemView';
import { BitInputStream } from "../data/bitInputStream"

@customElement('hid-reportinfo')
export class HIDReportInfoView extends HIDLitElement {
    @property({type: Number})
    reportId: number;

    constructor(ctx: HIDReportInfo) {
        super();

        this.reportId = ctx?.reportId||0;
        
        for(let item of ctx?.items||[]) {
            let reportView = new HIDReportItemView(item);
            this.appendChild(reportView);
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
        <p>Report ID ${this.reportId.toString()} 
        <slot></slot>
        `;
    }
}
