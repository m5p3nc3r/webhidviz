export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "Braille Display"; break;// CA 24.1
        case 0x02: ret = "Braille Row"; break;// NAry 24.2
        case 0x03: ret = "8 Dot Braille Cell"; break;// DV 24.2
        case 0x04: ret = "6 Dot Braille Cell"; break;// DV 24.2
        case 0x05: ret = "Number of Braille Cells"; break;// DV 24.2
        case 0x06: ret = "Screen Reader Control"; break;// NAry 24.5
        case 0x07: ret = "Screen Reader Identifier"; break;// DV 24.6
        case 0xFA: ret = "Router Set 1"; break;// NAry 24.3
        case 0xFB: ret = "Router Set 2"; break;// NAry 24.3
        case 0xFC: ret = "Router Set 3"; break;// NAry 24.3
        case 0x100: ret = "Router Key"; break;// Sel 24.3
        case 0x101: ret = "Row Router Key"; break;// Sel 24.3
        case 0x200: ret = "Braille Buttons"; break;// NAry 24.4
        case 0x201: ret = "Braille Keyboard Dot 1"; break;// Sel 24.4
        case 0x202: ret = "Braille Keyboard Dot 2"; break;// Sel 24.4
        case 0x203: ret = "Braille Keyboard Dot 3"; break;// Sel 24.4
        case 0x204: ret = "Braille Keyboard Dot 4"; break;// Sel 24.4
        case 0x205: ret = "Braille Keyboard Dot 5"; break;// Sel 24.4
        case 0x206: ret = "Braille Keyboard Dot 6"; break;// Sel 24.4
        case 0x207: ret = "Braille Keyboard Dot 7"; break;// Sel 24.4
        case 0x208: ret = "Braille Keyboard Dot 8"; break;// Sel 24.4
        case 0x209: ret = "Braille Keyboard Space"; break;// Sel 24.4
        case 0x20A: ret = "Braille Keyboard Left Space"; break;// Sel 24.4
        case 0x20B: ret = "Braille Keyboard Right Space"; break;// Sel 24.4
        case 0x20C: ret = "Braille Face Controls"; break;// NAry 24.4
        case 0x20D: ret = "Braille Left Controls"; break;// NAry 24.4
        case 0x20E: ret = "Braille Right Controls"; break;// NAry 24.4
        case 0x20F: ret = "Braille Top Controls"; break;// NAry 24.4
        case 0x210: ret = "Braille Joystick Center"; break;// Sel 24.4
        case 0x211: ret = "Braille Joystick Up"; break;// Sel 24.4
        case 0x212: ret = "Braille Joystick Down"; break;// Sel 24.4
        case 0x213: ret = "Braille Joystick Left"; break;// Sel 24.4
        case 0x214: ret = "Braille Joystick Right"; break;// Sel 24.4
        case 0x215: ret = "Braille D-Pad Center"; break;// Sel 24.4
        case 0x216: ret = "Braille D-Pad Up"; break;// Sel 24.4
        case 0x217: ret = "Braille D-Pad Down"; break;// Sel 24.4
        case 0x218: ret = "Braille D-Pad Left"; break;// Sel 24.4
        case 0x219: ret = "Braille D-Pad Right"; break;// Sel 24.4
        case 0x21A: ret = "Braille Pan Left"; break;// Sel 24.4
        case 0x21B: ret = "Braille Pan Right"; break;// Sel 24.4
        case 0x21C: ret = "Braille Rocker Up"; break;// Sel 24.4
        case 0x21D: ret = "Braille Rocker Down"; break;// Sel 24.4
        case 0x21E: ret = "Braille Rocker Press"; break;// Sel 24.4

        // 08-F9 Reserved
        // FD-FF Reserved
        // 102-1FF Reserved
        // 21F-FFFF Reserved
        default: ret = "Reserved"; break;
    }
    return ret;
}
