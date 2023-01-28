const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const build_path = path.resolve(__dirname, './build');

exec(`rm -rf ${build_path}`);
exec(`mkdir ${build_path}`);
exec(`cp -r ${path.resolve(__dirname, './static/**')} ${build_path}`);

const data = fs.readFileSync('./static/index.html', 'utf8');
const template = data.replace('${bundle}', './bundle.js');
fs.writeFileSync(path.resolve(build_path, 'index.html'),template);

esbuild
	.build({
		entryPoints: ['src/index.js'],
		outfile: './build/bundle.js',
		loader: {
			'.css': 'text',
			'.html': 'text'
		},
		bundle: true,
		minify: true,
		sourcemap: true,
		target: ['es2020', 'chrome58', 'firefox57', 'safari11', 'edge16'],
		watch: false
	})
	.catch(() => process.exit(1));