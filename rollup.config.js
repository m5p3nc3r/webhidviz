import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import multi from '@rollup/plugin-multi-entry';


const config = {
    input: ['src/*.ts', 'src/**/*.ts'],
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

export default config;