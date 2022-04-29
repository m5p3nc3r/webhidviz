export class HIDDecode {
    static fromPacked(packed: number) : [usagePage: string, usage: string] {
        let page = (packed>>16)&0xffff;
        let id = packed &0xffff;

        return [this.usagePage(page), this.usage(page, id)]
    }

    static usagePage(usagePage: number | undefined) : string {
        let ret="";
        switch (usagePage?usagePage:0) {
            case 0x00: ret = "undefined"; break;
            case 0x01: ret = "Generic Desktop Controls"; break;
            case 0x02: ret = "Simulation Controls"; break;
            case 0x03: ret = "VR Controls"; break;
            case 0x04: ret = "Sport Controls"; break;
            case 0x05: ret = "Game Controls"; break;
            case 0x06: ret = "Generic Device Controls"; break;
            case 0x07: ret = "Keyboard/Keypad"; break;
            case 0x08: ret = "LEDs"; break;
            case 0x09: ret = "Button"; break;
            case 0x0a: ret = "Ordinal"; break;
            case 0x0b: ret = "Telophony"; break;
            case 0x0c: ret = "Consumer"; break;
            case 0x0d: ret = "Digitizer"; break;
            case 0x0e: ret = "Reserved"; break;
            case 0x0f: ret = "PID Page"; break;
            case 0x10: ret = "Unicode"; break;
            default: {
                if(usagePage?usagePage:0 >=0xff00) ret = "Vendor-defined";
                else ret = "Reserved or not decoded..."; break;
            }
        }
        return ret;
    }

    static usage(usagePage: number | undefined, usage: number | undefined) : string {
        let ret="";
        switch (usagePage?usagePage:0) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = this.usage_genericDesktop(usage); break;
            default: ret = "DEFAULT"; break;
        }
        return ret;
    }

    // https://www.usb.org/sites/default/files/documents/hut1_12v2.pdf page 26
    private static usage_genericDesktop(usage: number | undefined) : string {
        let ret="";
        switch(usage?usage:0) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = "Pointer"; break;
            case 0x02: ret = "Mouse"; break;
            case 0x04: ret = "Joystick"; break;
            case 0x05: ret = "Game Pad"; break;
            case 0x06: ret = "Keyboard"; break;
            case 0x07: ret = "Keypad"; break;
            case 0x08: ret = "Multi-axis Controller"; break;
            case 0x09: ret = "Tablet PC System Controls"; break;
            // 0x10 - 0x2F Reserved
            case 0x30: ret = "X"; break;
            case 0x31: ret = "Y"; break;
            case 0x32: ret = "Z"; break;
            case 0x33: ret = "Rx"; break;
            case 0x34: ret = "Ry"; break;
            case 0x35: ret = "Rz"; break;
            case 0x36: ret = "Slider"; break;
            case 0x37: ret = "Dial"; break;
            case 0x38: ret = "Wheel"; break;
            case 0x39: ret = "Hat switch"; break;
            case 0x3A: ret = "Counted Buffer"; break;
            case 0x3B: ret = "Byte Count"; break;
            case 0x3C: ret = "Motion Wakeup"; break;
            case 0x3D: ret = "Start"; break;
            case 0x3E: ret = "Select"; break;
            // 0x3F Reserved
            
            default: ret = "Unparsed (TODO)"; break;
        }
        return ret;
    }

}