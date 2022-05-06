export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "Digitizer"; break;// CA 16.1
        case 0x02: ret = "Pen"; break;// CA 16.1
        case 0x03: ret = "Light Pen"; break;// CA 16.1
        case 0x04: ret = "Touch Screen"; break;// CA 16.1
        case 0x05: ret = "Touch Pad"; break;// CA 16.1
        case 0x06: ret = "Whiteboard"; break;// CA 16.1
        case 0x07: ret = "Coordinate Measuring Machine"; break;// CA 16.1
        case 0x08: ret = "3D Digitizer"; break;// CA 16.1
        case 0x09: ret = "Stereo Plotter"; break;// CA 16.1
        case 0x0A: ret = "Articulated Arm"; break;// CA 16.1
        case 0x0B: ret = "Armature"; break;// CA 16.1
        case 0x0C: ret = "Multiple Point Digitizer"; break;// CA 16.1
        case 0x0D: ret = "Free Space Wand"; break;// CA 16.1
        case 0x0E: ret = "Device Configuration"; break;// [7] CA 16.7
        case 0x0F: ret = "Capacitive Heat Map Digitizer"; break;// [54] CA 16.9
        case 0x20: ret = "Stylus"; break;// [55] CA/CL 16.2
        case 0x21: ret = "Puck"; break;// CL 16.2
        case 0x22: ret = "Finger"; break;// CL 16.2
        case 0x23: ret = "Device settings"; break;// [7] CL 16.7
        case 0x24: ret = "Character Gesture"; break;// [45] CL 16.8
        case 0x30: ret = "Tip Pressure"; break;// DV 16.3.1
        case 0x31: ret = "Barrel Pressure"; break;// DV 16.3.1
        case 0x32: ret = "In Range"; break;// MC 16.3.1
        case 0x33: ret = "Touch"; break;// MC 16.3.1
        case 0x34: ret = "Untouch"; break;// OSC 16.3.1
        case 0x35: ret = "Tap"; break;// OSC 16.3.1
        case 0x36: ret = "Quality"; break;// DV 16.3.1
        case 0x37: ret = "Data Valid"; break;// MC 16.3.1
        case 0x38: ret = "Transducer Index"; break;// DV 16.3.1
        case 0x39: ret = "Tablet Function Keys"; break;// CL 16.3.1
        case 0x3A: ret = "Program Change Keys"; break;// CL 16.3.1
        case 0x3B: ret = "Battery Strength"; break;// DV 16.3.1
        case 0x3C: ret = "Invert"; break;// MC 16.3.1
        case 0x3D: ret = "X Tilt"; break;// DV 16.3.2
        case 0x3E: ret = "Y Tilt"; break;// DV 16.3.2
        case 0x3F: ret = "Azimuth"; break;// DV 16.3.3
        case 0x40: ret = "Altitude"; break;// DV 16.3.3
        case 0x41: ret = "Twist"; break;// DV 16.3.3
        case 0x42: ret = "Tip Switch"; break;// MC 16.4
        case 0x43: ret = "Secondary Tip Switch"; break;// MC 16.4
        case 0x44: ret = "Barrel Switch"; break;// MC 16.4
        case 0x45: ret = "Eraser"; break;// MC 16.4
        case 0x46: ret = "Tablet Pick"; break;// MC 16.4
        case 0x47: ret = "Touch Valid"; break;// [3] MC 16.5
        case 0x48: ret = "Width"; break;// [3] DV 16.5
        case 0x49: ret = "Height"; break;// [3] DV 16.5
        case 0x51: ret = "Contact Identifier"; break;// [7] DV 16.6
        case 0x52: ret = "Device Mode"; break;// [7] DV 16.7
        case 0x53: ret = "Device Identifier"; break;// [7] DV/SV 16.7
        case 0x54: ret = "Contact Count"; break;// [7] DV 16.6
        case 0x55: ret = "Contact Count Maximum"; break;// [7] SV 16.6
        case 0x56: ret = "Scan Time"; break;// [51] DV 16.5
        case 0x57: ret = "Surface Switch"; break;// [51] DF 16.5
        case 0x58: ret = "Button Switch"; break;// [51] DF 16.5
        case 0x59: ret = "Pad Type"; break;// [51] SF 16.5
        case 0x5A: ret = "Secondary Barrel Switch"; break;// [18] MC 16.4
        case 0x5B: ret = "Transducer Serial Number"; break;// [18] SV 16.3.1
        case 0x5C: ret = "Preferred Color"; break;// [25] DV 16.3.1
        case 0x5D: ret = "Preferred Color is Locked"; break;// [31] MC 16.3.1
        case 0x5E: ret = "Preferred Line Width"; break;// [31] DV 16.3.1
        case 0x5F: ret = "Preferred Line Width is Locked"; break;// [31] MC 16.3.1
        case 0x60: ret = "Latency Mode"; break;// [51] DF 16.5
        case 0x61: ret = "Gesture Character Quality"; break;// [45] DV 16.8
        case 0x62: ret = "Character Gesture Data Length"; break;// [45] DV 16.8
        case 0x63: ret = "Character Gesture Data"; break;// [45] DV 16.8
        case 0x64: ret = "Gesture Character Encoding"; break;// [45] NAry 16.8
        case 0x65: ret = "UTF8 Character Gesture Encoding"; break;// [45] Sel 16.8
        case 0x66: ret = "UTF16 Little Endian Character Gesture Encoding"; break;// [45] Sel 16.8
        case 0x67: ret = "UTF16 Big Endian Character Gesture Encoding"; break;// [45] Sel 16.8
        case 0x68: ret = "UTF32 Little Endian Character Gesture Encoding"; break;// [45] Sel 16.8
        case 0x69: ret = "UTF32 Big Endian Character Gesture Encoding"; break;// [45] Sel 16.8
        case 0x6A: ret = "Capacitive Heat Map Protocol Vendor ID"; break;// [54] SV 16.9
        case 0x6B: ret = "Capacitive Heat Map Protocol Version"; break;// [54] SV 16.9
        case 0x6C: ret = "Capacitive Heat Map Frame Data"; break;// [54] DV 16.9
        case 0x6D: ret = "Gesture Character Enable"; break;// [63] DF 16.8
        case 0x6E: ret = "Transducer Serial Number Part 2"; break;// [70] SV 16.3.1
        case 0x6F: ret = "No Preferred Color"; break;// [71] DF 16.3.1
        case 0x70: ret = "Preferred Line Style"; break;// [31] NAry 16.3.1
        case 0x71: ret = "Preferred Line Style"; break;// is Locked [31] MC 16.3.1
        case 0x72: ret = "Ink"; break;// [31] Sel 16.3.1
        case 0x73: ret = "Pencil"; break;// [31] Sel 16.3.1
        case 0x74: ret = "Highlighter"; break;// [31] Sel 16.3.1
        case 0x75: ret = "Chisel Marker"; break;// [31] Sel 16.3.1
        case 0x76: ret = "Brush"; break;// [31] Sel 16.3.1
        case 0x77: ret = "No Preference"; break;// [31] Sel 16.3.1
        case 0x80: ret = "Digitizer Diagnostic"; break;// [31] CL 16.7
        case 0x81: ret = "Digitizer Error"; break;// [31] NAry 16.7
        case 0x82: ret = "Err Normal Status"; break;// [31] Sel 16.7
        case 0x83: ret = "Err Transducers Exceeded"; break;// [31] Sel 16.7
        case 0x84: ret = "Err Full Trans Features Unavailable"; break;// [31] Sel 16.7
        case 0x85: ret = "Err Charge Low"; break;// [31] Sel 16.7
        case 0x90: ret = "Transducer Software Info"; break;// [36] CL 16.3.1
        case 0x91: ret = "Transducer Vendor Id"; break;// [36] SV 16.3.1
        case 0x92: ret = "Transducer Product Id"; break;// [36] SV 16.3.1
        case 0x93: ret = "Device Supported Protocols"; break;// [36] NAry/CL 16.3.1
        case 0x94: ret = "Transducer Supported Protocols"; break;// [36] NAry/CL 16.3.1
        case 0x95: ret = "No Protocol"; break;// [36] Sel 16.3.1
        case 0x96: ret = "Wacom AES Protocol"; break;// [36] Sel 16.3.1
        case 0x97: ret = "USI Protocol"; break;// [36] Sel 16.3.1
        case 0x98: ret = "Microsoft Pen Protocol"; break;// [55] Sel 16.3.1
        case 0xA0: ret = "Supported Report Rates"; break;// [36] SV/CL 16.3.1
        case 0xA1: ret = "Report Rate"; break;// [36] DV 16.3.1
        case 0xA2: ret = "Transducer Connected"; break;// [36] SF 16.3.1
        case 0xA3: ret = "Switch Disabled"; break;// [36] Sel 16.3.1
        case 0xA4: ret = "Switch Unimplemented"; break;// [36] Sel 16.3.1
        case 0xA5: ret = "Transducer Switches"; break;// [36] Sel 16.3.1
        // 10-1F Reserved
        // 25-2F Reserved
        // 4A-50 Reserved
        // 78-7F Reserved
        // 86-8F Reserved
        // 99-9F Reserved
        // A6-FFFF Reserved
        default: ret = "Reserved"; break;
    }
    return ret;
}
