export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "Medical Ultrasound"; break;// CA 23.1
        case 0x20: ret = "VCR/Acquisition"; break;// OOC 23.2
        case 0x21: ret = "Freeze/Thaw"; break;// OOC 23.2
        case 0x22: ret = "Clip Store"; break;// OSC 23.2
        case 0x23: ret = "Update"; break;// OSC 23.2
        case 0x24: ret = "Next"; break;// OSC 23.2
        case 0x25: ret = "Save"; break;// OSC 23.2
        case 0x26: ret = "Print"; break;// OSC 23.2
        case 0x27: ret = "Microphone Enable"; break;// OSC 23.2
        case 0x40: ret = "Cine"; break;// LC 23.2
        case 0x41: ret = "Transmit Power"; break;// LC 23.2
        case 0x42: ret = "Volume"; break;// LC 23.2
        case 0x43: ret = "Focus"; break;// LC 23.2
        case 0x44: ret = "Depth"; break;// LC 23.2
        case 0x60: ret = "Soft Step - Primary"; break;// LC 23.2
        case 0x61: ret = "Soft Step - Secondary"; break;// LC 23.2
        case 0x70: ret = "Depth Gain Compensation"; break;// LC 23.3
        case 0x80: ret = "Zoom Select"; break;// OSC 23.4
        case 0x81: ret = "Zoom Adjust"; break;// LC 23.4
        case 0x82: ret = "Spectral Doppler Mode Select"; break;// OSC 23.4
        case 0x83: ret = "Spectral Doppler Adjust"; break;// LC 23.4
        case 0x84: ret = "Color Doppler Mode Select"; break;// OSC 23.4
        case 0x85: ret = "Color Doppler Adjust"; break;// LC 23.4
        case 0x86: ret = "Motion Mode Select"; break;// OSC 23.4
        case 0x87: ret = "Motion Mode Adjust"; break;// LC 23.4
        case 0x88: ret = "2-D Mode Select"; break;// OSC 23.4
        case 0x89: ret = "2-D Mode Adjust"; break;// LC 23.4
        case 0xA0: ret = "Soft Control Select"; break;// OSC 23.4
        case 0xA1: ret = "Soft Control Adjust"; break;// LC 23.4

        // 02-1F Reserved
        // 28-3F Reserved
        // 45-5F Reserved
        // 62-6F Reserved
        // 71-7F Reserved
        // 8A-9F Reserved
        // A2-FFFF Reserved
        default: ret = "Reserved"; break;
    }
    return ret;
}
