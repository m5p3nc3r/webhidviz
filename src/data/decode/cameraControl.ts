export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x20: ret = "Camera Auto-focus"; break;// [21] OSC 34.1
        case 0x21: ret = "Camera Shutter"; break;// [21] OSC 34.1

        // 01-1F Reserved
        // 22-FFFF Reserved
        default: ret = "Reserved"; break;
    }
    return ret;
}
