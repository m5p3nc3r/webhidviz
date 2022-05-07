export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "Scales"; break;// CA 32.1
        case 0x20: ret = "Scale Device"; break;// CL 32.2
        case 0x21: ret = "Scale Class"; break;// NAry 32.2
        case 0x22: ret = "Scale Class I Metric"; break;// Sel 32.2
        case 0x23: ret = "Scale Class II Metric"; break;// Sel 32.2
        case 0x24: ret = "Scale Class III Metric"; break;// Sel 32.2
        case 0x25: ret = "Scale Class IIIL Metric"; break;// Sel 32.2
        case 0x26: ret = "Scale Class IV Metric"; break;// Sel 32.2
        case 0x27: ret = "Scale Class III English"; break;// Sel 32.2
        case 0x28: ret = "Scale Class IIIL English"; break;// Sel 32.2
        case 0x29: ret = "Scale Class IV English"; break;// Sel 32.2
        case 0x2A: ret = "Scale Class Generic"; break;// Sel 32.2
        case 0x30: ret = "Scale Attribute Report"; break;// CL 32.3
        case 0x31: ret = "Scale Control Report"; break;// CL 32.3
        case 0x32: ret = "Scale Data Report"; break;// CL 32.3
        case 0x33: ret = "Scale Status Report"; break;// CL 32.3
        case 0x34: ret = "Scale Weight Limit Report"; break;// CL 32.3
        case 0x35: ret = "Scale Statistics Report"; break;// CL 32.3
        case 0x40: ret = "Data Weight"; break;// DV 32.4
        case 0x41: ret = "Data Scaling"; break;// DV 32.4
        case 0x50: ret = "Weight Unit"; break;// CL 32.4.1
        case 0x51: ret = "Weight Unit Milligram"; break;// Sel 32.4.1
        case 0x52: ret = "Weight Unit Gram"; break;// Sel 32.4.1
        case 0x53: ret = "Weight Unit Kilogram"; break;// Sel 32.4.1
        case 0x54: ret = "Weight Unit Carats"; break;// Sel 32.4.1
        case 0x55: ret = "Weight Unit Taels"; break;// Sel 32.4.1
        case 0x56: ret = "Weight Unit Grains"; break;// Sel 32.4.1
        case 0x57: ret = "Weight Unit Pennyweights"; break;// Sel 32.4.1
        case 0x58: ret = "Weight Unit Metric Ton"; break;// Sel 32.4.1
        case 0x59: ret = "Weight Unit Avoir Ton"; break;// Sel 32.4.1
        case 0x5A: ret = "Weight Unit Troy Ounce"; break;// Sel 32.4.1
        case 0x5B: ret = "Weight Unit Ounce"; break;// Sel 32.4.1
        case 0x5C: ret = "Weight Unit Pound"; break;// Sel 32.4.1
        case 0x60: ret = "Calibration Count"; break;// DV 32.5
        case 0x61: ret = "Re-Zero Count"; break;// DV 32.5
        case 0x70: ret = "Scale Status"; break;// NAry 32.6
        case 0x71: ret = "Scale Status Fault"; break;// Sel 32.6
        case 0x72: ret = "Scale Status Stable at Center of Zero"; break;// Sel 32.6
        case 0x73: ret = "Scale Status In Motion"; break;// Sel 32.6
        case 0x74: ret = "Scale Status Weight Stable"; break;// Sel 32.6
        case 0x75: ret = "Scale Status Under Zero"; break;// Sel 32.6
        case 0x76: ret = "Scale Status Over Weight Limit"; break;// Sel 32.6
        case 0x77: ret = "Scale Status Requires Calibration"; break;// Sel 32.6
        case 0x78: ret = "Scale Status Requires Rezeroing"; break;// Sel 32.6
        case 0x80: ret = "Zero Scale"; break;// OOC 32.7
        case 0x81: ret = "Enforced Zero Return"; break;// OOC 32.7

        // 02-1F Reserved
        // 2B-2F Reserved
        // 36-3F Reserved
        // 42-4F Reserved
        // 5D-5F Reserved
        // 62-6F Reserved
        // 79-7F Reserved
        // 82-FFFF Reserved
        default: ret = "Reserved"; break;
    }
    return ret;
}
