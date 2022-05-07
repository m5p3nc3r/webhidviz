export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "MSR Device Read-Only"; break;// CA 33.1
        case 0x11: ret = "Track 1 Length"; break;// DV 33.2
        case 0x12: ret = "Track 2 Length"; break;// DV 33.2
        case 0x13: ret = "Track 3 Length"; break;// DV 33.2
        case 0x14: ret = "Track JIS Length"; break;// DV 33.2
        case 0x20: ret = "Track Data"; break;// SF/DF/DV 33.2
        case 0x21: ret = "Track 1 Data"; break;// SF/DF/DV 33.2
        case 0x22: ret = "Track 2 Data"; break;// SF/DF/DV 33.2
        case 0x23: ret = "Track 3 Data"; break;// SF/DF/DV 33.2
        case 0x24: ret = "Track JIS Data"; break;// SF/DF/DV 33.2

        // 02-10 Reserved
        // 15-1F Reserved
        // 25-FFFF Reserved
        default: ret = "Reserved"; break;
    }
    return ret;
}
