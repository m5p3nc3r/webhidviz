export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "Barcode Badge Reader"; break;// CA 31.1
        case 0x02: ret = "Barcode Scanner"; break;// CA 31.1
        case 0x03: ret = "Dumb Bar Code Scanner"; break;// CA 31.1
        case 0x04: ret = "Cordless Scanner Base"; break;// CA 31.1
        case 0x05: ret = "Bar Code Scanner Cradle"; break;// CA 31.1
        case 0x10: ret = "Attribute Report"; break;// CL 31.2
        case 0x11: ret = "Settings Report"; break;// CL 31.2
        case 0x12: ret = "Scanned Data Report"; break;// CL 31.2
        case 0x13: ret = "Raw Scanned Data Report"; break;// CL 31.2
        case 0x14: ret = "Trigger Report"; break;// CL 31.2
        case 0x15: ret = "Status Report"; break;// CL 31.2
        case 0x16: ret = "UPC/EAN Control Report"; break;// CL 31.2
        case 0x17: ret = "EAN 2/3 Label Control Report"; break;// CL 31.2
        case 0x18: ret = "Code 39 Control Report"; break;// CL 31.2
        case 0x19: ret = "Interleaved 2 of 5 Control Report"; break;// CL 31.2
        case 0x1A: ret = "Standard 2 of 5 Control Report"; break;// CL 31.2
        case 0x1B: ret = "MSI Plessey Control Report"; break;// CL 31.2
        case 0x1C: ret = "Codabar Control Report"; break;// CL 31.2
        case 0x1D: ret = "Code 128 Control Report"; break;// CL 31.2
        case 0x1E: ret = "Misc 1D Control Report"; break;// CL 31.2
        case 0x1F: ret = "2D Control Report"; break;// CL 31.2
        case 0x30: ret = "Aiming/Pointer Mode"; break;// SF 31.3
        case 0x31: ret = "Bar Code Present Sensor"; break;// SF 31.3
        case 0x32: ret = "Class 1A Laser"; break;// SF 31.3
        case 0x33: ret = "Class 2 Laser"; break;// SF 31.3
        case 0x34: ret = "Heater Present"; break;// SF 31.3
        case 0x35: ret = "Contact Scanner"; break;// SF 31.3
        case 0x36: ret = "Electronic Article Surveillance Notification"; break;// SF 31.3
        case 0x37: ret = "Constant Electronic Article Surveillance"; break;// SF 31.3
        case 0x38: ret = "Error Indication"; break;// SF 31.3
        case 0x39: ret = "Fixed Beeper"; break;// SF 31.3
        case 0x3A: ret = "Good Decode Indication"; break;// SF 31.3
        case 0x3B: ret = "Hands Free Scanning"; break;// SF 31.3
        case 0x3C: ret = "Intrinsically Safe"; break;// SF 31.3
        case 0x3D: ret = "Klasse Eins Laser"; break;// SF 31.3
        case 0x3E: ret = "Long Range Scanner"; break;// SF 31.3
        case 0x3F: ret = "Mirror Speed Control"; break;// SF 31.3
        case 0x40: ret = "Not On File Indication"; break;// SF 31.3
        case 0x41: ret = "Programmable Beeper"; break;// SF 31.3
        case 0x42: ret = "Triggerless"; break;// SF 31.3
        case 0x43: ret = "Wand"; break;// SF 31.3
        case 0x44: ret = "Water Resistant"; break;// SF 31.3
        case 0x45: ret = "Multi-Range Scanner"; break;// SF 31.3
        case 0x46: ret = "Proximity Sensor"; break;// SF 31.3
        case 0x4D: ret = "Fragment Decoding"; break;// DF 31.4
        case 0x4E: ret = "Scanner Read Confidence"; break;// DV 31.4
        case 0x4F: ret = "Data Prefix"; break;// NAry 31.5
        case 0x50: ret = "Prefix AIMI"; break;// Sel 31.5
        case 0x51: ret = "Prefix None"; break;// Sel 31.5
        case 0x52: ret = "Prefix Proprietary"; break;// Sel 31.5
        case 0x55: ret = "Active Time"; break;// DV 31.6
        case 0x56: ret = "Aiming Laser Pattern"; break;// DF 31.6
        case 0x57: ret = "Bar Code Present"; break;// OOC 31.6
        case 0x58: ret = "Beeper State"; break;// OOC 31.6
        case 0x59: ret = "Laser On Time"; break;// DV 31.6
        case 0x5A: ret = "Laser State"; break;// OOC 31.6
        case 0x5B: ret = "Lockout Time"; break;// DV 31.6
        case 0x5C: ret = "Motor State"; break;// OOC 31.6
        case 0x5D: ret = "Motor Timeout"; break;// DV 31.6
        case 0x5E: ret = "Power On Reset Scanner"; break;// DF 31.6
        case 0x5F: ret = "Prevent Read of Barcodes"; break;// DF 31.6
        case 0x60: ret = "Initiate Barcode Read"; break;// DF 31.6
        case 0x61: ret = "Trigger State"; break;// OOC 31.6
        case 0x62: ret = "Trigger Mode"; break;// NAry 31.6.1
        case 0x63: ret = "Trigger Mode Blinking Laser On"; break;// Sel 31.6.1
        case 0x64: ret = "Trigger Mode Continuous Laser On"; break;// Sel 31.6.1
        case 0x65: ret = "Trigger Mode Laser on while Pulled"; break;// Sel 31.6.1
        case 0x66: ret = "Trigger Mode Laser stays on after release"; break;// Sel 31.6.1
        case 0x6D: ret = "Commit Parameters to NVM"; break;// DF 31.7
        case 0x6E: ret = "Parameter Scanning"; break;// DF 31.7
        case 0x6F: ret = "Parameters Changed"; break;// OOC 31.7
        case 0x70: ret = "Set parameter default values"; break;// DF 31.7
        case 0x75: ret = "Scanner In Cradle"; break;// OOC 31.8
        case 0x76: ret = "Scanner In Range"; break;// OOC 31.8
        case 0x7A: ret = "Aim Duration"; break;// DV 31.9
        case 0x7B: ret = "Good Read Lamp Duration"; break;// DV 31.9
        case 0x7C: ret = "Good Read Lamp Intensity"; break;// DV 31.9
        case 0x7D: ret = "Good Read LED"; break;// DF 31.9
        case 0x7E: ret = "Good Read Tone Frequency"; break;// DV 31.9
        case 0x7F: ret = "Good Read Tone Length"; break;// DV 31.9
        case 0x80: ret = "Good Read Tone Volume"; break;// DV 31.9
        case 0x82: ret = "No Read Message"; break;// DF 31.9
        case 0x83: ret = "Not on File Volume"; break;// DV 31.9
        case 0x84: ret = "Powerup Beep"; break;// DF 31.9
        case 0x85: ret = "Sound Error Beep"; break;// DF 31.9
        case 0x86: ret = "Sound Good Read Beep"; break;// DF 31.9
        case 0x87: ret = "Sound Not On File Beep"; break;// DF 31.9
        case 0x88: ret = "Good Read When to Write"; break;// NAry 31.9.1
        case 0x89: ret = "GRWTI After Decode"; break;// Sel 31.9.1
        case 0x8A: ret = "GRWTI Beep/Lamp after transmit"; break;// Sel 31.9.1
        case 0x8B: ret = "GRWTI No Beep/Lamp use at all"; break;// Sel 31.9.1
        case 0x91: ret = "Bookland EAN"; break;// DF 31.10
        case 0x92: ret = "Convert EAN 8 to 13 Type"; break;// DF 31.10
        case 0x93: ret = "Convert UPC A to EAN-13"; break;// DF 31.10
        case 0x94: ret = "Convert UPC-E to A"; break;// DF 31.10
        case 0x95: ret = "EAN-13"; break;// DF 31.10
        case 0x96: ret = "EAN-8"; break;// DF 31.10
        case 0x97: ret = "EAN-99 128 Mandatory"; break;// DF 31.10
        case 0x98: ret = "EAN-99 P5/128 Optional"; break;// DF 31.10
        case 0x99: ret = "Enable EAN Two Label"; break;// DF 31.10
        case 0x9A: ret = "UPC/EAN"; break;// DF 31.10
        case 0x9B: ret = "UPC/EAN Coupon Code"; break;// DF 31.10
        case 0x9C: ret = "UPC/EAN Periodicals"; break;// DV 31.10
        case 0x9D: ret = "UPC-A"; break;// DF 31.10
        case 0x9E: ret = "UPC-A with 128 Mandatory"; break;// DF 31.10
        case 0x9F: ret = "UPC-A with 128 Optional"; break;// DF 31.10
        case 0xA0: ret = "UPC-A with P5 Optional"; break;// DF 31.10
        case 0xA1: ret = "UPC-E"; break;// DF 31.10
        case 0xA2: ret = "UPC-E1"; break;// DF 31.10
        case 0xA9: ret = "Periodical"; break;// NAry 31.10.1
        case 0xAA: ret = "Periodical Auto-Discriminate +2"; break;// Sel 31.10.1
        case 0xAB: ret = "Periodical Only Decode with +2"; break;// Sel 31.10.1
        case 0xAC: ret = "Periodical Ignore +2"; break;// Sel 31.10.1
        case 0xAD: ret = "Periodical Auto-Discriminate +5"; break;// Sel 31.10.1
        case 0xAE: ret = "Periodical Only Decode with +5"; break;// Sel 31.10.1
        case 0xAF: ret = "Periodical Ignore +5"; break;// Sel 31.10.1
        case 0xB0: ret = "Check"; break;// NAry 31.10.2
        case 0xB1: ret = "Check Disable Price"; break;// Sel 31.10.2
        case 0xB2: ret = "Check Enable 4 digit Price"; break;// Sel 31.10.2
        case 0xB3: ret = "Check Enable 5 digit Price"; break;// Sel 31.10.2
        case 0xB4: ret = "Check Enable European 4 digit Price"; break;// Sel 31.10.2
        case 0xB5: ret = "Check Enable European 5 digit Price"; break;// Sel 31.10.2
        case 0xB7: ret = "EAN Two Label"; break;// DF 31.11
        case 0xB8: ret = "EAN Three Label"; break;// DF 31.11
        case 0xB9: ret = "EAN 8 Flag Digit 1"; break;// DV 31.11
        case 0xBA: ret = "EAN 8 Flag Digit 2"; break;// DV 31.11
        case 0xBB: ret = "EAN 8 Flag Digit 3"; break;// DV 31.11
        case 0xBC: ret = "EAN 13 Flag Digit 1"; break;// DV 31.11
        case 0xBD: ret = "EAN 13 Flag Digit 2"; break;// DV 31.11
        case 0xBE: ret = "EAN 13 Flag Digit 3"; break;// DV 31.11
        case 0xBF: ret = "Add EAN 2/3 Label Definition"; break;// DF 31.11
        case 0xC0: ret = "Clear all EAN 2/3 Label Definitions"; break;// DF 31.11
        case 0xC3: ret = "Codabar"; break;// DF 31.12
        case 0xC4: ret = "Code 128"; break;// DF 31.12
        case 0xC7: ret = "Code 39"; break;// DF 31.12
        case 0xC8: ret = "Code 93"; break;// DF 31.12
        case 0xC9: ret = "Full ASCII Conversion"; break;// DF 31.12
        case 0xCA: ret = "Interleaved 2 of 5"; break;// DF 31.12
        case 0xCB: ret = "Italian Pharmacy Code"; break;// DF 31.12
        case 0xCC: ret = "MSI/Plessey"; break;// DF 31.12
        case 0xCD: ret = "Standard 2 of 5 IATA"; break;// DF 31.12
        case 0xCE: ret = "Standard 2 of 5"; break;// DF 31.12
        case 0xD3: ret = "Transmit Start/Stop"; break;// DF 31.12
        case 0xD4: ret = "Tri-Optic"; break;// DF 31.12
        case 0xD5: ret = "UCC/EAN-128"; break;// DF 31.12
        case 0xD6: ret = "Check Digit"; break;// NAry 31.12.1
        case 0xD7: ret = "Check Digit Disable"; break;// Sel 31.12.1
        case 0xD8: ret = "Check Digit Enable Interleaved 2 of 5 OPCC"; break;// Sel 31.12.1
        case 0xD9: ret = "Check Digit Enable Interleaved 2 of 5 USS"; break;// Sel 31.12.1
        case 0xDA: ret = "Check Digit Enable Standard 2 of 5 OPCC"; break;// Sel 31.12.1
        case 0xDB: ret = "Check Digit Enable Standard 2 of 5 USS"; break;// Sel 31.12.1
        case 0xDC: ret = "Check Digit Enable One MSI Plessey"; break;// Sel 31.12.1
        case 0xDD: ret = "Check Digit Enable Two MSI Plessey"; break;// Sel 31.12.1
        case 0xDE: ret = "Check Digit Codabar Enable"; break;// Sel 31.12.1
        case 0xDF: ret = "Check Digit Code 39 Enable"; break;// Sel 31.12.1
        case 0xF0: ret = "Transmit Check Digit"; break;// NAry 31.12.2
        case 0xF1: ret = "Disable Check Digit Transmit"; break;// Sel 31.12.2
        case 0xF2: ret = "Enable Check Digit Transmit"; break;// Sel 31.12.2
        case 0xFB: ret = "Symbology Identifier 1"; break;// DV 31.13
        case 0xFC: ret = "Symbology Identifier 2"; break;// DV 31.13
        case 0xFD: ret = "Symbology Identifier 3"; break;// DV 31.13
        case 0xFE: ret = "Decoded Data"; break;// DV 31.13
        case 0xFF: ret = "Decode Data Continued"; break;// DF 31.13
        case 0x100: ret = "Bar Space Data"; break;// DV 31.13
        case 0x101: ret = "Scanner Data Accuracy"; break;// DV 31.13
        case 0x102: ret = "Raw Data Polarity"; break;// NAry 31.14
        case 0x103: ret = "Polarity Inverted Bar Code"; break;// Sel 31.14
        case 0x104: ret = "Polarity Normal Bar Code"; break;// Sel 31.14
        case 0x106: ret = "Minimum Length to Decode"; break;// DV 31.15
        case 0x107: ret = "Maximum Length to Decode"; break;// DV 31.15
        case 0x108: ret = "Discrete Length to Decode 1"; break;// DV 31.15
        case 0x109: ret = "Discrete Length to Decode 2"; break;// DV 31.15
        case 0x10A: ret = "Data Length Method"; break;// NAry 31.15.1
        case 0x10B: ret = "DL Method Read any"; break;// Sel 31.15.1
        case 0x10C: ret = "DL Method Check in Range"; break;// Sel 31.15.1
        case 0x10D: ret = "DL Method Check for Discrete"; break;// Sel 31.15.1
        case 0x110: ret = "Aztec Code"; break;// DF 31.16
        case 0x111: ret = "BC412"; break;// DF 31.12
        case 0x112: ret = "Channel Code"; break;// DF 31.16
        case 0x113: ret = "Code 16"; break;// DF 31.16
        case 0x114: ret = "Code 32"; break;// DF 31.16
        case 0x115: ret = "Code 49"; break;// DF 31.16
        case 0x116: ret = "Code One"; break;// DF 31.16
        case 0x117: ret = "Colorcode"; break;// DF 31.16
        case 0x118: ret = "Data Matrix"; break;// DF 31.16
        case 0x119: ret = "MaxiCode"; break;// DF 31.16
        case 0x11A: ret = "MicroPDF"; break;// DF 31.16
        case 0x11B: ret = "PDF-417"; break;// DF 31.16
        case 0x11C: ret = "PosiCode"; break;// DF 31.16
        case 0x11D: ret = "QR Code"; break;// DF 31.16
        case 0x11E: ret = "SuperCode"; break;// DF 31.16
        case 0x11F: ret = "UltraCode"; break;// DF 31.16
        case 0x120: ret = "USD-5 (Slug Code)"; break;// DF 31.16
        case 0x121: ret = "VeriCode"; break;// DF 31.16

        // 06-0F Reserved
        // 20-2F Reserved
        // 47-4C Reserved
        // 53-54 Reserved
        // 67-6C Reserved
        // 71-74 Reserved
        // 77-79 Reserved
        // 81-81 Reserved
        // 8C-90 Reserved
        // A3-A8 Reserved
        // B6-B6 Reserved
        // C1-C2 Reserved
        // C5-C6 Reserved
        // CF-D2 Reserved
        // E0-EF Reserved
        // F3-FA Reserved
        // 105-105 Reserved
        // 10E-10F Reserved
        // 122-FFFF Reserved
        default: ret = "Reserved"; break;
    }
    return ret;
}
