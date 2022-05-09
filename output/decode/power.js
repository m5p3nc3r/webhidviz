function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        case 0x01:
            ret = "iName";
            break; // SV 29.4
        case 0x02:
            ret = "Present Status";
            break; // CL 29.4
        case 0x03:
            ret = "Changed Status";
            break; // CL 29.4
        case 0x04:
            ret = "UPS";
            break; // CA 29.4
        case 0x05:
            ret = "Power Supply";
            break; // CA 29.4
        case 0x10:
            ret = "Battery System";
            break; // CP 29.4
        case 0x11:
            ret = "Battery System Id";
            break; // SV 29.4
        case 0x12:
            ret = "Battery";
            break; // CP 29.4
        case 0x13:
            ret = "Battery Id";
            break; // SV 29.4
        case 0x14:
            ret = "Charger";
            break; // CP 29.4
        case 0x15:
            ret = "Charger Id";
            break; // SV 29.4
        case 0x16:
            ret = "Power Converter";
            break; // CP 29.4
        case 0x17:
            ret = "Power Converter Id";
            break; // SV 29.4
        case 0x18:
            ret = "Outlet System";
            break; // CP 29.4
        case 0x19:
            ret = "Outlet System Id";
            break; // SV 29.4
        case 0x1A:
            ret = "Input";
            break; // CP 29.4
        case 0x1B:
            ret = "Input Id";
            break; // SV 29.4
        case 0x1C:
            ret = "Output";
            break; // CP 29.4
        case 0x1D:
            ret = "Output Id";
            break; // SV 29.4
        case 0x1E:
            ret = "Flow";
            break; // CP 29.4
        case 0x1F:
            ret = "Flow Id";
            break; // SV 29.4
        case 0x20:
            ret = "Outlet";
            break; // CP 29.4
        case 0x21:
            ret = "Outlet Id";
            break; // SV 29.4
        case 0x22:
            ret = "Gang";
            break; // CL/CP 29.4
        case 0x23:
            ret = "Gang Id";
            break; // SV 29.4
        case 0x24:
            ret = "Power Summary";
            break; // CL/CP 29.4
        case 0x25:
            ret = "Power Summary Id";
            break; // SV 29.4
        case 0x30:
            ret = "Voltage";
            break; // DV 29.5
        case 0x31:
            ret = "Current";
            break; // DV 29.5
        case 0x32:
            ret = "Frequency";
            break; // DV 29.5
        case 0x33:
            ret = "Apparent Power";
            break; // DV 29.5
        case 0x34:
            ret = "Active Power";
            break; // DV 29.5
        case 0x35:
            ret = "Percent Load";
            break; // DV 29.5
        case 0x36:
            ret = "Temperature";
            break; // DV 29.5
        case 0x37:
            ret = "Humidity";
            break; // DV 29.5
        case 0x38:
            ret = "Bad Count";
            break; // DV 29.5
        case 0x40:
            ret = "Config Voltage";
            break; // SV/DV 29.6
        case 0x41:
            ret = "Config Current";
            break; // SV/DV 29.6
        case 0x42:
            ret = "Config Frequency";
            break; // SV/DV 29.6
        case 0x43:
            ret = "Config Apparent Power";
            break; // SV/DV 29.6
        case 0x44:
            ret = "Config Active Power";
            break; // SV/DV 29.6
        case 0x45:
            ret = "Config Percent Load";
            break; // SV/DV 29.6
        case 0x46:
            ret = "Config Temperature";
            break; // SV/DV 29.6
        case 0x47:
            ret = "Config Humidity";
            break; // SV/DV 29.6
        case 0x50:
            ret = "Switch On Control";
            break; // DV 29.7
        case 0x51:
            ret = "Switch Off Control";
            break; // DV 29.7
        case 0x52:
            ret = "Toggle Control";
            break; // DV 29.7
        case 0x53:
            ret = "Low Voltage Transfer";
            break; // DV 29.7
        case 0x54:
            ret = "High Voltage Transfer";
            break; // DV 29.7
        case 0x55:
            ret = "Delay Before Reboot";
            break; // DV 29.7
        case 0x56:
            ret = "Delay Before Startup";
            break; // DV 29.7
        case 0x57:
            ret = "Delay Before Shutdown";
            break; // DV 29.7
        case 0x58:
            ret = "Test";
            break; // DV 29.7
        case 0x59:
            ret = "Module Reset";
            break; // DV 29.7
        case 0x5A:
            ret = "Audible Alarm Control";
            break; // DV 29.7
        case 0x60:
            ret = "Present";
            break; // DF 29.8
        case 0x61:
            ret = "Good";
            break; // DF 29.8
        case 0x62:
            ret = "Internal Failure";
            break; // DF 29.8
        case 0x63:
            ret = "Voltag Out Of Range";
            break; // DF 29.8
        case 0x64:
            ret = "Frequency Out Of Range";
            break; // DF 29.8
        case 0x65:
            ret = "Overload";
            break; // DF 29.8
        case 0x66:
            ret = "Over Charged";
            break; // DF 29.8
        case 0x67:
            ret = "Over Temperature";
            break; // DF 29.8
        case 0x68:
            ret = "Shutdown Requested";
            break; // DF 29.8
        case 0x69:
            ret = "Shutdown Imminent";
            break; // DF 29.8
        case 0x6B:
            ret = "Switch On/Off";
            break; // DF 29.8
        case 0x6C:
            ret = "Switchable";
            break; // DF 29.8
        case 0x6D:
            ret = "Used";
            break; // DF 29.8
        case 0x6E:
            ret = "Boost";
            break; // DF 29.8
        case 0x6F:
            ret = "Buck";
            break; // DF 29.8
        case 0x70:
            ret = "Initialized";
            break; // DF 29.8
        case 0x71:
            ret = "Tested";
            break; // DF 29.8
        case 0x72:
            ret = "Awaiting Power";
            break; // DF 29.8
        case 0x73:
            ret = "Communication Lost";
            break; // DF 29.8
        case 0xFD:
            ret = "iManufacturer";
            break; // SV 29.9
        case 0xFE:
            ret = "iProduct";
            break; // SV 29.9
        case 0xFF:
            ret = "iSerialNumber";
            break; // SV 29.9
        // 06-0F Reserved
        // 26-2F Reserved
        // 39-3F Reserved
        // 48-4F Reserved
        // 5B-5F Reserved
        // 6A-6A Reserved
        // 74-FC Reserved
        // 100-FFFF Reserved
        default:
            ret = "Reserved";
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=power.js.map
