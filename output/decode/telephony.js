function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        case 0x01:
            ret = "Phone";
            break; // CA 14.1
        case 0x02:
            ret = "Answering Machine";
            break; // CA 14.1
        case 0x03:
            ret = "Message Controls";
            break; // CL 14.1
        case 0x04:
            ret = "Handset";
            break; // CL 14.1
        case 0x05:
            ret = "Headset";
            break; // CL/CA 14.1
        case 0x06:
            ret = "Telephony Key Pad";
            break; // NAry 14.2
        case 0x07:
            ret = "Programmable Button";
            break; // NAry 14.2
        case 0x20:
            ret = "Hook Switch";
            break; // OOC 14.3
        case 0x21:
            ret = "Flash";
            break; // MC 14.3
        case 0x22:
            ret = "Feature";
            break; // OSC 14.3
        case 0x23:
            ret = "Hold";
            break; // OOC 14.3
        case 0x24:
            ret = "Redial";
            break; // OSC 14.3
        case 0x25:
            ret = "Transfer";
            break; // OSC 14.3
        case 0x26:
            ret = "Drop";
            break; // OSC 14.3
        case 0x27:
            ret = "Park";
            break; // OOC 14.3
        case 0x28:
            ret = "Forward Calls";
            break; // OOC 14.3
        case 0x29:
            ret = "Alternate Function";
            break; // MC 14.3
        case 0x2A:
            ret = "Line";
            break; // OSC/NAry 14.3
        case 0x2B:
            ret = "Speaker Phone";
            break; // OOC 14.3
        case 0x2C:
            ret = "Conference";
            break; // OOC 14.3
        case 0x2D:
            ret = "Ring Enable";
            break; // OOC 14.3
        case 0x2E:
            ret = "Ring Select";
            break; // OSC 14.3
        case 0x2F:
            ret = "Phone Mute";
            break; // OOC 14.3
        case 0x30:
            ret = "Caller ID";
            break; // MC 14.3
        case 0x31:
            ret = "Send";
            break; // OOC 14.3
        case 0x50:
            ret = "Speed Dial";
            break; // OSC 14.4
        case 0x51:
            ret = "Store Number";
            break; // OSC 14.4
        case 0x52:
            ret = "Recall Number";
            break; // OSC 14.4
        case 0x53:
            ret = "Phone Directory";
            break; // OOC 14.4
        case 0x70:
            ret = "Voice Mail";
            break; // OOC 14.5
        case 0x71:
            ret = "Screen Calls";
            break; // OOC 14.5
        case 0x72:
            ret = "Do Not Disturb";
            break; // OOC 14.5
        case 0x73:
            ret = "Message";
            break; // OSC 14.5
        case 0x74:
            ret = "Answer On/Off";
            break; // OOC 14.5
        case 0x90:
            ret = "Inside Dial Tone";
            break; // MC 14.6
        case 0x91:
            ret = "Outside Dial Tone";
            break; // MC 14.6
        case 0x92:
            ret = "Inside Ring Tone";
            break; // MC 14.6
        case 0x93:
            ret = "Outside Ring Tone";
            break; // MC 14.6
        case 0x94:
            ret = "Priority Ring Tone";
            break; // MC 14.6
        case 0x95:
            ret = "Inside Ringback";
            break; // MC 14.6
        case 0x96:
            ret = "Priority Ringback";
            break; // MC 14.6
        case 0x97:
            ret = "Line Busy Tone";
            break; // MC 14.6
        case 0x98:
            ret = "Reorder Tone";
            break; // MC 14.6
        case 0x99:
            ret = "Call Waiting Tone";
            break; // MC 14.6
        case 0x9A:
            ret = "Confirmation Tone 1";
            break; // MC 14.6
        case 0x9B:
            ret = "Confirmation Tone 2";
            break; // MC 14.6
        case 0x9C:
            ret = "Tones Off";
            break; // OOC 14.6
        case 0x9D:
            ret = "Outside Ringback";
            break; // MC 14.6
        case 0x9E:
            ret = "Ringer";
            break; // OOC 14.6
        case 0xB0:
            ret = "Phone Key 0";
            break; // Sel 14.2
        case 0xB1:
            ret = "Phone Key 1";
            break; // Sel 14.2
        case 0xB2:
            ret = "Phone Key 2";
            break; // Sel 14.2
        case 0xB3:
            ret = "Phone Key 3";
            break; // Sel 14.2
        case 0xB4:
            ret = "Phone Key 4";
            break; // Sel 14.2
        case 0xB5:
            ret = "Phone Key 5";
            break; // Sel 14.2
        case 0xB6:
            ret = "Phone Key 6";
            break; // Sel 14.2
        case 0xB7:
            ret = "Phone Key 7";
            break; // Sel 14.2
        case 0xB8:
            ret = "Phone Key 8";
            break; // Sel 14.2
        case 0xB9:
            ret = "Phone Key 9";
            break; // Sel 14.2
        case 0xBA:
            ret = "Phone Key Star";
            break; // Sel 14.2
        case 0xBB:
            ret = "Phone Key Pound";
            break; // Sel 14.2
        case 0xBC:
            ret = "Phone Key A";
            break; // Sel 14.2
        case 0xBD:
            ret = "Phone Key B";
            break; // Sel 14.2
        case 0xBE:
            ret = "Phone Key C";
            break; // Sel 14.2
        case 0xBF:
            ret = "Phone Key D";
            break; // Sel 14.2
        case 0xC0:
            ret = "Phone Call History Key";
            break; // [5] Sel 14.7
        case 0xC1:
            ret = "Phone Caller ID Key";
            break; // [5] Sel 14.7
        case 0xC2:
            ret = "Phone Settings Key";
            break; // [5] Sel 14.7
        case 0xF0:
            ret = "Host Control";
            break; // [5] OOC 14.8
        case 0xF1:
            ret = "Host Available ";
            break; //[5] OOC 14.8
        case 0xF2:
            ret = "Host Call Active";
            break; // [5] OOC 14.8
        case 0xF3:
            ret = "Activate Handset Audio";
            break; // [5] OOC 14.8
        case 0xF4:
            ret = "Ring Type";
            break; // [5] NAry 14.9
        case 0xF5:
            ret = "Re-dialable Phone Number";
            break; // [5] OOC 14.9
        case 0xF8:
            ret = "Stop Ring Tone";
            break; // [5] Sel 14.9
        case 0xF9:
            ret = "PSTN Ring Tone";
            break; // [5] Sel 14.9
        case 0xFA:
            ret = "Host Ring Tone";
            break; // [5] Sel 14.9
        case 0xFB:
            ret = "Alert Sound Error";
            break; // [5] Sel 14.9
        case 0xFC:
            ret = "Alert Sound Confirm";
            break; // [5] Sel 14.9
        case 0xFD:
            ret = "Alert Sound Notification";
            break; // [5] Sel 14.9
        case 0xFE:
            ret = "Silent Ring";
            break; // [5] Sel 14.9
        case 0x108:
            ret = "Email Message Waiting";
            break; // [5] OOC 14.8
        case 0x109:
            ret = "Voicemail Message Waiting";
            break; // [5] OOC 14.8
        case 0x10A:
            ret = "Host Hold";
            break; // [5] OOC 14.8
        case 0x110:
            ret = "Incoming Call History Count";
            break; // [5] DV 14.10
        case 0x111:
            ret = "Outgoing Call History Count";
            break; // [5] DV 14.10
        case 0x112:
            ret = "Incoming Call History";
            break; // [5] CL 14.10
        case 0x113:
            ret = "Outgoing Call History";
            break; // [5] CL 14.10
        case 0x114:
            ret = "Phone Locale";
            break; // [5] DV 14.8
        case 0x140:
            ret = "Phone Time Second";
            break; // [5] DV 14.9
        case 0x141:
            ret = "Phone Time Minute";
            break; // [5] DV 14.9
        case 0x142:
            ret = "Phone Time Hour";
            break; // [5] DV 14.9
        case 0x143:
            ret = "Phone Date Day";
            break; // [5] DV 14.9
        case 0x144:
            ret = "Phone Date Month";
            break; // [5] DV 14.9
        case 0x145:
            ret = "Phone Date Year";
            break; // [5] DV 14.9
        case 0x146:
            ret = "Handset Nickname";
            break; // [5] DV 14.9
        case 0x147:
            ret = "Address Book ID";
            break; // [5] DV 14.9
        case 0x14A:
            ret = "Call Duration";
            break; // [5] DV 14.10
        case 0x14B:
            ret = "Dual Mode Phone";
            break; // CA 14.8
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
        default:
            ret = "Reserved";
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=telephony.js.map
