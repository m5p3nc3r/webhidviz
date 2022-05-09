function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        default:
            ret = "TODO: Implement decode";
            break;
    }
    return ret;
}

export { decode };
//# sourceMappingURL=gamingDevice.js.map
