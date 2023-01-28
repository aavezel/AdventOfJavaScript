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


import('esbuild-serve').then(({default: esbuildServe}) => {
	esbuildServe(
		{
		  logLevel: "info",
		  entryPoints: ["src/index.js"],
		  bundle: true,
		  loader: {
			'.css': 'text',
			'.html': 'text'
		  },
		  outfile: "build/bundle.js",
		},
		{ root: "build" }
	  );
});
