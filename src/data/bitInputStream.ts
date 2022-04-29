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
}