function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        case 0x01:
            ret = "Monitor Control";
            break; // CA 26.1
        case 0x02:
            ret = "EDID Information";
            break; // SV 26.1
        case 0x03:
            ret = "VDIF Information";
            break; // SV 26.1
        case 0x04:
            ret = "VESA Version";
            break; // SV 26.1
        //05-FFFF Reserved
        default:
            ret = "Reserved";
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=monitor.js.map
