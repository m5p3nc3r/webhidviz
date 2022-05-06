export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "3D Game Controller"; break;// CA 8.1
        case 0x02: ret = "Pinball Device"; break;// CA 8.2
        case 0x03: ret = "Gun Device"; break;// CA 8.3
        case 0x20: ret = "Point of View"; break;// CP 8.1
        case 0x21: ret = "Turn Right/Left"; break;// DV 8.1
        case 0x22: ret = "Pitch Forward/Backward"; break;// DV 8.1
        case 0x23: ret = "Roll Right/Left"; break;// DV 8.1
        case 0x24: ret = "Move Right/Left"; break;// DV 8.1
        case 0x25: ret = "Move Forward/Backward"; break;// DV 8.1
        case 0x26: ret = "Move Up/Down"; break;// DV 8.1
        case 0x27: ret = "Lean Right/Left"; break;// DV 8.1
        case 0x28: ret = "Lean Forward/Backward"; break;// DV 8.1
        case 0x29: ret = "Height of POV"; break;// DV 8.1
        case 0x2A: ret = "Flipper"; break;// MC 8.2
        case 0x2B: ret = "Secondary Flipper"; break;// MC 8.2
        case 0x2C: ret = "Bump"; break;// MC 8.2
        case 0x2D: ret = "New Game"; break;// OSC 8.2
        case 0x2E: ret = "Shoot Ball"; break;// OSC 8.2
        case 0x2F: ret = "Player"; break;// OSC 8.2
        case 0x30: ret = "Gun Bolt"; break;// OOC 8.3
        case 0x31: ret = "Gun Clip"; break;// OOC 8.3
        case 0x32: ret = "Gun Selector"; break;// NAry 8.3
        case 0x33: ret = "Gun Single Shot"; break;// Sel 8.3
        case 0x34: ret = "Gun Burst"; break;// Sel 8.3
        case 0x35: ret = "Gun Automatic"; break;// Sel 8.3
        case 0x36: ret = "Gun Safety"; break;// OOC 8.3
        case 0x37: ret = "Gamepad Fire/Jump"; break;// CL 8.4.1
        case 0x39: ret = "Gamepad Trigger"; break;// CL 8.4.1
        case 0x3A: ret = "Form-fitting Gamepad"; break;// SF 8.4.1
        // 04-1F Reserved
        // 38-38 Reserved
        // 3B-FFFF Reserved
        default: ret = "Reserved"; break;
    }
    return ret;
}
