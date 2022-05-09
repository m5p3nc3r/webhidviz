function decode(usage) {
    let ret = "";
    switch (usage) {
        case 0x00:
            ret = "Undefined";
            break;
        case 0x01:
            ret = "Sensor";
            break; // [12] CA/CP 22.1
        case 0x10:
            ret = "Biometric";
            break; // [12] CA/CP 22.1
        case 0x11:
            ret = "Biometric: Human Presence";
            break; // [12] CA/CP 22.1
        case 0x12:
            ret = "Biometric: Human Proximity";
            break; // [12] CA/CP 22.1
        case 0x13:
            ret = "Biometric: Human Touch";
            break; // [12] CA/CP 22.1
        case 0x14:
            ret = "Biometric: Blood Pressure";
            break; // [30] CA/CP 22.1
        case 0x15:
            ret = "Biometric: Body Temperature";
            break; // [30] CA/CP 22.1
        case 0x16:
            ret = "Biometric: Heart Rate";
            break; // [30] CA/CP 22.1
        case 0x17:
            ret = "Biometric: Heart Rate Variability";
            break; // [30] CA/CP 22.1
        case 0x18:
            ret = "Biometric: Peripheral Oxygen Saturation";
            break; // [30] CA/CP 22.1
        case 0x19:
            ret = "Biometric: Respiratory Rate";
            break; // [30] CA/CP 22.1
        case 0x20:
            ret = "Electrical";
            break; // [12] CA/CP 22.1
        case 0x21:
            ret = "Electrical: Capacitance";
            break; // [12] CA/CP 22.1
        case 0x22:
            ret = "Electrical: Current";
            break; // [12] CA/CP 22.1
        case 0x23:
            ret = "Electrical: Power";
            break; // [12] CA/CP 22.1
        case 0x24:
            ret = "Electrical: Inductance";
            break; // [12] CA/CP 22.1
        case 0x25:
            ret = "Electrical: Resistance";
            break; // [12] CA/CP 22.1
        case 0x26:
            ret = "Electrical: Voltage";
            break; // [12] CA/CP 22.1
        case 0x27:
            ret = "Electrical: Potentiometer";
            break; // [12] CA/CP 22.1
        case 0x28:
            ret = "Electrical: Frequency";
            break; // [12] CA/CP 22.1
        case 0x29:
            ret = "Electrical: Period";
            break; // [12] CA/CP 22.1
        case 0x30:
            ret = "Environmental";
            break; // [12] CA/CP 22.1
        case 0x31:
            ret = "Environmental: Atmospheric Pressure";
            break; // [12] CA/CP 22.1
        case 0x32:
            ret = "Environmental: Humidity";
            break; // [12] CA/CP 22.1
        case 0x33:
            ret = "Environmental: Temperature";
            break; // [12] CA/CP 22.1
        case 0x34:
            ret = "Environmental: Wind Direction";
            break; // [12] CA/CP 22.1
        case 0x35:
            ret = "Environmental: Wind Speed";
            break; // [12] CA/CP 22.1
        case 0x36:
            ret = "Environmental: Air Quality";
            break; // [30] CA/CP 22.1
        case 0x37:
            ret = "Environmental: Heat Index";
            break; // [30] CA/CP 22.1
        case 0x38:
            ret = "Environmental: Surface Temperature";
            break; // [30] CA/CP 22.1
        case 0x39:
            ret = "Environmental: Volatile Organic Compounds";
            break; // [30] CA/CP 22.1
        case 0x3A:
            ret = "Environmental: Object Presence";
            break; // [50] CA/CP 22.1
        case 0x3B:
            ret = "Environmental: Object Proximity";
            break; // [50] CA/CP 22.1
        case 0x40:
            ret = "Light";
            break; // [12] CA/CP 22.1
        case 0x41:
            ret = "Light: Ambient Light";
            break; // [12] CA/CP 22.1
        case 0x42:
            ret = "Light: Consumer Infrared";
            break; // [12] CA/CP 22.1
        case 0x43:
            ret = "Light: Infrared Light";
            break; // [30] CA/CP 22.1
        case 0x44:
            ret = "Light: Visible Light";
            break; // [30] CA/CP 22.1
        case 0x45:
            ret = "Light: Ultraviolet Light";
            break; // [30] CA/CP 22.1
        case 0x50:
            ret = "Location";
            break; // [12] CA/CP 22.1
        case 0x51:
            ret = "Location: Broadcast";
            break; // [12] CA/CP 22.1
        case 0x52:
            ret = "Location: Dead Reckoning";
            break; // [12] CA/CP 22.1
        case 0x53:
            ret = "Location: GPS (Global Positioning System)";
            break; // [12] CA/CP 22.1
        case 0x54:
            ret = "Location: Lookup";
            break; // [12] CA/CP 22.1
        case 0x55:
            ret = "Location: Other";
            break; // [12] CA/CP 22.1
        case 0x56:
            ret = "Location: Static";
            break; // [12] CA/CP 22.1
        case 0x57:
            ret = "Location: Triangulation";
            break; // [12] CA/CP 22.1
        case 0x60:
            ret = "Mechanical";
            break; // [12] CA/CP 22.1
        case 0x61:
            ret = "Mechanical: Boolean Switch";
            break; // [12] CA/CP 22.1
        case 0x62:
            ret = "Mechanical: Boolean Switch Array";
            break; // [12] CA/CP 22.1
        case 0x63:
            ret = "Mechanical: Multivalue Switch";
            break; // [12] CA/CP 22.1
        case 0x64:
            ret = "Mechanical: Force";
            break; // [12] CA/CP 22.1
        case 0x65:
            ret = "Mechanical: Pressure";
            break; // [12] CA/CP 22.1
        case 0x66:
            ret = "Mechanical: Strain";
            break; // [12] CA/CP 22.1
        case 0x67:
            ret = "Mechanical: Weight";
            break; // [12] CA/CP 22.1
        case 0x68:
            ret = "Mechanical: Haptic Vibrator";
            break; // [12] CA/CP 22.1
        case 0x69:
            ret = "Mechanical: Hall Effect Switch";
            break; // [12] CA/CP 22.1
        case 0x70:
            ret = "Motion";
            break; // [12] CA/CP 22.1
        case 0x71:
            ret = "Motion: Accelerometer 1D";
            break; // [12] CA/CP 22.1
        case 0x72:
            ret = "Motion: Accelerometer 2D";
            break; // [12] CA/CP 22.1
        case 0x73:
            ret = "Motion: Accelerometer 3D";
            break; // [12] CA/CP 22.1
        case 0x74:
            ret = "Motion: Gyrometer 1D";
            break; // [12] CA/CP 22.1
        case 0x75:
            ret = "Motion: Gyrometer 2D";
            break; // [12] CA/CP 22.1
        case 0x76:
            ret = "Motion: Gyrometer 3D";
            break; // [12] CA/CP 22.1
        case 0x77:
            ret = "Motion: Motion Detector";
            break; // [12] CA/CP 22.1
        case 0x78:
            ret = "Motion: Speedometer";
            break; // [12] CA/CP 22.1
        case 0x79:
            ret = "Motion: Accelerometer";
            break; // [12] CA/CP 22.1
        case 0x7A:
            ret = "Motion: Gyrometer";
            break; // [12] CA/CP 22.1
        case 0x7B:
            ret = "Motion: Gravity Vector";
            break; // [30] CA/CP 22.1
        case 0x7C:
            ret = "Motion: Linear Accelerometer";
            break; // [30] CA/CP 22.1
        case 0x80:
            ret = "Orientation";
            break; // [12] CA/CP 22.1
        case 0x81:
            ret = "Orientation: Compass 1D";
            break; // [12] CA/CP 22.1
        case 0x82:
            ret = "Orientation: Compass 2D";
            break; // [12] CA/CP 22.1
        case 0x83:
            ret = "Orientation: Compass 3D";
            break; // [12] CA/CP 22.1
        case 0x84:
            ret = "Orientation: Inclinometer 1D";
            break; // [12] CA/CP 22.1
        case 0x85:
            ret = "Orientation: Inclinometer 2D";
            break; // [12] CA/CP 22.1
        case 0x86:
            ret = "Orientation: Inclinometer 3D";
            break; // [12] CA/CP 22.1
        case 0x87:
            ret = "Orientation: Distance 1D";
            break; // [12] CA/CP 22.1
        case 0x88:
            ret = "Orientation: Distance 2D";
            break; // [12] CA/CP 22.1
        case 0x89:
            ret = "Orientation: Distance 3D";
            break; // [12] CA/CP 22.1
        case 0x8A:
            ret = "Orientation: Device Orientation";
            break; // [12] CA/CP 22.1
        case 0x8B:
            ret = "Orientation: Compass";
            break; // [12] CA/CP 22.1
        case 0x8C:
            ret = "Orientation: Inclinometer";
            break; // [12] CA/CP 22.1
        case 0x8D:
            ret = "Orientation: Distance";
            break; // [12] CA/CP 22.1
        case 0x8E:
            ret = "Orientation: Relative Orientation";
            break; // [30] CA/CP 22.1
        case 0x8F:
            ret = "Orientation: Simple Orientation";
            break; // [30] CA/CP 22.1
        case 0x90:
            ret = "Scanner";
            break; // [12] CA/CP 22.1
        case 0x91:
            ret = "Scanner: Barcode";
            break; // [12] CA/CP 22.1
        case 0x92:
            ret = "Scanner: RFID";
            break; // [12] CA/CP 22.1
        case 0x93:
            ret = "Scanner: NFC";
            break; // [12] CA/CP 22.1
        case 0xA0:
            ret = "Time";
            break; // [12] CA/CP 22.1
        case 0xA1:
            ret = "Time: Alarm Timer";
            break; // [12] CA/CP 22.1
        case 0xA2:
            ret = "Time: Real Time Clock";
            break; // [12] CA/CP 22.1
        case 0xB0:
            ret = "Personal Activity";
            break; // [30] CA/CP 22.1
        case 0xB1:
            ret = "Personal Activity: Activity Detection";
            break; // [30] CA/CP 22.1
        case 0xB2:
            ret = "Personal Activity: Device Position";
            break; // [30] CA/CP 22.1
        case 0xB3:
            ret = "Personal Activity: Pedometer";
            break; // [30] CA/CP 22.1
        case 0xB4:
            ret = "Personal Activity: Step Detection";
            break; // [30] CA/CP 22.1
        case 0xC0:
            ret = "Orientation Extended";
            break; // [30] CA/CP 22.1
        case 0xC1:
            ret = "Orientation Extended: Geomagnetic Orientation";
            break; // [30] CA/CP 22.1
        case 0xC2:
            ret = "Oricase 0xentation Extended: Magnetometer";
            break; // [30] CA/CP 22.1
        case 0xD0:
            ret = "Gesture";
            break; // [60] CA/CP 22.1
        case 0xD1:
            ret = "Gesture: Chassis Flip Gesture";
            break; // [60] CA/CP 22.1
        case 0xD2:
            ret = "Gesture: Hinge Fold Gesture";
            break; // [60] CA/CP 22.1
        case 0xE0:
            ret = "Other";
            break; // [12] CA/CP 22.1
        case 0xE1:
            ret = "Other: Custom";
            break; // [12] CA/CP 22.1
        case 0xE2:
            ret = "Other: Generic";
            break; // [12] CA/CP 22.1
        case 0xE3:
            ret = "Other: Generic Enumerator";
            break; // [12] CA/CP 22.1
        case 0xE4:
            ret = "Other: Hinge Angle";
            break; // [59] CA/CP 22.1
        case 0xF0:
            ret = "Vendor Reserved 1";
            break; // [12] CA/CP 22.1
        case 0xF1:
            ret = "Vendor Reserved 2";
            break; // [12] CA/CP 22.1
        case 0xF2:
            ret = "Vendor Reserved 3";
            break; // [12] CA/CP 22.1
        case 0xF3:
            ret = "Vendor Reserved 4";
            break; // [12] CA/CP 22.1
        case 0xF4:
            ret = "Vendor Reserved 5";
            break; // [12] CA/CP 22.1
        case 0xF5:
            ret = "Vendor Reserved 6";
            break; // [12] CA/CP 22.1
        case 0xF6:
            ret = "Vendor Reserved 7";
            break; // [12] CA/CP 22.1
        case 0xF7:
            ret = "Vendor Reserved 8";
            break; // [12] CA/CP 22.1
        case 0xF8:
            ret = "Vendor Reserved 9";
            break; // [12] CA/CP 22.1
        case 0xF9:
            ret = "Vendor Reserved 10";
            break; // [12] CA/CP 22.1
        case 0xFA:
            ret = "Vendor Reserved 11";
            break; // [12] CA/CP 22.1
        case 0xFB:
            ret = "Vendor Reserved 12";
            break; // [12] CA/CP 22.1
        case 0xFC:
            ret = "Vendor Reserved 13";
            break; // [12] CA/CP 22.1
        case 0xFD:
            ret = "Vendor Reserved 14";
            break; // [12] CA/CP 22.1
        case 0xFE:
            ret = "Vendor Reserved 15";
            break; // [12] CA/CP 22.1
        case 0xFF:
            ret = "Vendor Reserved 16";
            break; // [12] CA/CP 22.1
        case 0x200:
            ret = "Event";
            break; //  [12] DV 22.3
        case 0x201:
            ret = "Event: Sensor State";
            break; //  [12] NAry 22.3
        case 0x202:
            ret = "Event: Sensor Event";
            break; //  [12] NAry 22.4
        case 0x300:
            ret = "Property";
            break; //  [12] DV 22.5
        case 0x301:
            ret = "Property: Friendly Name";
            break; //  [12] SV 22.5
        case 0x302:
            ret = "Property: Persistent Unique ID";
            break; //  [12] DV 22.5
        case 0x303:
            ret = "Property: Sensor Status";
            break; //  [12] DV 22.5
        case 0x304:
            ret = "Property: Minimum Report Interval";
            break; //  [12] SV 22.5
        case 0x305:
            ret = "Property: Sensor Manufacturer";
            break; //  [12] SV 22.5
        case 0x306:
            ret = "Property: Sensor Model";
            break; //  [12] SV 22.5
        case 0x307:
            ret = "Property: Sensor Serial Number";
            break; //  [12] SV 22.5
        case 0x308:
            ret = "Property: Sensor Description";
            break; //  [12] SV 22.5
        case 0x309:
            ret = "Property: Sensor Connection Type";
            break; //  [12] NAry 22.5.1
        case 0x30A:
            ret = "Property: Sensor Device Path";
            break; //  [12] DV 22.5
        case 0x30B:
            ret = "Property: Hardware Revision";
            break; //  [12] SV 22.5
        case 0x30C:
            ret = "Property: Firmware Version ";
            break; // [12] SV 22.5
        case 0x30D:
            ret = "Property: Release Date";
            break; //  [12] SV 22.5
        case 0x30E:
            ret = "Property: Report Interval";
            break; //  [12] DV 22.5
        case 0x30F:
            ret = "Property: Change Sensitivity Absolute";
            break; //  [12] DV 22.5
        case 0x310:
            ret = "Property: Change Sensitivity Percent of Range";
            break; //  [12] DV 22.5
        case 0x311:
            ret = "Property: Change Sensitivity Percent Relative ";
            break; // [12] DV 22.5
        case 0x312:
            ret = "Property: Accuracy";
            break; //  [12] DV 22.5
        case 0x313:
            ret = "Property: Resolution";
            break; //  [12] DV 22.5
        case 0x314:
            ret = "Property: Maximum";
            break; //  [12] DV 22.5
        case 0x315:
            ret = "Property: Minimum";
            break; //  [12] DV 22.5
        case 0x316:
            ret = "Property: Reporting State";
            break; //  [12] NAry 22.5.2
        case 0x317:
            ret = "Property: Sampling Rate";
            break; //  [12] DV 22.5
        case 0x318:
            ret = "Property: Response Curve";
            break; //  [12] DV 22.5
        case 0x319:
            ret = "Property: Power State";
            break; //  [12] NAry 22.5.3
        case 0x31A:
            ret = "Property: Maximum FIFO Events";
            break; //  [27] SV 22.5.4
        case 0x31B:
            ret = "Property: Report Latency";
            break; //  [27] DV 22.5.4
        case 0x31C:
            ret = "Property: Flush FIFO Events";
            break; //  [30] DF 22.5.4
        case 0x31D:
            ret = "Property: Maximum Power Consumption";
            break; //  [30] DV 22.5.4
        case 0x31E:
            ret = "Property: Is Primary";
            break; //  [50] DF 22.5
        case 0x31F:
            ret = "Property: Human Presence Detection Type";
            break; //  [69] NAry 22.6
        case 0x400:
            ret = "Data Field: Location";
            break; //  [12] DV 22.10
        case 0x402:
            ret = "Data Field: Altitude Antenna Sea Level";
            break; //  [12] SV 22.10
        case 0x403:
            ret = "Data Field: Differential Reference Station ID";
            break; //  [12] SV 22.10
        case 0x404:
            ret = "Data Field: Altitude Ellipsoid Error";
            break; //  [12] SV 22.10
        case 0x405:
            ret = "Data Field: Altitude Ellipsoid";
            break; //  [12] SV 22.10
        case 0x406:
            ret = "Data Field: Altitude Sea Level Error";
            break; //  [12] SV 22.10
        case 0x407:
            ret = "Data Field: Altitude Sea Level";
            break; //  [12] SV 22.10
        case 0x408:
            ret = "Data Field: Differential GPS Data Age";
            break; //  [12] SV 22.10
        case 0x409:
            ret = "Data Field: Error Radius";
            break; //  [12] SV 22.10
        case 0x40A:
            ret = "Data Field: Fix Quality";
            break; //  [12] NAry 22.10.2
        case 0x40B:
            ret = "Data Field: Fix Type";
            break; //  [12] NAry 22.10.3
        case 0x40C:
            ret = "Data Field: Geoidal Separation";
            break; //  [12] SV 22.10
        case 0x40D:
            ret = "Data Field: GPS Operation Mode";
            break; //  [12] NAry 22.10.4
        case 0x40E:
            ret = "Data Field: GPS Selection Mode";
            break; //  [12] NAry 22.10.5
        case 0x40F:
            ret = "Data Field: GPS Status";
            break; //  [12] NAry 22.10.6
        case 0x410:
            ret = "Data Field: Position Dilution of Precision";
            break; //  [12] SV 22.10
        case 0x411:
            ret = "Data Field: Horizontal Dilution of Precision";
            break; //  [12] SV 22.10
        case 0x412:
            ret = "Data Field: Vertical Dilution of Precision";
            break; //  [12] SV 22.10
        case 0x413:
            ret = "Data Field: Latitude";
            break; //  [12] SV 22.10
        case 0x414:
            ret = "Data Field: Longitude";
            break; //  [12] SV 22.10
        case 0x415:
            ret = "Data Field: True Heading";
            break; //  [12] SV 22.10
        case 0x416:
            ret = "Data Field: Magnetic Heading";
            break; //  [12] SV 22.10
        case 0x417:
            ret = "Data Field: Magnetic Variation";
            break; //  [12] SV 22.10
        case 0x418:
            ret = "Data Field: Speed";
            break; //  [12] SV 22.10
        case 0x419:
            ret = "Data Field: Satellites in View";
            break; //  [12] SV 22.10
        case 0x41A:
            ret = "Data Field: Satellites in View Azimuth";
            break; //  [12] SV 22.10
        case 0x41B:
            ret = "Data Field: Satellites in View Elevation";
            break; //  [12] SV 22.10
        case 0x41C:
            ret = "Data Field: Satellites in View IDs";
            break; //  [12] SV 22.10
        case 0x41D:
            ret = "Data Field: Satellites in View PRNs";
            break; //  [12] SV 22.10
        case 0x41E:
            ret = "Data Field: Satellites in View S/N Ratios";
            break; //  [12] SV 22.10
        case 0x41F:
            ret = "Data Field: Satellites Used Count";
            break; //  [12] SV 22.10
        case 0x420:
            ret = "Data Field: Satellites Used PRNs";
            break; //  [12] SV 22.10
        case 0x421:
            ret = "Data Field: NMEA Sentence";
            break; //  [12] SV 22.10
        case 0x422:
            ret = "Data Field: Address Line 1";
            break; //  [12] SV 22.10
        case 0x423:
            ret = "Data Field: Address Line 2";
            break; //  [12] SV 22.10
        case 0x424:
            ret = "Data Field: City";
            break; //  [12] SV 22.10
        case 0x425:
            ret = "Data Field: State or Province";
            break; //  [12] SV 22.10
        case 0x426:
            ret = "Data Field: Country or Region";
            break; //  [12] SV 22.10
        case 0x427:
            ret = "Data Field: Postal Code";
            break; //  [12] SV 22.10
        case 0x42A:
            ret = "Property: Location";
            break; //  [12] DV 22.10
        case 0x42B:
            ret = "Property: Location Desired Accuracy";
            break; //  [12] NAry 22.10.1
        case 0x430:
            ret = "Data Field: Environmental";
            break; //  [12] SV 22.8
        case 0x431:
            ret = "Data Field: Atmospheric Pressure";
            break; //  [12] SV 22.8
        case 0x433:
            ret = "Data Field: Relative Humidity";
            break; //  [12] SV 22.8
        case 0x434:
            ret = "Data Field: Temperature";
            break; //  [12] SV 22.8
        case 0x435:
            ret = "Data Field: Wind Direction";
            break; //  [12] SV 22.8
        case 0x436:
            ret = "Data Field: Wind Speed";
            break; //  [12] SV 22.8
        case 0x437:
            ret = "Data Field: Air Quality Index";
            break; //  [30] SV 22.8
        case 0x438:
            ret = "Data Field: Equivalent CO2";
            break; //  [30] SV 22.8
        case 0x439:
            ret = "Data Field: Volatile Organic Compound Concentration";
            break; //  [30] SV 22.8
        case 0x43A:
            ret = "Data Field: Object Presence";
            break; //  [50] SF 22.8
        case 0x43B:
            ret = "Data Field: Object Proximity Range";
            break; //  [50] SV 22.8
        case 0x43C:
            ret = "Data Field: Object Proximity Out of Range";
            break; //  [50] SF 22.8
        case 0x440:
            ret = "Property: Environmental";
            break; //  [12] SV 22.8
        case 0x441:
            ret = "Property: Reference Pressure";
            break; //  [12] SV 22.8
        case 0x450:
            ret = "Data Field: Motion";
            break; //  [12] DV 22.12
        case 0x451:
            ret = "Data Field: Motion State";
            break; //  [12] SF 22.12
        case 0x452:
            ret = "Data Field: Acceleration";
            break; //  [12] SV 22.12
        case 0x453:
            ret = "Data Field: Acceleration Axis X";
            break; //  [12] SV 22.12
        case 0x454:
            ret = "Data Field: Acceleration Axis Y";
            break; //  [12] SV 22.12
        case 0x455:
            ret = "Data Field: Acceleration Axis Z";
            break; //  [12] SV 22.12
        case 0x456:
            ret = "Data Field: Angular Velocity";
            break; //  [12] SV 22.12
        case 0x457:
            ret = "Data Field: Angular Velocity about X Axis";
            break; //  [12] SV 22.12
        case 0x458:
            ret = "Data Field: Angular Velocity about Y Axis";
            break; //  [12] SV 22.12
        case 0x459:
            ret = "Data Field: Angular Velocity about Z Axis";
            break; //  [12] SV 22.12
        case 0x45A:
            ret = "Data Field: Angular Position";
            break; //  [12] SV 22.12
        case 0x45B:
            ret = "Data Field: Angular Position about X Axis";
            break; //  [12] SV 22.12
        case 0x45C:
            ret = "Data Field: Angular Position about Y Axis";
            break; //  [12] SV 22.12
        case 0x45D:
            ret = "Data Field: Angular Position about Z Axis";
            break; //  [12] SV 22.12
        case 0x45E:
            ret = "Data Field: Motion Speed";
            break; //  [12] SV 22.12
        case 0x45F:
            ret = "Data Field: Motion Intensity";
            break; //  [12] SV 22.12
        case 0x470:
            ret = "Data Field: Orientation";
            break; //  [12] DV 22.13
        case 0x471:
            ret = "Data Field: Heading";
            break; //  [12] SV 22.13
        case 0x472:
            ret = "Data Field: Heading X Axis";
            break; //  [12] SV 22.13
        case 0x473:
            ret = "Data Field: Heading Y Axis";
            break; //  [12] SV 22.13
        case 0x474:
            ret = "Data Field: Heading Z Axis";
            break; //  [12] SV 22.13
        case 0x475:
            ret = "Data Field: Heading Compensated Magnetic North";
            break; //  [12] SV 22.13
        case 0x476:
            ret = "Data Field: Heading Compensated True North";
            break; //  [12] SV 22.13
        case 0x477:
            ret = "Data Field: Heading Magnetic North";
            break; //  [12] SV 22.13
        case 0x478:
            ret = "Data Field: Heading True North";
            break; //  [12] SV 22.13
        case 0x479:
            ret = "Data Field: Distance";
            break; //  [12] SV 22.13
        case 0x47A:
            ret = "Data Field: Distance X Axis";
            break; //  [12] SV 22.13
        case 0x47B:
            ret = "Data Field: Distance Y Axis";
            break; //  [12] SV 22.13
        case 0x47C:
            ret = "Data Field: Distance Z Axis";
            break; //  [12] SV 22.13
        case 0x47D:
            ret = "Data Field: Distance Out-of-Range";
            break; //  [12] SF 22.13
        case 0x47E:
            ret = "Data Field: Tilt";
            break; //  [12] SV 22.13
        case 0x47F:
            ret = "Data Field: Tilt X Axis";
            break; //  [12] SV 22.13
        case 0x480:
            ret = "Data Field: Tilt Y Axis";
            break; //  [12] SV 22.13
        case 0x481:
            ret = "Data Field: Tilt Z Axis";
            break; //  [12] SV 22.13
        case 0x482:
            ret = "Data Field: Rotation Matrix";
            break; //  [12] SV 22.13
        case 0x483:
            ret = "Data Field: Quaternion";
            break; //  [12] SV 22.13
        case 0x484:
            ret = "Data Field: Magnetic Flux";
            break; //  [12] SV 22.13
        case 0x485:
            ret = "Data Field: Magnetic Flux X Axis";
            break; //  [12] SV 22.13
        case 0x486:
            ret = "Data Field: Magnetic Flux Y Axis";
            break; //  [12] SV 22.13
        case 0x487:
            ret = "Data Field: Magnetic Flux Z Axis";
            break; //  [12] SV 22.13
        case 0x488:
            ret = "Data Field: Magnetometer Accuracy";
            break; //  [12] NAry 22.13.1
        case 0x489:
            ret = "Data Field: Simple Orientation Direction";
            break; //  [30] NAry 22.13.2
        case 0x490:
            ret = "Data Field: Mechanical";
            break; //  [12] DV 22.11
        case 0x491:
            ret = "Data Field: Boolean Switch State";
            break; //  [12] SF 22.11
        case 0x492:
            ret = "Data Field: Boolean Switch Array States";
            break; //  [12] SV 22.11
        case 0x493:
            ret = "Data Field: Multivalue Switch Value";
            break; //  [12] SV 22.11
        case 0x494:
            ret = "Data Field: Force";
            break; //  [12] SV 22.11
        case 0x495:
            ret = "Data Field: Absolute Pressure";
            break; //  [12] SV 22.11
        case 0x496:
            ret = "Data Field: Gauge Pressure";
            break; //  [12] SV 22.11
        case 0x497:
            ret = "Data Field: Strain";
            break; //  [12] SV 22.11
        case 0x498:
            ret = "Data Field: Weight";
            break; //  [12] SV 22.11
        case 0x4A0:
            ret = "Property: Mechanical";
            break; //  [12] DV 22.11
        case 0x4A1:
            ret = "Property: Vibration State";
            break; //  [12] DF 22.11
        case 0x4A2:
            ret = "Property: Forward Vibration Speed";
            break; //  [12] DV 22.11
        case 0x4A3:
            ret = "Property: Backward Vibration Speed";
            break; //  [12] DV 22.11
        case 0x4B0:
            ret = "Data Field: Biometric";
            break; //  [12] DV 22.6
        case 0x4B1:
            ret = "Data Field: Human Presence";
            break; //  [12] SF 22.6
        case 0x4B2:
            ret = "Data Field: Human Proximity Range";
            break; //  [12] SV 22.6
        case 0x4B3:
            ret = "Data Field: Human Proximity Out of Range";
            break; //  [12] SF 22.6
        case 0x4B4:
            ret = "Data Field: Human Touch State";
            break; //  [12] SF 22.6
        case 0x4B5:
            ret = "Data Field: Blood Pressure";
            break; //  [12] SV 22.6
        case 0x4B6:
            ret = "Data Field: Blood Pressure Diastolic";
            break; //  [30] SV 22.6
        case 0x4B7:
            ret = "Data Field: Blood Pressure Systolic";
            break; //  [30] SV 22.6
        case 0x4B8:
            ret = "Data Field: Heart Rate";
            break; //  [30] SV 22.6
        case 0x4B9:
            ret = "Data Field: Resting Heart Rate";
            break; //  [30] SV 22.6
        case 0x4BA:
            ret = "Data Field: Heartbeat Interval";
            break; //  [30] SV 22.6
        case 0x4BB:
            ret = "Data Field: Respiratory Rate";
            break; //  [30] SV 22.6
        case 0x4BC:
            ret = "Data Field: SpO2";
            break; //  [30] SV 22.6
        case 0x4BD:
            ret = "Data Field: Human Attention Detected";
            break; //  [74] MC 22.6
        case 0x4D0:
            ret = "Data Field: Light";
            break; //  [12] DV 22.9
        case 0x4D1:
            ret = "Data Field: Illuminance";
            break; //  [12] SV 22.9
        case 0x4D2:
            ret = "Data Field: Color Temperature";
            break; //  [12] SV 22.9
        case 0x4D3:
            ret = "Data Field: Chromaticity";
            break; //  [12] SV 22.9
        case 0x4D4:
            ret = "Data Field: Chromaticity X";
            break; //  [12] SV 22.9
        case 0x4D5:
            ret = "Data Field: Chromaticity Y";
            break; //  [12] SV 22.9
        case 0x4D6:
            ret = "Data Field: Consumer IR Sentence Receive";
            break; //  [12] SV 22.9
        case 0x4D7:
            ret = "Data Field: Infrared Light";
            break; //  [30] SV 22.9
        case 0x4D8:
            ret = "Data Field: Red Light";
            break; //  [30] SV 22.9
        case 0x4D9:
            ret = "Data Field: Green Light";
            break; //  [30] SV 22.9
        case 0x4DA:
            ret = "Data Field: Blue Light";
            break; //  [30] SV 22.9
        case 0x4DB:
            ret = "Data Field: Ultraviolet A Light";
            break; //  [30] SV 22.9
        case 0x4DC:
            ret = "Data Field: Ultraviolet B Light";
            break; //  [30] SV 22.9
        case 0x4DD:
            ret = "Data Field: Ultraviolet Index";
            break; //  [30] SV 22.9
        case 0x4DE:
            ret = "Data Field: Near Infrared Light";
            break; //  [50] SV 22.9
        case 0x4DF:
            ret = "Property: Light";
            break; //  [12] DV 22.9
        case 0x4E0:
            ret = "Property: Consumer IR Sentence Send";
            break; //  [12] DV 22.9
        case 0x4E2:
            ret = "Property: Auto Brightness Preferred";
            break; // [50] DF 22.9
        case 0x4E3:
            ret = "Property: Auto Color Preferred";
            break; // [50] DF 22.9
        case 0x4F0:
            ret = "Data Field: Scanner";
            break; // [12] DV 22.14
        case 0x4F1:
            ret = "Data Field: RFID Tag 40 Bit";
            break; // [12] SV 22.14
        case 0x4F2:
            ret = "Data Field: NFC Sentence Receive";
            break; // [12] SV 22.14
        case 0x4F8:
            ret = "Property: Scanner";
            break; // [12] DV 22.14
        case 0x4F9:
            ret = "Property: NFC Sentence Send";
            break; // [12] SV 22.14
        case 0x500:
            ret = "Data Field: Electrical";
            break; // [12] SV 22.7
        case 0x501:
            ret = "Data Field: Capacitance";
            break; // [12] SV 22.7
        case 0x502:
            ret = "Data Field: Current";
            break; // [12] SV 22.7
        case 0x503:
            ret = "Data Field: Electrical Power";
            break; // [12] SV 22.7
        case 0x504:
            ret = "Data Field: Inductance";
            break; // [12] SV 22.7
        case 0x505:
            ret = "Data Field: Resistance";
            break; // [12] SV 22.7
        case 0x506:
            ret = "Data Field: Voltage";
            break; // [12] SV 22.7
        case 0x507:
            ret = "Data Field: Frequency";
            break; // [12] SV 22.7
        case 0x508:
            ret = "Data Field: Period";
            break; // [12] SV 22.7
        case 0x509:
            ret = "Data Field: Percent of Range";
            break; // [12] SV 22.7
        case 0x520:
            ret = "Data Field: Time";
            break; // [12] DV 22.15
        case 0x521:
            ret = "Data Field: Year";
            break; // [12] SV 22.15
        case 0x522:
            ret = "Data Field: Month";
            break; // [12] SV 22.15
        case 0x523:
            ret = "Data Field: Day";
            break; // [12] SV 22.15
        case 0x524:
            ret = "Data Field: Day of Week";
            break; // [12] NAry 22.15.1
        case 0x525:
            ret = "Data Field: Hour";
            break; // [12] SV 22.15
        case 0x526:
            ret = "Data Field: Minute";
            break; // [12] SV 22.15
        case 0x527:
            ret = "Data Field: Second";
            break; // [12] SV 22.15
        case 0x528:
            ret = "Data Field: Millisecond";
            break; // [12] SV 22.15
        case 0x529:
            ret = "Data Field: Timestamp";
            break; // [12] SV 22.15
        case 0x52A:
            ret = "Data Field: Julian Day of Year";
            break; // [12] SV 22.15
        case 0x52B:
            ret = "Data Field: Time Since System Boot";
            break; // [30] SV 22.15
        case 0x530:
            ret = "Property: Time";
            break; // [12] DV 22.15
        case 0x531:
            ret = "Property: Time Zone Offset from UTC";
            break; // [12] DV 22.15
        case 0x532:
            ret = "Property: Time Zone Name";
            break; // [12] DV 22.15
        case 0x533:
            ret = "Property: Daylight Savings Time Observed";
            break; // [12] DF 22.15
        case 0x534:
            ret = "Property: Time Trim Adjustment";
            break; // [12] DV 22.15
        case 0x535:
            ret = "Property: Arm Alarm";
            break; // [12] DF 22.15
        case 0x540:
            ret = "Data Field: Custom";
            break; // [12] DV 22.16
        case 0x541:
            ret = "Data Field: Custom Usage";
            break; // [12] SV 22.16
        case 0x542:
            ret = "Data Field: Custom Boolean Array";
            break; // [12] SV 22.16
        case 0x543:
            ret = "Data Field: Custom Value";
            break; // [12] SV 22.16
        case 0x544:
            ret = "Data Field: Custom Value 1";
            break; // [12] SV 22.16
        case 0x545:
            ret = "Data Field: Custom Value 2";
            break; // [12] SV 22.16
        case 0x546:
            ret = "Data Field: Custom Value 3";
            break; // [12] SV 22.16
        case 0x547:
            ret = "Data Field: Custom Value 4";
            break; // [12] SV 22.16
        case 0x548:
            ret = "Data Field: Custom Value 5";
            break; // [12] SV 22.16
        case 0x549:
            ret = "Data Field: Custom Value 6";
            break; // [12] SV 22.16
        case 0x54A:
            ret = "Data Field: Custom Value 7";
            break; // [30] SV 22.16
        case 0x54B:
            ret = "Data Field: Custom Value 8";
            break; // [30] SV 22.16
        case 0x54C:
            ret = "Data Field: Custom Value 9";
            break; // [30] SV 22.16
        case 0x54D:
            ret = "Data Field: Custom Value 10";
            break; // [30] SV 22.16
        case 0x54E:
            ret = "Data Field: Custom Value 11";
            break; // [30] SV 22.16
        case 0x54F:
            ret = "Data Field: Custom Value 12";
            break; // [30] SV 22.16
        case 0x550:
            ret = "Data Field: Custom Value 13";
            break; // [30] SV 22.16
        case 0x551:
            ret = "Data Field: Custom Value 14";
            break; // [30] SV 22.16
        case 0x552:
            ret = "Data Field: Custom Value 15";
            break; // [30] SV 22.16
        case 0x553:
            ret = "Data Field: Custom Value 16";
            break; // [30] SV 22.16
        case 0x554:
            ret = "Data Field: Custom Value 17";
            break; // [30] SV 22.16
        case 0x555:
            ret = "Data Field: Custom Value 18";
            break; // [30] SV 22.16
        case 0x556:
            ret = "Data Field: Custom Value 19";
            break; // [30] SV 22.16
        case 0x557:
            ret = "Data Field: Custom Value 20";
            break; // [30] SV 22.16
        case 0x558:
            ret = "Data Field: Custom Value 21";
            break; // [30] SV 22.16
        case 0x559:
            ret = "Data Field: Custom Value 22";
            break; // [30] SV 22.16
        case 0x55A:
            ret = "Data Field: Custom Value 23";
            break; // [30] SV 22.16
        case 0x55B:
            ret = "Data Field: Custom Value 24";
            break; // [30] SV 22.16
        case 0x55C:
            ret = "Data Field: Custom Value 25";
            break; // [30] SV 22.16
        case 0x55D:
            ret = "Data Field: Custom Value 26";
            break; // [30] SV 22.16
        case 0x55E:
            ret = "Data Field: Custom Value 27";
            break; // [30] SV 22.16
        case 0x55F:
            ret = "Data Field: Custom Value 28";
            break; // [30] SV 22.16
        case 0x560:
            ret = "Data Field: Generic";
            break; // [12] DV 22.18
        case 0x561:
            ret = "Data Field: Generic GUID or PROPERTYKEY";
            break; // [12] SV 22.18
        case 0x562:
            ret = "Data Field: Generic Category GUID";
            break; // [12] SV 22.18
        case 0x563:
            ret = "Data Field: Generic Type GUID";
            break; // [12] SV 22.18
        case 0x564:
            ret = "Data Field: Generic Event PROPERTYKEY";
            break; // [12] SV 22.18
        case 0x565:
            ret = "Data Field: Generic Property PROPERTYKEY";
            break; // [12] SV 22.18
        case 0x566:
            ret = "Data Field: Generic Data Field PROPERTYKEY";
            break; // [12] SV 22.18
        case 0x567:
            ret = "Data Field: Generic Event";
            break; // [12] SV 22.18
        case 0x568:
            ret = "Data Field: Generic Property";
            break; // [12] SV 22.18
        case 0x569:
            ret = "Data Field: Generic Data Field";
            break; // [12] SV 22.18
        case 0x56A:
            ret = "Data Field: Enumerator Table Row Index";
            break; // [12] SV 22.18
        case 0x56B:
            ret = "Data Field: Enumerator Table Row Count";
            break; // [12] SV 22.18
        case 0x56C:
            ret = "Data Field: Generic GUID or PROPERTYKEY kind";
            break; // [12] NAry 22.18.1
        case 0x56D:
            ret = "Data Field: Generic GUID";
            break; // [12] SV 22.18
        case 0x56E:
            ret = "Data Field: Generic PROPERTYKEY";
            break; // [12] SV 22.18
        case 0x56F:
            ret = "Data Field: Generic Top Level Collection ID";
            break; // [12] SV 22.18
        case 0x570:
            ret = "Data Field: Generic Report ID";
            break; // [12] SV 22.18
        case 0x571:
            ret = "Data Field: Generic Report Item Position Index";
            break; // [12] SV 22.18
        case 0x572:
            ret = "Data Field: Generic Firmware VARTYPE";
            break; // [12] NAry 22.18.2
        case 0x573:
            ret = "Data Field: Generic Unit of Measure";
            break; // [12] NAry 22.18.3
        case 0x574:
            ret = "Data Field: Generic Unit Exponent";
            break; // [12] NAry 22.18.4
        case 0x575:
            ret = "Data Field: Generic Report Size";
            break; // [12] SV 22.18
        case 0x576:
            ret = "Data Field: Generic Report Count";
            break; // [12] SV 22.18
        case 0x580:
            ret = "Property: Generic";
            break; // [12] DV 22.18
        case 0x581:
            ret = "Property: Enumerator Table Row Index";
            break; // [12] DV 22.18
        case 0x582:
            ret = "Property: Enumerator Table Row Count";
            break; // [12] SV 22.18
        case 0x590:
            ret = "Data Field: Personal Activity";
            break; // [30] DV 22.19
        case 0x591:
            ret = "Data Field: Activity Type";
            break; // [30] NAry 22.19.1
        case 0x592:
            ret = "Data Field: Activity State";
            break; // [30] NAry 22.19.2
        case 0x593:
            ret = "Data Field: Device Position";
            break; // [30] NAry 22.19.3
        case 0x594:
            ret = "Data Field: Step Count";
            break; // [30] SV 22.19
        case 0x595:
            ret = "Data Field: Step Count Reset";
            break; // [30] DF 22.19
        case 0x596:
            ret = "Data Field: Step Duration";
            break; // [30] SV 22.19
        case 0x597:
            ret = "Data Field: Step Type";
            break; // [30] NAry 22.19.4
        case 0x5A0:
            ret = "Property: Minimum Activity Detection Interval";
            break; // [30] DV 22.19
        case 0x5A1:
            ret = "Property: Supported Activity Types";
            break; // [30] NAry 22.19
        case 0x5A2:
            ret = "Property: Subscribed Activity Types";
            break; // [30] NAry 22.19
        case 0x5A3:
            ret = "Property: Supported Step Types";
            break; // [30] NAry 22.19
        case 0x5A4:
            ret = "Property: Subscribed Step Types";
            break; // [30] NAry 22.19
        case 0x5A5:
            ret = "Property: Floor Height";
            break; // [30] DV 22.19
        case 0x5B0:
            ret = "Data Field: Custom Type ID";
            break; // [30] SV 22.16
        case 0x5C0:
            ret = "Property: Custom";
            break; // [50] DV 22.17
        case 0x5C1:
            ret = "Property: Custom Value 1";
            break; // [50] DV 22.17
        case 0x5C2:
            ret = "Property: Custom Value 2";
            break; // [50] DV 22.17
        case 0x5C3:
            ret = "Property: Custom Value 3";
            break; // [50] DV 22.17
        case 0x5C4:
            ret = "Property: Custom Value 4";
            break; // [50] DV 22.17
        case 0x5C5:
            ret = "Property: Custom Value 5";
            break; // [50] DV 22.17
        case 0x5C6:
            ret = "Property: Custom Value 6";
            break; // [50] DV 22.17
        case 0x5C7:
            ret = "Property: Custom Value 7";
            break; // [50] DV 22.17
        case 0x5C8:
            ret = "Property: Custom Value 8";
            break; // [50] DV 22.17
        case 0x5C9:
            ret = "Property: Custom Value 9";
            break; // [50] DV 22.17
        case 0x5CA:
            ret = "Property: Custom Value 10";
            break; // [50] DV 22.17
        case 0x5CB:
            ret = "Property: Custom Value 11";
            break; // [50] DV 22.17
        case 0x5CC:
            ret = "Property: Custom Value 12";
            break; // [50] DV 22.17
        case 0x5CD:
            ret = "Property: Custom Value 13";
            break; // [50] DV 22.17
        case 0x5CE:
            ret = "Property: Custom Value 14";
            break; // [50] DV 22.17
        case 0x5CF:
            ret = "Property: Custom Value 15";
            break; // [50] DV 22.17
        case 0x5D0:
            ret = "Property: Custom Value 16";
            break; // [50] DV 22.17
        case 0x5E0:
            ret = "Data Field: Hinge";
            break; // [59] SV/DV 22.20.1
        case 0x5E1:
            ret = "Data Field: Hinge Angle";
            break; // [59] SV/DV 22.20.1
        case 0x5F0:
            ret = "Data Field: Gesture Sensor";
            break; // [60] DV 22.20.2.3
        case 0x5F1:
            ret = "Data Field: Gesture State";
            break; // [60] NAry 22.20.2.4
        case 0x5F2:
            ret = "Data Field: Hinge Fold Initial Angle";
            break; // [60] SV 22.20.2.3
        case 0x5F3:
            ret = "Data Field: Hinge Fold Final Angle";
            break; // [60] SV 22.20.2.3
        case 0x5F4:
            ret = "Data Field: Hinge Fold Contributing Panel";
            break; // [60] NAry 22.20.2.5
        case 0x5F5:
            ret = "Data Field: Hinge Fold Type";
            break; // [60] NAry 22.20.2.6
        case 0x800:
            ret = "Sensor State: Undefined";
            break; // [12] Sel 22.3
        case 0x801:
            ret = "Sensor State: Ready";
            break; // [12] Sel 22.3
        case 0x802:
            ret = "Sensor State: Not Available";
            break; // [12] Sel 22.3
        case 0x803:
            ret = "Sensor State: No Data";
            break; // [12] Sel 22.3
        case 0x804:
            ret = "Sensor State: Initializing";
            break; // [12] Sel 22.3
        case 0x805:
            ret = "Sensor State: Access Denied";
            break; // [12] Sel 22.3
        case 0x806:
            ret = "Sensor State: Error";
            break; // [12] Sel 22.3
        case 0x810:
            ret = "Sensor Event: Unknown";
            break; // [12] Sel 22.4
        case 0x811:
            ret = "Sensor Event: State Changed";
            break; // [12] Sel 22.4
        case 0x812:
            ret = "Sensor Event: Property Changed";
            break; // [12] Sel 22.4
        case 0x813:
            ret = "Sensor Event: Data Updated";
            break; // [12] Sel 22.4
        case 0x814:
            ret = "Sensor Event: Poll Response";
            break; // [12] Sel 22.4
        case 0x815:
            ret = "Sensor Event: Change Sensitivity";
            break; // [12] Sel 22.4
        case 0x816:
            ret = "Sensor Event: Range Maximum Reached";
            break; // [12] Sel 22.4
        case 0x817:
            ret = "Sensor Event: Range Minimum Reached";
            break; // [12] Sel 22.4
        case 0x818:
            ret = "Sensor Event: High Threshold Cross Upward";
            break; // [12] Sel 22.4
        case 0x819:
            ret = "Sensor Event: High Threshold Cross Downward";
            break; // [12] Sel 22.4
        case 0x81A:
            ret = "Sensor Event: Low Threshold Cross Upward";
            break; // [12] Sel 22.4
        case 0x81B:
            ret = "Sensor Event: Low Threshold Cross Downward";
            break; // [12] Sel 22.4
        case 0x81C:
            ret = "Sensor Event: Zero Threshold Cross Upward";
            break; // [12] Sel 22.4
        case 0x81D:
            ret = "Sensor Event: Zero Threshold Cross Downward";
            break; // [12] Sel 22.4
        case 0x81E:
            ret = "Sensor Event: Period Exceeded";
            break; // [12] Sel 22.4
        case 0x81F:
            ret = "Sensor Event: Frequency Exceeded";
            break; // [12] Sel 22.4
        case 0x820:
            ret = "Sensor Event: Complex Trigger";
            break; // [12] Sel 22.4
        case 0x830:
            ret = "Connection Type: PC Integrated";
            break; // [12] Sel 22.5.1
        case 0x831:
            ret = "Connection Type: PC Attached";
            break; // [12] Sel 22.5.1
        case 0x832:
            ret = "Connection Type: PC External";
            break; // [12] Sel 22.5.1
        case 0x840:
            ret = "Reporting State: Report No Events";
            break; // [12] Sel 22.5.2
        case 0x841:
            ret = "Reporting State: Report All Events";
            break; // [12] Sel 22.5.2
        case 0x842:
            ret = "Reporting State: Report Threshold Events";
            break; // [12] Sel 22.5.2
        case 0x843:
            ret = "Reporting State: Wake On No Events";
            break; // [12] Sel 22.5.2
        case 0x844:
            ret = "Reporting State: Wake On All Events";
            break; // [12] Sel 22.5.2
        case 0x845:
            ret = "Reporting State: Wake On Threshold Events";
            break; // [12] Sel 22.5.2
        case 0x850:
            ret = "Power State: Undefined";
            break; // [12] Sel 22.5.3
        case 0x851:
            ret = "Power State: D0 Full Power";
            break; // [12] Sel 22.5.3
        case 0x852:
            ret = "Power State: D1 Low Power";
            break; // [12] Sel 22.5.3
        case 0x853:
            ret = "Power State: D2 Standby Power with Wakeup";
            break; // [12] Sel 22.5.3
        case 0x854:
            ret = "Power State: D3 Sleep with Wakeup";
            break; // [12] Sel 22.5.3
        case 0x855:
            ret = "Power State: D4 Power Off";
            break; // [12] Sel 22.5.3
        case 0x860:
            ret = "Accuracy: Default";
            break; // [12] Sel 22.10.1
        case 0x861:
            ret = "Accuracy: High";
            break; // [12] Sel 22.10.1
        case 0x862:
            ret = "Accuracy: Medium";
            break; // [12] Sel 22.10.1
        case 0x863:
            ret = "Accuracy: Low";
            break; // [12] Sel 22.10.1
        case 0x870:
            ret = "Fix Quality: No Fix";
            break; // [12] Sel 22.10.2
        case 0x871:
            ret = "Fix Quality: GPS";
            break; // [12] Sel 22.10.2
        case 0x872:
            ret = "Fix Quality: DGPS";
            break; // [12] Sel 22.10.2
        case 0x880:
            ret = "Fix Type: No Fix";
            break; // [12] Sel 22.10.3
        case 0x881:
            ret = "Fix Type: GPS SPS Mode, Fix Valid";
            break; // [12] Sel 22.10.3
        case 0x882:
            ret = "Fix Type: DGPS SPS Mode, Fix Valid";
            break; // [12] Sel 22.10.3
        case 0x883:
            ret = "Fix Type: GPS PPS Mode, Fix Valid";
            break; // [12] Sel 22.10.3
        case 0x884:
            ret = "Fix Type: Real Time Kinematic";
            break; // [12] Sel 22.10.3
        case 0x885:
            ret = "Fix Type: Float RTK";
            break; // [12] Sel 22.10.3
        case 0x886:
            ret = "Fix Type: Estimated (dead reckoned)";
            break; // [12] Sel 22.10.3
        case 0x887:
            ret = "Fix Type: Manual Input Mode";
            break; // [12] Sel 22.10.3
        case 0x888:
            ret = "Fix Type: Simulator Mode";
            break; // [12] Sel 22.10.3
        case 0x890:
            ret = "GPS Operation Mode: Manual";
            break; // [12] Sel 22.10.4
        case 0x891:
            ret = "GPS Operation Mode: Automatic";
            break; // [12] Sel 22.10.4
        case 0x8A0:
            ret = "GPS Selection Mode: Autonomous";
            break; // [12] Sel 22.10.5
        case 0x8A1:
            ret = "GPS Selection Mode: DGPS";
            break; // [12] Sel 22.10.5
        case 0x8A2:
            ret = "GPS Selection Mode: Estimated (dead reckoned)";
            break; // [12] Sel 22.10.5
        case 0x8A3:
            ret = "GPS Selection Mode: Manual Input";
            break; // [12] Sel 22.10.5
        case 0x8A4:
            ret = "GPS Selection Mode: Simulator";
            break; // [12] Sel 22.10.5
        case 0x8A5:
            ret = "GPS Selection Mode: Data Not Valid";
            break; // [12] Sel 22.10.5
        case 0x8B0:
            ret = "GPS Status Data: Valid";
            break; // [12] Sel 22.10.6
        case 0x8B1:
            ret = "GPS Status Data: Not Valid";
            break; // [12] Sel 22.10.6
        case 0x8C0:
            ret = "Day of Week: Sunday";
            break; // [12] Sel 22.15.1
        case 0x8C1:
            ret = "Day of Week: Monday";
            break; // [12] Sel 22.15.1
        case 0x8C2:
            ret = "Day of Week: Tuesday";
            break; // [12] Sel 22.15.1
        case 0x8C3:
            ret = "Day of Week: Wednesday";
            break; // [12] Sel 22.15.1
        case 0x8C4:
            ret = "Day of Week: Thursday";
            break; // [12] Sel 22.15.1
        case 0x8C5:
            ret = "Day of Week: Friday";
            break; // [12] Sel 22.15.1
        case 0x8C6:
            ret = "Day of Week: Saturday";
            break; // [12] Sel 22.15.1
        case 0x8D0:
            ret = "Kind: Category";
            break; // [12] Sel 22.18.1
        case 0x8D1:
            ret = "Kind: Type";
            break; // [12] Sel 22.18.1
        case 0x8D2:
            ret = "Kind: Event";
            break; // [12] Sel 22.18.1
        case 0x8D3:
            ret = "Kind: Property";
            break; // [12] Sel 22.18.1
        case 0x8D4:
            ret = "Kind: Data Field";
            break; // [12] Sel 22.18.1
        case 0x8E0:
            ret = "Magnetometer Accuracy: Low";
            break; // [12] Sel 22.13.1
        case 0x8E1:
            ret = "Magnetometer Accuracy: Medium";
            break; // [12] Sel 22.13.1
        case 0x8E2:
            ret = "Magnetometer Accuracy: High";
            break; // [12] Sel 22.13.1
        case 0x8F0:
            ret = "Simple Orientation Direction: Not Rotated";
            break; // [30] Sel 22.13.2
        case 0x8F1:
            ret = "Simple Orientation Direction: Rotated 90 Degrees CCW";
            break; // [30] Sel 22.13.2
        case 0x8F2:
            ret = "Simple Orientation Direction: Rotated 180 Degrees CCW";
            break; // [30] Sel 22.13.2
        case 0x8F3:
            ret = "Simple Orientation Direction: Rotated 270 Degrees CCW";
            break; // [30] Sel 22.13.2
        case 0x8F4:
            ret = "Simple Orientation Direction: Face Up";
            break; // [30] Sel 22.13.2
        case 0x8F5:
            ret = "Simple Orientation Direction: Face Down";
            break; // [30] Sel 22.13.2
        case 0x900:
            ret = "VT_NULL";
            break; // [12] Sel 22.18.2
        case 0x901:
            ret = "VT_BOOL";
            break; // [12] Sel 22.18.2
        case 0x902:
            ret = "VT_UI1";
            break; // [12] Sel 22.18.2
        case 0x903:
            ret = "VT_I1";
            break; // [12] Sel 22.18.2
        case 0x904:
            ret = "VT_UI2";
            break; // [12] Sel 22.18.2
        case 0x905:
            ret = "VT_I2";
            break; // [12] Sel 22.18.2
        case 0x906:
            ret = "VT_UI4";
            break; // [12] Sel 22.18.2
        case 0x907:
            ret = "VT_I4";
            break; // [12] Sel 22.18.2
        case 0x908:
            ret = "VT_UI8";
            break; // [12] Sel 22.18.2
        case 0x909:
            ret = "VT_I8";
            break; // [12] Sel 22.18.2
        case 0x90A:
            ret = "VT_R4";
            break; // [12] Sel 22.18.2
        case 0x90B:
            ret = "VT_R8";
            break; // [12] Sel 22.18.2
        case 0x90C:
            ret = "VT_WSTR";
            break; // [12] Sel 22.18.2
        case 0x90D:
            ret = "VT_STR";
            break; // [12] Sel 22.18.2
        case 0x90E:
            ret = "VT_CLSID";
            break; // [12] Sel 22.18.2
        case 0x90F:
            ret = "VT_VECTOR VT_UI1";
            break; // [12] Sel 22.18.2
        case 0x910:
            ret = "VT_F16E0";
            break; // [12] Sel 22.18.2
        case 0x911:
            ret = "VT_F16E1";
            break; // [12] Sel 22.18.2
        case 0x912:
            ret = "VT_F16E2";
            break; // [12] Sel 22.18.2
        case 0x913:
            ret = "VT_F16E3";
            break; // [12] Sel 22.18.2
        case 0x914:
            ret = "VT_F16E4";
            break; // [12] Sel 22.18.2
        case 0x915:
            ret = "VT_F16E5";
            break; // [12] Sel 22.18.2
        case 0x916:
            ret = "VT_F16E6";
            break; // [12] Sel 22.18.2
        case 0x917:
            ret = "VT_F16E7";
            break; // [12] Sel 22.18.2
        case 0x918:
            ret = "VT_F16E8";
            break; // [12] Sel 22.18.2
        case 0x919:
            ret = "VT_F16E9";
            break; // [12] Sel 22.18.2
        case 0x91A:
            ret = "VT_F16EA";
            break; // [12] Sel 22.18.2
        case 0x91B:
            ret = "VT_F16EB";
            break; // [12] Sel 22.18.2
        case 0x91C:
            ret = "VT_F16EC";
            break; // [12] Sel 22.18.2
        case 0x91D:
            ret = "VT_F16ED";
            break; // [12] Sel 22.18.2
        case 0x91E:
            ret = "VT_F16EE";
            break; // [12] Sel 22.18.2
        case 0x91F:
            ret = "VT_F16EF";
            break; // [12] Sel 22.18.2
        case 0x920:
            ret = "VT_F32E0";
            break; // [12] Sel 22.18.2
        case 0x921:
            ret = "VT_F32E1";
            break; // [12] Sel 22.18.2
        case 0x922:
            ret = "VT_F32E2";
            break; // [12] Sel 22.18.2
        case 0x923:
            ret = "VT_F32E3";
            break; // [12] Sel 22.18.2
        case 0x924:
            ret = "VT_F32E4";
            break; // [12] Sel 22.18.2
        case 0x925:
            ret = "VT_F32E5";
            break; // [12] Sel 22.18.2
        case 0x926:
            ret = "VT_F32E6";
            break; // [12] Sel 22.18.2
        case 0x927:
            ret = "VT_F32E7";
            break; // [12] Sel 22.18.2
        case 0x928:
            ret = "VT_F32E8";
            break; // [12] Sel 22.18.2
        case 0x929:
            ret = "VT_F32E9";
            break; // [12] Sel 22.18.2
        case 0x92A:
            ret = "VT_F32EA";
            break; // [12] Sel 22.18.2
        case 0x92B:
            ret = "VT_F32EB";
            break; // [12] Sel 22.18.2
        case 0x92C:
            ret = "VT_F32EC";
            break; // [12] Sel 22.18.2
        case 0x92D:
            ret = "VT_F32ED";
            break; // [12] Sel 22.18.2
        case 0x92E:
            ret = "VT_F32EE";
            break; // [12] Sel 22.18.2
        case 0x92F:
            ret = "VT_F32EF";
            break; // [12] Sel 22.18.2
        case 0x930:
            ret = "Activity Type: Unknown";
            break; // [30] Sel 22.19.1
        case 0x931:
            ret = "Activity Type: Stationary";
            break; // [30] Sel 22.19.1
        case 0x932:
            ret = "Activity Type: Fidgeting";
            break; // [30] Sel 22.19.1
        case 0x933:
            ret = "Activity Type: Walking";
            break; // [30] Sel 22.19.1
        case 0x934:
            ret = "Activity Type: Running";
            break; // [30] Sel 22.19.1
        case 0x935:
            ret = "Activity Type: In Vehicle";
            break; // [30] Sel 22.19.1
        case 0x936:
            ret = "Activity Type: Biking";
            break; // [30] Sel 22.19.1
        case 0x937:
            ret = "Activity Type: Idle";
            break; // [30] Sel 22.19.1
        case 0x940:
            ret = "Unit: Not Specified";
            break; // [12] Sel 22.18.3
        case 0x941:
            ret = "Unit: Lux";
            break; // [12] Sel 22.18.3
        case 0x942:
            ret = "Unit: Degrees Kelvin";
            break; // [12] Sel 22.18.3
        case 0x943:
            ret = "Unit: Degrees Celsius";
            break; // [12] Sel 22.18.3
        case 0x944:
            ret = "Unit: Pascal";
            break; // [12] Sel 22.18.3
        case 0x945:
            ret = "Unit: Newton";
            break; // [12] Sel 22.18.3
        case 0x946:
            ret = "Unit: Meters/Second";
            break; // [12] Sel 22.18.3
        case 0x947:
            ret = "Unit: Kilogram";
            break; // [12] Sel 22.18.3
        case 0x948:
            ret = "Unit: Meter";
            break; // [12] Sel 22.18.3
        case 0x949:
            ret = "Unit: Meters/Second/Second";
            break; // [12] Sel 22.18.3
        case 0x94A:
            ret = "Unit: Farad";
            break; // [12] Sel 22.18.3
        case 0x94B:
            ret = "Unit: Ampere";
            break; // [12] Sel 22.18.3
        case 0x94C:
            ret = "Unit: Watt";
            break; // [12] Sel 22.18.3
        case 0x94D:
            ret = "Unit: Henry";
            break; // [12] Sel 22.18.3
        case 0x94E:
            ret = "Unit: Ohm";
            break; // [12] Sel 22.18.3
        case 0x94F:
            ret = "Unit: Volt";
            break; // [12] Sel 22.18.3
        case 0x950:
            ret = "Unit: Hertz";
            break; // [12] Sel 22.18.3
        case 0x951:
            ret = "Unit: Bar";
            break; // [12] Sel 22.18.3
        case 0x952:
            ret = "Unit: Degrees Anti-clockwise";
            break; // [12] Sel 22.18.3
        case 0x953:
            ret = "Unit: Degrees Clockwise";
            break; // [12] Sel 22.18.3
        case 0x954:
            ret = "Unit: Degrees";
            break; // [12] Sel 22.18.3
        case 0x955:
            ret = "Unit: Degrees/Second";
            break; // [12] Sel 22.18.3
        case 0x956:
            ret = "Unit: Degrees/Second/Second";
            break; // [12] Sel 22.18.3
        case 0x957:
            ret = "Unit: Knot";
            break; // [12] Sel 22.18.3
        case 0x958:
            ret = "Unit: Percent";
            break; // [12] Sel 22.18.3
        case 0x959:
            ret = "Unit: Second";
            break; // [12] Sel 22.18.3
        case 0x95A:
            ret = "Unit: Millisecond";
            break; // [12] Sel 22.18.3
        case 0x95B:
            ret = "Unit: G";
            break; // [12] Sel 22.18.3
        case 0x95C:
            ret = "Unit: Bytes";
            break; // [12] Sel 22.18.3
        case 0x95D:
            ret = "Unit: Milligauss";
            break; // [12] Sel 22.18.3
        case 0x95E:
            ret = "Unit: Bits";
            break; // [12] Sel 22.18.3
        case 0x960:
            ret = "Activity State: No State Change";
            break; // [30] Sel 22.19.2
        case 0x961:
            ret = "Activity State: Start Activity";
            break; // [30] Sel 22.19.2
        case 0x962:
            ret = "Activity State: End Activity";
            break; // [30] Sel 22.19.2
        case 0x970:
            ret = "Exponent 0";
            break; // [12] Sel 22.18.4
        case 0x971:
            ret = "Exponent 1";
            break; // [12] Sel 22.18.4
        case 0x972:
            ret = "Exponent 2";
            break; // [12] Sel 22.18.4
        case 0x973:
            ret = "Exponent 3";
            break; // [12] Sel 22.18.4
        case 0x974:
            ret = "Exponent 4";
            break; // [12] Sel 22.18.4
        case 0x975:
            ret = "Exponent 5";
            break; // [12] Sel 22.18.4
        case 0x976:
            ret = "Exponent 6";
            break; // [12] Sel 22.18.4
        case 0x977:
            ret = "Exponent 7";
            break; // [12] Sel 22.18.4
        case 0x978:
            ret = "Exponent 8";
            break; // [12] Sel 22.18.4
        case 0x979:
            ret = "Exponent 9";
            break; // [12] Sel 22.18.4
        case 0x97A:
            ret = "Exponent A";
            break; // [12] Sel 22.18.4
        case 0x97B:
            ret = "Exponent B";
            break; // [12] Sel 22.18.4
        case 0x97C:
            ret = "Exponent C";
            break; // [12] Sel 22.18.4
        case 0x97D:
            ret = "Exponent D";
            break; // [12] Sel 22.18.4
        case 0x97E:
            ret = "Exponent E";
            break; // [12] Sel 22.18.4
        case 0x97F:
            ret = "Exponent F";
            break; // [12] Sel 22.18.4
        case 0x980:
            ret = "Device Position: Unknown";
            break; // [30] Sel 22.19.3
        case 0x981:
            ret = "Device Position: Unchanged";
            break; // [30] Sel 22.19.3
        case 0x982:
            ret = "Device Position: On Desk";
            break; // [30] Sel 22.19.3
        case 0x983:
            ret = "Device Position: In Hand";
            break; // [30] Sel 22.19.3
        case 0x984:
            ret = "Device Position: Moving in Bag";
            break; // [30] Sel 22.19.3
        case 0x985:
            ret = "Device Position: Stationary in Bag";
            break; // [30] Sel 22.19.3
        case 0x990:
            ret = "Step Type: Unknown";
            break; // [30] Sel 22.19.4
        case 0x991:
            ret = "Step Type: Running";
            break; // [30] Sel 22.19.4
        case 0x992:
            ret = "Step Type: Walking";
            break; // [30] Sel 22.19.4
        case 0x9A0:
            ret = "Gesture State: Unknown";
            break; // [60] Sel 22.20.2.4
        case 0x9A1:
            ret = "Gesture State: Started";
            break; // [60] Sel 22.20.2.4
        case 0x9A2:
            ret = "Gesture State: Completed";
            break; // [60] Sel 22.20.2.4
        case 0x9A3:
            ret = "Gesture State: Cancelled";
            break; // [60] Sel 22.20.2.4
        case 0x9B0:
            ret = "Hinge Fold Contributing Panel: Unknown";
            break; // [60] Sel 22.20.2.5
        case 0x9B1:
            ret = "Hinge Fold Contributing Panel: Panel 1";
            break; // [60] Sel 22.20.2.5
        case 0x9B2:
            ret = "Hinge Fold Contributing Panel: Panel 2";
            break; // [60] Sel 22.20.2.5
        case 0x9B3:
            ret = "Hinge Fold Contributing Panel: Both";
            break; // [60] Sel 22.20.2.5
        case 0x9B4:
            ret = "Hinge Fold Type: Unknown";
            break; // [60] Sel 22.20.2.6
        case 0x9B5:
            ret = "Hinge Fold Type: Increasing";
            break; // [60] Sel 22.20.2.6
        case 0x9B6:
            ret = "Hinge Fold Type: Decreasing";
            break; // [60] Sel 22.20.2.6
        case 0x9C0:
            ret = "Human Presence Detection Type: Vendor-Defined Non-Biometric";
            break; // [69] Sel 22.6
        case 0x9C1:
            ret = "Human Presence Detection Type: Vendor-Defined Biometric";
            break; // [69] Sel 22.6
        case 0x9C2:
            ret = "Human Presence Detection Type: Facial Biometric";
            break; // [69] Sel 22.6
        case 0x9C3:
            ret = "Human Presence Detection Type: Audio Biometric";
            break; // [69] Sel 22.6
        case 0x1000:
            ret = "Modifier: Change Sensitivity Absolute";
            break; // [12] US 22.2
        case 0x2000:
            ret = "Modifier: Maximum";
            break; // [12] US 22.2
        case 0x3000:
            ret = "Modifier: Minimum";
            break; // [12] US 22.2
        case 0x4000:
            ret = "Modifier: Accuracy";
            break; // [12] US 22.2
        case 0x5000:
            ret = "Modifier: Resolution";
            break; // [12] US 22.2
        case 0x6000:
            ret = "Modifier: Threshold High";
            break; // [12] US 22.2
        case 0x7000:
            ret = "Modifier: Threshold Low";
            break; // [12] US 22.2
        case 0x8000:
            ret = "Modifier: Calibration Offset";
            break; // [12] US 22.2
        case 0x9000:
            ret = "Modifier: Calibration Multiplier";
            break; // [12] US 22.2
        case 0xA000:
            ret = "Modifier: Report Interval";
            break; // [12] US 22.2
        case 0xB000:
            ret = "Modifier: Frequency Max";
            break; // [12] US 22.2
        case 0xC000:
            ret = "Modifier: Period Max";
            break; // [12] US 22.2
        case 0xD000:
            ret = "Modifier: Change Sensitivity Percent of Range";
            break; // [12] US 22.2
        case 0xE000:
            ret = "Modifier: Change Sensitivity Percent Relative";
            break; // [12] US 22.2
        case 0xF000:
            ret = "Modifier: Vendor Reserved";
            break; // [12] US 22.2
        // 02-0F Reserved
        // 1A-1F Reserved
        // 2A-2F Reserved
        // 3C-3F Reserved
        // 46-4F Reserved
        // 58-5F Reserved
        // 6A-6F Reserved
        // 7D-7F Reserved
        // 94-9F Reserved
        // A3-AF Reserved
        // B5-BF Reserved
        // C3-CF Reserved
        // D3-DF Reserved
        // E5-EF Reserved
        // 100-1FF Reserved
        // 203-2FF Reserved
        // 320-3FF Reserved
        // 401-401 Reserved
        // 428-429 Reserved
        // 432-432 Reserved
        // 43D-43F Reserved
        // 442-44F Reserved
        // 460-46F Reserved
        // 48A-48F Reserved
        // 499-49F Reserved
        // 4A4-4AF Reserved
        // 4BE-4CF Reserved
        // 4E1-4E1 Reserved
        // 4E4-4EF Reserved
        // 4F3-4F7 Reserved
        // 4FA-4FF Reserved
        // 50A-51F Reserved
        // 52C-52F Reserved
        // 536-53F Reserved
        // 577-57F Reserved
        // 583-58F Reserved
        // 598-59F Reserved
        // 5A6-5AF Reserved
        // 5B1-5BF Reserved
        // 5D1-5DF Reserved
        // 5E2-5EF Reserved
        // 5F6-7FF Reserved
        // 807-80F Reserved
        // 821-82F Reserved
        // 833-83F Reserved
        // 846-84F Reserved
        // 856-85F Reserved
        // 864-86F Reserved
        // 873-87F Reserved
        // 889-88F Reserved
        // 892-89F Reserved
        // 8A6-8AF Reserved
        // 8B2-8BF Reserved
        // 8C7-8CF Reserved
        // 8D5-8DF Reserved
        // 8E3-8EF Reserved
        // 8F6-8FF Reserved
        // 938-93F Reserved
        // 95F-95F Reserved
        // 963-96F Reserved
        // 986-98F Reserved
        // 993-99F Reserved
        // 9A4-9AF Reserved
        // 9B7-9BF Reserved
        // 9C4-FFF Reserved
        // 1001-10FF Reserved
        // 1800-1FFF Reserved
        // 2001-20FF Reserved
        // 2800-2FFF Reserved
        // 3001-30FF Reserved
        // 3800-3FFF Reserved
        // 4001-40FF Reserved
        // 4800-4FFF Reserved
        // 5001-50FF Reserved
        // 5800-5FFF Reserved
        // 6001-60FF Reserved
        // 6800-6FFF Reserved
        // 7001-70FF Reserved
        // 7800-7FFF Reserved
        // 8001-80FF Reserved
        // 8800-8FFF Reserved
        // 9001-90FF Reserved
        // 9800-9FFF Reserved
        // A001-A0FF Reserved
        // A800-AFFF Reserved
        // B001-B0FF Reserved
        // B800-BFFF Reserved
        // C001-C0FF Reserved
        // C800-CFFF Reserved
        // D001-D0FF Reserved
        // D800-DFFF Reserved
        // E001-E0FF Reserved
        // E800-EFFF Reserved
        // F001-F0FF Reserved
        // F800-FFFF Reserved
        default: {
            if (0x1100 <= usage && usage <= 0x17FF)
                ret = "Reserved for use as Change Sensitivity Absolute modifier range";
            else if (0x2100 <= usage && usage <= 0x27FF)
                ret = "Reserved for use as Maximum modifier range";
            else if (0x3100 <= usage && usage <= 0x37FF)
                ret = "Reserved for use as Minimum modifier range";
            else if (0x4100 <= usage && usage <= 0x47FF)
                ret = "Reserved for use as Accuracy modifier range";
            else if (0x5100 <= usage && usage <= 0x57FF)
                ret = "Reserved for use as Resolution modifier range";
            else if (0x6100 <= usage && usage <= 0x67FF)
                ret = "Reserved for use as Threshold High modifier range";
            else if (0x7100 <= usage && usage <= 0x77FF)
                ret = "Reserved for use as Threshold Low modifier range";
            else if (0x8100 <= usage && usage <= 0x87FF)
                ret = "Reserved for use as Calibration Offset modifier range";
            else if (0x9100 <= usage && usage <= 0x97FF)
                ret = "Reserved for use as Calibration Multiplier modifier range";
            else if (0xA100 <= usage && usage <= 0xA7FF)
                ret = "Reserved for use as Report Interval modifier range";
            else if (0xB100 <= usage && usage <= 0xB7FF)
                ret = "Reserved for use as Frequency Max modifier range";
            else if (0xC100 <= usage && usage <= 0xC7FF)
                ret = "Reserved for use as Period Max modifier range";
            else if (0xD100 <= usage && usage <= 0xD7FF)
                ret = "Reserved for use as Change Sensitivity Percent modifier range";
            else if (0xE100 <= usage && usage <= 0xE7FF)
                ret = "Reserved for use as Change Sensitivity Percent modifier range";
            else if (0xF100 <= usage && usage <= 0xF7FF)
                ret = "Reserved for use as Vendor Reserved modifier range";
            else
                ret = "Reserved";
        }
    }
    return ret;
}

export { decode };
//# sourceMappingURL=sensors.js.map
