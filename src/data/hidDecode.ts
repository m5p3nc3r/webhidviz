// Details extracted from https://www.usb.org/sites/default/files/hut1_3_0.pdf

export class HIDDecode {
    static fromPacked(packed: number) : [usagePage: string, usage: string] {
        let page = (packed>>16)&0xffff;
        let id = packed &0xffff;

        return [this.usagePage(page), this.usage(page, id)]
    }

    static usagePage(usagePage?: number) : string {
        let ret="";
        usagePage = usagePage || 0;
        switch (usagePage) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = "Generic Desktop Page"; break;// (0x01) 4
            case 0x02: ret = "Simulation Controls Page"; break;// (0x02) 5
            case 0x03: ret = "VR Controls Page"; break;// (0x03) 6
            case 0x04: ret = "Sport Controls Page"; break;// (0x04) 7
            case 0x05: ret = "Game Controls Page"; break;// (0x05) 8
            case 0x06: ret = "Generic Device Controls Page"; break;// (0x06) 9
            case 0x07: ret = "Keyboard/Keypad Page"; break;// (0x07) 10
            case 0x08: ret = "LED Page"; break;// (0x08) 11
            case 0x09: ret = "Button Page"; break;// (0x09) 12
            case 0x0A: ret = "Ordinal Page"; break;// (0x0A) 13
            case 0x0B: ret = "Telephony Device Page"; break;// (0x0B) 14
            case 0x0C: ret = "Consumer Page"; break;// (0x0C) 15
            case 0x0D: ret = "Digitizers Page"; break;// (0x0D) 16
            case 0x0E: ret = "Haptics Page"; break;// (0x0E) 17
            case 0x0F: ret = "Physical Input Device Page"; break;// (0x0F) 18
            case 0x10: ret = "Unicode Page"; break;// (0x10) 19
            case 0x11: ret = "Reserved"; break;
            case 0x12: ret = "Eye and Head Trackers Page"; break;// (0x12) 20
            case 0x13: ret = "Reserved"; break;
            case 0x14: ret = "Auxiliary Display Page"; break;// (0x14) 21
            case 0x20: ret = "Sensors Page"; break;// (0x20) 22
            case 0x40: ret = "Medical Instrument Page"; break;// (0x40) 23
            case 0x41: ret = "Braille Display Page"; break;// (0x41) 24
            case 0x59: ret = "Lighting And Illumination Page"; break;// (0x59) 25
            case 0x80: ret = "Monitor Page"; break;// (0x80) 26
            case 0x81: ret = "Monitor Enumerated Page"; break;// (0x81) 27
            case 0x82: ret = "VESA Virtual Controls Page"; break;// (0x82) 28
            case 0x83: ret = "Reserved"; break;
            case 0x84: ret = "Power Page"; break;// (0x84) 29
            case 0x85: ret = "Battery System Page"; break;// (0x85) 30

            default: {
                if     (0x15 <= usagePage && usagePage <= 0x1F) ret = "Reserved"
                else if(0x21 <= usagePage && usagePage <= 0x3F) ret = "Reserved"
                else if(0x42 <= usagePage && usagePage <= 0x58) ret = "Reserved"
                else if(0x5A <= usagePage && usagePage <= 0x7F) ret = "Reserved"
                else if(usagePage >=0xff00) ret = "Vendor-defined";
                else ret = "NOT DEFINED"; break;
            }
        }
        return ret;
    }

    static usage(usagePage?: number, usage?: number) : string {
        let ret="";
        switch (usagePage?usagePage:0) {
            
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = this.usage_genericDesktop(usage); break;
            case 0x02: ret = this.usage_simulationControls(usage); break;
            default: ret = "Usage not supported"; break;
        }
        return ret;
    }

    private static usage_genericDesktop(usage?: number) : string {
        let ret="";
        usage = usage || 0;
        switch(usage) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = "Pointer"; break;// CP 4.1
            case 0x02: ret = "Mouse"; break;// CA 4.1
            case 0x03: ret = "Reserved"; break;
            case 0x04: ret = "Joystick"; break;// CA 4.1
            case 0x05: ret = "Gamepad"; break;// CA 4.1
            case 0x06: ret = "Keyboard"; break;// CA 4.1
            case 0x07: ret = "Keypad"; break;// CA 4.1
            case 0x08: ret = "Multi-axis Controller"; break;// CA 4.1
            case 0x09: ret = "Tablet PC System Controls"; break;// CA 4.1
            case 0x0A: ret = "Water Cooling Device"; break;//[6] CA 4.1
            case 0x0B: ret = "Computer Chassis Device"; break;// [6] CA 4.1
            case 0x0C: ret = "Wireless Radio Controls"; break;// [13] CA 4.1
            case 0x0D: ret = "Portable Device Control"; break;// [23] CA 4.1
            case 0x0E: ret = "System Multi-Axis Controller"; break;// [33] CA 4.1
            case 0x0F: ret = "Spatial Controller"; break;// [39] CA 4.1
            case 0x10: ret = "Assistive Control"; break;// [49] CA 4.1
            case 0x11: ret = "Device Dock"; break;// [57] CA 4.15
            case 0x12: ret = "Dockable Device"; break;// [57] CA 4.15
            case 0x13: ret = "Call State Management Control"; break;// [73] CA 4.16
            case 0x30: ret = "X"; break;// DV 4.2
            case 0x31: ret = "Y"; break;// DV 4.2
            case 0x32: ret = "Z"; break;// DV 4.2
            case 0x33: ret = "Rx"; break;// DV 4.2
            case 0x34: ret = "Ry"; break;// DV 4.2
            case 0x35: ret = "Rz"; break;// DV 4.2
            case 0x36: ret = "Slider"; break;// DV 4.3
            case 0x37: ret = "Dial"; break;// DV 4.3
            case 0x38: ret = "Wheel"; break;// DV 4.3
            case 0x39: ret = "Hat Switch"; break;// DV 4.3
            case 0x3A: ret = "Counted Buffer"; break;// CL 4.6
            case 0x3B: ret = "Byte Count"; break;// DV 4.6
            case 0x3C: ret = "Motion Wakeup"; break;// OSC/DF 4.3
            case 0x3D: ret = "Start"; break;// OOC 4.3
            case 0x3E: ret = "Select"; break;// OOC 4.3
            case 0x3F: ret = "Reserved"; break;
            case 0x40: ret = "Vx"; break;// DV 4.4
            case 0x41: ret = "Vy"; break;// DV 4.4
            case 0x42: ret = "Vz"; break;// DV 4.4
            case 0x43: ret = "Vbrx"; break;// DV 4.4
            case 0x44: ret = "Vbry"; break;// DV 4.4
            case 0x45: ret = "Vbrz"; break;// DV 4.4
            case 0x46: ret = "Vno"; break;// DV 4.4
            case 0x47: ret = "Feature Notification"; break;// DV/DF 4.8
            case 0x48: ret = "Resolution Multiplier"; break;// DV 4.3
            case 0x49: ret = "Qx"; break;// [39] DV 4.14
            case 0x4A: ret = "Qy"; break;// [39] DV 4.14
            case 0x4B: ret = "Qz"; break;// [39] DV 4.14
            case 0x4C: ret = "Qw"; break;// [39] DV 4.14
            case 0x80: ret = "System Control"; break;// CA 4.5
            case 0x81: ret = "System Power Down"; break;// OSC 4.5
            case 0x82: ret = "System Sleep"; break;// OSC 4.5
            case 0x83: ret = "System Wake Up"; break;// OSC 4.5
            case 0x84: ret = "System Context Menu"; break;// OSC 4.5
            case 0x85: ret = "System Main Menu"; break;// OSC 4.5
            case 0x86: ret = "System App Menu"; break;// OSC 4.5
            case 0x87: ret = "System Menu Help"; break;// OSC 4.5
            case 0x88: ret = "System Menu Exit"; break;// OSC 4.5
            case 0x89: ret = "System Menu Select"; break;// OSC 4.5
            case 0x8A: ret = "System Menu Right"; break;// RTC 4.5
            case 0x8B: ret = "System Menu Left"; break;// RTC 4.5
            case 0x8C: ret = "System Menu Up"; break;// RTC 4.5
            case 0x8D: ret = "System Menu Down"; break;// RTC 4.5
            case 0x8E: ret = "System Cold Restart"; break;// OSC 4.5
            case 0x8F: ret = "System Warm Restart "; break;//OSC 4.5
            case 0x90: ret = "D-pad Up"; break;// OOC 4.7
            case 0x91: ret = "D-pad Down"; break;// OOC 4.7
            case 0x92: ret = "D-pad Right"; break;// OOC 4.7
            case 0x93: ret = "D-pad Left"; break;// OOC 4.7
            case 0x94: ret = "Index Trigger"; break;// [39] MC/DV 4.14
            case 0x95: ret = "Palm Trigger"; break;// [39] MC/DV 4.14
            case 0x96: ret = "Thumbstick"; break;// [39] CP 4.14
            case 0x97: ret = "System Function Shift"; break;// [42] MC 4.5
            case 0x98: ret = "System Function Shift Lock"; break;// [42] OOC 4.5
            case 0x99: ret = "System Function Shift Lock Indicator"; break;// [42] DV 4.5
            case 0x9A: ret = "System Dismiss Notification"; break;// [53] OSC 4.5
            case 0x9B: ret = "System Do Not Disturb"; break;// [61] OOC 4.5
            case 0xA0: ret = "System Dock"; break;// OSC 4.5
            case 0xA1: ret = "System Undock"; break;// OSC 4.5
            case 0xA2: ret = "System Setup"; break;// OSC 4.5
            case 0xA3: ret = "System Break"; break;// OSC 4.9
            case 0xA4: ret = "System Debugger"; break;// Break OSC 4.9
            case 0xA5: ret = "Application Break"; break;// OSC 4.9
            case 0xA6: ret = "Application Debugger Break"; break;// OSC 4.9
            case 0xA7: ret = "System Speaker Mute"; break;// OSC 4.5
            case 0xA8: ret = "System Hibernate"; break;// OSC 4.5
            case 0xB0: ret = "System Display Invert"; break;// OSC 4.10
            case 0xB1: ret = "System Display Internal"; break;// OSC 4.10
            case 0xB2: ret = "System Display External"; break;// OSC 4.10
            case 0xB3: ret = "System Display Both"; break;// OSC 4.10
            case 0xB4: ret = "System Display Dual"; break;// OSC 4.10
            case 0xB5: ret = "System Display Toggle Int/Ext Mode"; break;// OSC 4.10
            case 0xB6: ret = "System Display Swap Primary/Secondary"; break;// OSC 4.10
            case 0xB7: ret = "System Display Toggle LCD Autoscale"; break;// OSC 4.10
            case 0xC0: ret = "Sensor Zone"; break;// [6] CL 4.11
            case 0xC1: ret = "RPM"; break;// [6] DV 4.11
            case 0xC2: ret = "Coolant Level"; break;// [6] DV 4.11
            case 0xC3: ret = "Coolant Critical Level"; break;// [6] SV 4.11
            case 0xC4: ret = "Coolant Pump"; break;// [6] US 4.11
            case 0xC5: ret = "Chassis Enclosure"; break;// [6] CL 4.11
            case 0xC6: ret = "Wireless Radio Button"; break;// [13] OOC 4.12
            case 0xC7: ret = "Wireless Radio LED"; break;// [13] OOC 4.12
            case 0xC8: ret = "Wireless Radio Slider Switch"; break;// [13] OOC 4.12
            case 0xC9: ret = "System Display Rotation Lock Button"; break;// [24] OOC 4.10
            case 0xCA: ret = "System Display Rotation Lock Slider Switch"; break;// [24] OOC 4.10
            case 0xCB: ret = "Control Enable"; break;// [22] DF 4.13
            case 0xD0: ret = "Dockable Device Unique ID"; break;// [57] DV 4.15
            case 0xD1: ret = "Dockable Device Vendor ID"; break;// [57] DV 4.15
            case 0xD2: ret = "Dockable Device Primary Usage Page"; break;// [57] DV 4.15
            case 0xD3: ret = "Dockable Device Primary Usage ID"; break;// [57] DV 4.15
            case 0xD4: ret = "Dockable Device Docking State"; break;// [57] DF 4.15
            case 0xD5: ret = "Dockable Device Display Occlusion"; break;// [57] CL 4.15
            case 0xD6: ret = "Dockable Device Object Type"; break;// [58] DV 4.15
            case 0xE0: ret = "Call Active LED"; break;// [73] OOC 4.16
            case 0xE1: ret = "Call Mute Toggle"; break;// [73] OSC 4.16
            case 0xE2: ret = "Call Mute LED"; break;// [73] OOC 4.16
            
            // Process ranges here
            default: {
                if     (0x14 <= usage && usage <= 0x2F) ret = "Reserved"
                else if(0x4D <= usage && usage <= 0x7F) ret = "Reserved"
                else if(0x9C <= usage && usage <= 0x9F) ret = "Reserved"
                else if(0xA9 <= usage && usage <= 0xAF) ret = "Reserved"
                else if(0xB8 <= usage && usage <= 0xBF) ret = "Reserved"
                else if(0xCC <= usage && usage <= 0xDF) ret = "Reserved"
                else if(0xD7 <= usage && usage <= 0xDF) ret = "Reserved"
                else if(0E37 <= usage && usage <= 0xFFFF) ret = "Reserved"
                else ret = "NOT DEFINED"; break;
            }
        }
        return ret;
    }

    private static usage_simulationControls(usage?: number) : string {
        let ret="";
        usage = usage || 0;
        switch(usage) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = "Flight Simulation Device"; break;// CA 5.2
            case 0x02: ret = "Automobile Simulation Device"; break;// CA 5.3
            case 0x03: ret = "Tank Simulation Device"; break;// CA 5.4
            case 0x04: ret = "Spaceship Simulation Device"; break;// CA 5.2
            case 0x05: ret = "Submarine Simulation Device"; break;// CA 5.5
            case 0x06: ret = "Sailing Simulation Device"; break;// CA 5.5
            case 0x07: ret = "Motorcycle Simulation Device"; break;// CA 5.6
            case 0x08: ret = "Sports Simulation Device"; break;// CA 5.1
            case 0x09: ret = "Airplane Simulation Device"; break;// CA 5.2
            case 0x0A: ret = "Helicopter Simulation Device"; break;// CA 5.2
            case 0x0B: ret = "Magic Carpet Simulation Device"; break;// CA 5.7
            case 0x0C: ret = "Bicycle Simulation Device"; break;// CA 5.6
            case 0x20: ret = "Flight Control Stick"; break;// CA 5.2
            case 0x21: ret = "Flight Stick"; break;// CA 5.2
            case 0x22: ret = "Cyclic Control"; break;// CP 5.2
            case 0x23: ret = "Cyclic Trim"; break;// CP 5.2
            case 0x24: ret = "Flight Yoke"; break;// CA 5.2
            case 0x25: ret = "Track Control"; break;// CP 5.4
            case 0xB0: ret = "Aileron"; break;// DV 5.2
            case 0xB1: ret = "Aileron Trim"; break;// DV 5.2
            case 0xB2: ret = "Anti-Torque Control"; break;// DV 5.2
            case 0xB3: ret = "Autopilot Enable"; break;// OOC 5.2
            case 0xB4: ret = "Chaff Release"; break;// OSC 5.2
            case 0xB5: ret = "Collective Control"; break;// DV 5.2
            case 0xB6: ret = "Dive Brake"; break;// DV 5.2
            case 0xB7: ret = "Electronic Countermeasures"; break;// OOC 5.2
            case 0xB8: ret = "Elevator"; break;// DV 5.2
            case 0xB9: ret = "Elevator Trim"; break;// DV 5.2
            case 0xBA: ret = "Rudder"; break;// DV 5.2
            case 0xBB: ret = "Throttle"; break;// DV 5.2
            case 0xBC: ret = "Flight Communications"; break;// OOC 5.2
            case 0xBD: ret = "Flare Release"; break;// OSC 5.2
            case 0xBE: ret = "Landing Gear"; break;// OOC 5.2
            case 0xBF: ret = "Toe Brake"; break;// DV 5.2
            case 0xC0: ret = "Trigger"; break;// MC 5.2
            case 0xC1: ret = "Weapons Arm"; break;// OOC 5.2
            case 0xC2: ret = "Weapons Select"; break;// OSC 5.2
            case 0xC3: ret = "Wing Flaps"; break;// DV 5.2
            case 0xC4: ret = "Accelerator"; break;// DV 5.3
            case 0xC5: ret = "Brake"; break;// DV 5.3
            case 0xC6: ret = "Clutch"; break;// DV 5.3
            case 0xC7: ret = "Shifter"; break;// DV 5.3
            case 0xC8: ret = "Steering"; break;// DV 5.3
            case 0xC9: ret = "Turret Direction"; break;// DV 5.4
            case 0xCA: ret = "Barrel Elevation"; break;// DV 5.4
            case 0xCB: ret = "Dive Plane"; break;// DV 5.5
            case 0xCC: ret = "Ballast"; break;// DV 5.5
            case 0xCD: ret = "Bicycle Crank"; break;// DV 5.6
            case 0xCE: ret = "Handle Bars"; break;// DV 5.6
            case 0xCF: ret = "Front Brake"; break;// DV 5.6
            case 0xD0: ret = "Rear Brake"; break;// DV 5.6
            // 0D-1F Reserved
            // 26-AF Reserved
            // D1-FFFF Reserved
            default: ret="Reserved"; break;
        }
        return ret
    }

}