import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  output: {
      file: 'public/bundle.js',
      format: 'iife',
      plugins: [terser()]
  },
  plugins: [
    resolve (),
    commonJS ({
      include: 'node_modules/**',
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15
    }),
    vue ({
      target: 'browser',
      needMap: false,
    })
  ],
};
