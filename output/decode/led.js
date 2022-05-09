function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        case 0x01:
            ret = "Num Lock";
            break; // OOC 11.1
        case 0x02:
            ret = "Caps Lock";
            break; // OOC 11.1
        case 0x03:
            ret = "Scroll Lock";
            break; // OOC 11.1
        case 0x04:
            ret = "Compose";
            break; // OOC 11.1
        case 0x05:
            ret = "Kana";
            break; // OOC 11.1
        case 0x06:
            ret = "Power";
            break; // OOC 11.6
        case 0x07:
            ret = "Shift";
            break; // OOC 11.1
        case 0x08:
            ret = "Do Not Disturb";
            break; // OOC 11.2
        case 0x09:
            ret = "Mute";
            break; // OOC 11.3
        case 0x0A:
            ret = "Tone Enable";
            break; // OOC 11.3
        case 0x0B:
            ret = "High Cut Filter";
            break; // OOC 11.3
        case 0x0C:
            ret = "Low Cut Filter";
            break; // OOC 11.3
        case 0x0D:
            ret = "Equalizer Enable";
            break; // OOC 11.3
        case 0x0E:
            ret = "Sound Field On";
            break; // OOC 11.3
        case 0x0F:
            ret = "Surround On";
            break; // OOC 11.3
        case 0x10:
            ret = "Repeat";
            break; // OOC 11.3
        case 0x11:
            ret = "Stereo";
            break; // OOC 11.3
        case 0x12:
            ret = "Sampling Rate Detect";
            break; // OOC 11.3
        case 0x13:
            ret = "Spinning";
            break; // OOC 11.4
        case 0x14:
            ret = "CAV";
            break; // OOC 11.3
        case 0x15:
            ret = "CLV";
            break; // OOC 11.3
        case 0x16:
            ret = "Recording Format Detect";
            break; // OOC 11.4
        case 0x17:
            ret = "Off-Hook";
            break; // OOC 11.2
        case 0x18:
            ret = "Ring";
            break; // OOC 11.2
        case 0x19:
            ret = "Message Waiting";
            break; // OOC 11.2
        case 0x1A:
            ret = "Data Mode";
            break; // OOC 11.2
        case 0x1B:
            ret = "Battery Operation";
            break; // OOC 11.6
        case 0x1C:
            ret = "Battery OK";
            break; // OOC 11.6
        case 0x1D:
            ret = "Battery Low";
            break; // OOC 11.6
        case 0x1E:
            ret = "Speaker";
            break; // OOC 11.2
        case 0x1F:
            ret = "Head Set";
            break; // OOC 11.2
        case 0x20:
            ret = "Hold";
            break; // OOC 11.2
        case 0x21:
            ret = "Microphone";
            break; // OOC 11.2
        case 0x22:
            ret = "Coverage";
            break; // OOC 11.2
        case 0x23:
            ret = "Night Mode";
            break; // OOC 11.2
        case 0x24:
            ret = "Send Calls";
            break; // OOC 11.2
        case 0x25:
            ret = "Call Pickup";
            break; // OOC 11.2
        case 0x26:
            ret = "Conference";
            break; // OOC 11.2
        case 0x27:
            ret = "Stand-by";
            break; // OOC 11.6
        case 0x28:
            ret = "Camera On";
            break; // OOC 11.3
        case 0x29:
            ret = "Camera Off";
            break; // OOC 11.3
        case 0x2A:
            ret = "On-Line";
            break; // OOC 11.6
        case 0x2B:
            ret = "Off-Line";
            break; // OOC 11.6
        case 0x2C:
            ret = "Busy";
            break; // OOC 11.6
        case 0x2D:
            ret = "Ready";
            break; // OOC 11.6
        case 0x2E:
            ret = "Paper-Out";
            break; // OOC 11.5
        case 0x2F:
            ret = "Paper-Jam";
            break; // OOC 11.5
        case 0x30:
            ret = "Remote";
            break; // OOC 11.6
        case 0x31:
            ret = "Forward";
            break; // OOC 11.4
        case 0x32:
            ret = "Reverse";
            break; // OOC 11.4
        case 0x33:
            ret = "Stop";
            break; // OOC 11.4
        case 0x34:
            ret = "Rewind";
            break; // OOC 11.4
        case 0x35:
            ret = "Fast Forward";
            break; // OOC 11.4
        case 0x36:
            ret = "Play";
            break; // OOC 11.4
        case 0x37:
            ret = "Pause";
            break; // OOC 11.4
        case 0x38:
            ret = "Record";
            break; // OOC 11.4
        case 0x39:
            ret = "Error";
            break; // OOC 11.6
        case 0x3A:
            ret = "Usage Selected Indicator";
            break; // US 11.6
        case 0x3B:
            ret = "Usage In Use Indicator";
            break; // US 11.6
        case 0x3C:
            ret = "Usage Multi Mode Indicator";
            break; // UM 11.6
        case 0x3D:
            ret = "Indicator On";
            break; // Sel 11.6
        case 0x3E:
            ret = "Indicator Flash";
            break; // Sel 11.6
        case 0x3F:
            ret = "Indicator Slow Blink";
            break; // Sel 11.6
        case 0x40:
            ret = "Indicator Fast Blink";
            break; // Sel 11.6
        case 0x41:
            ret = "Indicator Off";
            break; // Sel 11.6
        case 0x42:
            ret = "Flash On Time";
            break; // DV 11.6
        case 0x43:
            ret = "Slow Blink On Time";
            break; // DV 11.6
        case 0x44:
            ret = "Slow Blink Off Time";
            break; // DV 11.6
        case 0x45:
            ret = "Fast Blink On Time";
            break; // DV 11.6
        case 0x46:
            ret = "Fast Blink Off Time";
            break; // DV 11.6
        case 0x47:
            ret = "Usage Indicator Color";
            break; // UM 11.6
        case 0x48:
            ret = "Indicator Red";
            break; // Sel 11.6
        case 0x49:
            ret = "Indicator Green";
            break; // Sel 11.6
        case 0x4A:
            ret = "Indicator Amber";
            break; // Sel 11.6
        case 0x4B:
            ret = "Generic Indicator";
            break; // OOC 11.6
        case 0x4C:
            ret = "System Suspend";
            break; // OOC 11.6
        case 0x4D:
            ret = "External Power Connected";
            break; // OOC 11.6
        case 0x4E:
            ret = "Indicator Blue ";
            break; //[6] Sel 11.6
        case 0x4F:
            ret = "Indicator Orange ";
            break; //[6] Sel 11.6
        case 0x50:
            ret = "Good Status";
            break; // [6] OOC 11.6
        case 0x51:
            ret = "Warning Status";
            break; // [6] OOC 11.6
        case 0x52:
            ret = "RGB LED";
            break; // [6] CL 11.7
        case 0x53:
            ret = "Red LED Channel";
            break; // [6] DV 11.7
        case 0x54:
            ret = "Blue LED Channel";
            break; // [6] DV 11.7
        case 0x55:
            ret = "Green LED Channel";
            break; // [6] DV 11.7
        case 0x56:
            ret = "LED Intensity";
            break; // [6] DV 11.7
        case 0x60:
            ret = "Player Indicator";
            break; // [29] NAry 11.8
        case 0x61:
            ret = "Player 1";
            break; // [29] Sel 11.8
        case 0x62:
            ret = "Player 2";
            break; // [29] Sel 11.8
        case 0x63:
            ret = "Player 3";
            break; // [29] Sel 11.8
        case 0x64:
            ret = "Player 4";
            break; // [29] Sel 11.8
        case 0x65:
            ret = "Player 5";
            break; // [29] Sel 11.8
        case 0x66:
            ret = "Player 6";
            break; // [29] Sel 11.8
        case 0x67:
            ret = "Player 7";
            break; // [29] Sel 11.8
        case 0x68:
            ret = "Player 8";
            break; // [29] Sel 11.8
        // 57-5F Reserved
        // 69-FFFF Reserved
        default:
            ret = "Reserved";
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=led.js.map
