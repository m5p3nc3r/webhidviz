export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "U2F Authenticator Device"; break;// CA 37.1
        case 0x20: ret = "Input Report Data"; break;// DV 37.1
        case 0x21: ret = "Output Report Data"; break;// DV 37.1

        // 02-1F Reserved
        // 22-FFFF Reserved
        default: ret = "Reserved"; break;
    }
    return ret;
}
