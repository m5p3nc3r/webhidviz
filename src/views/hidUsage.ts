import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { BitInputStream } from '../data/bitInputStream';
import { HIDDecode } from '../data/hidDecode';
import { HIDLitElement } from './hidlitelement';

@customElement('hid-usage')
export class HIDUsageView extends HIDLitElement {
    @property({type: String})
    usage?: string;

    @property({type: Number})
    lMin: number;
    @property({type: Number})
    lMax: number;

    reportSize: number;

    // This is the raw value from the input stream
    private _value : number = 0;

    @property({type: Number})
    get value() : number {
        return this._value;
    }
    set value(v: number) {
        const oldValue = this._value;
        // Force the new value into the specified range
        if(v < this.lMin || v > this.lMax) {
            // TODO: Flag that the value is out of range
        }
        this._value=v;
        this.requestUpdate('value', oldValue);
        this.slider = this.normaliseValue(v);
    }

    // The slider is a normailzed (0-1) verision of the raw input value
    // betwee lMin and lMax
    @property({type: Number})
    slider: number = 0;

    constructor(lMin?: number, lMax?: number, reportSize?: number, usage?: number) {
        super();
        if(usage) HIDDecode.fromPacked(usage)[1].then( u => this.usage = u);
        this.lMin = lMin || 0;
        this.lMax = lMax || 0;
        this.reportSize = reportSize || 0;
    }

    normaliseValue(val: number) : number {
        if(val<this.lMin) return 0;
        if(val>=this.lMax) return 100;
        let range = this.lMax - this.lMin;
        let value = val - this.lMin;
        return (value / range);
    }

    processStream(stream: BitInputStream) {
        this.value = stream.read(this.reportSize, this.lMin<0);
    }

    static styles = css`
    :host {
        padding: 10px;
    }
    `;


    render() {
        return html `
        <div>${this.usage} ${this._value}</div>
        <progress max='1' value='${this.slider}'></progress>
        `;
    }
}