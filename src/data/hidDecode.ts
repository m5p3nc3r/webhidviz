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
            case 0x03: ret = this.usage_VRControls(usage); break;
            case 0x04: ret = this.usage_sportsControls(usage); break;
            case 0x05: ret = this.usage_gameControls(usage); break;
            case 0x06: ret = this.usage_genericDeviceControls(usage); break;
            case 0x07: ret = this.usage_keyboardKeypad(usage); break;
            case 0x08: ret = this.usage_LED(usage); break;
            case 0x09: ret = this.usage_buttonPage(usage); break;
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

    private static usage_VRControls(usage?: number) : string {
        let ret="";
        usage = usage || 0;
        switch(usage) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = "Belt"; break;// CA 6.1
            case 0x02: ret = "Body Suit"; break;// CA 6.1
            case 0x03: ret = "Flexor"; break;// CP 6.1
            case 0x04: ret = "Glove"; break;// CA 6.1
            case 0x05: ret = "Head Tracker"; break;// CP 6.1
            case 0x06: ret = "Head Mounted Display"; break;// CA 6.1
            case 0x07: ret = "Hand Tracker"; break;// CA 6.1
            case 0x08: ret = "Oculometer"; break;// CA 6.1
            case 0x09: ret = "Vest"; break;// CA 6.1
            case 0x0A: ret = "Animatronic Device"; break;// CA 6.1
            case 0x20: ret = "Stereo Enable"; break;// OOC 6.2
            case 0x21: ret = "Display Enable"; break;// OOC 6.2
            // 0B-1F Reserved
            // 22-FFFF Reserved
            default: ret="Reserved"; break;


        }
        return ret;
    }

    private static usage_sportsControls(usage?: number) : string {
        let ret="";
        usage = usage || 0;
        switch(usage) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = "Baseball Bat"; break;// CA 7.1
            case 0x02: ret = "Golf Club"; break;// CA 7.1
            case 0x03: ret = "Rowing Machine"; break;// CA 7.2
            case 0x04: ret = "Treadmill"; break;// CA 7.2
            case 0x30: ret = "Oar"; break;// DV 7.2
            case 0x31: ret = "Slope"; break;// DV 7.2
            case 0x32: ret = "Rate"; break;// DV 7.2
            case 0x33: ret = "Stick Speed"; break;// DV 7.1
            case 0x34: ret = "Stick Face Angle"; break;// DV 7.1
            case 0x35: ret = "Stick Heel/Toe"; break;// DV 7.1
            case 0x36: ret = "Stick Follow Through"; break;// DV 7.1
            case 0x37: ret = "Stick Tempo"; break;// DV 7.1
            case 0x38: ret = "Stick Type"; break;// NAry 7.1
            case 0x39: ret = "Stick Height"; break;// DV 7.1
            case 0x50: ret = "Putter"; break;// Sel 7.1
            case 0x51: ret = "1 Iron"; break;// Sel 7.1
            case 0x52: ret = "2 Iron"; break;// Sel 7.1
            case 0x53: ret = "3 Iron"; break;// Sel 7.1
            case 0x54: ret = "4 Iron"; break;// Sel 7.1
            case 0x55: ret = "5 Iron"; break;// Sel 7.1
            case 0x56: ret = "6 Iron"; break;// Sel 7.1
            case 0x57: ret = "7 Iron"; break;// Sel 7.1
            case 0x58: ret = "8 Iron"; break;// Sel 7.1
            case 0x59: ret = "9 Iron"; break;// Sel 7.1
            case 0x5A: ret = "10 Iron"; break;// Sel 7.1
            case 0x5B: ret = "11 Iron"; break;// Sel 7.1
            case 0x5C: ret = "Sand Wedge"; break;// Sel 7.1
            case 0x5D: ret = "Loft Wedge"; break;// Sel 7.1
            case 0x5E: ret = "Power Wedge"; break;// Sel 7.1
            case 0x5F: ret = "1 Wood"; break;// Sel 7.1
            case 0x60: ret = "3 Wood"; break;// Sel 7.1
            case 0x61: ret = "5 Wood"; break;// Sel 7.1
            case 0x62: ret = "7 Wood"; break;// Sel 7.1
            case 0x63: ret = "9 Wood"; break;// Sel 7.1
            // 05-2F Reserved
            // 3A-4F Reserved
            // 64-FFFF Reserved
            default: ret = "Reserved"; break;
        }
        return ret;
    }

    private static usage_gameControls(usage?: number) : string {
        let ret="";
        usage = usage || 0;
        switch(usage) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = "3D Game Controller"; break;// CA 8.1
            case 0x02: ret = "Pinball Device"; break;// CA 8.2
            case 0x03: ret = "Gun Device"; break;// CA 8.3
            case 0x20: ret = "Point of View"; break;// CP 8.1
            case 0x21: ret = "Turn Right/Left"; break;// DV 8.1
            case 0x22: ret = "Pitch Forward/Backward"; break;// DV 8.1
            case 0x23: ret = "Roll Right/Left"; break;// DV 8.1
            case 0x24: ret = "Move Right/Left"; break;// DV 8.1
            case 0x25: ret = "Move Forward/Backward"; break;// DV 8.1
            case 0x26: ret = "Move Up/Down"; break;// DV 8.1
            case 0x27: ret = "Lean Right/Left"; break;// DV 8.1
            case 0x28: ret = "Lean Forward/Backward"; break;// DV 8.1
            case 0x29: ret = "Height of POV"; break;// DV 8.1
            case 0x2A: ret = "Flipper"; break;// MC 8.2
            case 0x2B: ret = "Secondary Flipper"; break;// MC 8.2
            case 0x2C: ret = "Bump"; break;// MC 8.2
            case 0x2D: ret = "New Game"; break;// OSC 8.2
            case 0x2E: ret = "Shoot Ball"; break;// OSC 8.2
            case 0x2F: ret = "Player"; break;// OSC 8.2
            case 0x30: ret = "Gun Bolt"; break;// OOC 8.3
            case 0x31: ret = "Gun Clip"; break;// OOC 8.3
            case 0x32: ret = "Gun Selector"; break;// NAry 8.3
            case 0x33: ret = "Gun Single Shot"; break;// Sel 8.3
            case 0x34: ret = "Gun Burst"; break;// Sel 8.3
            case 0x35: ret = "Gun Automatic"; break;// Sel 8.3
            case 0x36: ret = "Gun Safety"; break;// OOC 8.3
            case 0x37: ret = "Gamepad Fire/Jump"; break;// CL 8.4.1
            case 0x39: ret = "Gamepad Trigger"; break;// CL 8.4.1
            case 0x3A: ret = "Form-fitting Gamepad"; break;// SF 8.4.1
            // 04-1F Reserved
            // 38-38 Reserved
            // 3B-FFFF Reserved
            default: ret = "Reserved"; break;
        }
        return ret;
    }

    private static usage_genericDeviceControls(usage?: number) : string {
        let ret="";
        usage = usage || 0;
        switch(usage) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = "Background/Nonuser Controls"; break;// [4] [65] CA 9.1
            case 0x20: ret = "Battery Strength"; break;// DV 9.2
            case 0x21: ret = "Wireless Channel"; break;// DV 9.2
            case 0x22: ret = "Wireless ID"; break;// DV 9.2
            case 0x23: ret = "Discover Wireless Control"; break;// OSC 9.2
            case 0x24: ret = "Security Code Character Entered"; break;// OSC 9.2
            case 0x25: ret = "Security Code Character Erased"; break;// OSC 9.2
            case 0x26: ret = "Security Code Cleared"; break;// OSC 9.2
            case 0x27: ret = "Sequence ID"; break;// [5] DV 9.1
            case 0x28: ret = "Sequence ID Reset"; break;// [5] DF 9.1
            case 0x29: ret = "RF Signal Strength"; break;// [5] DV 9.1
            case 0x2A: ret = "Software Version"; break;// [32] CL 9.3
            case 0x2B: ret = "Protocol Version"; break;// [32] CL 9.3
            case 0x2C: ret = "Hardware Version"; break;// [32] CL 9.3
            case 0x2D: ret = "Major"; break;// [32] SV 9.3
            case 0x2E: ret = "Minor"; break;// [32] SV 9.3
            case 0x2F: ret = "Revision"; break;// [32] SV 9.3
            case 0x30: ret = "Handedness"; break;// [40] NAry 9.4
            case 0x31: ret = "Either Hand"; break;// [40] Sel 9.4
            case 0x32: ret = "Left Hand"; break;// [40] Sel 9.4
            case 0x33: ret = "Right Hand"; break;// [40] Sel 9.4
            case 0x34: ret = "Both Hands"; break;// [40] Sel 9.4
            case 0x40: ret = "Grip Pose Offset"; break;// [40] CP 9.4
            case 0x41: ret = "Pointer Pose Offset"; break;// [40] CP 9.4
            // 02-1F Reserved
            // 35-3F Reserved
            // 42-FFFF Reserved
            default: ret = "Reserved"; break;
        }
        return ret;
    }

    private static usage_keyboardKeypad(usage?: number) : string {
        let ret="";
        usage = usage || 0;
        switch(usage) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = "Keyboard ErrorRollOver"; break;// Sel N/A ✓ ✓ ✓ 4/101/104
            case 0x02: ret = "Keyboard POSTFail"; break;// Sel N/A ✓ ✓ ✓ 4/101/104
            case 0x03: ret = "Keyboard ErrorUndefined"; break;// Sel N/A ✓ ✓ ✓ 4/101/104
            case 0x04: ret = "Keyboard a and A"; break;// Sel 31 ✓ ✓ ✓ 4/101/104
            case 0x05: ret = "Keyboard b and B"; break;// Sel 50 ✓ ✓ ✓ 4/101/104
            case 0x06: ret = "Keyboard c and C"; break;// Sel 48 ✓ ✓ ✓ 4/101/104
            case 0x07: ret = "Keyboard d and D"; break;// Sel 33 ✓ ✓ ✓ 4/101/104
            case 0x08: ret = "Keyboard e and E"; break;// Sel 19 ✓ ✓ ✓ 4/101/104
            case 0x09: ret = "Keyboard f and F"; break;// Sel 34 ✓ ✓ ✓ 4/101/104
            case 0x0A: ret = "Keyboard g and G"; break;// Sel 35 ✓ ✓ ✓ 4/101/104
            case 0x0B: ret = "Keyboard h and H"; break;// Sel 36 ✓ ✓ ✓ 4/101/104
            case 0x0C: ret = "Keyboard i and I"; break;// Sel 24 ✓ ✓ ✓ 4/101/104
            case 0x0D: ret = "Keyboard j and J"; break;// Sel 37 ✓ ✓ ✓ 4/101/104
            case 0x0E: ret = "Keyboard k and K"; break;// Sel 38 ✓ ✓ ✓ 4/101/104
            case 0x0F: ret = "Keyboard l and L"; break;// Sel 39 ✓ ✓ ✓ 4/101/104
            case 0x10: ret = "Keyboard m and M"; break;// Sel 52 ✓ ✓ ✓ 4/101/104
            case 0x11: ret = "Keyboard n and N"; break;// Sel 51 ✓ ✓ ✓ 4/101/104
            case 0x12: ret = "Keyboard o and O"; break;// Sel 25 ✓ ✓ ✓ 4/101/104
            case 0x13: ret = "Keyboard p and P"; break;// Sel 26 ✓ ✓ ✓ 4/101/104
            case 0x14: ret = "Keyboard q and Q"; break;// Sel 17 ✓ ✓ ✓ 4/101/104
            case 0x15: ret = "Keyboard r and R"; break;// Sel 20 ✓ ✓ ✓ 4/101/104
            case 0x16: ret = "Keyboard s and S"; break;// Sel 32 ✓ ✓ ✓ 4/101/104
            case 0x17: ret = "Keyboard t and T"; break;// Sel 21 ✓ ✓ ✓ 4/101/104
            case 0x18: ret = "Keyboard u and U"; break;// Sel 23 ✓ ✓ ✓ 4/101/104
            case 0x19: ret = "Keyboard v and V"; break;// Sel 49 ✓ ✓ ✓ 4/101/104
            case 0x1A: ret = "Keyboard w and W"; break;// Sel 18 ✓ ✓ ✓ 4/101/104
            case 0x1B: ret = "Keyboard x and X"; break;// Sel 47 ✓ ✓ ✓ 4/101/104
            case 0x1C: ret = "Keyboard y and Y"; break;// Sel 22 ✓ ✓ ✓ 4/101/104
            case 0x1D: ret = "Keyboard z and Z"; break;// Sel 46 ✓ ✓ ✓ 4/101/104
            case 0x1E: ret = "Keyboard 1 and !"; break;// Sel 2 ✓ ✓ ✓ 4/101/104
            case 0x1F: ret = "Keyboard 2 and @"; break;// Sel 3 ✓ ✓ ✓ 4/101/104
            case 0x20: ret = "Keyboard 3 and #"; break;// Sel 4 ✓ ✓ ✓ 4/101/104
            case 0x21: ret = "Keyboard 4 and $"; break;// Sel 5 ✓ ✓ ✓ 4/101/104
            case 0x22: ret = "Keyboard 5 and %"; break;// Sel 6 ✓ ✓ ✓ 4/101/104
            case 0x23: ret = "Keyboard 6 and ∧"; break;// Sel 7 ✓ ✓ ✓ 4/101/104
            case 0x24: ret = "Keyboard 7 and &"; break;// Sel 8 ✓ ✓ ✓ 4/101/104
            case 0x25: ret = "Keyboard 8 and *"; break;// Sel 9 ✓ ✓ ✓ 4/101/104
            case 0x26: ret = "Keyboard 9 and ("; break;// Sel 10 ✓ ✓ ✓ 4/101/104
            case 0x27: ret = "Keyboard 0 and )"; break;// Sel 11 ✓ ✓ ✓ 4/101/104
            case 0x28: ret = "Keyboard Return (ENTER)"; break;// Sel 43 ✓ ✓ ✓ 4/101/104
            case 0x29: ret = "Keyboard ESCAPE"; break;// Sel 110 ✓ ✓ ✓ 4/101/104
            case 0x2A: ret = "Keyboard DELETE (Backspace)"; break;// Sel 15 ✓ ✓ ✓ 4/101/104
            case 0x2B: ret = "Keyboard Tab"; break;// Sel 16 ✓ ✓ ✓ 4/101/104
            case 0x2C: ret = "Keyboard Spacebar"; break;// Sel 61 ✓ ✓ ✓ 4/101/104
            case 0x2D: ret = "Keyboard - and (underscore)"; break;// Sel 12 ✓ ✓ ✓ 4/101/104
            case 0x2E: ret = "Keyboard = and +"; break;// Sel 13 ✓ ✓ ✓ 4/101/104
            case 0x2F: ret = "Keyboard [ and {"; break;// Sel 27 ✓ ✓ ✓ 4/101/104
            case 0x30: ret = "Keyboard ] and }"; break;// Sel 28 ✓ ✓ ✓ 4/101/104
            case 0x31: ret = "Keyboard \\ and |"; break;// Sel 29 ✓ ✓ ✓ 4/101/104
            case 0x32: ret = "Keyboard Non-US # and ˜"; break;// Sel 42 ✓ ✓ ✓ 4/101/104
            case 0x33: ret = "Keyboard ; and :"; break;// Sel 40 ✓ ✓ ✓ 4/101/104
            case 0x34: ret = "Keyboard ‘ and “"; break;// Sel 41 ✓ ✓ ✓ 4/101/104
            case 0x35: ret = "Keyboard Grave Accent and Tilde"; break;// Sel 1 ✓ ✓ ✓ 4/101/104
            case 0x36: ret = "Keyboard , and <"; break;// Sel 53 ✓ ✓ ✓ 4/101/104
            case 0x37: ret = "Keyboard . and >"; break;// Sel 54 ✓ ✓ ✓ 4/101/104
            case 0x38: ret = "Keyboard / and ?"; break;// Sel 55 ✓ ✓ ✓ 4/101/104
            case 0x39: ret = "Keyboard Caps Lock"; break;// Sel 30 ✓ ✓ ✓ 4/101/104
            case 0x3A: ret = "Keyboard F1"; break;// Sel 112 ✓ ✓ ✓ 4/101/104
            case 0x3B: ret = "Keyboard F2"; break;// Sel 113 ✓ ✓ ✓ 4/101/104
            case 0x3C: ret = "Keyboard F3"; break;// Sel 114 ✓ ✓ ✓ 4/101/104
            case 0x3D: ret = "Keyboard F4"; break;// Sel 115 ✓ ✓ ✓ 4/101/104
            case 0x3E: ret = "Keyboard F5"; break;// Sel 116 ✓ ✓ ✓ 4/101/104
            case 0x3F: ret = "Keyboard F6"; break;// Sel 117 ✓ ✓ ✓ 4/101/104
            case 0x40: ret = "Keyboard F7"; break;// Sel 118 ✓ ✓ ✓ 4/101/104
            case 0x41: ret = "Keyboard F8"; break;// Sel 119 ✓ ✓ ✓ 4/101/104
            case 0x42: ret = "Keyboard F9"; break;// Sel 120 ✓ ✓ ✓ 4/101/104
            case 0x43: ret = "Keyboard F10"; break;// Sel 121 ✓ ✓ ✓ 4/101/104
            case 0x44: ret = "Keyboard F11"; break;// Sel 122 ✓ ✓ ✓ 4/101/104
            case 0x45: ret = "Keyboard F12"; break;// Sel 123 ✓ ✓ ✓ 4/101/104
            case 0x46: ret = "Keyboard PrintScreen"; break;// Sel 124 ✓ ✓ ✓ 4/101/104
            case 0x47: ret = "Keyboard Scroll Lock"; break;// Sel 125 ✓ ✓ ✓ 4/101/104
            case 0x48: ret = "Keyboard Pause"; break;// Sel 126 ✓ ✓ ✓ 4/101/104
            case 0x49: ret = "Keyboard Insert"; break;// Sel 75 ✓ ✓ ✓ 4/101/104
            case 0x4A: ret = "Keyboard Home"; break;// Sel 80 ✓ ✓ ✓ 4/101/104
            case 0x4B: ret = "Keyboard PageUp"; break;// Sel 85 ✓ ✓ ✓ 4/101/104
            case 0x4C: ret = "Keyboard Delete Forward"; break;// Sel 76 ✓ ✓ ✓ 4/101/104
            case 0x4D: ret = "Keyboard End"; break;// Sel 81 ✓ ✓ ✓ 4/101/104
            case 0x4E: ret = "Keyboard PageDown"; break;// Sel 86 ✓ ✓ ✓ 4/101/104
            case 0x4F: ret = "Keyboard RightArrow"; break;// Sel 89 ✓ ✓ ✓ 4/101/104
            case 0x50: ret = "Keyboard LeftArrow"; break;// Sel 79 ✓ ✓ ✓ 4/101/104
            case 0x51: ret = "Keyboard DownArrow"; break;// Sel 84 ✓ ✓ ✓ 4/101/104
            case 0x52: ret = "Keyboard UpArrow"; break;// Sel 83 ✓ ✓ ✓ 4/101/104
            case 0x53: ret = "Keypad Num Lock and Clear"; break;// Sel 90 ✓ ✓ ✓ 4/101/104
            case 0x54: ret = "Keypad /"; break;// Sel 95 ✓ ✓ ✓ 4/101/104
            case 0x55: ret = "Keypad *"; break;// Sel 100 ✓ ✓ ✓ 4/101/104
            case 0x56: ret = "Keypad -"; break;// Sel 105 ✓ ✓ ✓ 4/101/104
            case 0x57: ret = "Keypad +"; break;// Sel 106 ✓ ✓ ✓ 4/101/104
            case 0x58: ret = "Keypad ENTER"; break;// Sel 108 ✓ ✓ ✓ 4/101/104
            case 0x59: ret = "Keypad 1 and End"; break;// Sel 93 ✓ ✓ ✓ 4/101/104
            case 0x5A: ret = "Keypad 2 and Down Arrow"; break;// Sel 98 ✓ ✓ ✓ 4/101/104
            case 0x5B: ret = "Keypad 3 and PageDn"; break;// Sel 103 ✓ ✓ ✓ 4/101/104
            case 0x5C: ret = "Keypad 4 and Left Arrow"; break;// Sel 92 ✓ ✓ ✓ 4/101/104
            case 0x5D: ret = "Keypad 5"; break;// Sel 97 ✓ ✓ ✓ 4/101/104
            case 0x5E: ret = "Keypad 6 and Right Arrow"; break;// Sel 102 ✓ ✓ ✓ 4/101/104
            case 0x5F: ret = "Keypad 7 and Home"; break;// Sel 91 ✓ ✓ ✓ 4/101/104
            case 0x60: ret = "Keypad 8 and Up Arrow"; break;// Sel 96 ✓ ✓ ✓ 4/101/104
            case 0x61: ret = "Keypad 9 and PageUp"; break;// Sel 101 ✓ ✓ ✓ 4/101/104
            case 0x62: ret = "Keypad 0 and Insert"; break;// Sel 99 ✓ ✓ ✓ 4/101/104
            case 0x63: ret = "Keypad . and Delete"; break;// Sel 104 ✓ ✓ ✓ 4/101/104
            case 0x64: ret = "Keyboard Non-US \\ and |"; break;// Sel 45 ✓ ✓ ✓ 4/101/104
            case 0x65: ret = "Keyboard Application"; break;// Sel 129 ✓ ✓ 104
            case 0x66: ret = "Keyboard Power"; break;// Sel ✓ ✓
            case 0x67: ret = "Keypad ="; break;// Sel ✓
            case 0x68: ret = "Keyboard F13"; break;// Sel ✓
            case 0x69: ret = "Keyboard F14"; break;// Sel ✓
            case 0x6A: ret = "Keyboard F15"; break;// Sel ✓
            case 0x6B: ret = "Keyboard F16"; break;// Sel
            case 0x6C: ret = "Keyboard F17"; break;// Sel
            case 0x6D: ret = "Keyboard F18"; break;// Sel
            case 0x6E: ret = "Keyboard F19"; break;// Sel
            case 0x6F: ret = "Keyboard F20"; break;// Sel
            case 0x70: ret = "Keyboard F21"; break;// Sel
            case 0x71: ret = "Keyboard F22"; break;// Sel
            case 0x72: ret = "Keyboard F23"; break;// Sel
            case 0x73: ret = "Keyboard F24"; break;// Sel
            case 0x74: ret = "Keyboard Execute"; break;// Sel ✓
            case 0x75: ret = "Keyboard Help"; break;// Sel ✓
            case 0x76: ret = "Keyboard Menu"; break;// Sel ✓
            case 0x77: ret = "Keyboard Select"; break;// Sel ✓
            case 0x78: ret = "Keyboard Stop"; break;// Sel ✓
            case 0x79: ret = "Keyboard Again"; break;// Sel ✓
            case 0x7A: ret = "Keyboard Undo"; break;// Sel ✓
            case 0x7B: ret = "Keyboard Cut"; break;// Sel ✓
            case 0x7C: ret = "Keyboard Copy"; break;// Sel ✓
            case 0x7D: ret = "Keyboard Paste"; break;// Sel ✓
            case 0x7E: ret = "Keyboard Find"; break;// Sel ✓
            case 0x7F: ret = "Keyboard Mute"; break;// Sel ✓
            case 0x80: ret = "Keyboard Volume Up"; break;// Sel ✓
            case 0x81: ret = "Keyboard Volume Down"; break;// Sel ✓
            case 0x82: ret = "Keyboard Locking Caps Lock"; break;// Sel ✓
            case 0x83: ret = "Keyboard Locking Num Lock"; break;// Sel ✓
            case 0x84: ret = "Keyboard Locking Scroll Lock"; break;// Sel ✓
            case 0x85: ret = "Keypad Comma"; break;// Sel 107
            case 0x86: ret = "Keypad Equal Sign"; break;// Sel ✓
            case 0x87: ret = "Keyboard International1"; break;// Sel 56
            case 0x88: ret = "Keyboard International2"; break;// Sel
            case 0x89: ret = "Keyboard International3"; break;// Sel
            case 0x8A: ret = "Keyboard International4"; break;// Sel
            case 0x8B: ret = "Keyboard International5"; break;// Sel
            case 0x8C: ret = "Keyboard International6"; break;// Sel
            case 0x8D: ret = "Keyboard International7"; break;// Sel
            case 0x8E: ret = "Keyboard International8"; break;// Sel
            case 0x8F: ret = "Keyboard International9"; break;// Sel
            case 0x90: ret = "Keyboard LANG1"; break;// Sel
            case 0x91: ret = "Keyboard LANG2"; break;// Sel
            case 0x92: ret = "Keyboard LANG3"; break;// Sel
            case 0x93: ret = "Keyboard LANG4"; break;// Sel
            case 0x94: ret = "Keyboard LANG5"; break;// Sel
            case 0x95: ret = "Keyboard LANG6"; break;// Sel
            case 0x96: ret = "Keyboard LANG7"; break;// Sel
            case 0x97: ret = "Keyboard LANG8"; break;// Sel
            case 0x98: ret = "Keyboard LANG9"; break;// Sel
            case 0x99: ret = "Keyboard Alternate Erase"; break;// Sel
            case 0x9A: ret = "Keyboard SysReq/Attention"; break;// Sel
            case 0x9B: ret = "Keyboard Cancel"; break;// Sel
            case 0x9C: ret = "Keyboard Clear"; break;// Sel
            case 0x9D: ret = "Keyboard Prior"; break;// Sel
            case 0x9E: ret = "Keyboard Return"; break;// Sel
            case 0x9F: ret = "Keyboard Separator"; break;// Sel
            case 0xA0: ret = "Keyboard Out"; break;// Sel
            case 0xA1: ret = "Keyboard Oper"; break;// Sel
            case 0xA2: ret = "Keycboard Clear/Again"; break;// Sel
            case 0xA3: ret = "Keyboard CrSel/Props"; break;// Sel
            case 0xA4: ret = "Keyboard ExSel"; break;// Sel
            case 0xB0: ret = "Keypad 00"; break;// Sel
            case 0xB1: ret = "Keypad 000"; break;// Sel
            case 0xB2: ret = "Thousands Separator"; break;// Sel
            case 0xB3: ret = "Decimal Separator"; break;// Sel
            case 0xB4: ret = "Currency Unit"; break;// Sel
            case 0xB5: ret = "Currency Sub-unit"; break;// Sel
            case 0xB6: ret = "Keypad ("; break;// Sel
            case 0xB7: ret = "Keypad )"; break;// Sel
            case 0xB8: ret = "Keypad {"; break;// Sel
            case 0xB9: ret = "Keypad }"; break;// Sel
            case 0xBA: ret = "Keypad Tab"; break;// Sel
            case 0xBB: ret = "Keypad Backspace"; break;// Sel
            case 0xBC: ret = "Keypad A"; break;// Sel
            case 0xBD: ret = "Keypad B"; break;// Sel
            case 0xBE: ret = "Keypad C"; break;// Sel
            case 0xBF: ret = "Keypad D"; break;// Sel
            case 0xC0: ret = "Keypad E"; break;// Sel
            case 0xC1: ret = "Keypad F"; break;// Sel
            case 0xC2: ret = "Keypad XOR"; break;// Sel
            case 0xC3: ret = "Keypad ∧"; break;// Sel
            case 0xC4: ret = "Keypad %"; break;// Sel
            case 0xC5: ret = "Keypad <"; break;// Sel
            case 0xC6: ret = "Keypad >"; break;// Sel
            case 0xC7: ret = "Keypad &"; break;// Sel
            case 0xC8: ret = "Keypad &&"; break;// Sel
            case 0xC9: ret = "Keypad |"; break;// Sel
            case 0xCA: ret = "Keypad ||"; break;// Sel
            case 0xCB: ret = "Keypad :"; break;// Sel
            case 0xCC: ret = "Keypad #"; break;// Sel
            case 0xCD: ret = "Keypad Space"; break;// Sel
            case 0xCE: ret = "Keypad @"; break;// Sel
            case 0xCF: ret = "Keypad !"; break;// Sel
            case 0xD0: ret = "Keypad Memory Store"; break;// Sel
            case 0xD1: ret = "Keypad Memory Recall"; break;// Sel
            case 0xD2: ret = "Keypad Memory Clear"; break;// Sel
            case 0xD3: ret = "Keypad Memory Add"; break;// Sel
            case 0xD4: ret = "Keypad Memory Subtract"; break;// Sel
            case 0xD5: ret = "Keypad Memory Multiply"; break;// Sel
            case 0xD6: ret = "Keypad Memory Divide"; break;// Sel
            case 0xD7: ret = "Keypad +/-"; break;// Sel
            case 0xD8: ret = "Keypad Clear"; break;// Sel
            case 0xD9: ret = "Keypad Clear Entry"; break;// Sel
            case 0xDA: ret = "Keypad Binary"; break;// Sel
            case 0xDB: ret = "Keypad Octal"; break;// Sel
            case 0xDC: ret = "Keypad Decimal"; break;// Sel
            case 0xDD: ret = "Keypad Hexadecimal"; break;// Sel
            case 0xE0: ret = "Keyboard LeftControl"; break;// DV 58 ✓ ✓ ✓ 4/101/104
            case 0xE1: ret = "Keyboard LeftShift"; break;// DV 44 ✓ ✓ ✓ 4/101/104
            case 0xE2: ret = "Keyboard LeftAlt"; break;// DV 60 ✓ ✓ ✓ 4/101/104
            case 0xE3: ret = "Keyboard Left GUI"; break;// DV 127 ✓ ✓ ✓ 104
            case 0xE4: ret = "Keyboard RightControl"; break;// DV 64 ✓ ✓ ✓ 101/104
            case 0xE5: ret = "Keyboard RightShift"; break;// DV 57 ✓ ✓ ✓ 4/101/104
            case 0xE6: ret = "Keyboard RightAlt"; break;// DV 62 ✓ ✓ ✓ 101/104
            case 0xE7: ret = "Keyboard Right GUI"; break;// DV 128 ✓ ✓ ✓ 104
            // A5-AF Reserved
            // DE-DF Reserved
            // E8-FFFF Reserved
            default: ret = "Reserved"; break;
        }
        return ret;
    }

    private static usage_LED(usage?: number) : string {
        let ret="";
        usage = usage || 0;
        switch(usage) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = "Num Lock"; break;// OOC 11.1
            case 0x02: ret = "Caps Lock"; break;// OOC 11.1
            case 0x03: ret = "Scroll Lock"; break;// OOC 11.1
            case 0x04: ret = "Compose"; break;// OOC 11.1
            case 0x05: ret = "Kana"; break;// OOC 11.1
            case 0x06: ret = "Power"; break;// OOC 11.6
            case 0x07: ret = "Shift"; break;// OOC 11.1
            case 0x08: ret = "Do Not Disturb"; break;// OOC 11.2
            case 0x09: ret = "Mute"; break;// OOC 11.3
            case 0x0A: ret = "Tone Enable"; break;// OOC 11.3
            case 0x0B: ret = "High Cut Filter"; break;// OOC 11.3
            case 0x0C: ret = "Low Cut Filter"; break;// OOC 11.3
            case 0x0D: ret = "Equalizer Enable"; break;// OOC 11.3
            case 0x0E: ret = "Sound Field On"; break;// OOC 11.3
            case 0x0F: ret = "Surround On"; break;// OOC 11.3
            case 0x10: ret = "Repeat"; break;// OOC 11.3
            case 0x11: ret = "Stereo"; break;// OOC 11.3
            case 0x12: ret = "Sampling Rate Detect"; break;// OOC 11.3
            case 0x13: ret = "Spinning"; break;// OOC 11.4
            case 0x14: ret = "CAV"; break;// OOC 11.3
            case 0x15: ret = "CLV"; break;// OOC 11.3
            case 0x16: ret = "Recording Format Detect"; break;// OOC 11.4
            case 0x17: ret = "Off-Hook"; break;// OOC 11.2
            case 0x18: ret = "Ring"; break;// OOC 11.2
            case 0x19: ret = "Message Waiting"; break;// OOC 11.2
            case 0x1A: ret = "Data Mode"; break;// OOC 11.2
            case 0x1B: ret = "Battery Operation"; break;// OOC 11.6
            case 0x1C: ret = "Battery OK"; break;// OOC 11.6
            case 0x1D: ret = "Battery Low"; break;// OOC 11.6
            case 0x1E: ret = "Speaker"; break;// OOC 11.2
            case 0x1F: ret = "Head Set"; break;// OOC 11.2
            case 0x20: ret = "Hold"; break;// OOC 11.2
            case 0x21: ret = "Microphone"; break;// OOC 11.2
            case 0x22: ret = "Coverage"; break;// OOC 11.2
            case 0x23: ret = "Night Mode"; break;// OOC 11.2
            case 0x24: ret = "Send Calls"; break;// OOC 11.2
            case 0x25: ret = "Call Pickup"; break;// OOC 11.2
            case 0x26: ret = "Conference"; break;// OOC 11.2
            case 0x27: ret = "Stand-by"; break;// OOC 11.6
            case 0x28: ret = "Camera On"; break;// OOC 11.3
            case 0x29: ret = "Camera Off"; break;// OOC 11.3
            case 0x2A: ret = "On-Line"; break;// OOC 11.6
            case 0x2B: ret = "Off-Line"; break;// OOC 11.6
            case 0x2C: ret = "Busy"; break;// OOC 11.6
            case 0x2D: ret = "Ready"; break;// OOC 11.6
            case 0x2E: ret = "Paper-Out"; break;// OOC 11.5
            case 0x2F: ret = "Paper-Jam"; break;// OOC 11.5
            case 0x30: ret = "Remote"; break;// OOC 11.6
            case 0x31: ret = "Forward"; break;// OOC 11.4
            case 0x32: ret = "Reverse"; break;// OOC 11.4
            case 0x33: ret = "Stop"; break;// OOC 11.4
            case 0x34: ret = "Rewind"; break;// OOC 11.4
            case 0x35: ret = "Fast Forward"; break;// OOC 11.4
            case 0x36: ret = "Play"; break;// OOC 11.4
            case 0x37: ret = "Pause"; break;// OOC 11.4
            case 0x38: ret = "Record"; break;// OOC 11.4
            case 0x39: ret = "Error"; break;// OOC 11.6
            case 0x3A: ret = "Usage Selected Indicator"; break;// US 11.6
            case 0x3B: ret = "Usage In Use Indicator"; break;// US 11.6
            case 0x3C: ret = "Usage Multi Mode Indicator"; break;// UM 11.6
            case 0x3D: ret = "Indicator On"; break;// Sel 11.6
            case 0x3E: ret = "Indicator Flash"; break;// Sel 11.6
            case 0x3F: ret = "Indicator Slow Blink"; break;// Sel 11.6
            case 0x40: ret = "Indicator Fast Blink"; break;// Sel 11.6
            case 0x41: ret = "Indicator Off"; break;// Sel 11.6
            case 0x42: ret = "Flash On Time"; break;// DV 11.6
            case 0x43: ret = "Slow Blink On Time"; break;// DV 11.6
            case 0x44: ret = "Slow Blink Off Time"; break;// DV 11.6
            case 0x45: ret = "Fast Blink On Time"; break;// DV 11.6
            case 0x46: ret = "Fast Blink Off Time"; break;// DV 11.6
            case 0x47: ret = "Usage Indicator Color"; break;// UM 11.6
            case 0x48: ret = "Indicator Red"; break;// Sel 11.6
            case 0x49: ret = "Indicator Green"; break;// Sel 11.6
            case 0x4A: ret = "Indicator Amber"; break;// Sel 11.6
            case 0x4B: ret = "Generic Indicator"; break;// OOC 11.6
            case 0x4C: ret = "System Suspend"; break;// OOC 11.6
            case 0x4D: ret = "External Power Connected"; break;// OOC 11.6
            case 0x4E: ret = "Indicator Blue "; break;//[6] Sel 11.6
            case 0x4F: ret = "Indicator Orange "; break;//[6] Sel 11.6
            case 0x50: ret = "Good Status"; break;// [6] OOC 11.6
            case 0x51: ret = "Warning Status"; break;// [6] OOC 11.6
            case 0x52: ret = "RGB LED"; break;// [6] CL 11.7
            case 0x53: ret = "Red LED Channel"; break;// [6] DV 11.7
            case 0x54: ret = "Blue LED Channel"; break;// [6] DV 11.7
            case 0x55: ret = "Green LED Channel"; break;// [6] DV 11.7
            case 0x56: ret = "LED Intensity"; break;// [6] DV 11.7
            case 0x60: ret = "Player Indicator"; break;// [29] NAry 11.8
            case 0x61: ret = "Player 1"; break;// [29] Sel 11.8
            case 0x62: ret = "Player 2"; break;// [29] Sel 11.8
            case 0x63: ret = "Player 3"; break;// [29] Sel 11.8
            case 0x64: ret = "Player 4"; break;// [29] Sel 11.8
            case 0x65: ret = "Player 5"; break;// [29] Sel 11.8
            case 0x66: ret = "Player 6"; break;// [29] Sel 11.8
            case 0x67: ret = "Player 7"; break;// [29] Sel 11.8
            case 0x68: ret = "Player 8"; break;// [29] Sel 11.8
            // 57-5F Reserved
            // 69-FFFF Reserved
            default: ret = "Reserved"; break;
        }
        return ret;
    }

    private static usage_buttonPage(usage?: number) : string {
        let ret="";
        usage = usage || 0;
        switch(usage) {
            case 0x00: ret = "No button pressed"; break;
            default: ret = `Button ${usage}`; break;
        }
        return ret;
    }

}