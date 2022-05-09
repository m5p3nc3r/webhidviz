function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Reserved";
            break;
        default:
            ret = `Instance ${usage}`;
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=ordinal.js.map
