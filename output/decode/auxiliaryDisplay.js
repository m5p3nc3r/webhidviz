function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        case 0x01:
            ret = " Alphanumeric Display";
            break; // CA 21.1
        case 0x02:
            ret = " Auxiliary Display";
            break; // [2] CA 21.2
        case 0x20:
            ret = " Display Attributes Report";
            break; // CL 21.1.1
        case 0x21:
            ret = " ASCII Character Set";
            break; // SF 21.1.1
        case 0x22:
            ret = " Data Read Back";
            break; // SF 21.1.1
        case 0x23:
            ret = " Font Read Back";
            break; // SF 21.1.1
        case 0x24:
            ret = " Display Control Report";
            break; // CL 21.1.2
        case 0x25:
            ret = " Clear Display";
            break; // DF 21.1.2
        case 0x26:
            ret = " Display Enable";
            break; // DF 21.1.2
        case 0x27:
            ret = " Screen Saver Delay";
            break; // SV/DV 21.1.2
        case 0x28:
            ret = " Screen Saver Enable";
            break; // DF 21.1.2
        case 0x29:
            ret = " Vertical Scroll";
            break; // SF/DF 21.1.3
        case 0x2A:
            ret = " Horizontal Scroll";
            break; // SF/DF 21.1.3
        case 0x2B:
            ret = " Character Report";
            break; // CL 21.1.4
        case 0x2C:
            ret = " Display Data";
            break; // DV 21.1.4
        case 0x2D:
            ret = " Display Status";
            break; // CL 21.1.5
        case 0x2E:
            ret = " Stat Not Ready";
            break; // Sel 21.1.5
        case 0x2F:
            ret = " Stat Ready";
            break; // Sel 21.1.5
        case 0x30:
            ret = " Err Not a loadable character";
            break; // Sel 21.1.5
        case 0x31:
            ret = " Err Font data cannot be read";
            break; // Sel 21.1.5
        case 0x32:
            ret = " Cursor Position Report";
            break; // Sel 21.1.6
        case 0x33:
            ret = " Row";
            break; // DV 21.1.6
        case 0x34:
            ret = " Column";
            break; // DV 21.1.6
        case 0x35:
            ret = " Rows";
            break; // SV 21.1.6
        case 0x36:
            ret = " Columns";
            break; // SV 21.1.6
        case 0x37:
            ret = " Cursor Pixel Positioning";
            break; // SF 21.1.6
        case 0x38:
            ret = " Cursor Mode";
            break; // DF 21.1.6
        case 0x39:
            ret = " Cursor Enable";
            break; // DF 21.1.6
        case 0x3A:
            ret = " Cursor Blink";
            break; // DF 21.1.6
        case 0x3B:
            ret = " Font Report";
            break; // CL 21.1.7
        case 0x3C:
            ret = " Font Data Buffered Bytes";
            break; // 21.1.7
        case 0x3D:
            ret = " Character Width";
            break; // SV 21.1.7
        case 0x3E:
            ret = " Character Height";
            break; // SV 21.1.7
        case 0x3F:
            ret = " Character Spacing Horizontal";
            break; // SV 21.1.7
        case 0x40:
            ret = " Character Spacing Vertical";
            break; // SV 21.1.7
        case 0x41:
            ret = " Unicode Character";
            break; // Set SF 21.1.1
        case 0x42:
            ret = " Font 7-Segment";
            break; // SF 21.1.1
        case 0x43:
            ret = " 7-Segment Direct Map";
            break; // SF 21.1.1
        case 0x44:
            ret = " Font 14-Segment";
            break; // SF 21.1.1
        case 0x45:
            ret = " 14-Segment Direct";
            break; // Map SF 21.1.1
        case 0x46:
            ret = " Display Brightness";
            break; // DV 21.1.2
        case 0x47:
            ret = " Display Contrast";
            break; // DV 21.1.2
        case 0x48:
            ret = " Character Attribute";
            break; // CL 21.1.1
        case 0x49:
            ret = " Attribute Readback";
            break; // SF 21.1.1
        case 0x4A:
            ret = " Attribute Data";
            break; // DV 21.1.4
        case 0x4B:
            ret = " Char Attr Enhance";
            break; // OOC 21.1.1
        case 0x4C:
            ret = " Char Attr Underline";
            break; // OOC 21.1.1
        case 0x4D:
            ret = " Char Attr Blink";
            break; // OOC 21.1.1
        case 0x80:
            ret = " Bitmap Size X";
            break; // [2] SV 21.2.1
        case 0x81:
            ret = " Bitmap Size Y";
            break; // [2] SV 21.2.1
        case 0x82:
            ret = " Max Blit Size";
            break; // [2] SV 21.2.4
        case 0x83:
            ret = " Bit Depth Format";
            break; // [2] SV 21.2
        case 0x84:
            ret = " Display Orientation";
            break; // [2] DV 21.2.2
        case 0x85:
            ret = " Palette Report";
            break; // [2] CL 21.2.3
        case 0x86:
            ret = " Palette Data Size";
            break; // [2] SV 21.2.3
        case 0x87:
            ret = " Palette Data Offset";
            break; // [2] SV 21.2.3
        case 0x88:
            ret = " Palette Data [2] Buffered Bytes";
            break; // 21.2.3
        case 0x8A:
            ret = " Blit Report";
            break; // [2] CL 21.2.4
        case 0x8B:
            ret = " Blit Rectangle X1";
            break; // [2] SV 21.2.4
        case 0x8C:
            ret = " Blit Rectangle Y1";
            break; // [2] SV 21.2.4
        case 0x8D:
            ret = " Blit Rectangle X2";
            break; // [2] SV 21.2.4
        case 0x8E:
            ret = " Blit Rectangle Y2";
            break; // [2] SV 21.2.4
        case 0x8F:
            ret = " Blit Data";
            break; // [2] Buffered Bytes 21.2.4
        case 0x90:
            ret = " Soft Button";
            break; // [2] CL 21.2.1.5
        case 0x91:
            ret = " Soft Button ID";
            break; // [2] SV 21.2.1.5
        case 0x92:
            ret = " Soft Button Side";
            break; // [2] SV 21.2.1.5
        case 0x93:
            ret = " Soft Button Offset 1";
            break; // [2] SV 21.2.1.5
        case 0x94:
            ret = " Soft Button Offset 2 ";
            break; //[2] SV 21.2.1.5
        case 0x95:
            ret = " Soft Button Report";
            break; // [2] SV 21.2.5
        case 0xC2:
            ret = " Soft Keys";
            break; // [5] SV 21.1.1
        case 0xCC:
            ret = " Display Data Extensions";
            break; // [5] SF 21.1.1
        case 0xCF:
            ret = " Character Mapping";
            break; // [5] SV 21.3
        case 0xDD:
            ret = " Unicode Equivalent";
            break; // [5] SV 21.3
        case 0xDF:
            ret = " Character Page Mapping";
            break; // [5] SV 21.3
        case 0xFF:
            ret = " Request Report";
            break; // [5] DV 21.4
        // 03-1F Reserved
        // 4E-7F Reserved
        // 89-89 Reserved
        // 96-C1 Reserved
        // C3-CB Reserved
        // CD-CE Reserved
        // D0-DC Reserved
        // DE-DE Reserved
        // E0-FE Reserved
        // 100-FFFF Reserved
        default:
            ret = "Reserved";
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=auxiliaryDisplay.js.map
