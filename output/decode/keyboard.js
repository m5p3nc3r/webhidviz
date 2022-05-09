function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        case 0x01:
            ret = "Keyboard ErrorRollOver";
            break; // Sel N/A ✓ ✓ ✓ 4/101/104
        case 0x02:
            ret = "Keyboard POSTFail";
            break; // Sel N/A ✓ ✓ ✓ 4/101/104
        case 0x03:
            ret = "Keyboard ErrorUndefined";
            break; // Sel N/A ✓ ✓ ✓ 4/101/104
        case 0x04:
            ret = "Keyboard a and A";
            break; // Sel 31 ✓ ✓ ✓ 4/101/104
        case 0x05:
            ret = "Keyboard b and B";
            break; // Sel 50 ✓ ✓ ✓ 4/101/104
        case 0x06:
            ret = "Keyboard c and C";
            break; // Sel 48 ✓ ✓ ✓ 4/101/104
        case 0x07:
            ret = "Keyboard d and D";
            break; // Sel 33 ✓ ✓ ✓ 4/101/104
        case 0x08:
            ret = "Keyboard e and E";
            break; // Sel 19 ✓ ✓ ✓ 4/101/104
        case 0x09:
            ret = "Keyboard f and F";
            break; // Sel 34 ✓ ✓ ✓ 4/101/104
        case 0x0A:
            ret = "Keyboard g and G";
            break; // Sel 35 ✓ ✓ ✓ 4/101/104
        case 0x0B:
            ret = "Keyboard h and H";
            break; // Sel 36 ✓ ✓ ✓ 4/101/104
        case 0x0C:
            ret = "Keyboard i and I";
            break; // Sel 24 ✓ ✓ ✓ 4/101/104
        case 0x0D:
            ret = "Keyboard j and J";
            break; // Sel 37 ✓ ✓ ✓ 4/101/104
        case 0x0E:
            ret = "Keyboard k and K";
            break; // Sel 38 ✓ ✓ ✓ 4/101/104
        case 0x0F:
            ret = "Keyboard l and L";
            break; // Sel 39 ✓ ✓ ✓ 4/101/104
        case 0x10:
            ret = "Keyboard m and M";
            break; // Sel 52 ✓ ✓ ✓ 4/101/104
        case 0x11:
            ret = "Keyboard n and N";
            break; // Sel 51 ✓ ✓ ✓ 4/101/104
        case 0x12:
            ret = "Keyboard o and O";
            break; // Sel 25 ✓ ✓ ✓ 4/101/104
        case 0x13:
            ret = "Keyboard p and P";
            break; // Sel 26 ✓ ✓ ✓ 4/101/104
        case 0x14:
            ret = "Keyboard q and Q";
            break; // Sel 17 ✓ ✓ ✓ 4/101/104
        case 0x15:
            ret = "Keyboard r and R";
            break; // Sel 20 ✓ ✓ ✓ 4/101/104
        case 0x16:
            ret = "Keyboard s and S";
            break; // Sel 32 ✓ ✓ ✓ 4/101/104
        case 0x17:
            ret = "Keyboard t and T";
            break; // Sel 21 ✓ ✓ ✓ 4/101/104
        case 0x18:
            ret = "Keyboard u and U";
            break; // Sel 23 ✓ ✓ ✓ 4/101/104
        case 0x19:
            ret = "Keyboard v and V";
            break; // Sel 49 ✓ ✓ ✓ 4/101/104
        case 0x1A:
            ret = "Keyboard w and W";
            break; // Sel 18 ✓ ✓ ✓ 4/101/104
        case 0x1B:
            ret = "Keyboard x and X";
            break; // Sel 47 ✓ ✓ ✓ 4/101/104
        case 0x1C:
            ret = "Keyboard y and Y";
            break; // Sel 22 ✓ ✓ ✓ 4/101/104
        case 0x1D:
            ret = "Keyboard z and Z";
            break; // Sel 46 ✓ ✓ ✓ 4/101/104
        case 0x1E:
            ret = "Keyboard 1 and !";
            break; // Sel 2 ✓ ✓ ✓ 4/101/104
        case 0x1F:
            ret = "Keyboard 2 and @";
            break; // Sel 3 ✓ ✓ ✓ 4/101/104
        case 0x20:
            ret = "Keyboard 3 and #";
            break; // Sel 4 ✓ ✓ ✓ 4/101/104
        case 0x21:
            ret = "Keyboard 4 and $";
            break; // Sel 5 ✓ ✓ ✓ 4/101/104
        case 0x22:
            ret = "Keyboard 5 and %";
            break; // Sel 6 ✓ ✓ ✓ 4/101/104
        case 0x23:
            ret = "Keyboard 6 and ∧";
            break; // Sel 7 ✓ ✓ ✓ 4/101/104
        case 0x24:
            ret = "Keyboard 7 and &";
            break; // Sel 8 ✓ ✓ ✓ 4/101/104
        case 0x25:
            ret = "Keyboard 8 and *";
            break; // Sel 9 ✓ ✓ ✓ 4/101/104
        case 0x26:
            ret = "Keyboard 9 and (";
            break; // Sel 10 ✓ ✓ ✓ 4/101/104
        case 0x27:
            ret = "Keyboard 0 and )";
            break; // Sel 11 ✓ ✓ ✓ 4/101/104
        case 0x28:
            ret = "Keyboard Return (ENTER)";
            break; // Sel 43 ✓ ✓ ✓ 4/101/104
        case 0x29:
            ret = "Keyboard ESCAPE";
            break; // Sel 110 ✓ ✓ ✓ 4/101/104
        case 0x2A:
            ret = "Keyboard DELETE (Backspace)";
            break; // Sel 15 ✓ ✓ ✓ 4/101/104
        case 0x2B:
            ret = "Keyboard Tab";
            break; // Sel 16 ✓ ✓ ✓ 4/101/104
        case 0x2C:
            ret = "Keyboard Spacebar";
            break; // Sel 61 ✓ ✓ ✓ 4/101/104
        case 0x2D:
            ret = "Keyboard - and (underscore)";
            break; // Sel 12 ✓ ✓ ✓ 4/101/104
        case 0x2E:
            ret = "Keyboard = and +";
            break; // Sel 13 ✓ ✓ ✓ 4/101/104
        case 0x2F:
            ret = "Keyboard [ and {";
            break; // Sel 27 ✓ ✓ ✓ 4/101/104
        case 0x30:
            ret = "Keyboard ] and }";
            break; // Sel 28 ✓ ✓ ✓ 4/101/104
        case 0x31:
            ret = "Keyboard \\ and |";
            break; // Sel 29 ✓ ✓ ✓ 4/101/104
        case 0x32:
            ret = "Keyboard Non-US # and ˜";
            break; // Sel 42 ✓ ✓ ✓ 4/101/104
        case 0x33:
            ret = "Keyboard ; and :";
            break; // Sel 40 ✓ ✓ ✓ 4/101/104
        case 0x34:
            ret = "Keyboard ‘ and “";
            break; // Sel 41 ✓ ✓ ✓ 4/101/104
        case 0x35:
            ret = "Keyboard Grave Accent and Tilde";
            break; // Sel 1 ✓ ✓ ✓ 4/101/104
        case 0x36:
            ret = "Keyboard , and <";
            break; // Sel 53 ✓ ✓ ✓ 4/101/104
        case 0x37:
            ret = "Keyboard . and >";
            break; // Sel 54 ✓ ✓ ✓ 4/101/104
        case 0x38:
            ret = "Keyboard / and ?";
            break; // Sel 55 ✓ ✓ ✓ 4/101/104
        case 0x39:
            ret = "Keyboard Caps Lock";
            break; // Sel 30 ✓ ✓ ✓ 4/101/104
        case 0x3A:
            ret = "Keyboard F1";
            break; // Sel 112 ✓ ✓ ✓ 4/101/104
        case 0x3B:
            ret = "Keyboard F2";
            break; // Sel 113 ✓ ✓ ✓ 4/101/104
        case 0x3C:
            ret = "Keyboard F3";
            break; // Sel 114 ✓ ✓ ✓ 4/101/104
        case 0x3D:
            ret = "Keyboard F4";
            break; // Sel 115 ✓ ✓ ✓ 4/101/104
        case 0x3E:
            ret = "Keyboard F5";
            break; // Sel 116 ✓ ✓ ✓ 4/101/104
        case 0x3F:
            ret = "Keyboard F6";
            break; // Sel 117 ✓ ✓ ✓ 4/101/104
        case 0x40:
            ret = "Keyboard F7";
            break; // Sel 118 ✓ ✓ ✓ 4/101/104
        case 0x41:
            ret = "Keyboard F8";
            break; // Sel 119 ✓ ✓ ✓ 4/101/104
        case 0x42:
            ret = "Keyboard F9";
            break; // Sel 120 ✓ ✓ ✓ 4/101/104
        case 0x43:
            ret = "Keyboard F10";
            break; // Sel 121 ✓ ✓ ✓ 4/101/104
        case 0x44:
            ret = "Keyboard F11";
            break; // Sel 122 ✓ ✓ ✓ 4/101/104
        case 0x45:
            ret = "Keyboard F12";
            break; // Sel 123 ✓ ✓ ✓ 4/101/104
        case 0x46:
            ret = "Keyboard PrintScreen";
            break; // Sel 124 ✓ ✓ ✓ 4/101/104
        case 0x47:
            ret = "Keyboard Scroll Lock";
            break; // Sel 125 ✓ ✓ ✓ 4/101/104
        case 0x48:
            ret = "Keyboard Pause";
            break; // Sel 126 ✓ ✓ ✓ 4/101/104
        case 0x49:
            ret = "Keyboard Insert";
            break; // Sel 75 ✓ ✓ ✓ 4/101/104
        case 0x4A:
            ret = "Keyboard Home";
            break; // Sel 80 ✓ ✓ ✓ 4/101/104
        case 0x4B:
            ret = "Keyboard PageUp";
            break; // Sel 85 ✓ ✓ ✓ 4/101/104
        case 0x4C:
            ret = "Keyboard Delete Forward";
            break; // Sel 76 ✓ ✓ ✓ 4/101/104
        case 0x4D:
            ret = "Keyboard End";
            break; // Sel 81 ✓ ✓ ✓ 4/101/104
        case 0x4E:
            ret = "Keyboard PageDown";
            break; // Sel 86 ✓ ✓ ✓ 4/101/104
        case 0x4F:
            ret = "Keyboard RightArrow";
            break; // Sel 89 ✓ ✓ ✓ 4/101/104
        case 0x50:
            ret = "Keyboard LeftArrow";
            break; // Sel 79 ✓ ✓ ✓ 4/101/104
        case 0x51:
            ret = "Keyboard DownArrow";
            break; // Sel 84 ✓ ✓ ✓ 4/101/104
        case 0x52:
            ret = "Keyboard UpArrow";
            break; // Sel 83 ✓ ✓ ✓ 4/101/104
        case 0x53:
            ret = "Keypad Num Lock and Clear";
            break; // Sel 90 ✓ ✓ ✓ 4/101/104
        case 0x54:
            ret = "Keypad /";
            break; // Sel 95 ✓ ✓ ✓ 4/101/104
        case 0x55:
            ret = "Keypad *";
            break; // Sel 100 ✓ ✓ ✓ 4/101/104
        case 0x56:
            ret = "Keypad -";
            break; // Sel 105 ✓ ✓ ✓ 4/101/104
        case 0x57:
            ret = "Keypad +";
            break; // Sel 106 ✓ ✓ ✓ 4/101/104
        case 0x58:
            ret = "Keypad ENTER";
            break; // Sel 108 ✓ ✓ ✓ 4/101/104
        case 0x59:
            ret = "Keypad 1 and End";
            break; // Sel 93 ✓ ✓ ✓ 4/101/104
        case 0x5A:
            ret = "Keypad 2 and Down Arrow";
            break; // Sel 98 ✓ ✓ ✓ 4/101/104
        case 0x5B:
            ret = "Keypad 3 and PageDn";
            break; // Sel 103 ✓ ✓ ✓ 4/101/104
        case 0x5C:
            ret = "Keypad 4 and Left Arrow";
            break; // Sel 92 ✓ ✓ ✓ 4/101/104
        case 0x5D:
            ret = "Keypad 5";
            break; // Sel 97 ✓ ✓ ✓ 4/101/104
        case 0x5E:
            ret = "Keypad 6 and Right Arrow";
            break; // Sel 102 ✓ ✓ ✓ 4/101/104
        case 0x5F:
            ret = "Keypad 7 and Home";
            break; // Sel 91 ✓ ✓ ✓ 4/101/104
        case 0x60:
            ret = "Keypad 8 and Up Arrow";
            break; // Sel 96 ✓ ✓ ✓ 4/101/104
        case 0x61:
            ret = "Keypad 9 and PageUp";
            break; // Sel 101 ✓ ✓ ✓ 4/101/104
        case 0x62:
            ret = "Keypad 0 and Insert";
            break; // Sel 99 ✓ ✓ ✓ 4/101/104
        case 0x63:
            ret = "Keypad . and Delete";
            break; // Sel 104 ✓ ✓ ✓ 4/101/104
        case 0x64:
            ret = "Keyboard Non-US \\ and |";
            break; // Sel 45 ✓ ✓ ✓ 4/101/104
        case 0x65:
            ret = "Keyboard Application";
            break; // Sel 129 ✓ ✓ 104
        case 0x66:
            ret = "Keyboard Power";
            break; // Sel ✓ ✓
        case 0x67:
            ret = "Keypad =";
            break; // Sel ✓
        case 0x68:
            ret = "Keyboard F13";
            break; // Sel ✓
        case 0x69:
            ret = "Keyboard F14";
            break; // Sel ✓
        case 0x6A:
            ret = "Keyboard F15";
            break; // Sel ✓
        case 0x6B:
            ret = "Keyboard F16";
            break; // Sel
        case 0x6C:
            ret = "Keyboard F17";
            break; // Sel
        case 0x6D:
            ret = "Keyboard F18";
            break; // Sel
        case 0x6E:
            ret = "Keyboard F19";
            break; // Sel
        case 0x6F:
            ret = "Keyboard F20";
            break; // Sel
        case 0x70:
            ret = "Keyboard F21";
            break; // Sel
        case 0x71:
            ret = "Keyboard F22";
            break; // Sel
        case 0x72:
            ret = "Keyboard F23";
            break; // Sel
        case 0x73:
            ret = "Keyboard F24";
            break; // Sel
        case 0x74:
            ret = "Keyboard Execute";
            break; // Sel ✓
        case 0x75:
            ret = "Keyboard Help";
            break; // Sel ✓
        case 0x76:
            ret = "Keyboard Menu";
            break; // Sel ✓
        case 0x77:
            ret = "Keyboard Select";
            break; // Sel ✓
        case 0x78:
            ret = "Keyboard Stop";
            break; // Sel ✓
        case 0x79:
            ret = "Keyboard Again";
            break; // Sel ✓
        case 0x7A:
            ret = "Keyboard Undo";
            break; // Sel ✓
        case 0x7B:
            ret = "Keyboard Cut";
            break; // Sel ✓
        case 0x7C:
            ret = "Keyboard Copy";
            break; // Sel ✓
        case 0x7D:
            ret = "Keyboard Paste";
            break; // Sel ✓
        case 0x7E:
            ret = "Keyboard Find";
            break; // Sel ✓
        case 0x7F:
            ret = "Keyboard Mute";
            break; // Sel ✓
        case 0x80:
            ret = "Keyboard Volume Up";
            break; // Sel ✓
        case 0x81:
            ret = "Keyboard Volume Down";
            break; // Sel ✓
        case 0x82:
            ret = "Keyboard Locking Caps Lock";
            break; // Sel ✓
        case 0x83:
            ret = "Keyboard Locking Num Lock";
            break; // Sel ✓
        case 0x84:
            ret = "Keyboard Locking Scroll Lock";
            break; // Sel ✓
        case 0x85:
            ret = "Keypad Comma";
            break; // Sel 107
        case 0x86:
            ret = "Keypad Equal Sign";
            break; // Sel ✓
        case 0x87:
            ret = "Keyboard International1";
            break; // Sel 56
        case 0x88:
            ret = "Keyboard International2";
            break; // Sel
        case 0x89:
            ret = "Keyboard International3";
            break; // Sel
        case 0x8A:
            ret = "Keyboard International4";
            break; // Sel
        case 0x8B:
            ret = "Keyboard International5";
            break; // Sel
        case 0x8C:
            ret = "Keyboard International6";
            break; // Sel
        case 0x8D:
            ret = "Keyboard International7";
            break; // Sel
        case 0x8E:
            ret = "Keyboard International8";
            break; // Sel
        case 0x8F:
            ret = "Keyboard International9";
            break; // Sel
        case 0x90:
            ret = "Keyboard LANG1";
            break; // Sel
        case 0x91:
            ret = "Keyboard LANG2";
            break; // Sel
        case 0x92:
            ret = "Keyboard LANG3";
            break; // Sel
        case 0x93:
            ret = "Keyboard LANG4";
            break; // Sel
        case 0x94:
            ret = "Keyboard LANG5";
            break; // Sel
        case 0x95:
            ret = "Keyboard LANG6";
            break; // Sel
        case 0x96:
            ret = "Keyboard LANG7";
            break; // Sel
        case 0x97:
            ret = "Keyboard LANG8";
            break; // Sel
        case 0x98:
            ret = "Keyboard LANG9";
            break; // Sel
        case 0x99:
            ret = "Keyboard Alternate Erase";
            break; // Sel
        case 0x9A:
            ret = "Keyboard SysReq/Attention";
            break; // Sel
        case 0x9B:
            ret = "Keyboard Cancel";
            break; // Sel
        case 0x9C:
            ret = "Keyboard Clear";
            break; // Sel
        case 0x9D:
            ret = "Keyboard Prior";
            break; // Sel
        case 0x9E:
            ret = "Keyboard Return";
            break; // Sel
        case 0x9F:
            ret = "Keyboard Separator";
            break; // Sel
        case 0xA0:
            ret = "Keyboard Out";
            break; // Sel
        case 0xA1:
            ret = "Keyboard Oper";
            break; // Sel
        case 0xA2:
            ret = "Keycboard Clear/Again";
            break; // Sel
        case 0xA3:
            ret = "Keyboard CrSel/Props";
            break; // Sel
        case 0xA4:
            ret = "Keyboard ExSel";
            break; // Sel
        case 0xB0:
            ret = "Keypad 00";
            break; // Sel
        case 0xB1:
            ret = "Keypad 000";
            break; // Sel
        case 0xB2:
            ret = "Thousands Separator";
            break; // Sel
        case 0xB3:
            ret = "Decimal Separator";
            break; // Sel
        case 0xB4:
            ret = "Currency Unit";
            break; // Sel
        case 0xB5:
            ret = "Currency Sub-unit";
            break; // Sel
        case 0xB6:
            ret = "Keypad (";
            break; // Sel
        case 0xB7:
            ret = "Keypad )";
            break; // Sel
        case 0xB8:
            ret = "Keypad {";
            break; // Sel
        case 0xB9:
            ret = "Keypad }";
            break; // Sel
        case 0xBA:
            ret = "Keypad Tab";
            break; // Sel
        case 0xBB:
            ret = "Keypad Backspace";
            break; // Sel
        case 0xBC:
            ret = "Keypad A";
            break; // Sel
        case 0xBD:
            ret = "Keypad B";
            break; // Sel
        case 0xBE:
            ret = "Keypad C";
            break; // Sel
        case 0xBF:
            ret = "Keypad D";
            break; // Sel
        case 0xC0:
            ret = "Keypad E";
            break; // Sel
        case 0xC1:
            ret = "Keypad F";
            break; // Sel
        case 0xC2:
            ret = "Keypad XOR";
            break; // Sel
        case 0xC3:
            ret = "Keypad ∧";
            break; // Sel
        case 0xC4:
            ret = "Keypad %";
            break; // Sel
        case 0xC5:
            ret = "Keypad <";
            break; // Sel
        case 0xC6:
            ret = "Keypad >";
            break; // Sel
        case 0xC7:
            ret = "Keypad &";
            break; // Sel
        case 0xC8:
            ret = "Keypad &&";
            break; // Sel
        case 0xC9:
            ret = "Keypad |";
            break; // Sel
        case 0xCA:
            ret = "Keypad ||";
            break; // Sel
        case 0xCB:
            ret = "Keypad :";
            break; // Sel
        case 0xCC:
            ret = "Keypad #";
            break; // Sel
        case 0xCD:
            ret = "Keypad Space";
            break; // Sel
        case 0xCE:
            ret = "Keypad @";
            break; // Sel
        case 0xCF:
            ret = "Keypad !";
            break; // Sel
        case 0xD0:
            ret = "Keypad Memory Store";
            break; // Sel
        case 0xD1:
            ret = "Keypad Memory Recall";
            break; // Sel
        case 0xD2:
            ret = "Keypad Memory Clear";
            break; // Sel
        case 0xD3:
            ret = "Keypad Memory Add";
            break; // Sel
        case 0xD4:
            ret = "Keypad Memory Subtract";
            break; // Sel
        case 0xD5:
            ret = "Keypad Memory Multiply";
            break; // Sel
        case 0xD6:
            ret = "Keypad Memory Divide";
            break; // Sel
        case 0xD7:
            ret = "Keypad +/-";
            break; // Sel
        case 0xD8:
            ret = "Keypad Clear";
            break; // Sel
        case 0xD9:
            ret = "Keypad Clear Entry";
            break; // Sel
        case 0xDA:
            ret = "Keypad Binary";
            break; // Sel
        case 0xDB:
            ret = "Keypad Octal";
            break; // Sel
        case 0xDC:
            ret = "Keypad Decimal";
            break; // Sel
        case 0xDD:
            ret = "Keypad Hexadecimal";
            break; // Sel
        case 0xE0:
            ret = "Keyboard LeftControl";
            break; // DV 58 ✓ ✓ ✓ 4/101/104
        case 0xE1:
            ret = "Keyboard LeftShift";
            break; // DV 44 ✓ ✓ ✓ 4/101/104
        case 0xE2:
            ret = "Keyboard LeftAlt";
            break; // DV 60 ✓ ✓ ✓ 4/101/104
        case 0xE3:
            ret = "Keyboard Left GUI";
            break; // DV 127 ✓ ✓ ✓ 104
        case 0xE4:
            ret = "Keyboard RightControl";
            break; // DV 64 ✓ ✓ ✓ 101/104
        case 0xE5:
            ret = "Keyboard RightShift";
            break; // DV 57 ✓ ✓ ✓ 4/101/104
        case 0xE6:
            ret = "Keyboard RightAlt";
            break; // DV 62 ✓ ✓ ✓ 101/104
        case 0xE7:
            ret = "Keyboard Right GUI";
            break; // DV 128 ✓ ✓ ✓ 104
        // A5-AF Reserved
        // DE-DF Reserved
        // E8-FFFF Reserved
        default:
            ret = "Reserved";
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=keyboard.js.map
