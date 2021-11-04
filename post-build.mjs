// @ts-nocheck
import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// @ts-ignore
const __dirname = dirname(fileURLToPath(import.meta.url));
const log = () => {}; // console.log;

(async () => {
	const packageJson = path.join(__dirname, 'package.json');
	const readme = path.join(__dirname, 'README.md');
	const staticFiles = path.join(__dirname, 'static');
	const dist = path.join(__dirname, 'dist');
	log(`Copying files from ${staticFiles} to ${dist}.`);
	log((fs.copySync(staticFiles, dist, { overwrite: true }) || {}).message || 'Done.');
	log(`Copying ${packageJson} to ${dist}.`);
	log((fs.copySync(packageJson, path.join(dist, 'package.json'), { overwrite: true }) || {}).message || 'Done.');
	log(`Copying ${readme} to ${dist}.`);
	log((fs.copySync(readme, path.join(dist, 'README.md'), { overwrite: true }) || {}).message || 'Done.');
})();
