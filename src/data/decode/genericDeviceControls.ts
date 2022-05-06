export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "Background/Nonuser Controls"; break;// [4] [65] CA 9.1
        case 0x20: ret = "Battery Strength"; break;// DV 9.2
        case 0x21: ret = "Wireless Channel"; break;// DV 9.2
        case 0x22: ret = "Wireless ID"; break;// DV 9.2
        case 0x23: ret = "Discover Wireless Control"; break;// OSC 9.2
        case 0x24: ret = "Security Code Character Entered"; break;// OSC 9.2
        case 0x25: ret = "Security Code Character Erased"; break;// OSC 9.2
        case 0x26: ret = "Security Code Cleared"; break;// OSC 9.2
        case 0x27: ret = "Sequence ID"; break;// [5] DV 9.1
        case 0x28: ret = "Sequence ID Reset"; break;// [5] DF 9.1
        case 0x29: ret = "RF Signal Strength"; break;// [5] DV 9.1
        case 0x2A: ret = "Software Version"; break;// [32] CL 9.3
        case 0x2B: ret = "Protocol Version"; break;// [32] CL 9.3
        case 0x2C: ret = "Hardware Version"; break;// [32] CL 9.3
        case 0x2D: ret = "Major"; break;// [32] SV 9.3
        case 0x2E: ret = "Minor"; break;// [32] SV 9.3
        case 0x2F: ret = "Revision"; break;// [32] SV 9.3
        case 0x30: ret = "Handedness"; break;// [40] NAry 9.4
        case 0x31: ret = "Either Hand"; break;// [40] Sel 9.4
        case 0x32: ret = "Left Hand"; break;// [40] Sel 9.4
        case 0x33: ret = "Right Hand"; break;// [40] Sel 9.4
        case 0x34: ret = "Both Hands"; break;// [40] Sel 9.4
        case 0x40: ret = "Grip Pose Offset"; break;// [40] CP 9.4
        case 0x41: ret = "Pointer Pose Offset"; break;// [40] CP 9.4
        // 02-1F Reserved
        // 35-3F Reserved
        // 42-FFFF Reserved
        default: ret = "Reserved"; break;
    }
    return ret;
}
