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