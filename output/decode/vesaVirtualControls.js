function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        case 0x01:
            ret = "Degauss";
            break; // DV 28.4
        case 0x10:
            ret = "Brightness";
            break; // DV 28.1
        case 0x12:
            ret = "Contrast";
            break; // DV 28.1
        case 0x16:
            ret = "Red Video Gain";
            break; // DV 28.1
        case 0x18:
            ret = "Green Video Gain";
            break; // DV 28.1
        case 0x1A:
            ret = "Blue Video Gain";
            break; // DV 28.1
        case 0x1C:
            ret = "Focus";
            break; // DV 28.1
        case 0x20:
            ret = "Horizontal Position";
            break; // DV 28.1
        case 0x22:
            ret = "Horizontal Size";
            break; // DV 28.1
        case 0x24:
            ret = "Horizontal Pincushion";
            break; // DV 28.1
        case 0x26:
            ret = "Horizontal Pincushion Balance";
            break; // DV 28.1
        case 0x28:
            ret = "Horizontal Misconvergence";
            break; // DV 28.1
        case 0x2A:
            ret = "Horizontal Linearity";
            break; // DV 28.1
        case 0x2C:
            ret = "Horizontal Linearity Balance";
            break; // DV 28.1
        case 0x30:
            ret = "Vertical Position";
            break; // DV 28.1
        case 0x32:
            ret = "Vertical Size";
            break; // DV 28.1
        case 0x34:
            ret = "Vertical Pincushion";
            break; // DV 28.1
        case 0x36:
            ret = "Vertical Pincushion Balance";
            break; // DV 28.1
        case 0x38:
            ret = "Vertical Misconvergence";
            break; // DV 28.1
        case 0x3A:
            ret = "Vertical Linearity";
            break; // DV 28.1
        case 0x3C:
            ret = "Vertical Linearity Balance";
            break; // DV 28.1
        case 0x40:
            ret = "Parallelogram Distortion (Key Balance)";
            break; // DV 28.1
        case 0x42:
            ret = "Trapezoidal Distortion (Key)";
            break; // DV 28.1
        case 0x44:
            ret = "Tilt (Rotation)";
            break; // DV 28.1
        case 0x46:
            ret = "Top Corner Distortion Control";
            break; // DV 28.1
        case 0x48:
            ret = "Top Corner Distortion Balance";
            break; // DV 28.1
        case 0x4A:
            ret = "Bottom Corner Distortion Control";
            break; // DV 28.1
        case 0x4C:
            ret = "Bottom Corner Distortion Balance";
            break; // DV 28.1
        case 0x56:
            ret = "Horizontal Moiré";
            break; // DV 28.1
        case 0x58:
            ret = "Vertical Moiré";
            break; // DV 28.1
        case 0x5E:
            ret = "Input Level Select";
            break; // NAry 28.2
        case 0x60:
            ret = "Input Source Select";
            break; // NAry 28.2
        case 0x6C:
            ret = "Red Video Black Level";
            break; // DV 28.1
        case 0x6E:
            ret = "Green Video Black Level";
            break; // DV 28.1
        case 0x70:
            ret = "Blue Video Black Level";
            break; // DV 28.1
        case 0xA2:
            ret = "Auto Size Center";
            break; // NAry 28.3
        case 0xA4:
            ret = "Polarity Horizontal Synchronization";
            break; // NAry 28.3
        case 0xA6:
            ret = "Polarity Vertical Synchronization";
            break; // NAry 28.3
        case 0xA8:
            ret = "Synchronization Type";
            break; // NAry 28.3
        case 0xAA:
            ret = "Screen Orientation";
            break; // NAry 28.3
        case 0xAC:
            ret = "Horizontal Frequency";
            break; // DV 28.3
        case 0xAE:
            ret = "Vertical Frequency";
            break; // DV 28.3
        case 0xB0:
            ret = "Settings";
            break; // NAry 28.4
        case 0xCA:
            ret = "On Screen Display";
            break; // NAry 28.2
        case 0xD4:
            ret = "Stereo Mode";
            break; // NAry 28.2
        // 02-0F Reserved
        // 11-11 Reserved
        // 13-15 Reserved
        // 17-17 Reserved
        // 19-19 Reserved
        // 1B-1B Reserved
        // 1D-1F Reserved
        // 21-21 Reserved
        // 23-23 Reserved
        // 25-25 Reserved
        // 27-27 Reserved
        // 29-29 Reserved
        // 2B-2B Reserved
        // 2D-2F Reserved
        // 31-31 Reserved
        // 33-33 Reserved
        // 35-35 Reserved
        // 37-37 Reserved
        // 39-39 Reserved
        // 3B-3B Reserved
        // 3D-3F Reserved
        // 41-41 Reserved
        // 43-43 Reserved
        // 45-45 Reserved
        // 47-47 Reserved
        // 49-49 Reserved
        // 4B-4B Reserved
        // 4D-55 Reserved
        // 57-57 Reserved
        // 59-5D Reserved
        // 5F-5F Reserved
        // 61-6B Reserved
        // 6D-6D Reserved
        // 6F-6F Reserved
        // 71-A1 Reserved
        // A3-A3 Reserved
        // A5-A5 Reserved
        // A7-A7 Reserved
        // A9-A9 Reserved
        // AB-AB Reserved
        // AD-AD Reserved
        // AF-AF Reserved
        // B1-C9 Reserved
        // CB-D3 Reserved
        // D5-FFFF Reserved
        default:
            ret = "Reserved";
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=vesaVirtualControls.js.map
