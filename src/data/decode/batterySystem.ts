export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "Smart Battery Battery Mode"; break;// CL 30.2
        case 0x02: ret = "Smart Battery Battery Status"; break;// NAry 30.3.1
        case 0x03: ret = "Smart Battery Alarm Warning"; break;// NAry 30.3.2
        case 0x04: ret = "Smart Battery Charger Mode"; break;// CL 30.6
        case 0x05: ret = "Smart Battery Charger Status"; break;// CL 30.7
        case 0x06: ret = "Smart Battery Charger Spec Info"; break;// CL 30.8
        case 0x07: ret = "Smart Battery Selector State"; break;// CL 30.1.1
        case 0x08: ret = "Smart Battery Selector Presets"; break;// CL 30.1.2
        case 0x09: ret = "Smart Battery Selector Info"; break;// CL 30.1.3
        case 0x10: ret = "Optional Mfg Function 1"; break;// DV 30.1
        case 0x11: ret = "Optional Mfg Function 2"; break;// DV 30.1
        case 0x12: ret = "Optional Mfg Function 3"; break;// DV 30.1
        case 0x13: ret = "Optional Mfg Function 4"; break;// DV 30.1
        case 0x14: ret = "Optional Mfg Function 5"; break;// DV 30.1
        case 0x15: ret = "Connection To SM Bus"; break;// DF 30.1.1
        case 0x16: ret = "Output Connection"; break;// DF 30.1.1
        case 0x17: ret = "Charger Connection"; break;// DF 30.1.1
        case 0x18: ret = "Battery Insertion"; break;// DF 30.1.1
        case 0x19: ret = "Use Next"; break;// DF 30.1.2
        case 0x1A: ret = "OK To Use"; break;// DF 30.1.2
        case 0x1B: ret = "Battery Supported"; break;// DF 30.1.3
        case 0x1C: ret = "Selector Revision"; break;// DF 30.1.3
        case 0x1D: ret = "Charging Indicator"; break;// DF 30.1.3
        case 0x28: ret = "Manufacturer Access"; break;// DV 30.2
        case 0x29: ret = "Remaining Capacity Limit"; break;// DV 30.2
        case 0x2A: ret = "Remaining Time Limit"; break;// DV 30.2
        case 0x2B: ret = "At Rate"; break;// DV 30.2
        case 0x2C: ret = "Capacity Mode"; break;// DV 30.2
        case 0x2D: ret = "Broadcast To Charger"; break;// DV 30.2
        case 0x2E: ret = "Primary Battery"; break;// DV 30.2
        case 0x2F: ret = "Charge Controller"; break;// DV 30.2
        case 0x40: ret = "Terminate Charge"; break;// Sel 30.3.2
        case 0x41: ret = "Terminate Discharge"; break;// Sel 30.3.2
        case 0x42: ret = "Below Remaining Capacity Limit"; break;// Sel 30.3.2
        case 0x43: ret = "Remaining Time Limit Expired"; break;// Sel 30.3.2
        case 0x44: ret = "Charging"; break;// Sel 30.3.1
        case 0x45: ret = "Discharging"; break;// Sel 30.3.1
        case 0x46: ret = "Fully Charged"; break;// Sel 30.3.1
        case 0x47: ret = "Fully Discharged"; break;// Sel 30.3.1
        case 0x48: ret = "Conditioning Flag"; break;// DF 30.3
        case 0x49: ret = "At Rate OK"; break;// DF 30.3
        case 0x4A: ret = "Smart Battery Error Code"; break;// DV 30.3
        case 0x4B: ret = "Need Replacement"; break;// DF 30.3
        case 0x60: ret = "At Rate Time To Full"; break;// DV 30.4
        case 0x61: ret = "At Rate Time To Empty"; break;// DV 30.4
        case 0x62: ret = "Average Current"; break;// DV 30.4
        case 0x63: ret = "Max Error"; break;// DV 30.4
        case 0x64: ret = "Relative State Of Charge"; break;// DV 30.4
        case 0x65: ret = "Absolute State Of Charge"; break;// DV 30.4
        case 0x66: ret = "Remaining Capacity"; break;// DV 30.4
        case 0x67: ret = "Full Charge Capacity"; break;// DV 30.4
        case 0x68: ret = "Run Time To Empty"; break;// DV 30.4
        case 0x69: ret = "Average Time To Empty"; break;// DV 30.4
        case 0x6A: ret = "Average Time To Full"; break;// DV 30.4
        case 0x6B: ret = "Cycle Count"; break;// DV 30.4
        case 0x80: ret = "Battery Pack Model Level"; break;// SV 30.5
        case 0x81: ret = "Internal Charge Controller"; break;// SF 30.5
        case 0x82: ret = "Primary Battery Support"; break;// SF 30.5
        case 0x83: ret = "Design Capacity"; break;// SV 30.5
        case 0x84: ret = "Specification Info"; break;// SV 30.5
        case 0x85: ret = "Manufacture Date"; break;// SV 30.5
        case 0x86: ret = "Serial Number"; break;// SV 30.5
        case 0x87: ret = "iManufacturer Name"; break;// SV 30.5
        case 0x88: ret = "iDevice Name"; break;// SV 30.5
        case 0x89: ret = "iDevice Chemistry"; break;// SV 30.5
        case 0x8A: ret = "Manufacturer Data"; break;// SV 30.5
        case 0x8B: ret = "Rechargable"; break;// SV 30.5
        case 0x8C: ret = "Warning Capacity Limit"; break;// SV 30.5
        case 0x8D: ret = "Capacity Granularity 1"; break;// SV 30.5
        case 0x8E: ret = "Capacity Granularity 2"; break;// SV 30.5
        case 0x8F: ret = "iOEM Information"; break;// SV 30.5
        case 0xC0: ret = "Inhibit Charge"; break;// DF 30.6
        case 0xC1: ret = "Enable Polling"; break;// DF 30.6
        case 0xC2: ret = "Reset To Zero"; break;// DF 30.6
        case 0xD0: ret = "AC Present"; break;// DV 30.7
        case 0xD1: ret = "Battery Present"; break;// DV 30.7
        case 0xD2: ret = "Power Fail"; break;// DV 30.7
        case 0xD3: ret = "Alarm Inhibited"; break;// DV 30.7
        case 0xD4: ret = "Thermistor Under Range"; break;// DV 30.7
        case 0xD5: ret = "Thermistor Hot"; break;// DV 30.7
        case 0xD6: ret = "Thermistor Cold"; break;// DV 30.7
        case 0xD7: ret = "Thermistor Over Range"; break;// DV 30.7
        case 0xD8: ret = "Voltage Out Of Range"; break;// DV 30.7
        case 0xD9: ret = "Current Out Of Range"; break;// DV 30.7
        case 0xDA: ret = "Current Not Regulated"; break;// DV 30.7
        case 0xDB: ret = "Voltage Not Regulated"; break;// DV 30.7
        case 0xDC: ret = "Master Mode"; break;// DV 30.7
        case 0xF0: ret = "Charger Selector Support"; break;// SF 30.8
        case 0xF1: ret = "Charger Spec"; break;// SV 30.8
        case 0xF2: ret = "Level 2"; break;// SF 30.8
        case 0xF3: ret = "Level 3"; break;// SF 30.8

        // 0A-0F Reserved
        // 1E-27 Reserved
        // 30-3F Reserved
        // 4C-5F Reserved
        // 6C-7F Reserved
        // 90-BF Reserved
        // C3-CF Reserved
        // DD-EF Reserved
        // F4-FFFF Reserved
        default: ret = "Reserved"; break;
    }
    return ret;
}
