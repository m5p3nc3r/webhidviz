function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        case 0x01:
            ret = "Baseball Bat";
            break; // CA 7.1
        case 0x02:
            ret = "Golf Club";
            break; // CA 7.1
        case 0x03:
            ret = "Rowing Machine";
            break; // CA 7.2
        case 0x04:
            ret = "Treadmill";
            break; // CA 7.2
        case 0x30:
            ret = "Oar";
            break; // DV 7.2
        case 0x31:
            ret = "Slope";
            break; // DV 7.2
        case 0x32:
            ret = "Rate";
            break; // DV 7.2
        case 0x33:
            ret = "Stick Speed";
            break; // DV 7.1
        case 0x34:
            ret = "Stick Face Angle";
            break; // DV 7.1
        case 0x35:
            ret = "Stick Heel/Toe";
            break; // DV 7.1
        case 0x36:
            ret = "Stick Follow Through";
            break; // DV 7.1
        case 0x37:
            ret = "Stick Tempo";
            break; // DV 7.1
        case 0x38:
            ret = "Stick Type";
            break; // NAry 7.1
        case 0x39:
            ret = "Stick Height";
            break; // DV 7.1
        case 0x50:
            ret = "Putter";
            break; // Sel 7.1
        case 0x51:
            ret = "1 Iron";
            break; // Sel 7.1
        case 0x52:
            ret = "2 Iron";
            break; // Sel 7.1
        case 0x53:
            ret = "3 Iron";
            break; // Sel 7.1
        case 0x54:
            ret = "4 Iron";
            break; // Sel 7.1
        case 0x55:
            ret = "5 Iron";
            break; // Sel 7.1
        case 0x56:
            ret = "6 Iron";
            break; // Sel 7.1
        case 0x57:
            ret = "7 Iron";
            break; // Sel 7.1
        case 0x58:
            ret = "8 Iron";
            break; // Sel 7.1
        case 0x59:
            ret = "9 Iron";
            break; // Sel 7.1
        case 0x5A:
            ret = "10 Iron";
            break; // Sel 7.1
        case 0x5B:
            ret = "11 Iron";
            break; // Sel 7.1
        case 0x5C:
            ret = "Sand Wedge";
            break; // Sel 7.1
        case 0x5D:
            ret = "Loft Wedge";
            break; // Sel 7.1
        case 0x5E:
            ret = "Power Wedge";
            break; // Sel 7.1
        case 0x5F:
            ret = "1 Wood";
            break; // Sel 7.1
        case 0x60:
            ret = "3 Wood";
            break; // Sel 7.1
        case 0x61:
            ret = "5 Wood";
            break; // Sel 7.1
        case 0x62:
            ret = "7 Wood";
            break; // Sel 7.1
        case 0x63:
            ret = "9 Wood";
            break; // Sel 7.1
        // 05-2F Reserved
        // 3A-4F Reserved
        // 64-FFFF Reserved
        default:
            ret = "Reserved";
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=sportControls.js.map
