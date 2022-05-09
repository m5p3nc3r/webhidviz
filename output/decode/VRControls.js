function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        case 0x01:
            ret = "Belt";
            break; // CA 6.1
        case 0x02:
            ret = "Body Suit";
            break; // CA 6.1
        case 0x03:
            ret = "Flexor";
            break; // CP 6.1
        case 0x04:
            ret = "Glove";
            break; // CA 6.1
        case 0x05:
            ret = "Head Tracker";
            break; // CP 6.1
        case 0x06:
            ret = "Head Mounted Display";
            break; // CA 6.1
        case 0x07:
            ret = "Hand Tracker";
            break; // CA 6.1
        case 0x08:
            ret = "Oculometer";
            break; // CA 6.1
        case 0x09:
            ret = "Vest";
            break; // CA 6.1
        case 0x0A:
            ret = "Animatronic Device";
            break; // CA 6.1
        case 0x20:
            ret = "Stereo Enable";
            break; // OOC 6.2
        case 0x21:
            ret = "Display Enable";
            break; // OOC 6.2
        // 0B-1F Reserved
        // 22-FFFF Reserved
        default:
            ret = "Reserved";
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=VRControls.js.map
