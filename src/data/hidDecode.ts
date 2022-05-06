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
            case 0x09: ret = this.usage_button(usage); break;
            case 0x0A: ret = this.usage_ordinal(usage); break;
            case 0x0B: ret = this.usage_telephony(usage); break;
            case 0x0C: ret = this.usage_consumer(usage); break;
            case 0x0D: ret = this.usage_digitizer(usage); break;
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

    private static usage_button(usage?: number) : string {
        let ret="";
        usage = usage || 0;
        switch(usage) {
            case 0x00: ret = "No button pressed"; break;
            default: ret = `Button ${usage}`; break;
        }
        return ret;
    }

    private static usage_ordinal(usage?: number) : string {
        let ret="";
        usage = usage || 0;
        switch(usage) {
            case 0x00: ret = "Reserved"; break;
            default: ret = `Instance ${usage}`; break;
        }
        return ret;
    }

    private static usage_telephony(usage?: number) : string {
        let ret="";
        usage = usage || 0;
        switch(usage) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = "Phone"; break;// CA 14.1
            case 0x02: ret = "Answering Machine"; break;// CA 14.1
            case 0x03: ret = "Message Controls"; break;// CL 14.1
            case 0x04: ret = "Handset"; break;// CL 14.1
            case 0x05: ret = "Headset"; break;// CL/CA 14.1
            case 0x06: ret = "Telephony Key Pad"; break;// NAry 14.2
            case 0x07: ret = "Programmable Button"; break;// NAry 14.2
            case 0x20: ret = "Hook Switch"; break;// OOC 14.3
            case 0x21: ret = "Flash"; break;// MC 14.3
            case 0x22: ret = "Feature"; break;// OSC 14.3
            case 0x23: ret = "Hold"; break;// OOC 14.3
            case 0x24: ret = "Redial"; break;// OSC 14.3
            case 0x25: ret = "Transfer"; break;// OSC 14.3
            case 0x26: ret = "Drop"; break;// OSC 14.3
            case 0x27: ret = "Park"; break;// OOC 14.3
            case 0x28: ret = "Forward Calls"; break;// OOC 14.3
            case 0x29: ret = "Alternate Function"; break;// MC 14.3
            case 0x2A: ret = "Line"; break;// OSC/NAry 14.3
            case 0x2B: ret = "Speaker Phone"; break;// OOC 14.3
            case 0x2C: ret = "Conference"; break;// OOC 14.3
            case 0x2D: ret = "Ring Enable"; break;// OOC 14.3
            case 0x2E: ret = "Ring Select"; break;// OSC 14.3
            case 0x2F: ret = "Phone Mute"; break;// OOC 14.3
            case 0x30: ret = "Caller ID"; break;// MC 14.3
            case 0x31: ret = "Send"; break;// OOC 14.3
            case 0x50: ret = "Speed Dial"; break;// OSC 14.4
            case 0x51: ret = "Store Number"; break;// OSC 14.4
            case 0x52: ret = "Recall Number"; break;// OSC 14.4
            case 0x53: ret = "Phone Directory"; break;// OOC 14.4
            case 0x70: ret = "Voice Mail"; break;// OOC 14.5
            case 0x71: ret = "Screen Calls"; break;// OOC 14.5
            case 0x72: ret = "Do Not Disturb"; break;// OOC 14.5
            case 0x73: ret = "Message"; break;// OSC 14.5
            case 0x74: ret = "Answer On/Off"; break;// OOC 14.5
            case 0x90: ret = "Inside Dial Tone"; break;// MC 14.6
            case 0x91: ret = "Outside Dial Tone"; break;// MC 14.6
            case 0x92: ret = "Inside Ring Tone"; break;// MC 14.6
            case 0x93: ret = "Outside Ring Tone"; break;// MC 14.6
            case 0x94: ret = "Priority Ring Tone"; break;// MC 14.6
            case 0x95: ret = "Inside Ringback"; break;// MC 14.6
            case 0x96: ret = "Priority Ringback"; break;// MC 14.6
            case 0x97: ret = "Line Busy Tone"; break;// MC 14.6
            case 0x98: ret = "Reorder Tone"; break;// MC 14.6
            case 0x99: ret = "Call Waiting Tone"; break;// MC 14.6
            case 0x9A: ret = "Confirmation Tone 1"; break;// MC 14.6
            case 0x9B: ret = "Confirmation Tone 2"; break;// MC 14.6
            case 0x9C: ret = "Tones Off"; break;// OOC 14.6
            case 0x9D: ret = "Outside Ringback"; break;// MC 14.6
            case 0x9E: ret = "Ringer"; break;// OOC 14.6
            case 0xB0: ret = "Phone Key 0"; break;// Sel 14.2
            case 0xB1: ret = "Phone Key 1"; break;// Sel 14.2
            case 0xB2: ret = "Phone Key 2"; break;// Sel 14.2
            case 0xB3: ret = "Phone Key 3"; break;// Sel 14.2
            case 0xB4: ret = "Phone Key 4"; break;// Sel 14.2
            case 0xB5: ret = "Phone Key 5"; break;// Sel 14.2
            case 0xB6: ret = "Phone Key 6"; break;// Sel 14.2
            case 0xB7: ret = "Phone Key 7"; break;// Sel 14.2
            case 0xB8: ret = "Phone Key 8"; break;// Sel 14.2
            case 0xB9: ret = "Phone Key 9"; break;// Sel 14.2
            case 0xBA: ret = "Phone Key Star"; break;// Sel 14.2
            case 0xBB: ret = "Phone Key Pound"; break;// Sel 14.2
            case 0xBC: ret = "Phone Key A"; break;// Sel 14.2
            case 0xBD: ret = "Phone Key B"; break;// Sel 14.2
            case 0xBE: ret = "Phone Key C"; break;// Sel 14.2
            case 0xBF: ret = "Phone Key D"; break;// Sel 14.2
            case 0xC0: ret = "Phone Call History Key"; break;// [5] Sel 14.7
            case 0xC1: ret = "Phone Caller ID Key"; break;// [5] Sel 14.7
            case 0xC2: ret = "Phone Settings Key"; break;// [5] Sel 14.7
            case 0xF0: ret = "Host Control"; break;// [5] OOC 14.8
            case 0xF1: ret = "Host Available "; break;//[5] OOC 14.8
            case 0xF2: ret = "Host Call Active"; break;// [5] OOC 14.8
            case 0xF3: ret = "Activate Handset Audio"; break;// [5] OOC 14.8
            case 0xF4: ret = "Ring Type"; break;// [5] NAry 14.9
            case 0xF5: ret = "Re-dialable Phone Number"; break;// [5] OOC 14.9
            case 0xF8: ret = "Stop Ring Tone"; break;// [5] Sel 14.9
            case 0xF9: ret = "PSTN Ring Tone"; break;// [5] Sel 14.9
            case 0xFA: ret = "Host Ring Tone"; break;// [5] Sel 14.9
            case 0xFB: ret = "Alert Sound Error"; break;// [5] Sel 14.9
            case 0xFC: ret = "Alert Sound Confirm"; break;// [5] Sel 14.9
            case 0xFD: ret = "Alert Sound Notification"; break;// [5] Sel 14.9
            case 0xFE: ret = "Silent Ring"; break;// [5] Sel 14.9
            case 0x108: ret = "Email Message Waiting"; break;// [5] OOC 14.8
            case 0x109: ret = "Voicemail Message Waiting"; break;// [5] OOC 14.8
            case 0x10A: ret = "Host Hold"; break;// [5] OOC 14.8
            case 0x110: ret = "Incoming Call History Count"; break;// [5] DV 14.10
            case 0x111: ret = "Outgoing Call History Count"; break;// [5] DV 14.10
            case 0x112: ret = "Incoming Call History"; break;// [5] CL 14.10
            case 0x113: ret = "Outgoing Call History"; break;// [5] CL 14.10
            case 0x114: ret = "Phone Locale"; break;// [5] DV 14.8
            case 0x140: ret = "Phone Time Second"; break;// [5] DV 14.9
            case 0x141: ret = "Phone Time Minute"; break;// [5] DV 14.9
            case 0x142: ret = "Phone Time Hour"; break;// [5] DV 14.9
            case 0x143: ret = "Phone Date Day"; break;// [5] DV 14.9
            case 0x144: ret = "Phone Date Month"; break;// [5] DV 14.9
            case 0x145: ret = "Phone Date Year"; break;// [5] DV 14.9
            case 0x146: ret = "Handset Nickname"; break;// [5] DV 14.9
            case 0x147: ret = "Address Book ID"; break;// [5] DV 14.9
            case 0x14A: ret = "Call Duration"; break;// [5] DV 14.10
            case 0x14B: ret = "Dual Mode Phone"; break;// CA 14.8
            // 08-1F Reserved
            // 32-4F Reserved
            // 54-6F Reserved
            // 75-8F Reserved
            // 9F-AF Reserved
            // C3-EF Reserved
            // F6-F7 Reserved
            // FF-107 Reserved
            // 10B-10F Reserved
            // 115-13F Reserved
            // 148-149 Reserved
            // 14C-FFFF Reserved
            default: ret = "Reserved"; break;
        }
        return ret;
    }

    private static usage_consumer(usage?: number) : string {
        let ret="";
        usage = usage || 0;
        switch(usage) {
            case 0x00: ret = "Undefined"; break;
            case 0x01: ret = "Consumer Control"; break;// CA 15.1
            case 0x02: ret = "Numeric Key Pad"; break;// NAry 15.2
            case 0x03: ret = "Programmable Buttons"; break;// NAry 15.14
            case 0x04: ret = "Microphone"; break;// CA 15.1
            case 0x05: ret = "Headphone"; break;// CA 15.1
            case 0x06: ret = "Graphic Equalizer"; break;// CA 15.1
            case 0x20: ret = "+10"; break;// OSC 15.2
            case 0x21: ret = "+100"; break;// OSC 15.2
            case 0x22: ret = "AM/PM"; break;// OSC 15.2
            case 0x30: ret = "Power"; break;// OOC 15.3
            case 0x31: ret = "Reset"; break;// OSC 15.3
            case 0x32: ret = "Sleep"; break;// OSC 15.3
            case 0x33: ret = "Sleep After"; break;// OSC 15.3
            case 0x34: ret = "Sleep Mode"; break;// RTC 15.3
            case 0x35: ret = "Illumination"; break;// OOC 15.3
            case 0x36: ret = "Function Buttons"; break;// NAry 15.3
            case 0x40: ret = "Menu"; break;// OOC 15.4
            case 0x41: ret = "Menu Pick"; break;// OSC 15.4
            case 0x42: ret = "Menu Up"; break;// OSC 15.4
            case 0x43: ret = "Menu Down"; break;// OSC 15.4
            case 0x44: ret = "Menu Left"; break;// OSC 15.4
            case 0x45: ret = "Menu Right"; break;// OSC 15.4
            case 0x46: ret = "Menu Escape"; break;// OSC 15.4
            case 0x47: ret = "Menu Value Increase"; break;// OSC 15.4
            case 0x48: ret = "Menu Value Decrease"; break;// OSC 15.4
            case 0x60: ret = "Data On Screen"; break;// OOC 15.5
            case 0x61: ret = "Closed Caption"; break;// OOC 15.5
            case 0x62: ret = "Closed Caption Select"; break;// OSC 15.5
            case 0x63: ret = "VCR/TV"; break;// OOC 15.5
            case 0x64: ret = "Broadcast Mode"; break;// OSC 15.5
            case 0x65: ret = "Snapshot"; break;// OSC 15.5
            case 0x66: ret = "Still"; break;// OSC 15.5
            case 0x67: ret = "Picture-in-Picture Toggle"; break;// [8] OSC 15.5
            case 0x68: ret = "Picture-in-Picture Swap"; break;// [8] OSC 15.5
            case 0x69: ret = "Red Menu Button"; break;// [9] MC 15.4
            case 0x6A: ret = "Green Menu Button"; break;// [9] MC 15.4
            case 0x6B: ret = "Blue Menu Button"; break;// [9] MC 15.4
            case 0x6C: ret = "Yellow Menu Button"; break;// [9] MC 15.4
            case 0x6D: ret = "Aspect"; break;// [10] OSC 15.5
            case 0x6E: ret = "3D Mode Select"; break;// [11] OSC 15.5
            case 0x6F: ret = "Display Brightness Increment"; break;// [14] RTC 15.5
            case 0x70: ret = "Display Brightness Decrement"; break;// [14] RTC 15.5
            case 0x71: ret = "Display Brightness"; break;// [14] LC 15.5
            case 0x72: ret = "Display Backlight Toggle"; break;// [14] OOC 15.5
            case 0x73: ret = "Display Set Brightness to Minimum"; break;// [14] OSC 15.5
            case 0x74: ret = "Display Set Brightness to Maximum"; break;// [14] OSC 15.5
            case 0x75: ret = "Display Set Auto Brightness"; break;// [14] OOC 15.5
            case 0x76: ret = "Camera Access Enabled "; break;//[41] OOC 15.21
            case 0x77: ret = "Camera Access Disabled"; break;// [41] OOC 15.21
            case 0x78: ret = "Camera Access Toggle"; break;// [41] OOC 15.21
            case 0x79: ret = "Keyboard Brightness Increment"; break;// [42] OSC 15.22
            case 0x7A: ret = "Keyboard Brightness Decrement"; break;// [42] OSC 15.22
            case 0x7B: ret = "Keyboard Backlight Set Level"; break;// [42] LC 15.22
            case 0x7C: ret = "Keyboard Backlight OOC"; break;// [42] OOC 15.22
            case 0x7D: ret = "Keyboard Backlight Set Minimum"; break;// [42] OSC 15.22
            case 0x7E: ret = "Keyboard Backlight Set Maximum"; break;// [42] OSC 15.22
            case 0x7F: ret = "Keyboard Backlight Auto"; break;// [42] OOC 15.22
            case 0x80: ret = "Selection"; break;// NAry 15.6
            case 0x81: ret = "Assign Selection"; break;// OSC 15.6
            case 0x82: ret = "Mode Step"; break;// OSC 15.6
            case 0x83: ret = "Recall Last"; break;// OSC 15.6
            case 0x84: ret = "Enter Channel"; break;// OSC 15.6
            case 0x85: ret = "Order Movie"; break;// OSC 15.6
            case 0x86: ret = "Channel"; break;// LC 15.6
            case 0x87: ret = "Media Selection"; break;// NAry 15.6
            case 0x88: ret = "Media Select Computer"; break;// Sel 15.6
            case 0x89: ret = "Media Select TV"; break;// Sel 15.6
            case 0x8A: ret = "Media Select WWW"; break;// Sel 15.6
            case 0x8B: ret = "Media Select DVD "; break;//Sel 15.6
            case 0x8C: ret = "Media Select Telephone"; break;// Sel 15.6
            case 0x8D: ret = "Media Select Program Guide"; break;// Sel 15.6
            case 0x8E: ret = "Media Select Video Phone"; break;// Sel 15.6
            case 0x8F: ret = "Media Select Games"; break;// Sel 15.6
            case 0x90: ret = "Media Select Messages"; break;// Sel 15.6
            case 0x91: ret = "Media Select CD"; break;// Sel 15.6
            case 0x92: ret = "Media Select VCR"; break;// Sel 15.6
            case 0x93: ret = "Media Select Tuner"; break;// Sel 15.6
            case 0x94: ret = "Quit"; break;// OSC 15.6
            case 0x95: ret = "Help"; break;// OOC 15.6
            case 0x96: ret = "Media Select Tape"; break;// Sel 15.6
            case 0x97: ret = "Media Select Cable"; break;// Sel 15.6
            case 0x98: ret = "Media Select Satellite"; break;// Sel 15.6
            case 0x99: ret = "Media Select Security"; break;// Sel 15.6
            case 0x9A: ret = "Media Select Home"; break;// Sel 15.6
            case 0x9B: ret = "Media Select Call"; break;// Sel 15.6
            case 0x9C: ret = "Channel Increment"; break;// OSC 15.6
            case 0x9D: ret = "Channel Decrement"; break;// OSC 15.6
            case 0x9E: ret = "Media Select SAP"; break;// Sel 15.13
            case 0xA0: ret = "VCR Plus"; break;// OSC 15.6
            case 0xA1: ret = "Once "; break;//OSC 15.6
            case 0xA2: ret = "Daily"; break;// OSC 15.6
            case 0xA3: ret = "Weekly"; break;// OSC 15.6
            case 0xA4: ret = "Monthly"; break;// OSC 15.6
            case 0xB0: ret = "Play"; break;// OOC 15.7
            case 0xB1: ret = "Pause"; break;// OOC 15.7
            case 0xB2: ret = "Record"; break;// OOC 15.7
            case 0xB3: ret = "Fast Forward"; break;// OOC 15.7
            case 0xB4: ret = "Rewind"; break;// OOC 15.7
            case 0xB5: ret = "Scan Next Track"; break;// OSC 15.7
            case 0xB6: ret = "Scan Previous Track"; break;// OSC 15.7
            case 0xB7: ret = "Stop"; break;// OSC 15.7
            case 0xB8: ret = "Eject"; break;// OSC 15.7
            case 0xB9: ret = "Random Play"; break;// OOC 15.7
            case 0xBA: ret = "Select Disc"; break;// NAry 15.7
            case 0xBB: ret = "Enter Disc"; break;// MC 15.7
            case 0xBC: ret = "Repeat"; break;// OSC 15.7
            case 0xBD: ret = "Tracking"; break;// LC 15.7
            case 0xBE: ret = "Track Normal"; break;// OSC 15.7
            case 0xBF: ret = "Slow Tracking"; break;// LC 15.7
            case 0xC0: ret = "Frame Forward"; break;// RTC 15.7
            case 0xC1: ret = "Frame Back"; break;// RTC 15.7
            case 0xC2: ret = "Mark"; break;// OSC 15.8
            case 0xC3: ret = "Clear Mark"; break;// OSC 15.8
            case 0xC4: ret = "Repeat From Mark"; break;// OOC 15.8
            case 0xC5: ret = "Return To Mark"; break;// OSC 15.8
            case 0xC6: ret = "Search Mark Forward"; break;// OSC 15.8
            case 0xC7: ret = "Search Mark Backwards"; break;// OSC 15.8
            case 0xC8: ret = "Counter Reset"; break;// OSC 15.8
            case 0xC9: ret = "Show Counter"; break;// OSC 15.8
            case 0xCA: ret = "Tracking Increment"; break;// RTC 15.7
            case 0xCB: ret = "Tracking Decrement"; break;// RTC 15.7
            case 0xCC: ret = "Stop/Eject"; break;// OSC 15.7
            case 0xCD: ret = "Play/Pause"; break;// OSC 15.7
            case 0xCE: ret = "Play/Skip"; break;// OSC 15.7
            case 0xCF: ret = "Voice Command"; break;// OSC 15.3
            case 0xD0: ret = "Invoke Capture Interface"; break;// [35] Sel 15.20
            case 0xD1: ret = "Start or Stop Game Recording"; break;// [35] Sel 15.20
            case 0xD2: ret = "Historical Game Capture"; break;// [35] Sel 15.20
            case 0xD3: ret = "Capture Game Screenshot"; break;// [35] Sel 15.20
            case 0xD4: ret = "Show or Hide Recording Indicator"; break;// [35] Sel 15.20
            case 0xD5: ret = "Start or Stop Microphone Capture"; break;// [35] Sel 15.20
            case 0xD6: ret = "Start or Stop Camera Capture"; break;// [35] Sel 15.20
            case 0xD7: ret = "Start or Stop Game Broadcast"; break;// [35] Sel 15.20
            case 0xD8: ret = "Start or Stop Voice Dictation Session"; break;// [66] OOC 15.3
            case 0xD9: ret = "Invoke/Dismiss Emoji Picker"; break;// [68] OOC 15.3
            case 0xE0: ret = "Volume"; break;// LC 15.9
            case 0xE1: ret = "Balance"; break;// LC 15.9
            case 0xE2: ret = "Mute"; break;// OOC 15.9
            case 0xE3: ret = "Bass"; break;// LC 15.9
            case 0xE4: ret = "Treble"; break;// LC 15.9
            case 0xE5: ret = "Bass Boost"; break;// OOC 15.9
            case 0xE6: ret = "Surround Mode"; break;// OSC 15.9
            case 0xE7: ret = "Loudness"; break;// OOC 15.9
            case 0xE8: ret = "MPX"; break;// OOC 15.9
            case 0xE9: ret = "Volume Increment"; break;// RTC 15.9
            case 0xEA: ret = "Volume Decrement"; break;// RTC 15.9
            case 0xF0: ret = "Speed Select"; break;// OSC 15.10
            case 0xF1: ret = "Playback Speed"; break;// NAry 15.10
            case 0xF2: ret = "Standard Play"; break;// Sel 15.10
            case 0xF3: ret = "Long Play"; break;// Sel 15.10
            case 0xF4: ret = "Extended Play"; break;// Sel 15.10
            case 0xF5: ret = "Slow"; break;// OSC 15.10
            case 0x100: ret = "Fan Enable"; break;// OOC 15.11
            case 0x101: ret = "Fan Speed"; break;// LC 15.11
            case 0x102: ret = "Light Enable"; break;// OOC 15.11
            case 0x103: ret = "Light Illumination Level"; break;// LC 15.11
            case 0x104: ret = "Climate Control Enable"; break;// OOC 15.11
            case 0x105: ret = "Room Temperature"; break;// LC 15.11
            case 0x106: ret = "Security Enable"; break;// OOC 15.11
            case 0x107: ret = "Fire Alarm "; break;//OSC 15.11
            case 0x108: ret = "Police Alarm "; break;//OSC 15.11
            case 0x109: ret = "Proximity"; break;// LC 15.11
            case 0x10A: ret = "Motion"; break;// OSC 15.11
            case 0x10B: ret = "Duress Alarm"; break;// OSC 15.11
            case 0x10C: ret = "Holdup Alarm"; break;// OSC 15.11
            case 0x10D: ret = "Medical Alarm"; break;// OSC 15.11
            case 0x150: ret = "Balance Right"; break;// RTC 15.9
            case 0x151: ret = "Balance Left"; break;// RTC 15.9
            case 0x152: ret = "Bass Increment"; break;// RTC 15.9
            case 0x153: ret = "Bass Decrement"; break;// RTC 15.9
            case 0x154: ret = "Treble Increment"; break;// RTC 15.9
            case 0x155: ret = "Treble Decrement"; break;// RTC 15.9
            case 0x160: ret = "Speaker System"; break;// CL 15.12
            case 0x161: ret = "Channel Left"; break;// CL 15.12
            case 0x162: ret = "Channel Right"; break;// CL 15.12
            case 0x163: ret = "Channel Center"; break;// CL 15.12
            case 0x164: ret = "Channel Front"; break;// CL 15.12
            case 0x165: ret = "Channel Center Front"; break;// CL 15.12
            case 0x166: ret = "Channel Side"; break;// CL 15.12
            case 0x167: ret = "Channel Surround"; break;// CL 15.12
            case 0x168: ret = "Channel Low Frequency Enhancement"; break;// CL 15.12
            case 0x169: ret = "Channel Top"; break;// CL 15.12
            case 0x16A: ret = "Channel Unknown"; break;// CL 15.12
            case 0x170: ret = "Sub-channel"; break;// LC 15.13
            case 0x171: ret = "Sub-channel Increment"; break;// OSC 15.13
            case 0x172: ret = "Sub-channel Decrement"; break;// OSC 15.13
            case 0x173: ret = "Alternate Audio Increment"; break;// OSC 15.13
            case 0x174: ret = "Alternate Audio Decrement"; break;// OSC 15.13
            case 0x180: ret = "Application Launch Buttons"; break;// NAry 15.15
            case 0x181: ret = "AL Launch Button Configuration Tool"; break;// Sel 15.15
            case 0x182: ret = "AL Programmable Button Configuration"; break;// Sel 15.15
            case 0x183: ret = "AL Consumer Control Configuration"; break;// Sel 15.15
            case 0x184: ret = "AL Word Processor"; break;// Sel 15.15
            case 0x185: ret = "AL Text Editor"; break;// Sel 15.15
            case 0x186: ret = "AL Spreadsheet"; break;// Sel 15.15
            case 0x187: ret = "AL Graphics Editor"; break;// Sel 15.15
            case 0x188: ret = "AL Presentation App"; break;// Sel 15.15
            case 0x189: ret = "AL Database App"; break;// Sel 15.15
            case 0x18A: ret = "AL Email Reader"; break;// Sel 15.15
            case 0x18B: ret = "AL Newsreader"; break;// Sel 15.15
            case 0x18C: ret = "AL Voicemail"; break;// Sel 15.15
            case 0x18D: ret = "AL Contacts/Address Book"; break;// Sel 15.15
            case 0x18E: ret = "AL Calendar/Schedule"; break;// Sel 15.15
            case 0x18F: ret = "AL Task/Project Manager"; break;// Sel 15.15
            case 0x190: ret = "AL Log/Journal/Timecard"; break;// Sel 15.15
            case 0x191: ret = "AL Checkbook/Finance"; break;// Sel 15.15
            case 0x192: ret = "AL Calculator"; break;// Sel 15.15
            case 0x193: ret = "AL A/V Capture/Playback"; break;// Sel 15.15
            case 0x194: ret = "AL Local Machine Browser"; break;// Sel 15.15
            case 0x195: ret = "AL LAN/WAN Browser"; break;// Sel 15.15
            case 0x196: ret = "AL Internet Browser"; break;// Sel 15.15
            case 0x197: ret = "AL Remote Networking/ISP Connect"; break;// Sel 15.15
            case 0x198: ret = "AL Network Conference"; break;// Sel 15.15
            case 0x199: ret = "AL Network Chat"; break;// Sel 15.15
            case 0x19A: ret = "AL Telephony/Dialer"; break;// Sel 15.15
            case 0x19B: ret = "AL Logon"; break;// Sel 15.15
            case 0x19C: ret = "AL Logoff"; break;// Sel 15.15
            case 0x19D: ret = "AL Logon/Logoff"; break;// Sel 15.15
            case 0x19E: ret = "AL Terminal Lock/Screensaver"; break;// Sel 15.15
            case 0x19F: ret = "AL Control Panel"; break;// Sel 15.15
            case 0x1A0: ret = "AL Command Line Processor/Run"; break;// Sel 15.15
            case 0x1A1: ret = "AL Process/Task Manager"; break;// Sel 15.15
            case 0x1A2: ret = "AL Select Task/Application"; break;// Sel 15.15
            case 0x1A3: ret = "AL Next Task/Application"; break;// Sel 15.15
            case 0x1A4: ret = "AL Previous Task/Application"; break;// Sel 15.15
            case 0x1A5: ret = "AL Preemptive Halt Task/Application"; break;// Sel 15.15
            case 0x1A6: ret = "AL Integrated Help Center"; break;// Sel 15.15
            case 0x1A7: ret = "AL Documents"; break;// Sel 15.15
            case 0x1A8: ret = "AL Thesaurus"; break;// Sel 15.15
            case 0x1A9: ret = "AL Dictionary"; break;// Sel 15.15
            case 0x1AA: ret = "AL Desktop"; break;// Sel 15.15
            case 0x1AB: ret = "AL Spell Check"; break;// Sel 15.15
            case 0x1AC: ret = "AL Grammar Check"; break;// Sel 15.15
            case 0x1AD: ret = "AL Wireless Status"; break;// Sel 15.15
            case 0x1AE: ret = "AL Keyboard Layout"; break;// Sel 15.15
            case 0x1AF: ret = "AL Virus Protection"; break;// Sel 15.15
            case 0x1B0: ret = "AL Encryption"; break;// Sel 15.15
            case 0x1B1: ret = "AL Screen Saver"; break;// Sel 15.15
            case 0x1B2: ret = "AL Alarms"; break;// Sel 15.15
            case 0x1B3: ret = "AL Clock"; break;// Sel 15.15
            case 0x1B4: ret = "AL File Browser"; break;// Sel 15.15
            case 0x1B5: ret = "AL Power Status"; break;// Sel 15.15
            case 0x1B6: ret = "AL Image Browser"; break;// Sel 15.15
            case 0x1B7: ret = "AL Audio Browser"; break;// Sel 15.15
            case 0x1B8: ret = "AL Movie Browser"; break;// Sel 15.15
            case 0x1B9: ret = "AL Digital Rights Manager"; break;// Sel 15.15
            case 0x1BA: ret = "AL Digital Wallet"; break;// Sel 15.15
            case 0x1BC: ret = "AL Instant Messaging"; break;// Sel 15.15
            case 0x1BD: ret = "AL OEM Features/ Tips/Tutorial Browser"; break;// Sel 15.15
            case 0x1BE: ret = "AL OEM Help"; break;// Sel 15.15
            case 0x1BF: ret = "AL Online Community"; break;// Sel 15.15
            case 0x1C0: ret = "AL Entertainment Content Browser"; break;// Sel 15.15
            case 0x1C1: ret = "AL Online Shopping Browser"; break;// Sel 15.15
            case 0x1C2: ret = "AL SmartCard Information/Help"; break;// Sel 15.15
            case 0x1C3: ret = "AL Market Monitor/Finance Browser"; break;// Sel 15.15
            case 0x1C4: ret = "AL Customized Corporate News Browser"; break;// Sel 15.15
            case 0x1C5: ret = "AL Online Activity Browser"; break;// Sel 15.15
            case 0x1C6: ret = "AL Research/Search Browser"; break;// Sel 15.15
            case 0x1C7: ret = "AL Audio Player"; break;// Sel 15.15
            case 0x1C8: ret = "AL Message Status"; break;// [5] Sel 15.15
            case 0x1C9: ret = "AL Contact Sync"; break;// [5] Sel 15.15
            case 0x1CA: ret = "AL Navigation"; break;// [64] Sel 15.15
            case 0x1CB: ret = "AL Context-aware Desktop Assistant"; break;// [56] Sel 15.15
            case 0x200: ret = "Generic GUI Application Controls"; break;// NAry 15.16
            case 0x201: ret = "AC New"; break;// Sel 15.16
            case 0x202: ret = "AC Open"; break;// Sel 15.16
            case 0x203: ret = "AC Close"; break;// Sel 15.16
            case 0x204: ret = "AC Exit"; break;// Sel 15.16
            case 0x205: ret = "AC Maximize"; break;// Sel 15.16
            case 0x206: ret = "AC Minimize"; break;// Sel 15.16
            case 0x207: ret = "AC Save"; break;// Sel 15.16
            case 0x208: ret = "AC Print"; break;// Sel 15.16
            case 0x209: ret = "AC Properties"; break;// Sel 15.16
            case 0x21A: ret = "AC Undo"; break;// Sel 15.16
            case 0x21B: ret = "AC Copy"; break;// Sel 15.16
            case 0x21C: ret = "AC Cut"; break;// Sel 15.16
            case 0x21D: ret = "AC Paste"; break;// Sel 15.16
            case 0x21E: ret = "AC Select All"; break;// Sel 15.16
            case 0x21F: ret = "AC Find"; break;// Sel 15.16
            case 0x220: ret = "AC Find and Replace"; break;// Sel 15.16
            case 0x221: ret = "AC Search"; break;// Sel 15.16
            case 0x222: ret = "AC Go To"; break;// Sel 15.16
            case 0x223: ret = "AC Home"; break;// Sel 15.16
            case 0x224: ret = "AC Back"; break;// Sel 15.16
            case 0x225: ret = "AC Forward"; break;// Sel 15.16
            case 0x226: ret = "AC Stop"; break;// Sel 15.16
            case 0x227: ret = "AC Refresh"; break;// Sel 15.16
            case 0x228: ret = "AC Previous Link"; break;// Sel 15.16
            case 0x229: ret = "AC Next Link"; break;// Sel 15.16
            case 0x22A: ret = "AC Bookmarks"; break;// Sel 15.16
            case 0x22B: ret = "AC History"; break;// Sel 15.16
            case 0x22C: ret = "AC Subscriptions"; break;// Sel 15.16
            case 0x22D: ret = "AC Zoom In"; break;// Sel 15.16
            case 0x22E: ret = "AC Zoom Out"; break;// Sel 15.16
            case 0x22F: ret = "AC Zoom"; break;// LC 15.16
            case 0x230: ret = "AC Full Screen View"; break;// Sel 15.16
            case 0x231: ret = "AC Normal View"; break;// Sel 15.16
            case 0x232: ret = "AC View Toggle"; break;// Sel 15.16
            case 0x233: ret = "AC Scroll Up"; break;// Sel 15.16
            case 0x234: ret = "AC Scroll Down"; break;// Sel 15.16
            case 0x235: ret = "AC Scroll"; break;// LC 15.16
            case 0x236: ret = "AC Pan Left"; break;// Sel 15.16
            case 0x237: ret = "AC Pan Right"; break;// Sel 15.16
            case 0x238: ret = "AC Pan"; break;// LC 15.16
            case 0x239: ret = "AC New Window"; break;// Sel 15.16
            case 0x23A: ret = "AC Tile Horizontally"; break;// Sel 15.16
            case 0x23B: ret = "AC Tile Vertically"; break;// Sel 15.16
            case 0x23C: ret = "AC Format"; break;// Sel 15.16
            case 0x23D: ret = "AC Edit"; break;// Sel 15.16
            case 0x23E: ret = "AC Bold"; break;// Sel 15.16
            case 0x23F: ret = "AC Italics"; break;// Sel 15.16
            case 0x240: ret = "AC Underline"; break;// Sel 15.16
            case 0x241: ret = "AC Strikethrough"; break;// Sel 15.16
            case 0x242: ret = "AC Subscript"; break;// Sel 15.16
            case 0x243: ret = "AC Superscript"; break;// Sel 15.16
            case 0x244: ret = "AC All Caps"; break;// Sel 15.16
            case 0x245: ret = "AC Rotate"; break;// Sel 15.16
            case 0x246: ret = "AC Resize"; break;// Sel 15.16
            case 0x247: ret = "AC Flip Horizontal"; break;// Sel 15.16
            case 0x248: ret = "AC Flip Vertical"; break;// Sel 15.16
            case 0x249: ret = "AC Mirror Horizontal"; break;// Sel 15.16
            case 0x24A: ret = "AC Mirror Vertical"; break;// Sel 15.16
            case 0x24B: ret = "AC Font Select"; break;// Sel 15.16
            case 0x24C: ret = "AC Font Color"; break;// Sel 15.16
            case 0x24D: ret = "AC Font Size"; break;// Sel 15.16
            case 0x24E: ret = "AC Justify Left"; break;// Sel 15.16
            case 0x24F: ret = "AC Justify Center H"; break;// Sel 15.16
            case 0x250: ret = "AC Justify Right"; break;// Sel 15.16
            case 0x251: ret = "AC Justify Block H"; break;// Sel 15.16
            case 0x252: ret = "AC Justify Top"; break;// Sel 15.16
            case 0x253: ret = "AC Justify Center V"; break;// Sel 15.16
            case 0x254: ret = "AC Justify Bottom"; break;// Sel 15.16
            case 0x255: ret = "AC Justify Block V"; break;// Sel 15.16
            case 0x256: ret = "AC Indent Decrease"; break;// Sel 15.16
            case 0x257: ret = "AC Indent Increase"; break;// Sel 15.16
            case 0x258: ret = "AC Numbered List"; break;// Sel 15.16
            case 0x259: ret = "AC Restart Numbering"; break;// Sel 15.16
            case 0x25A: ret = "AC Bulleted List"; break;// Sel 15.16
            case 0x25B: ret = "AC Promote"; break;// Sel 15.16
            case 0x25C: ret = "AC Demote"; break;// Sel 15.16
            case 0x25D: ret = "AC Yes"; break;// Sel 15.16
            case 0x25E: ret = "AC No"; break;// Sel 15.16
            case 0x25F: ret = "AC Cancel"; break;// Sel 15.16
            case 0x260: ret = "AC Catalog"; break;// Sel 15.16
            case 0x261: ret = "AC Buy/Checkout"; break;// Sel 15.16
            case 0x262: ret = "AC Add to Cart"; break;// Sel 15.16
            case 0x263: ret = "AC Expand"; break;// Sel 15.16
            case 0x264: ret = "AC Expand All"; break;// Sel 15.16
            case 0x265: ret = "AC Collapse"; break;// Sel 15.16
            case 0x266: ret = "AC Collapse All"; break;// Sel 15.16
            case 0x267: ret = "AC Print Preview"; break;// Sel 15.16
            case 0x268: ret = "AC Paste Special"; break;// Sel 15.16
            case 0x269: ret = "AC Insert Mode"; break;// Sel 15.16
            case 0x26A: ret = "AC Delete"; break;// Sel 15.16
            case 0x26B: ret = "AC Lock"; break;// Sel 15.16
            case 0x26C: ret = "AC Unlock"; break;// Sel 15.16
            case 0x26E: ret = "AC Unprotect"; break;// Sel 15.16
            case 0x26F: ret = "AC Attach Comment"; break;// Sel 15.16
            case 0x270: ret = "AC Delete Comment"; break;// Sel 15.16
            case 0x271: ret = "AC View Comment"; break;// Sel 15.16
            case 0x272: ret = "AC Select Word"; break;// Sel 15.16
            case 0x273: ret = "AC Select Sentence"; break;// Sel 15.16
            case 0x274: ret = "AC Select Paragraph"; break;// Sel 15.16
            case 0x275: ret = "AC Select Column"; break;// Sel 15.16
            case 0x276: ret = "AC Select Row"; break;// Sel 15.16
            case 0x277: ret = "AC Select Table"; break;// Sel 15.16
            case 0x278: ret = "AC Select Object"; break;// Sel 15.16
            case 0x279: ret = "AC Redo/Repeat"; break;// Sel 15.16
            case 0x27A: ret = "AC Sort"; break;// Sel 15.16
            case 0x27B: ret = "AC Sort Ascending"; break;// Sel 15.16
            case 0x27C: ret = "AC Sort Descending"; break;// Sel 15.16
            case 0x27D: ret = "AC Filter"; break;// Sel 15.16
            case 0x27E: ret = "AC Set Clock"; break;// Sel 15.16
            case 0x27F: ret = "AC View Clock"; break;// Sel 15.16
            case 0x280: ret = "AC Select Time Zone"; break;// Sel 15.16
            case 0x281: ret = "AC Edit Time Zones"; break;// Sel 15.16
            case 0x282: ret = "AC Set Alarm"; break;// Sel 15.16
            case 0x283: ret = "AC Clear Alarm"; break;// Sel 15.16
            case 0x284: ret = "AC Snooze Alarm"; break;// Sel 15.16
            case 0x285: ret = "AC Reset Alarm"; break;// Sel 15.16
            case 0x286: ret = "AC Synchronize"; break;// Sel 15.16
            case 0x287: ret = "AC Send/Receive"; break;// Sel 15.16
            case 0x288: ret = "AC Send To"; break;// Sel 15.16
            case 0x289: ret = "AC Reply"; break;// Sel 15.16
            case 0x28A: ret = "AC Reply All"; break;// Sel 15.16
            case 0x28B: ret = "AC Forward Msg"; break;// Sel 15.16
            case 0x28C: ret = "AC Send Sel"; break;// 15.16
            case 0x28D: ret = "AC Attach File"; break;// Sel 15.16
            case 0x28E: ret = "AC Upload"; break;// Sel 15.16
            case 0x28F: ret = "AC Download (Save Target As)"; break;// Sel 15.16
            case 0x290: ret = "AC Set Borders"; break;// Sel 15.16
            case 0x291: ret = "AC Insert Row"; break;// Sel 15.16
            case 0x292: ret = "AC Insert Column"; break;// Sel 15.16
            case 0x293: ret = "AC Insert File"; break;// Sel 15.16
            case 0x294: ret = "AC Insert Picture"; break;// Sel 15.16
            case 0x295: ret = "AC Insert Object"; break;// Sel 15.16
            case 0x296: ret = "AC Insert Symbol"; break;// Sel 15.16
            case 0x297: ret = "AC Save and Close"; break;// Sel 15.16
            case 0x298: ret = "AC Rename"; break;// Sel 15.16
            case 0x299: ret = "AC Merge"; break;// Sel 15.16
            case 0x29A: ret = "AC Split"; break;// Sel 15.16
            case 0x29B: ret = "AC Disribute Horizontally"; break;// Sel 15.16
            case 0x29C: ret = "AC Distribute Vertically"; break;// Sel 15.16
            case 0x29D: ret = "AC Next Keyboard Layout Select"; break;// [28] Sel 15.16
            case 0x29E: ret = "AC Navigation Guidance"; break;// [44] Sel 15.16
            case 0x29F: ret = "AC Desktop Show All Windows"; break;// [46] Sel 15.16
            case 0x2A0: ret = "AC Soft Key Left"; break;// [5] Sel 15.16
            case 0x2A1: ret = "AC Soft Key Right"; break;// [5] Sel 15.16
            case 0x2A2: ret = "AC Desktop Show All Applications"; break;// [64] Sel 15.16
            case 0x2B0: ret = "AC Idle Keep Alive"; break;// [5] Sel 15.16
            case 0x2C0: ret = "Extended Keyboard Attributes Collection"; break;// [15] CL 15.18
            case 0x2C1: ret = "Keyboard Form Factor"; break;// [15] SV 15.18
            case 0x2C2: ret = "Keyboard Key Type"; break;// [15] SV 15.18
            case 0x2C3: ret = "Keyboard Physical Layout"; break;// [15] SV 15.18
            case 0x2C4: ret = "Vendor-Specific Keyboard Physical Layout"; break;// [15] SV 15.18
            case 0x2C5: ret = "Keyboard IETF Language Tag Index"; break;// [15] SV 15.18
            case 0x2C6: ret = "Implemented Keyboard Input Assist Controls"; break;// [15] SV 15.18
            case 0x2C7: ret = "Keyboard Input Assist Previous"; break;// [15] Sel 15.19
            case 0x2C8: ret = "Keyboard Input Assist Next"; break;// [15] Sel 15.19
            case 0x2C9: ret = "Keyboard Input Assist Previous Group"; break;// [15] Sel 15.19
            case 0x2CA: ret = "Keyboard Input Assist Next Group"; break;// [15] Sel 15.19
            case 0x2CB: ret = "Keyboard Input Assist Accept"; break;// [15] Sel 15.19
            case 0x2CC: ret = "Keyboard Input Assist Cancel"; break;// [15] Sel 15.19
            case 0x2D0: ret = "Privacy Screen Toggle"; break;// [62] OOC 15.23
            case 0x2D1: ret = "Privacy Screen Level Decrement"; break;// [62] RTC 15.23
            case 0x2D2: ret = "Privacy Screen Level Increment"; break;// [62] RTC 15.23
            case 0x2D3: ret = "Privacy Screen Level Minimum"; break;// [62] OSC 15.23
            case 0x2D4: ret = "Privacy Screen Level Maximum"; break;// [62] OSC 15.23
            case 0x500: ret = "Contact Edited"; break;// [5] OOC 15.17
            case 0x501: ret = "Contact Added"; break;// [5] OOC 15.17
            case 0x502: ret = "Contact Record Active"; break;// [5] OOC 15.17
            case 0x503: ret = "Contact Index"; break;// [5] DV 15.17
            case 0x504: ret = "Contact Nickname"; break;// [5] DV 15.17
            case 0x505: ret = "Contact First Name"; break;// [5] DV 15.17
            case 0x506: ret = "Contact Last Name"; break;// [5] DV 15.17
            case 0x507: ret = "Contact Full Name"; break;// [5] DV 15.17
            case 0x508: ret = "Contact Phone Number Personal"; break;// [5] DV 15.17
            case 0x509: ret = "Contact Phone Number Business"; break;// [5] DV 15.17
            case 0x50A: ret = "Contact Phone Number Mobile"; break;// [5] DV 15.17
            case 0x50B: ret = "Contact Phone Number Pager"; break;// [5] DV 15.17
            case 0x50C: ret = "Contact Phone Number Fax"; break;// [5] DV 15.17
            case 0x50D: ret = "Contact Phone Number Other"; break;// [5] DV 15.17
            case 0x50E: ret = "Contact Email Personal"; break;// [5] DV 15.17
            case 0x50F: ret = "Contact Email Business"; break;// [5] DV 15.17
            case 0x510: ret = "Contact Email Other"; break;// [5] DV 15.17
            case 0x511: ret = "Contact Email Main"; break;// [5] DV 15.17
            case 0x512: ret = "Contact Speed Dial Number"; break;// [5] DV 15.17
            case 0x513: ret = "Contact Status Flag"; break;// [5] DV 15.17
            case 0x514: ret = "Contact Misc."; break;// [5] DV 15.17
            // 07-1F Reserved
            // 23-2F Reserved
            // 37-3F Reserved
            // 49-5F Reserved
            // 9F-9F Reserved
            // A5-AF Reserved
            // DA-DF Reserved
            // EB-EF Reserved
            // F6-FF Reserved
            // 10E-14F Reserved
            // 156-15F Reserved
            // 16B-16F Reserved
            // 175-17F Reserved
            // 1BB-1BB Reserved
            // 1CC-1FF Reserved
            // 20A-219 Reserved
            // 2A3-2AF Reserved
            // 2B1-2BF Reserved
            // 2CD-2CF Reserved
            // 2D5-4FF Reserved
            // 515-FFFF Reserved
            default: ret = "Reserved"; break;
        }
        return ret;
    }

    private static usage_digitizer(usage?: number) : string {
        let ret="";
        usage = usage || 0;
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


}