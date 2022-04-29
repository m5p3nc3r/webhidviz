import { LitElement } from "lit";
import { BitInputStream } from "../data/bitInputStream"


export abstract class HIDLitElement extends LitElement {
    constructor() {
        super();
    }
    abstract processStream(stream: BitInputStream): void;
}
