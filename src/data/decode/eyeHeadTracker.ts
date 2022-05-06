export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "Eye Tracker"; break;// CA 20.1
        case 0x02: ret = "Head Tracker"; break;// CA 20.1
        case 0x10: ret = "Tracking Data"; break;// CP 20.3
        case 0x11: ret = "Capabilities"; break;// CL 20.2
        case 0x12: ret = "Configuration"; break;// CL 20.5
        case 0x13: ret = "Status"; break;// CL 20.6
        case 0x14: ret = "Control"; break;// CL 20.7
        case 0x20: ret = "Sensor Timestamp"; break;// DV 20.1
        case 0x21: ret = "Position X"; break;// DV 20.1
        case 0x22: ret = "Position Y"; break;// DV 20.1
        case 0x23: ret = "Position Z"; break;// DV 20.1
        case 0x24: ret = "Gaze Point"; break;// CP 20.1
        case 0x25: ret = "Left Eye Position"; break;// CP 20.1
        case 0x26: ret = "Right Eye Position"; break;// CP 20.1
        case 0x27: ret = "Head Position"; break;// CP 20.1
        case 0x28: ret = "Head Direction Point"; break;// CP 20.1
        case 0x29: ret = "Rotation about X axis"; break;// DV 20.1
        case 0x2A: ret = "Rotation about Y axis"; break;// DV 20.1
        case 0x2B: ret = "Rotation about Z axis"; break;// DV 20.1
        case 0x100: ret = "Tracker Quality"; break;// SV 20.2
        case 0x101: ret = "Minimum Tracking Distance"; break;// SV 20.3
        case 0x102: ret = "Optimum Tracking Distance"; break;// SV 20.3
        case 0x103: ret = "Maximum Tracking Distance"; break;// SV 20.3
        case 0x104: ret = "Maximum Screen Plane Width"; break;// SV 20.4
        case 0x105: ret = "Maximum Screen Plane Height"; break;// SV 20.4
        case 0x200: ret = "Display Manufacturer ID"; break;// SV 20.5
        case 0x201: ret = "Display Product ID"; break;// SV 20.5
        case 0x202: ret = "Display Serial Number"; break;// SV 20.5
        case 0x203: ret = "Display Manufacturer Date"; break;// SV 20.5
        case 0x204: ret = "Calibrated Screen Width"; break;// SV 20.5
        case 0x205: ret = "Calibrated Screen Height"; break;// SV 20.5
        case 0x300: ret = "Sampling Frequency"; break;// DV 20.6
        case 0x301: ret = "Configuration Status"; break;// DV 20.6
        case 0x400: ret = "Device Mode Request"; break;// DV 20.7
        // 03-0F Reserved
        // 15-1F Reserved
        // 2C-FF Reserved
        // 106-1FF Reserved
        // 206-2FF Reserved
        // 302-3FF Reserved
        // 401-FFFF Reserved
        default: ret = "Reserved"; break;
    }
    return ret;
}
