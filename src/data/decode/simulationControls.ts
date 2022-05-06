export function decode(usage: number) : string {
    let ret="";
    switch(usage) {
        case 0x00: ret = "Undefined"; break;
        case 0x01: ret = "Flight Simulation Device"; break;// CA 5.2
        case 0x02: ret = "Automobile Simulation Device"; break;// CA 5.3
        case 0x03: ret = "Tank Simulation Device"; break;// CA 5.4
        case 0x04: ret = "Spaceship Simulation Device"; break;// CA 5.2
        case 0x05: ret = "Submarine Simulation Device"; break;// CA 5.5
        case 0x06: ret = "Sailing Simulation Device"; break;// CA 5.5
        case 0x07: ret = "Motorcycle Simulation Device"; break;// CA 5.6
        case 0x08: ret = "Sports Simulation Device"; break;// CA 5.1
        case 0x09: ret = "Airplane Simulation Device"; break;// CA 5.2
        case 0x0A: ret = "Helicopter Simulation Device"; break;// CA 5.2
        case 0x0B: ret = "Magic Carpet Simulation Device"; break;// CA 5.7
        case 0x0C: ret = "Bicycle Simulation Device"; break;// CA 5.6
        case 0x20: ret = "Flight Control Stick"; break;// CA 5.2
        case 0x21: ret = "Flight Stick"; break;// CA 5.2
        case 0x22: ret = "Cyclic Control"; break;// CP 5.2
        case 0x23: ret = "Cyclic Trim"; break;// CP 5.2
        case 0x24: ret = "Flight Yoke"; break;// CA 5.2
        case 0x25: ret = "Track Control"; break;// CP 5.4
        case 0xB0: ret = "Aileron"; break;// DV 5.2
        case 0xB1: ret = "Aileron Trim"; break;// DV 5.2
        case 0xB2: ret = "Anti-Torque Control"; break;// DV 5.2
        case 0xB3: ret = "Autopilot Enable"; break;// OOC 5.2
        case 0xB4: ret = "Chaff Release"; break;// OSC 5.2
        case 0xB5: ret = "Collective Control"; break;// DV 5.2
        case 0xB6: ret = "Dive Brake"; break;// DV 5.2
        case 0xB7: ret = "Electronic Countermeasures"; break;// OOC 5.2
        case 0xB8: ret = "Elevator"; break;// DV 5.2
        case 0xB9: ret = "Elevator Trim"; break;// DV 5.2
        case 0xBA: ret = "Rudder"; break;// DV 5.2
        case 0xBB: ret = "Throttle"; break;// DV 5.2
        case 0xBC: ret = "Flight Communications"; break;// OOC 5.2
        case 0xBD: ret = "Flare Release"; break;// OSC 5.2
        case 0xBE: ret = "Landing Gear"; break;// OOC 5.2
        case 0xBF: ret = "Toe Brake"; break;// DV 5.2
        case 0xC0: ret = "Trigger"; break;// MC 5.2
        case 0xC1: ret = "Weapons Arm"; break;// OOC 5.2
        case 0xC2: ret = "Weapons Select"; break;// OSC 5.2
        case 0xC3: ret = "Wing Flaps"; break;// DV 5.2
        case 0xC4: ret = "Accelerator"; break;// DV 5.3
        case 0xC5: ret = "Brake"; break;// DV 5.3
        case 0xC6: ret = "Clutch"; break;// DV 5.3
        case 0xC7: ret = "Shifter"; break;// DV 5.3
        case 0xC8: ret = "Steering"; break;// DV 5.3
        case 0xC9: ret = "Turret Direction"; break;// DV 5.4
        case 0xCA: ret = "Barrel Elevation"; break;// DV 5.4
        case 0xCB: ret = "Dive Plane"; break;// DV 5.5
        case 0xCC: ret = "Ballast"; break;// DV 5.5
        case 0xCD: ret = "Bicycle Crank"; break;// DV 5.6
        case 0xCE: ret = "Handle Bars"; break;// DV 5.6
        case 0xCF: ret = "Front Brake"; break;// DV 5.6
        case 0xD0: ret = "Rear Brake"; break;// DV 5.6
        // 0D-1F Reserved
        // 26-AF Reserved
        // D1-FFFF Reserved
        default: ret="Reserved"; break;
    }
    return ret
}
