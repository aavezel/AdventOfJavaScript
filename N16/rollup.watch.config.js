import config from './rollup.config'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import sourcemaps from 'rollup-plugin-sourcemaps';

config.plugins = [
  ...config.plugins,
  sourcemaps(),
  serve('public'),
  livereload({
    delay: 500,
    watch: 'public',
    exts: [ 'html', 'js', 'scss', 'sass', 'css' ]
  })
];

config.output = {
  ...config.output,
  sourcemap: true,
  plugins: []
}

export default config;