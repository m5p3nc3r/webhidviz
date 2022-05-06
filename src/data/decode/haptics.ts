export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "Simple Haptic Controller"; break;// CA/CL 17.1
        case 0x10: ret = "Waveform List"; break;// NAry 17.1
        case 0x11: ret = "Duration List"; break;// NAry 17.1
        case 0x20: ret = "Auto Trigger"; break;// DV 17.1
        case 0x21: ret = "Manual Trigger"; break;// DV 17.1
        case 0x22: ret = "Auto Trigger Associated Control"; break;// SV 17.1
        case 0x23: ret = "Intensity"; break;// DV 17.1
        case 0x24: ret = "Repeat Count"; break;// DV 17.1
        case 0x25: ret = "Retrigger Period"; break;// DV 17.1
        case 0x26: ret = "Waveform Vendor Page"; break;// SV 17.1
        case 0x27: ret = "Waveform Vendor ID"; break;// SV 17.1
        case 0x28: ret = "Waveform Cutoff Time"; break;// SV 17.1
        case 0x1001: ret = "Waveform None"; break;// SV 17.1
        case 0x1002: ret = "Waveform Stop"; break;// SV 17.1
        case 0x1003: ret = "Waveform Click"; break;// SV 17.1
        case 0x1004: ret = "Waveform Buzz Continuous"; break;// SV 17.1
        case 0x1005: ret = "Waveform Rumble Continuous"; break;// SV 17.1
        case 0x1006: ret = "Waveform Press"; break;// SV 17.1
        case 0x1007: ret = "Waveform Release"; break;// SV 17.1
        case 0x1008: ret = "Waveform Hover"; break;// [72] SV 17.1
        case 0x1009: ret = "Waveform Success"; break;// [72] SV 17.1
        case 0x100A: ret = "Waveform Error"; break;// [72] SV 17.1
        case 0x100B: ret = "Waveform Ink Continuous"; break;// [72] SV 17.1
        case 0x100C: ret = "Waveform Pencil Continuous"; break;// [72] SV 17.1
        case 0x100D: ret = "Waveform Marker Continuous"; break;// [72] SV 17.1
        case 0x100E: ret = "Waveform Chisel Marker Continuous"; break;// [72] SV 17.1
        case 0x100F: ret = "Waveform Brush Continuous"; break;// [72] SV 17.1
        case 0x1010: ret = "Waveform Eraser Continuous"; break;// [72] SV 17.1
        case 0x1011: ret = "Waveform Sparkle Continuous"; break;// [72] SV 17.1
        // 02-0F Reserved
        // 12-1F Reserved
        // 29-1000 Reserved
        // 1012-2000 Reserved
        // 2001-2FFF Reserved for Vendor Waveforms
        // 3000-FFFF Reserved
        default: {
            if(0x2001 <= usage && usage <= 0x2FFF) ret = "Reserved for Vendor Waveforms";
            else ret = "Reserved";
        }
    }
    return ret;
}
