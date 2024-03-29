import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import multi from '@rollup/plugin-multi-entry';


const config = {
    input: ['src/*.ts', 'src/views/*.ts', 'src/data/*.ts'],
    output: {
        dir: 'output',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        multi(),
        typescript(),
        resolve(),
        babel({ babelHelpers: 'bundled' }),
    ]
};

const decoders = {
    input: [
        'src/data/decode/genericDesktop.ts',
        'src/data/decode/simulationControls.ts',
        'src/data/decode/VRControls.ts',
        'src/data/decode/sportControls.ts',
        'src/data/decode/gameControls.ts',
        'src/data/decode/genericDeviceControls.ts',
        'src/data/decode/keyboardKeypad.ts',
        'src/data/decode/led.ts',
        'src/data/decode/button.ts',
        'src/data/decode/ordinal.ts',
        'src/data/decode/telephony.ts',
        'src/data/decode/consumer.ts',
        'src/data/decode/digitizer.ts',
        'src/data/decode/haptics.ts',
        'src/data/decode/physicalInputDevice.ts',
        'src/data/decode/unicode.ts',
        'src/data/decode/eyeHeadTracker.ts',
        'src/data/decode/auxiliaryDisplay.ts',
        'src/data/decode/sensors.ts',
        'src/data/decode/medicalInstrument.ts',
        'src/data/decode/brailleDisplay.ts',
        'src/data/decode/lightingAndIllumination.ts',
        'src/data/decode/monitor.ts',
        'src/data/decode/monitorEnumerated.ts',
        'src/data/decode/vesaVirtualControls.ts',
        'src/data/decode/power.ts',
        'src/data/decode/batterySystem.ts',
        'src/data/decode/barcodeScanner.ts',
        'src/data/decode/scales.ts',
        'src/data/decode/magneticStripeReader.ts',
        'src/data/decode/cameraControl.ts',
        'src/data/decode/arcade.ts',
        'src/data/decode/gamingDevice.ts',
        'src/data/decode/fidoAlliance.ts',
    ],
    output: {
        dir: 'output/decode',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        typescript(),
    ]
}

export default [
    config,
    decoders
];