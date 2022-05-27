/**
 * This code is modified from https://github.com/nebkat/bit-buffer-ts/
 * 
 * I only need a stream reader for now, so have removed the writing bits
 * Stream writing will be added if we add report generation
 */
 export class BitView {
    /** Underlying buffer which this view accesses. */
    readonly buffer: Uint8Array;
    /** Length of this view (in bytes) from the start of its buffer. */
    readonly byteLength: number;
    /** Length of this view (in bits) from the start of its buffer. */
    readonly bitLength: number;

    constructor(buffer: Uint8Array, byteOffset: number = 0, byteLength: number = buffer.length - byteOffset) {
        this.buffer = (byteOffset === 0 && byteLength === buffer.length)
                ? buffer : buffer.subarray(byteOffset, byteOffset + byteLength);
        this.byteLength = byteLength;
        this.bitLength = byteLength * 8;
    }

    private checkBounds(offset: number, bits: number): void {
        const available = (this.bitLength - offset);

        if (bits > available)
            throw new Error('Cannot get/set ' + bits + ' bit(s) from offset ' + offset + ', ' + available + ' available');
    }

    /**
     * Returns the bit value at the specified bit offset.
     *
     * @param offset Offset of bit.
     */
    getBit(offset: number): 1 | 0 {
        return (this.buffer[offset >> 3] >> ((offset & 0b111)) & 0b1) as (1 | 0);
//        return (this.buffer[offset >> 3] >> (7 - (offset & 0b111)) & 0b1) as (1 | 0);
    }

    /**
     * Returns a `bits` long value at the specified bit offset.
     *
     * @param offset Offset of bits.
     * @param bits Number of bits to read.
     * @param signed Whether the result should be a signed or unsigned value.
     */
    getBits(offset: number, bits: number, signed: boolean): number {
        this.checkBounds(offset, bits);

        let value = 0;
        let written = 0;

        for(let index=0; index<bits; index++) {
            let bit = this.getBit(offset+index);
            value += bit<<written;
            written++;
        }

        if (signed) {
            // Read imaginary MSB and convert to signed if needed
            if (bits < 32 && value >> (bits - 1) > 0) {
                value |= -1 ^ ((1 << bits) - 1);
            } else if (bits > 32 && value > 2 ** (bits - 1)) {
                value -= 2 ** bits;
            }
        }

        return value;
    }
    
    getBoolean = (offset: number) => this.getBit(offset) === 1;
    getInt8 = (offset: number) => this.getBits(offset, 8, true);
    getUint8 = (offset: number) => this.getBits(offset, 8, false);
    getInt16 = (offset: number) => this.getBits(offset, 16, true);
    getUint16 = (offset: number) => this.getBits(offset, 16, false);
    getInt32 = (offset: number) => this.getBits(offset, 32, true);
    getUint32 = (offset: number) => this.getBits(offset, 32, false);

    /**
     * Returns a buffer containing the bytes at the specified bit offset.
     *
     * @param offset Offset of bytes.
     * @param byteLength Number of bytes to read.
     */
    readBuffer(offset: number, byteLength: number): Uint8Array {
        const buffer = new Uint8Array(byteLength);
        for (let i = 0; i < byteLength; i++) buffer[i] = this.getUint8(offset + (i * 8));
        return buffer;
    }
}

/**
 * Wrapper for {@link BitView}s that maintains an index while reading/writing sequential data.
 */
export class BitInputStream {
    /** Underlying view which this stream accesses. */
    readonly view: BitView;
    /** Underlying buffer which this stream accesses. */
    readonly buffer: Uint8Array;
    /** Length of this stream (in bytes) from the start of its buffer. */
    readonly byteLength: number;
    /** Length of this stream (in bits) from the start of its buffer. */
    readonly bitLength: number;

    /** Current position of this stream (in bits) from/to which data is read/written. */
    bitIndex: number;

    /** Alias for {@link bitIndex} */
    get index() { return this.bitIndex; }
    set index(val) { this.bitIndex = val; };

    /** Number of bits remaining in this stream's underlying buffer from the current position. */
    get bitsLeft() { return this.bitLength - this.bitIndex; }

