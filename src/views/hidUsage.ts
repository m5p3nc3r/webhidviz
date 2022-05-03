import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { HIDDecode } from '../data/hidDecode';

@customElement('hid-usage')
export class HIDUsageView extends LitElement {
    usage?: string;

    @property({type: Number})
    lMin: number;
    @property({type: Number})
    lMax: number;

    // This is the raw value from the input stream
    private _value : number = 0;

    @property({type: Number})
    get value() : number {
        return this._value;
    }
    set value(v: number) {
        const oldValue = this._value;
        if(this.lMin <= v && v<= this.lMax) {
            this._value=v;
            this.requestUpdate('value', oldValue);
            this.slider = this.normaliseValue(v);
        }
    }

    // The slider is a normailzed (0-1) verision of the raw input value
    // betwee lMin and lMax
    @property({type: Number})
    slider: number = 0;

    constructor(lMin?: number, lMax?: number, usage?: number) {
        super();
        this.usage = usage?HIDDecode.fromPacked(usage)[1]:undefined;
        this.lMin = lMin || 0;
        this.lMax = lMax || 0;
    }

    normaliseValue(val: number) : number {
        if(val<this.lMin) return 0;
        if(val>=this.lMax) return 100;
        let range = this.lMax - this.lMin;
        let value = val - this.lMin;
        return (value / range);
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