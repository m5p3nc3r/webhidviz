import { html } from 'lit';
import { customElement } from 'lit/decorators.js'
import { HIDLitElement } from './hidlitelement';
import { HIDReportItemView, HIDReportType } from './hidReportItemView';
import { BitInputStream } from "../data/bitInputStream"

@customElement('hid-reportinfo')
export class HIDReportInfoView extends HIDLitElement {
    ctx: HIDReportInfo;

    constructor(ctx: HIDReportInfo, type: HIDReportType) {
        super();

        this.ctx = ctx;
        
        if(ctx.items) {
            for(let item of ctx.items) {
                let reportView = new HIDReportItemView(item, type);
                reportView.setAttribute('slot', 'item');
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
        <p>Report ID ${this.ctx.reportId?.toString()} 
        <slot name='item'></slot>
        `;
    }
}