    /** Current position of this stream (in bytes) from/to which data is read/written. */
    get byteIndex() { return Math.ceil(this.bitIndex / 8); }
    set byteIndex(val) { this.bitIndex = val * 8; }

    constructor(source: BitView);
    constructor(source: Uint8Array, byteOffset?: number, byteLength?: number);
    constructor(source: BitView | Uint8Array, byteOffset?: number, byteLength?: number) {
        this.view = source instanceof BitView ? source : new BitView(source, byteOffset, byteLength);

        this.buffer = this.view.buffer;
        this.bitIndex = 0;
        this.bitLength = this.view.bitLength;
        this.byteLength = this.view.byteLength;
    }

    readBit(): 1 | 0 {
        const val = this.view.getBit(this.bitIndex);
        this.bitIndex++;
        return val;
    }

    read(bits: number, signed: boolean = false): number {
        const val = this.view.getBits(this.bitIndex, bits, signed);
        this.bitIndex += bits;
        return val;
    }

    readBoolean = () => this.readBit() === 1;
    readInt8 = () => this.read(8, true);
    readUint8 = () => this.read(8, false);
    readInt16 = () => this.read(16, true);
    readUint16 = () => this.read(16, false);
    readInt32 = () => this.read(32, true);
    readUint32 = () => this.read(32, false);

    readBuffer(byteLength: number): Uint8Array {
        const buffer = this.view.readBuffer(this.bitIndex, byteLength);
        this.bitIndex += byteLength * 8;
        return buffer;
    }

    static test() {

        let assert = (v: number, t: number, desc: string) => {
            if(v==t) {
                console.log("OK    : " + desc + " => " + v + " == " + t);
            }
            if(v!=t) {
                console.log("ERROR : " + desc + " => " + v + " != " + t);
            }
        }
        // Create a buffer
        let b = new Uint8Array([32, 0, 0, 0, 64, 0, 0, 0]);
        let s = new BitInputStream(b, 0, 8);
        console.log("Result = " + s.readUint32());
        console.log("Result = " + s.readUint32());

        b = new Uint8Array([0b10101010]);
        s = new BitInputStream(b, 0, 1);

        for(let i=0; i<32; i++) {
            console.log("Result = " + s.readBoolean())

        }

        b = new Uint8Array([0b10101010, 0b11010011]);
        s = new BitInputStream(b, 0, 2);

        console.log(" = " + s.read(4));
        console.log("Result = " + s.readBoolean())
        console.log("Result = " + s.readBoolean())
        console.log("Result = " + s.readBoolean())
        console.log("Result = " + s.readBoolean())
        console.log(" = " + s.read(6)); 
        console.log(" = " + s.read(2));


        // HID report taken directly from a PS4 controller
        b = new Uint8Array([
            150, 68, 91, 198, 40, 0, 90, 0, 0, 106, 177, 14, 33, 0, 244, 255,
            16, 0, 215, 248, 209, 31, 148, 255, 0, 0, 0, 0, 0, 27, 0, 0,
            1, 120, 9, 108, 165, 11, 128, 0, 0, 0, 0, 128, 0, 0, 0, 128,
            0, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 128, 0
        ]);
        s = new BitInputStream(b, 0, b.length);
        assert(s.readUint8(), 150, "Left x"); // Left x
        assert(s.readUint8(), 68, "Left y");
        assert(s.readUint8(), 91, "Right x");
        assert(s.readUint8(), 198, "Right y");
        assert(s.read(4), 8, "Hat switch");
        assert(s.read(1), 0, "Button 1");
        assert(s.read(1), 1, "Button 2");
        assert(s.read(11), 0, "Buttons 3-13");
        assert(s.read(1), 1, "Button 14");


        b = new Uint8Array([0, 127, 128]);
        s = new BitInputStream(b, 0, b.length);
        assert(s.readInt8(), 0, "Read int8 0");
        assert(s.readInt8(), 127, "Read int8 127");
        assert(s.readInt8(), -128, "Read int8 -128");
    }
}
