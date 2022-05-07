export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "General Purpose IO Card"; break;// CA 35.1
        case 0x02: ret = "Coin Door"; break;// CA 35.2
        case 0x03: ret = "Watchdog Timer"; break;// CA 35.3
        case 0x30: ret = "General Purpose Analog Input State"; break;// DV 35.1
        case 0x31: ret = "General Purpose Digital Input State"; break;// DV 35.1
        case 0x32: ret = "General Purpose Optical Input State"; break;// DV 35.1
        case 0x33: ret = "General Purpose Digital Output State"; break;// DV 35.1
        case 0x34: ret = "Number of Coin Doors"; break;// DV 35.2
        case 0x35: ret = "Coin Drawer Drop Count"; break;// DV 35.2
        case 0x36: ret = "Coin Drawer Start"; break;// OOC 35.2
        case 0x37: ret = "Coin Drawer Service"; break;// OOC 35.2
        case 0x38: ret = "Coin Drawer Tilt"; break;// OOC 35.2
        case 0x39: ret = "Coin Door Test"; break;// OOC 35.2
        case 0x40: ret = "Coin Door Lockout"; break;// OOC 35.2
        case 0x41: ret = "Watchdog Timeout"; break;// DV 35.3
        case 0x42: ret = "Watchdog Action"; break;// NAry 35.3
        case 0x43: ret = "Watchdog Reboot"; break;// Sel 35.3
        case 0x44: ret = "Watchdog Restart"; break;// Sel 35.3
        case 0x45: ret = "Alarm Input"; break;// DV 35.3
        case 0x46: ret = "Coin Door Counter"; break;// OOC 35.2
        case 0x47: ret = "I/O Direction Mapping"; break;// DV 35.1
        case 0x48: ret = "Set I/O Direction Mapping"; break;// DV 35.1
        case 0x49: ret = "Extended Optical Input State"; break;// DV 35.1
        case 0x4A: ret = "Pin Pad Input State"; break;// DV 35.1
        case 0x4B: ret = "Pin Pad Status"; break;// DV 35.1
        case 0x4C: ret = "Pin Pad Output"; break;// OOC 35.1
        case 0x4D: ret = "Pin Pad Command"; break;// DV 35.1

        // 04-2F Reserved
        // 3A-3F Reserved
        // 4E-FFFF Reserved
        default: ret = "Reserved"; break;
    }
    return ret;
}
