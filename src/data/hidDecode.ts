// Details extracted from https://www.usb.org/sites/default/files/hut1_3_0.pdf

export class HIDDecode {
    static fromPacked(packed: number) : [usagePage: string, usage: Promise<string>] {
        let page = (packed>>16)&0xffff;
        let id = packed &0xffff;

        return [this.usagePage(page), this.usage(page, id)]
    }

    static usagePage(usagePage?: number) : string {
        let ret="";
        usagePage = usagePage || 0;
        switch (usagePage) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = "Generic Desktop Page"; break;// (0x01) 4
            case 0x02: ret = "Simulation Controls Page"; break;// (0x02) 5
            case 0x03: ret = "VR Controls Page"; break;// (0x03) 6
            case 0x04: ret = "Sport Controls Page"; break;// (0x04) 7
            case 0x05: ret = "Game Controls Page"; break;// (0x05) 8
            case 0x06: ret = "Generic Device Controls Page"; break;// (0x06) 9
            case 0x07: ret = "Keyboard/Keypad Page"; break;// (0x07) 10
            case 0x08: ret = "LED Page"; break;// (0x08) 11
            case 0x09: ret = "Button Page"; break;// (0x09) 12
            case 0x0A: ret = "Ordinal Page"; break;// (0x0A) 13
            case 0x0B: ret = "Telephony Device Page"; break;// (0x0B) 14
            case 0x0C: ret = "Consumer Page"; break;// (0x0C) 15
            case 0x0D: ret = "Digitizers Page"; break;// (0x0D) 16
            case 0x0E: ret = "Haptics Page"; break;// (0x0E) 17
            case 0x0F: ret = "Physical Input Device Page"; break;// (0x0F) 18
            case 0x10: ret = "Unicode Page"; break;// (0x10) 19
            case 0x11: ret = "Reserved"; break;
            case 0x12: ret = "Eye and Head Trackers Page"; break;// (0x12) 20
            case 0x13: ret = "Reserved"; break;
            case 0x14: ret = "Auxiliary Display Page"; break;// (0x14) 21
            case 0x20: ret = "Sensors Page"; break;// (0x20) 22
            case 0x40: ret = "Medical Instrument Page"; break;// (0x40) 23
            case 0x41: ret = "Braille Display Page"; break;// (0x41) 24
            case 0x59: ret = "Lighting And Illumination Page"; break;// (0x59) 25
            case 0x80: ret = "Monitor Page"; break;// (0x80) 26
            case 0x81: ret = "Monitor Enumerated Page"; break;// (0x81) 27
            case 0x82: ret = "VESA Virtual Controls Page"; break;// (0x82) 28
            case 0x83: ret = "Reserved"; break;
            case 0x84: ret = "Power Page"; break;// (0x84) 29
            case 0x85: ret = "Battery System Page"; break;// (0x85) 30

            default: {
                if     (0x15 <= usagePage && usagePage <= 0x1F) ret = "Reserved"
                else if(0x21 <= usagePage && usagePage <= 0x3F) ret = "Reserved"
                else if(0x42 <= usagePage && usagePage <= 0x58) ret = "Reserved"
                else if(0x5A <= usagePage && usagePage <= 0x7F) ret = "Reserved"
                else if(usagePage >=0xff00) ret = "Vendor-defined";
                else ret = "NOT DEFINED"; break;
            }
        }
        return ret;
    }

    static async usage(usagePage?: number, usage?: number) : Promise<string> {
        let ret: Promise<string>;
        usage = usage || 0;
        switch (usagePage?usagePage:0) {            
            case 0x00: ret = new Promise((resolve) => resolve("Undefined")); break;
            case 0x01: ret = this.async_usage("genericDesktop", usage); break;
            case 0x02: ret = this.async_usage("simulationControls", usage); break;
            case 0x03: ret = this.async_usage("VRControls", usage); break;
            case 0x04: ret = this.async_usage("sportControls", usage); break;
            case 0x05: ret = this.async_usage("gameControls", usage); break;
            case 0x06: ret = this.async_usage("genericDeviceControls", usage); break;
            case 0x07: ret = this.async_usage("keyboardKeypad", usage); break;
            case 0x08: ret = this.async_usage("led", usage); break;
            case 0x09: ret = this.async_usage("button", usage); break;
            case 0x0A: ret = this.async_usage("ordinal", usage); break;
            case 0x0B: ret = this.async_usage("telephony", usage); break;
            case 0x0C: ret = this.async_usage("consumer", usage); break;
            case 0x0D: ret = this.async_usage("digitizer", usage); break;
            case 0x0E: ret = this.async_usage("haptics", usage); break;
            case 0x0F: ret = this.async_usage("physicalInputdevice", usage); break;
            case 0x10: ret = this.async_usage("unicode", usage); break;
            case 0x12: ret = this.async_usage("eyeHeadTracker", usage); break;
            case 0x14: ret = this.async_usage("auxiliaryDisplay", usage); break;
            case 0x20: ret = this.async_usage("sensors", usage); break;
            default: ret = new Promise((resolve) => resolve(`UsagePage ${usagePage} not supported`)); break;
        }
        return ret;
    }

    private static async async_usage(name: string, usage: number) : Promise<string> {
        let file = `./decode/${name}.js`;
        return await import(file).then(decoder => {
            return decoder.decode(usage);
        })
    }
}