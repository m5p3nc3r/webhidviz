import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import { HIDLitElement } from './hidlitelement';
import { HIDUsageView } from './hidUsage';
import { BitInputStream } from "../data/bitInputStream"

export enum HIDReportType {
    Input,
    Output,
    Feature,
    Undefined
}

@customElement('hid-reportitem')
export class HIDReportItemView extends HIDLitElement {
    private reportSize: number;
    private reportCount: number;
    private type: HIDReportType = HIDReportType.Undefined;

    constructor(ctx?: HIDReportItem) {
        super();


        if(ctx?.reportCount) {
            for(let i=0; i<ctx.reportCount; i++) {
                if(ctx.logicalMinimum!=undefined && ctx.logicalMaximum!=undefined) {
                    let usage = ctx.usages ? ctx.usages[i] : undefined;
                    let usageView = new HIDUsageView(ctx.logicalMinimum, ctx.logicalMaximum, usage);
                    this.appendChild(usageView);
                }
            }
        }

        this.reportSize = ctx?.reportSize||0;
        this.reportCount = ctx?.reportCount||0;
    }

    firstUpdated() {
        switch(this.parentElement?.slot) {
            case "input": this.type=HIDReportType.Input; break;
            case "output": this.type=HIDReportType.Output; break;
            case "feature": this.type=HIDReportType.Feature; break
            default: this.type=HIDReportType.Undefined; break;
        }
    }

    processStream(stream: BitInputStream) {
        if(this.type == HIDReportType.Input) {
            for(let i=0; i<this.reportCount; i++ ) {
                let value = stream.read(this.reportSize);
                let node = this.childNodes[i] as HIDUsageView;
                node.value = value;
            }
        }
    }

    static styles = css`
    :host {
        display: block;
        padding: 10px;
    }
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    `;

    render() {
        return html`
        <p>HIDReportItemView
        <div class="container">
          <slot></slot>
        </div>
        `;
    }
}
