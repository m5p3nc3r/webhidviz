function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        case 0x01:
            ret = "Physical Input Device";
            break; // CA 18.1
        case 0x20:
            ret = "Normal";
            break; // DV 18.1
        case 0x21:
            ret = "Set Effect Report";
            break; // CL 18.4
        case 0x22:
            ret = "Effect Parameter Block Index";
            break; // DV 18.4
        case 0x23:
            ret = "Parameter Block Offset";
            break; // DV 18.1
        case 0x24:
            ret = "ROM Flag";
            break; // DF 18.4
        case 0x25:
            ret = "Effect Type";
            break; // NAry 18.4.1
        case 0x26:
            ret = "ET Constant-Force";
            break; // Sel 18.4.1
        case 0x27:
            ret = "ET Ramp";
            break; // Sel 18.4.1
        case 0x28:
            ret = "ET Custom-Force";
            break; // Sel 18.4.1
        case 0x30:
            ret = "ET Square";
            break; // Sel 18.4.1
        case 0x31:
            ret = "ET Sine";
            break; // Sel 18.4.1
        case 0x32:
            ret = "ET Triangle";
            break; // Sel 18.4.1
        case 0x33:
            ret = "ET Sawtooth Up";
            break; // Sel 18.4.1
        case 0x34:
            ret = "ET Sawtooth Down";
            break; // Sel 18.4.1
        case 0x40:
            ret = "ET Spring";
            break; // Sel 18.4.1
        case 0x41:
            ret = "ET Damper ";
            break; //Sel 18.4.1
        case 0x42:
            ret = "ET Inertia";
            break; // Sel 18.4.1
        case 0x43:
            ret = "ET Friction";
            break; // Sel 18.4.1
        case 0x50:
            ret = "Duration";
            break; // DV 18.4
        case 0x51:
            ret = "Sample Period";
            break; // DV 18.4
        case 0x52:
            ret = "Gain";
            break; // DV 18.4
        case 0x53:
            ret = "Trigger Button";
            break; // DV 18.4
        case 0x54:
            ret = "Trigger Repeat Interval";
            break; // DV 18.4
        case 0x55:
            ret = "Axes Enable";
            break; // US 18.4
        case 0x56:
            ret = "Direction Enable";
            break; // DF 18.4
        case 0x57:
            ret = "Direction";
            break; // CL 18.4
        case 0x58:
            ret = "Type Specific Block Offset";
            break; // CL 18.4
        case 0x59:
            ret = "Block Type";
            break; // NAry 18.4
        case 0x5A:
            ret = "Set Envelope Report";
            break; // CL/SV 18.5
        case 0x5B:
            ret = "Attack Level";
            break; // DV 18.5
        case 0x5C:
            ret = "Attack Time";
            break; // DV 18.5
        case 0x5D:
            ret = "Fade Level";
            break; // DV 18.5
        case 0x5E:
            ret = "Fade Time";
            break; // DV 18.5
        case 0x5F:
            ret = "Set Condition Report";
            break; // CL/SV 18.6
        case 0x60:
            ret = "Center-Point Offset";
            break; // DV 18.6
        case 0x61:
            ret = "Positive Coefficient";
            break; // DV 18.6
        case 0x62:
            ret = "Negative Coefficient";
            break; // DV 18.6
        case 0x63:
            ret = "Positive Saturation";
            break; // DV 18.6
        case 0x64:
            ret = "Negative Saturation";
            break; // DV 18.6
        case 0x65:
            ret = "Dead Band";
            break; // DV 18.6
        case 0x66:
            ret = "Download Force Sample";
            break; // CL 18.10.2
        case 0x67:
            ret = "Isoch Custom-Force Enable";
            break; // DF 18.10.2
        case 0x68:
            ret = "Custom-Force Data Report";
            break; // CL 18.10.1
        case 0x69:
            ret = "Custom-Force Data";
            break; // DV 18.10.1
        case 0x6A:
            ret = "Custom-Force Vendor Defined Data";
            break; // DV 18.10.1
        case 0x6B:
            ret = "Set Custom-Force Report";
            break; // CL/SV 18.10
        case 0x6C:
            ret = "Custom-Force Data Offset";
            break; // DV 18.10
        case 0x6D:
            ret = "Sample Count";
            break; // DV 18.10
        case 0x6E:
            ret = "Set Periodic Report";
            break; // CL/SV 18.7
        case 0x6F:
            ret = "Offset";
            break; // DV 18.7
        case 0x70:
            ret = "Magnitude";
            break; // DV 18.7
        case 0x71:
            ret = "Phase";
            break; // DV 18.7
        case 0x72:
            ret = "Period";
            break; // DV 18.7
        case 0x73:
            ret = "Set Constant-Force Report";
            break; // CL/SV 18.8
        case 0x74:
            ret = "Set Ramp-Force Report";
            break; // CL/SV 18.9
        case 0x75:
            ret = "Ramp Start";
            break; // DV 18.9
        case 0x76:
            ret = "Ramp End";
            break; // DV 18.9
        case 0x77:
            ret = "Effect Operation Report";
            break; // CL 18.11
        case 0x78:
            ret = "Effect Operation";
            break; // NAry 18.11.1
        case 0x79:
            ret = "Op Effect Start";
            break; // Sel 18.11.1
        case 0x7A:
            ret = "Op Effect Start Solo";
            break; // Sel 18.11.1
        case 0x7B:
            ret = "Op Effect Stop";
            break; // Sel 18.11.1
        case 0x7C:
            ret = "Loop Count";
            break; // DV 18.11
        case 0x7D:
            ret = "Device Gain Report";
            break; // CL 18.12
        case 0x7E:
            ret = "Device Gain";
            break; // DV 18.12
        case 0x7F:
            ret = "Parameter Block Pools Report";
            break; // CL 18.3.1
        case 0x80:
            ret = "RAM Pool Size";
            break; // DV 18.3.1
        case 0x81:
            ret = "ROM Pool Size";
            break; // SV 18.3.1
        case 0x82:
            ret = "ROM Effect Block Count";
            break; // SV 18.3.1
        case 0x83:
            ret = "Simultaneous Effects Max";
            break; // SV 18.3.1
        case 0x84:
            ret = "Pool Alignment";
            break; // SV 18.3.1
        case 0x85:
            ret = "Parameter Block Move Report";
            break; // CL 18.3.1
        case 0x86:
            ret = "Move Source";
            break; // DV 18.3.1
        case 0x87:
            ret = "Move Destination";
            break; // DV 18.3.1
        case 0x88:
            ret = "Move Length";
            break; // DV 18.3.1
        case 0x89:
            ret = "Effect Parameter Block Load Report";
            break; // CL 18.3.2
        case 0x8B:
            ret = "Effect Parameter Block Load Status";
            break; // NAry 18.3.2.1
        case 0x8C:
            ret = "Block Load Success";
            break; // Sel 18.3.2.1
        case 0x8D:
            ret = "Block Load Full";
            break; // Sel 18.3.2.1
        case 0x8E:
            ret = "Block Load Error";
            break; // Sel 18.3.2.1
        case 0x8F:
            ret = "Block Handle";
            break; // DV 18.3.2
        case 0x90:
            ret = "Effect Parameter Block Free Report";
            break; // CL 18.3.2
        case 0x91:
            ret = "Type Specific Block Handle";
            break; // CL 18.3.2
        case 0x92:
            ret = "PID State Report";
            break; // CL 18.13
        case 0x94:
            ret = "Effect Playing";
            break; // DF 18.13
        case 0x95:
            ret = "PID Device Control Report";
            break; // CL 18.14
        case 0x96:
            ret = "PID Device Control";
            break; // NAry 18.14.1
        case 0x97:
            ret = "DC Enable Actuators";
            break; // Sel 18.14.1
        case 0x98:
            ret = "DC Disable Actuators";
            break; // Sel 18.14.1
        case 0x99:
            ret = "DC Stop All Effects";
            break; // Sel 18.14.1
        case 0x9A:
            ret = "DC Reset";
            break; // Sel 18.14.1
        case 0x9B:
            ret = "DC Pause";
            break; // Sel 18.14.1
        case 0x9C:
            ret = "DC Continue";
            break; // Sel 18.14.1
        case 0x9F:
            ret = "Device Paused";
            break; // DF 18.14
        case 0xA0:
            ret = "Actuators Enabled";
            break; // DF 18.14
        case 0xA4:
            ret = "Safety Switch";
            break; // DF 18.14
        case 0xA5:
            ret = "Actuator Override Switch";
            break; // DF 18.14
        case 0xA6:
            ret = "Actuator Power";
            break; // OOC 18.14
        case 0xA7:
            ret = "Start Delay";
            break; // DV 18.4
        case 0xA8:
            ret = "Parameter Block Size";
            break; // CL 18.3.1
        case 0xA9:
            ret = "Device-Managed Pool";
            break; // SF 18.3.1
        case 0xAA:
            ret = "Shared Parameter Blocks";
            break; // SF 18.3.1
        case 0xAB:
            ret = "Create New Effect Parameter Block Report";
            break; // CL 18.3.2
        case 0xAC:
            ret = "RAM Pool Available";
            break; // DV 18.3.2
        // 02-1F Reserved
        // 29-2F Reserved
        // 35-3F Reserved
        // 44-4F Reserved
        // 8A-8A Reserved
        // 93-93 Reserved
        // 9D-9E Reserved
        // A1-A3 Reserved
        // AD-FFFF Reserved
        default:
            ret = "Reserved";
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=physicalInputDevice.js.map
