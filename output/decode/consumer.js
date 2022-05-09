function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        case 0x01:
            ret = "Consumer Control";
            break; // CA 15.1
        case 0x02:
            ret = "Numeric Key Pad";
            break; // NAry 15.2
        case 0x03:
            ret = "Programmable Buttons";
            break; // NAry 15.14
        case 0x04:
            ret = "Microphone";
            break; // CA 15.1
        case 0x05:
            ret = "Headphone";
            break; // CA 15.1
        case 0x06:
            ret = "Graphic Equalizer";
            break; // CA 15.1
        case 0x20:
            ret = "+10";
            break; // OSC 15.2
        case 0x21:
            ret = "+100";
            break; // OSC 15.2
        case 0x22:
            ret = "AM/PM";
            break; // OSC 15.2
        case 0x30:
            ret = "Power";
            break; // OOC 15.3
        case 0x31:
            ret = "Reset";
            break; // OSC 15.3
        case 0x32:
            ret = "Sleep";
            break; // OSC 15.3
        case 0x33:
            ret = "Sleep After";
            break; // OSC 15.3
        case 0x34:
            ret = "Sleep Mode";
            break; // RTC 15.3
        case 0x35:
            ret = "Illumination";
            break; // OOC 15.3
        case 0x36:
            ret = "Function Buttons";
            break; // NAry 15.3
        case 0x40:
            ret = "Menu";
            break; // OOC 15.4
        case 0x41:
            ret = "Menu Pick";
            break; // OSC 15.4
        case 0x42:
            ret = "Menu Up";
            break; // OSC 15.4
        case 0x43:
            ret = "Menu Down";
            break; // OSC 15.4
        case 0x44:
            ret = "Menu Left";
            break; // OSC 15.4
        case 0x45:
            ret = "Menu Right";
            break; // OSC 15.4
        case 0x46:
            ret = "Menu Escape";
            break; // OSC 15.4
        case 0x47:
            ret = "Menu Value Increase";
            break; // OSC 15.4
        case 0x48:
            ret = "Menu Value Decrease";
            break; // OSC 15.4
        case 0x60:
            ret = "Data On Screen";
            break; // OOC 15.5
        case 0x61:
            ret = "Closed Caption";
            break; // OOC 15.5
        case 0x62:
            ret = "Closed Caption Select";
            break; // OSC 15.5
        case 0x63:
            ret = "VCR/TV";
            break; // OOC 15.5
        case 0x64:
            ret = "Broadcast Mode";
            break; // OSC 15.5
        case 0x65:
            ret = "Snapshot";
            break; // OSC 15.5
        case 0x66:
            ret = "Still";
            break; // OSC 15.5
        case 0x67:
            ret = "Picture-in-Picture Toggle";
            break; // [8] OSC 15.5
        case 0x68:
            ret = "Picture-in-Picture Swap";
            break; // [8] OSC 15.5
        case 0x69:
            ret = "Red Menu Button";
            break; // [9] MC 15.4
        case 0x6A:
            ret = "Green Menu Button";
            break; // [9] MC 15.4
        case 0x6B:
            ret = "Blue Menu Button";
            break; // [9] MC 15.4
        case 0x6C:
            ret = "Yellow Menu Button";
            break; // [9] MC 15.4
        case 0x6D:
            ret = "Aspect";
            break; // [10] OSC 15.5
        case 0x6E:
            ret = "3D Mode Select";
            break; // [11] OSC 15.5
        case 0x6F:
            ret = "Display Brightness Increment";
            break; // [14] RTC 15.5
        case 0x70:
            ret = "Display Brightness Decrement";
            break; // [14] RTC 15.5
        case 0x71:
            ret = "Display Brightness";
            break; // [14] LC 15.5
        case 0x72:
            ret = "Display Backlight Toggle";
            break; // [14] OOC 15.5
        case 0x73:
            ret = "Display Set Brightness to Minimum";
            break; // [14] OSC 15.5
        case 0x74:
            ret = "Display Set Brightness to Maximum";
            break; // [14] OSC 15.5
        case 0x75:
            ret = "Display Set Auto Brightness";
            break; // [14] OOC 15.5
        case 0x76:
            ret = "Camera Access Enabled ";
            break; //[41] OOC 15.21
        case 0x77:
            ret = "Camera Access Disabled";
            break; // [41] OOC 15.21
        case 0x78:
            ret = "Camera Access Toggle";
            break; // [41] OOC 15.21
        case 0x79:
            ret = "Keyboard Brightness Increment";
            break; // [42] OSC 15.22
        case 0x7A:
            ret = "Keyboard Brightness Decrement";
            break; // [42] OSC 15.22
        case 0x7B:
            ret = "Keyboard Backlight Set Level";
            break; // [42] LC 15.22
        case 0x7C:
            ret = "Keyboard Backlight OOC";
            break; // [42] OOC 15.22
        case 0x7D:
            ret = "Keyboard Backlight Set Minimum";
            break; // [42] OSC 15.22
        case 0x7E:
            ret = "Keyboard Backlight Set Maximum";
            break; // [42] OSC 15.22
        case 0x7F:
            ret = "Keyboard Backlight Auto";
            break; // [42] OOC 15.22
        case 0x80:
            ret = "Selection";
            break; // NAry 15.6
        case 0x81:
            ret = "Assign Selection";
            break; // OSC 15.6
        case 0x82:
            ret = "Mode Step";
            break; // OSC 15.6
        case 0x83:
            ret = "Recall Last";
            break; // OSC 15.6
        case 0x84:
            ret = "Enter Channel";
            break; // OSC 15.6
        case 0x85:
            ret = "Order Movie";
            break; // OSC 15.6
        case 0x86:
            ret = "Channel";
            break; // LC 15.6
        case 0x87:
            ret = "Media Selection";
            break; // NAry 15.6
        case 0x88:
            ret = "Media Select Computer";
            break; // Sel 15.6
        case 0x89:
            ret = "Media Select TV";
            break; // Sel 15.6
        case 0x8A:
            ret = "Media Select WWW";
            break; // Sel 15.6
        case 0x8B:
            ret = "Media Select DVD ";
            break; //Sel 15.6
        case 0x8C:
            ret = "Media Select Telephone";
            break; // Sel 15.6
        case 0x8D:
            ret = "Media Select Program Guide";
            break; // Sel 15.6
        case 0x8E:
            ret = "Media Select Video Phone";
            break; // Sel 15.6
        case 0x8F:
            ret = "Media Select Games";
            break; // Sel 15.6
        case 0x90:
            ret = "Media Select Messages";
            break; // Sel 15.6
        case 0x91:
            ret = "Media Select CD";
            break; // Sel 15.6
        case 0x92:
            ret = "Media Select VCR";
            break; // Sel 15.6
        case 0x93:
            ret = "Media Select Tuner";
            break; // Sel 15.6
        case 0x94:
            ret = "Quit";
            break; // OSC 15.6
        case 0x95:
            ret = "Help";
            break; // OOC 15.6
        case 0x96:
            ret = "Media Select Tape";
            break; // Sel 15.6
        case 0x97:
            ret = "Media Select Cable";
            break; // Sel 15.6
        case 0x98:
            ret = "Media Select Satellite";
            break; // Sel 15.6
        case 0x99:
            ret = "Media Select Security";
            break; // Sel 15.6
        case 0x9A:
            ret = "Media Select Home";
            break; // Sel 15.6
        case 0x9B:
            ret = "Media Select Call";
            break; // Sel 15.6
        case 0x9C:
            ret = "Channel Increment";
            break; // OSC 15.6
        case 0x9D:
            ret = "Channel Decrement";
            break; // OSC 15.6
        case 0x9E:
            ret = "Media Select SAP";
            break; // Sel 15.13
        case 0xA0:
            ret = "VCR Plus";
            break; // OSC 15.6
        case 0xA1:
            ret = "Once ";
            break; //OSC 15.6
        case 0xA2:
            ret = "Daily";
            break; // OSC 15.6
        case 0xA3:
            ret = "Weekly";
            break; // OSC 15.6
        case 0xA4:
            ret = "Monthly";
            break; // OSC 15.6
        case 0xB0:
            ret = "Play";
            break; // OOC 15.7
        case 0xB1:
            ret = "Pause";
            break; // OOC 15.7
        case 0xB2:
            ret = "Record";
            break; // OOC 15.7
        case 0xB3:
            ret = "Fast Forward";
            break; // OOC 15.7
        case 0xB4:
            ret = "Rewind";
            break; // OOC 15.7
        case 0xB5:
            ret = "Scan Next Track";
            break; // OSC 15.7
        case 0xB6:
            ret = "Scan Previous Track";
            break; // OSC 15.7
        case 0xB7:
            ret = "Stop";
            break; // OSC 15.7
        case 0xB8:
            ret = "Eject";
            break; // OSC 15.7
        case 0xB9:
            ret = "Random Play";
            break; // OOC 15.7
        case 0xBA:
            ret = "Select Disc";
            break; // NAry 15.7
        case 0xBB:
            ret = "Enter Disc";
            break; // MC 15.7
        case 0xBC:
            ret = "Repeat";
            break; // OSC 15.7
        case 0xBD:
            ret = "Tracking";
            break; // LC 15.7
        case 0xBE:
            ret = "Track Normal";
            break; // OSC 15.7
        case 0xBF:
            ret = "Slow Tracking";
            break; // LC 15.7
        case 0xC0:
            ret = "Frame Forward";
            break; // RTC 15.7
        case 0xC1:
            ret = "Frame Back";
            break; // RTC 15.7
        case 0xC2:
            ret = "Mark";
            break; // OSC 15.8
        case 0xC3:
            ret = "Clear Mark";
            break; // OSC 15.8
        case 0xC4:
            ret = "Repeat From Mark";
            break; // OOC 15.8
        case 0xC5:
            ret = "Return To Mark";
            break; // OSC 15.8
        case 0xC6:
            ret = "Search Mark Forward";
            break; // OSC 15.8
        case 0xC7:
            ret = "Search Mark Backwards";
            break; // OSC 15.8
        case 0xC8:
            ret = "Counter Reset";
            break; // OSC 15.8
        case 0xC9:
            ret = "Show Counter";
            break; // OSC 15.8
        case 0xCA:
            ret = "Tracking Increment";
            break; // RTC 15.7
        case 0xCB:
            ret = "Tracking Decrement";
            break; // RTC 15.7
        case 0xCC:
            ret = "Stop/Eject";
            break; // OSC 15.7
        case 0xCD:
            ret = "Play/Pause";
            break; // OSC 15.7
        case 0xCE:
            ret = "Play/Skip";
            break; // OSC 15.7
        case 0xCF:
            ret = "Voice Command";
            break; // OSC 15.3
        case 0xD0:
            ret = "Invoke Capture Interface";
            break; // [35] Sel 15.20
        case 0xD1:
            ret = "Start or Stop Game Recording";
            break; // [35] Sel 15.20
        case 0xD2:
            ret = "Historical Game Capture";
            break; // [35] Sel 15.20
        case 0xD3:
            ret = "Capture Game Screenshot";
            break; // [35] Sel 15.20
        case 0xD4:
            ret = "Show or Hide Recording Indicator";
            break; // [35] Sel 15.20
        case 0xD5:
            ret = "Start or Stop Microphone Capture";
            break; // [35] Sel 15.20
        case 0xD6:
            ret = "Start or Stop Camera Capture";
            break; // [35] Sel 15.20
        case 0xD7:
            ret = "Start or Stop Game Broadcast";
            break; // [35] Sel 15.20
        case 0xD8:
            ret = "Start or Stop Voice Dictation Session";
            break; // [66] OOC 15.3
        case 0xD9:
            ret = "Invoke/Dismiss Emoji Picker";
            break; // [68] OOC 15.3
        case 0xE0:
            ret = "Volume";
            break; // LC 15.9
        case 0xE1:
            ret = "Balance";
            break; // LC 15.9
        case 0xE2:
            ret = "Mute";
            break; // OOC 15.9
        case 0xE3:
            ret = "Bass";
            break; // LC 15.9
        case 0xE4:
            ret = "Treble";
            break; // LC 15.9
        case 0xE5:
            ret = "Bass Boost";
            break; // OOC 15.9
        case 0xE6:
            ret = "Surround Mode";
            break; // OSC 15.9
        case 0xE7:
            ret = "Loudness";
            break; // OOC 15.9
        case 0xE8:
            ret = "MPX";
            break; // OOC 15.9
        case 0xE9:
            ret = "Volume Increment";
            break; // RTC 15.9
        case 0xEA:
            ret = "Volume Decrement";
            break; // RTC 15.9
        case 0xF0:
            ret = "Speed Select";
            break; // OSC 15.10
        case 0xF1:
            ret = "Playback Speed";
            break; // NAry 15.10
        case 0xF2:
            ret = "Standard Play";
            break; // Sel 15.10
        case 0xF3:
            ret = "Long Play";
            break; // Sel 15.10
        case 0xF4:
            ret = "Extended Play";
            break; // Sel 15.10
        case 0xF5:
            ret = "Slow";
            break; // OSC 15.10
        case 0x100:
            ret = "Fan Enable";
            break; // OOC 15.11
        case 0x101:
            ret = "Fan Speed";
            break; // LC 15.11
        case 0x102:
            ret = "Light Enable";
            break; // OOC 15.11
        case 0x103:
            ret = "Light Illumination Level";
            break; // LC 15.11
        case 0x104:
            ret = "Climate Control Enable";
            break; // OOC 15.11
        case 0x105:
            ret = "Room Temperature";
            break; // LC 15.11
        case 0x106:
            ret = "Security Enable";
            break; // OOC 15.11
        case 0x107:
            ret = "Fire Alarm ";
            break; //OSC 15.11
        case 0x108:
            ret = "Police Alarm ";
            break; //OSC 15.11
        case 0x109:
            ret = "Proximity";
            break; // LC 15.11
        case 0x10A:
            ret = "Motion";
            break; // OSC 15.11
        case 0x10B:
            ret = "Duress Alarm";
            break; // OSC 15.11
        case 0x10C:
            ret = "Holdup Alarm";
            break; // OSC 15.11
        case 0x10D:
            ret = "Medical Alarm";
            break; // OSC 15.11
        case 0x150:
            ret = "Balance Right";
            break; // RTC 15.9
        case 0x151:
            ret = "Balance Left";
            break; // RTC 15.9
        case 0x152:
            ret = "Bass Increment";
            break; // RTC 15.9
        case 0x153:
            ret = "Bass Decrement";
            break; // RTC 15.9
        case 0x154:
            ret = "Treble Increment";
            break; // RTC 15.9
        case 0x155:
            ret = "Treble Decrement";
            break; // RTC 15.9
        case 0x160:
            ret = "Speaker System";
            break; // CL 15.12
        case 0x161:
            ret = "Channel Left";
            break; // CL 15.12
        case 0x162:
            ret = "Channel Right";
            break; // CL 15.12
        case 0x163:
            ret = "Channel Center";
            break; // CL 15.12
        case 0x164:
            ret = "Channel Front";
            break; // CL 15.12
        case 0x165:
            ret = "Channel Center Front";
            break; // CL 15.12
        case 0x166:
            ret = "Channel Side";
            break; // CL 15.12
        case 0x167:
            ret = "Channel Surround";
            break; // CL 15.12
        case 0x168:
            ret = "Channel Low Frequency Enhancement";
            break; // CL 15.12
        case 0x169:
            ret = "Channel Top";
            break; // CL 15.12
        case 0x16A:
            ret = "Channel Unknown";
            break; // CL 15.12
        case 0x170:
            ret = "Sub-channel";
            break; // LC 15.13
        case 0x171:
            ret = "Sub-channel Increment";
            break; // OSC 15.13
        case 0x172:
            ret = "Sub-channel Decrement";
            break; // OSC 15.13
        case 0x173:
            ret = "Alternate Audio Increment";
            break; // OSC 15.13
        case 0x174:
            ret = "Alternate Audio Decrement";
            break; // OSC 15.13
        case 0x180:
            ret = "Application Launch Buttons";
            break; // NAry 15.15
        case 0x181:
            ret = "AL Launch Button Configuration Tool";
            break; // Sel 15.15
        case 0x182:
            ret = "AL Programmable Button Configuration";
            break; // Sel 15.15
        case 0x183:
            ret = "AL Consumer Control Configuration";
            break; // Sel 15.15
        case 0x184:
            ret = "AL Word Processor";
            break; // Sel 15.15
        case 0x185:
            ret = "AL Text Editor";
            break; // Sel 15.15
        case 0x186:
            ret = "AL Spreadsheet";
            break; // Sel 15.15
        case 0x187:
            ret = "AL Graphics Editor";
            break; // Sel 15.15
        case 0x188:
            ret = "AL Presentation App";
            break; // Sel 15.15
        case 0x189:
            ret = "AL Database App";
            break; // Sel 15.15
        case 0x18A:
            ret = "AL Email Reader";
            break; // Sel 15.15
        case 0x18B:
            ret = "AL Newsreader";
            break; // Sel 15.15
        case 0x18C:
            ret = "AL Voicemail";
            break; // Sel 15.15
        case 0x18D:
            ret = "AL Contacts/Address Book";
            break; // Sel 15.15
        case 0x18E:
            ret = "AL Calendar/Schedule";
            break; // Sel 15.15
        case 0x18F:
            ret = "AL Task/Project Manager";
            break; // Sel 15.15
        case 0x190:
            ret = "AL Log/Journal/Timecard";
            break; // Sel 15.15
        case 0x191:
            ret = "AL Checkbook/Finance";
            break; // Sel 15.15
        case 0x192:
            ret = "AL Calculator";
            break; // Sel 15.15
        case 0x193:
            ret = "AL A/V Capture/Playback";
            break; // Sel 15.15
        case 0x194:
            ret = "AL Local Machine Browser";
            break; // Sel 15.15
        case 0x195:
            ret = "AL LAN/WAN Browser";
            break; // Sel 15.15
        case 0x196:
            ret = "AL Internet Browser";
            break; // Sel 15.15
        case 0x197:
            ret = "AL Remote Networking/ISP Connect";
            break; // Sel 15.15
        case 0x198:
            ret = "AL Network Conference";
            break; // Sel 15.15
        case 0x199:
            ret = "AL Network Chat";
            break; // Sel 15.15
        case 0x19A:
            ret = "AL Telephony/Dialer";
            break; // Sel 15.15
        case 0x19B:
            ret = "AL Logon";
            break; // Sel 15.15
        case 0x19C:
            ret = "AL Logoff";
            break; // Sel 15.15
        case 0x19D:
            ret = "AL Logon/Logoff";
            break; // Sel 15.15
        case 0x19E:
            ret = "AL Terminal Lock/Screensaver";
            break; // Sel 15.15
        case 0x19F:
            ret = "AL Control Panel";
            break; // Sel 15.15
        case 0x1A0:
            ret = "AL Command Line Processor/Run";
            break; // Sel 15.15
        case 0x1A1:
            ret = "AL Process/Task Manager";
            break; // Sel 15.15
        case 0x1A2:
            ret = "AL Select Task/Application";
            break; // Sel 15.15
        case 0x1A3:
            ret = "AL Next Task/Application";
            break; // Sel 15.15
        case 0x1A4:
            ret = "AL Previous Task/Application";
            break; // Sel 15.15
        case 0x1A5:
            ret = "AL Preemptive Halt Task/Application";
            break; // Sel 15.15
        case 0x1A6:
            ret = "AL Integrated Help Center";
            break; // Sel 15.15
        case 0x1A7:
            ret = "AL Documents";
            break; // Sel 15.15
        case 0x1A8:
            ret = "AL Thesaurus";
            break; // Sel 15.15
        case 0x1A9:
            ret = "AL Dictionary";
            break; // Sel 15.15
        case 0x1AA:
            ret = "AL Desktop";
            break; // Sel 15.15
        case 0x1AB:
            ret = "AL Spell Check";
            break; // Sel 15.15
        case 0x1AC:
            ret = "AL Grammar Check";
            break; // Sel 15.15
        case 0x1AD:
            ret = "AL Wireless Status";
            break; // Sel 15.15
        case 0x1AE:
            ret = "AL Keyboard Layout";
            break; // Sel 15.15
        case 0x1AF:
            ret = "AL Virus Protection";
            break; // Sel 15.15
        case 0x1B0:
            ret = "AL Encryption";
            break; // Sel 15.15
        case 0x1B1:
            ret = "AL Screen Saver";
            break; // Sel 15.15
        case 0x1B2:
            ret = "AL Alarms";
            break; // Sel 15.15
        case 0x1B3:
            ret = "AL Clock";
            break; // Sel 15.15
        case 0x1B4:
            ret = "AL File Browser";
            break; // Sel 15.15
        case 0x1B5:
            ret = "AL Power Status";
            break; // Sel 15.15
        case 0x1B6:
            ret = "AL Image Browser";
            break; // Sel 15.15
        case 0x1B7:
            ret = "AL Audio Browser";
            break; // Sel 15.15
        case 0x1B8:
            ret = "AL Movie Browser";
            break; // Sel 15.15
        case 0x1B9:
            ret = "AL Digital Rights Manager";
            break; // Sel 15.15
        case 0x1BA:
            ret = "AL Digital Wallet";
            break; // Sel 15.15
        case 0x1BC:
            ret = "AL Instant Messaging";
            break; // Sel 15.15
        case 0x1BD:
            ret = "AL OEM Features/ Tips/Tutorial Browser";
            break; // Sel 15.15
        case 0x1BE:
            ret = "AL OEM Help";
            break; // Sel 15.15
        case 0x1BF:
            ret = "AL Online Community";
            break; // Sel 15.15
        case 0x1C0:
            ret = "AL Entertainment Content Browser";
            break; // Sel 15.15
        case 0x1C1:
            ret = "AL Online Shopping Browser";
            break; // Sel 15.15
        case 0x1C2:
            ret = "AL SmartCard Information/Help";
            break; // Sel 15.15
        case 0x1C3:
            ret = "AL Market Monitor/Finance Browser";
            break; // Sel 15.15
        case 0x1C4:
            ret = "AL Customized Corporate News Browser";
            break; // Sel 15.15
        case 0x1C5:
            ret = "AL Online Activity Browser";
            break; // Sel 15.15
        case 0x1C6:
            ret = "AL Research/Search Browser";
            break; // Sel 15.15
        case 0x1C7:
            ret = "AL Audio Player";
            break; // Sel 15.15
        case 0x1C8:
            ret = "AL Message Status";
            break; // [5] Sel 15.15
        case 0x1C9:
            ret = "AL Contact Sync";
            break; // [5] Sel 15.15
        case 0x1CA:
            ret = "AL Navigation";
            break; // [64] Sel 15.15
        case 0x1CB:
            ret = "AL Context-aware Desktop Assistant";
            break; // [56] Sel 15.15
        case 0x200:
            ret = "Generic GUI Application Controls";
            break; // NAry 15.16
        case 0x201:
            ret = "AC New";
            break; // Sel 15.16
        case 0x202:
            ret = "AC Open";
            break; // Sel 15.16
        case 0x203:
            ret = "AC Close";
            break; // Sel 15.16
        case 0x204:
            ret = "AC Exit";
            break; // Sel 15.16
        case 0x205:
            ret = "AC Maximize";
            break; // Sel 15.16
        case 0x206:
            ret = "AC Minimize";
            break; // Sel 15.16
        case 0x207:
            ret = "AC Save";
            break; // Sel 15.16
        case 0x208:
            ret = "AC Print";
            break; // Sel 15.16
        case 0x209:
            ret = "AC Properties";
            break; // Sel 15.16
        case 0x21A:
            ret = "AC Undo";
            break; // Sel 15.16
        case 0x21B:
            ret = "AC Copy";
            break; // Sel 15.16
        case 0x21C:
            ret = "AC Cut";
            break; // Sel 15.16
        case 0x21D:
            ret = "AC Paste";
            break; // Sel 15.16
        case 0x21E:
            ret = "AC Select All";
            break; // Sel 15.16
        case 0x21F:
            ret = "AC Find";
            break; // Sel 15.16
        case 0x220:
            ret = "AC Find and Replace";
            break; // Sel 15.16
        case 0x221:
            ret = "AC Search";
            break; // Sel 15.16
        case 0x222:
            ret = "AC Go To";
            break; // Sel 15.16
        case 0x223:
            ret = "AC Home";
            break; // Sel 15.16
        case 0x224:
            ret = "AC Back";
            break; // Sel 15.16
        case 0x225:
            ret = "AC Forward";
            break; // Sel 15.16
        case 0x226:
            ret = "AC Stop";
            break; // Sel 15.16
        case 0x227:
            ret = "AC Refresh";
            break; // Sel 15.16
        case 0x228:
            ret = "AC Previous Link";
            break; // Sel 15.16
        case 0x229:
            ret = "AC Next Link";
            break; // Sel 15.16
        case 0x22A:
            ret = "AC Bookmarks";
            break; // Sel 15.16
        case 0x22B:
            ret = "AC History";
            break; // Sel 15.16
        case 0x22C:
            ret = "AC Subscriptions";
            break; // Sel 15.16
        case 0x22D:
            ret = "AC Zoom In";
            break; // Sel 15.16
        case 0x22E:
            ret = "AC Zoom Out";
            break; // Sel 15.16
        case 0x22F:
            ret = "AC Zoom";
            break; // LC 15.16
        case 0x230:
            ret = "AC Full Screen View";
            break; // Sel 15.16
        case 0x231:
            ret = "AC Normal View";
            break; // Sel 15.16
        case 0x232:
            ret = "AC View Toggle";
            break; // Sel 15.16
        case 0x233:
            ret = "AC Scroll Up";
            break; // Sel 15.16
        case 0x234:
            ret = "AC Scroll Down";
            break; // Sel 15.16
        case 0x235:
            ret = "AC Scroll";
            break; // LC 15.16
        case 0x236:
            ret = "AC Pan Left";
            break; // Sel 15.16
        case 0x237:
            ret = "AC Pan Right";
            break; // Sel 15.16
        case 0x238:
            ret = "AC Pan";
            break; // LC 15.16
        case 0x239:
            ret = "AC New Window";
            break; // Sel 15.16
        case 0x23A:
            ret = "AC Tile Horizontally";
            break; // Sel 15.16
        case 0x23B:
            ret = "AC Tile Vertically";
            break; // Sel 15.16
        case 0x23C:
            ret = "AC Format";
            break; // Sel 15.16
        case 0x23D:
            ret = "AC Edit";
            break; // Sel 15.16
        case 0x23E:
            ret = "AC Bold";
            break; // Sel 15.16
        case 0x23F:
            ret = "AC Italics";
            break; // Sel 15.16
        case 0x240:
            ret = "AC Underline";
            break; // Sel 15.16
        case 0x241:
            ret = "AC Strikethrough";
            break; // Sel 15.16
        case 0x242:
            ret = "AC Subscript";
            break; // Sel 15.16
        case 0x243:
            ret = "AC Superscript";
            break; // Sel 15.16
        case 0x244:
            ret = "AC All Caps";
            break; // Sel 15.16
        case 0x245:
            ret = "AC Rotate";
            break; // Sel 15.16
        case 0x246:
            ret = "AC Resize";
            break; // Sel 15.16
        case 0x247:
            ret = "AC Flip Horizontal";
            break; // Sel 15.16
        case 0x248:
            ret = "AC Flip Vertical";
            break; // Sel 15.16
        case 0x249:
            ret = "AC Mirror Horizontal";
            break; // Sel 15.16
        case 0x24A:
            ret = "AC Mirror Vertical";
            break; // Sel 15.16
        case 0x24B:
            ret = "AC Font Select";
            break; // Sel 15.16
        case 0x24C:
            ret = "AC Font Color";
            break; // Sel 15.16
        case 0x24D:
            ret = "AC Font Size";
            break; // Sel 15.16
        case 0x24E:
            ret = "AC Justify Left";
            break; // Sel 15.16
        case 0x24F:
            ret = "AC Justify Center H";
            break; // Sel 15.16
        case 0x250:
            ret = "AC Justify Right";
            break; // Sel 15.16
        case 0x251:
            ret = "AC Justify Block H";
            break; // Sel 15.16
        case 0x252:
            ret = "AC Justify Top";
            break; // Sel 15.16
        case 0x253:
            ret = "AC Justify Center V";
            break; // Sel 15.16
        case 0x254:
            ret = "AC Justify Bottom";
            break; // Sel 15.16
        case 0x255:
            ret = "AC Justify Block V";
            break; // Sel 15.16
        case 0x256:
            ret = "AC Indent Decrease";
            break; // Sel 15.16
        case 0x257:
            ret = "AC Indent Increase";
            break; // Sel 15.16
        case 0x258:
            ret = "AC Numbered List";
            break; // Sel 15.16
        case 0x259:
            ret = "AC Restart Numbering";
            break; // Sel 15.16
        case 0x25A:
            ret = "AC Bulleted List";
            break; // Sel 15.16
        case 0x25B:
            ret = "AC Promote";
            break; // Sel 15.16
        case 0x25C:
            ret = "AC Demote";
            break; // Sel 15.16
        case 0x25D:
            ret = "AC Yes";
            break; // Sel 15.16
        case 0x25E:
            ret = "AC No";
            break; // Sel 15.16
        case 0x25F:
            ret = "AC Cancel";
            break; // Sel 15.16
        case 0x260:
            ret = "AC Catalog";
            break; // Sel 15.16
        case 0x261:
            ret = "AC Buy/Checkout";
            break; // Sel 15.16
        case 0x262:
            ret = "AC Add to Cart";
            break; // Sel 15.16
        case 0x263:
            ret = "AC Expand";
            break; // Sel 15.16
        case 0x264:
            ret = "AC Expand All";
            break; // Sel 15.16
        case 0x265:
            ret = "AC Collapse";
            break; // Sel 15.16
        case 0x266:
            ret = "AC Collapse All";
            break; // Sel 15.16
        case 0x267:
            ret = "AC Print Preview";
            break; // Sel 15.16
        case 0x268:
            ret = "AC Paste Special";
            break; // Sel 15.16
        case 0x269:
            ret = "AC Insert Mode";
            break; // Sel 15.16
        case 0x26A:
            ret = "AC Delete";
            break; // Sel 15.16
        case 0x26B:
            ret = "AC Lock";
            break; // Sel 15.16
        case 0x26C:
            ret = "AC Unlock";
            break; // Sel 15.16
        case 0x26E:
            ret = "AC Unprotect";
            break; // Sel 15.16
        case 0x26F:
            ret = "AC Attach Comment";
            break; // Sel 15.16
        case 0x270:
            ret = "AC Delete Comment";
            break; // Sel 15.16
        case 0x271:
            ret = "AC View Comment";
            break; // Sel 15.16
        case 0x272:
            ret = "AC Select Word";
            break; // Sel 15.16
        case 0x273:
            ret = "AC Select Sentence";
            break; // Sel 15.16
        case 0x274:
            ret = "AC Select Paragraph";
            break; // Sel 15.16
        case 0x275:
            ret = "AC Select Column";
            break; // Sel 15.16
        case 0x276:
            ret = "AC Select Row";
            break; // Sel 15.16
        case 0x277:
            ret = "AC Select Table";
            break; // Sel 15.16
        case 0x278:
            ret = "AC Select Object";
            break; // Sel 15.16
        case 0x279:
            ret = "AC Redo/Repeat";
            break; // Sel 15.16
        case 0x27A:
            ret = "AC Sort";
            break; // Sel 15.16
        case 0x27B:
            ret = "AC Sort Ascending";
            break; // Sel 15.16
        case 0x27C:
            ret = "AC Sort Descending";
            break; // Sel 15.16
        case 0x27D:
            ret = "AC Filter";
            break; // Sel 15.16
        case 0x27E:
            ret = "AC Set Clock";
            break; // Sel 15.16
        case 0x27F:
            ret = "AC View Clock";
            break; // Sel 15.16
        case 0x280:
            ret = "AC Select Time Zone";
            break; // Sel 15.16
        case 0x281:
            ret = "AC Edit Time Zones";
            break; // Sel 15.16
        case 0x282:
            ret = "AC Set Alarm";
            break; // Sel 15.16
        case 0x283:
            ret = "AC Clear Alarm";
            break; // Sel 15.16
        case 0x284:
            ret = "AC Snooze Alarm";
            break; // Sel 15.16
        case 0x285:
            ret = "AC Reset Alarm";
            break; // Sel 15.16
        case 0x286:
            ret = "AC Synchronize";
            break; // Sel 15.16
        case 0x287:
            ret = "AC Send/Receive";
            break; // Sel 15.16
        case 0x288:
            ret = "AC Send To";
            break; // Sel 15.16
        case 0x289:
            ret = "AC Reply";
            break; // Sel 15.16
        case 0x28A:
            ret = "AC Reply All";
            break; // Sel 15.16
        case 0x28B:
            ret = "AC Forward Msg";
            break; // Sel 15.16
        case 0x28C:
            ret = "AC Send Sel";
            break; // 15.16
        case 0x28D:
            ret = "AC Attach File";
            break; // Sel 15.16
        case 0x28E:
            ret = "AC Upload";
            break; // Sel 15.16
        case 0x28F:
            ret = "AC Download (Save Target As)";
            break; // Sel 15.16
        case 0x290:
            ret = "AC Set Borders";
            break; // Sel 15.16
        case 0x291:
            ret = "AC Insert Row";
            break; // Sel 15.16
        case 0x292:
            ret = "AC Insert Column";
            break; // Sel 15.16
        case 0x293:
            ret = "AC Insert File";
            break; // Sel 15.16
        case 0x294:
            ret = "AC Insert Picture";
            break; // Sel 15.16
        case 0x295:
            ret = "AC Insert Object";
            break; // Sel 15.16
        case 0x296:
            ret = "AC Insert Symbol";
            break; // Sel 15.16
        case 0x297:
            ret = "AC Save and Close";
            break; // Sel 15.16
        case 0x298:
            ret = "AC Rename";
            break; // Sel 15.16
        case 0x299:
            ret = "AC Merge";
            break; // Sel 15.16
        case 0x29A:
            ret = "AC Split";
            break; // Sel 15.16
        case 0x29B:
            ret = "AC Disribute Horizontally";
            break; // Sel 15.16
        case 0x29C:
            ret = "AC Distribute Vertically";
            break; // Sel 15.16
        case 0x29D:
            ret = "AC Next Keyboard Layout Select";
            break; // [28] Sel 15.16
        case 0x29E:
            ret = "AC Navigation Guidance";
            break; // [44] Sel 15.16
        case 0x29F:
            ret = "AC Desktop Show All Windows";
            break; // [46] Sel 15.16
        case 0x2A0:
            ret = "AC Soft Key Left";
            break; // [5] Sel 15.16
        case 0x2A1:
            ret = "AC Soft Key Right";
            break; // [5] Sel 15.16
        case 0x2A2:
            ret = "AC Desktop Show All Applications";
            break; // [64] Sel 15.16
        case 0x2B0:
            ret = "AC Idle Keep Alive";
            break; // [5] Sel 15.16
        case 0x2C0:
            ret = "Extended Keyboard Attributes Collection";
            break; // [15] CL 15.18
        case 0x2C1:
            ret = "Keyboard Form Factor";
            break; // [15] SV 15.18
        case 0x2C2:
            ret = "Keyboard Key Type";
            break; // [15] SV 15.18
        case 0x2C3:
            ret = "Keyboard Physical Layout";
            break; // [15] SV 15.18
        case 0x2C4:
            ret = "Vendor-Specific Keyboard Physical Layout";
            break; // [15] SV 15.18
        case 0x2C5:
            ret = "Keyboard IETF Language Tag Index";
            break; // [15] SV 15.18
        case 0x2C6:
            ret = "Implemented Keyboard Input Assist Controls";
            break; // [15] SV 15.18
        case 0x2C7:
            ret = "Keyboard Input Assist Previous";
            break; // [15] Sel 15.19
        case 0x2C8:
            ret = "Keyboard Input Assist Next";
            break; // [15] Sel 15.19
        case 0x2C9:
            ret = "Keyboard Input Assist Previous Group";
            break; // [15] Sel 15.19
        case 0x2CA:
            ret = "Keyboard Input Assist Next Group";
            break; // [15] Sel 15.19
        case 0x2CB:
            ret = "Keyboard Input Assist Accept";
            break; // [15] Sel 15.19
        case 0x2CC:
            ret = "Keyboard Input Assist Cancel";
            break; // [15] Sel 15.19
        case 0x2D0:
            ret = "Privacy Screen Toggle";
            break; // [62] OOC 15.23
        case 0x2D1:
            ret = "Privacy Screen Level Decrement";
            break; // [62] RTC 15.23
        case 0x2D2:
            ret = "Privacy Screen Level Increment";
            break; // [62] RTC 15.23
        case 0x2D3:
            ret = "Privacy Screen Level Minimum";
            break; // [62] OSC 15.23
        case 0x2D4:
            ret = "Privacy Screen Level Maximum";
            break; // [62] OSC 15.23
        case 0x500:
            ret = "Contact Edited";
            break; // [5] OOC 15.17
        case 0x501:
            ret = "Contact Added";
            break; // [5] OOC 15.17
        case 0x502:
            ret = "Contact Record Active";
            break; // [5] OOC 15.17
        case 0x503:
            ret = "Contact Index";
            break; // [5] DV 15.17
        case 0x504:
            ret = "Contact Nickname";
            break; // [5] DV 15.17
        case 0x505:
            ret = "Contact First Name";
            break; // [5] DV 15.17
        case 0x506:
            ret = "Contact Last Name";
            break; // [5] DV 15.17
        case 0x507:
            ret = "Contact Full Name";
            break; // [5] DV 15.17
        case 0x508:
            ret = "Contact Phone Number Personal";
            break; // [5] DV 15.17
        case 0x509:
            ret = "Contact Phone Number Business";
            break; // [5] DV 15.17
        case 0x50A:
            ret = "Contact Phone Number Mobile";
            break; // [5] DV 15.17
        case 0x50B:
            ret = "Contact Phone Number Pager";
            break; // [5] DV 15.17
        case 0x50C:
            ret = "Contact Phone Number Fax";
            break; // [5] DV 15.17
        case 0x50D:
            ret = "Contact Phone Number Other";
            break; // [5] DV 15.17
        case 0x50E:
            ret = "Contact Email Personal";
            break; // [5] DV 15.17
        case 0x50F:
            ret = "Contact Email Business";
            break; // [5] DV 15.17
        case 0x510:
            ret = "Contact Email Other";
            break; // [5] DV 15.17
        case 0x511:
            ret = "Contact Email Main";
            break; // [5] DV 15.17
        case 0x512:
            ret = "Contact Speed Dial Number";
            break; // [5] DV 15.17
        case 0x513:
            ret = "Contact Status Flag";
            break; // [5] DV 15.17
        case 0x514:
            ret = "Contact Misc.";
            break; // [5] DV 15.17
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
        default:
            ret = "Reserved";
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=consumer.js.map
