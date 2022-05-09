function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        case 0x01:
            ret = "LampArray";
            break; // CA 25.1
        case 0x02:
            ret = "LampArrayAttributesReport";
            break; // CL 25.2
        case 0x03:
            ret = "LampCount";
            break; // SV/DV 25.2
        case 0x04:
            ret = "BoundingBoxWidthInMicrometers";
            break; // SV 25.2
        case 0x05:
            ret = "BoundingBoxHeightInMicrometers";
            break; // SV 25.2
        case 0x06:
            ret = "BoundingBoxDepthInMicrometers";
            break; // SV 25.2
        case 0x07:
            ret = "LampArrayKind";
            break; // SV 25.2
        case 0x08:
            ret = "MinUpdateIntervalInMicroseconds";
            break; // SV 25.2
        case 0x20:
            ret = "LampAttributesRequestReport";
            break; // CL 25.3
        case 0x21:
            ret = "LampId";
            break; // SV/DV 25.3
        case 0x22:
            ret = "LampAttributesResponseReport";
            break; // CL 25.3
        case 0x23:
            ret = "PositionXInMicrometers";
            break; // DV 25.3
        case 0x24:
            ret = "PositionYInMicrometers";
            break; // DV 25.3
        case 0x25:
            ret = "PositionZInMicrometers";
            break; // DV 25.3
        case 0x26:
            ret = "LampPurposes";
            break; // DV 25.3
        case 0x27:
            ret = "UpdateLatencyInMicroseconds";
            break; // DV 25.3
        case 0x28:
            ret = "RedLevelCount";
            break; // DV 25.3
        case 0x29:
            ret = "GreenLevelCount";
            break; // DV 25.3
        case 0x2A:
            ret = "BlueLevelCount";
            break; // DV 25.3
        case 0x2B:
            ret = "IntensityLevelCount";
            break; // DV 25.3
        case 0x2C:
            ret = "IsProgrammable";
            break; // DV 25.3
        case 0x2D:
            ret = "InputBinding";
            break; // DV 25.3
        case 0x50:
            ret = "LampMultiUpdateReport";
            break; // CL 25.4
        case 0x51:
            ret = "RedUpdateChannel";
            break; // [67] DV 25.4
        case 0x52:
            ret = "GreenUpdateChannel";
            break; // [67] DV 25.4
        case 0x53:
            ret = "BlueUpdateChannel";
            break; // [67] DV 25.4
        case 0x54:
            ret = "IntensityUpdateChannel";
            break; // [67] DV 25.4
        case 0x55:
            ret = "LampUpdateFlags";
            break; // [67] DV 25.4
        case 0x60:
            ret = "LampRangeUpdateReport";
            break; // CL 25.4
        case 0x61:
            ret = "LampIdStart";
            break; // DV 25.4
        case 0x62:
            ret = "LampIdEnd";
            break; // DV 25.4
        case 0x70:
            ret = "LampArrayControlReport";
            break; // CL 25.5
        case 0x71:
            ret = "AutonomousMode";
            break; // DV 25.5
        // 09-1F Reserved
        // 2E-4F Reserved
        // 56-5F Reserved
        // 63-6F Reserved
        // 72-FFFF Reserved
        default:
            ret = "Reserved";
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=lightingAndIllumination.js.map
