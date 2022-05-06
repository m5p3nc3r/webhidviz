export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "No button pressed"; break;
        default: ret = `Button ${usage}`; break;
    }
    return ret;
}
