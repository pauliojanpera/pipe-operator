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
	const staticFiles = path.join(__dirname, 'static');
	const dist = path.join(__dirname, 'dist');
	log(`Copying files from ${staticFiles} to ${dist}.`);
	log((fs.copySync(staticFiles, dist, { overwrite: true }) || {}).message || 'Done.');
	log(`Copying files from ${packageJson} to ${dist}.`);
	log((fs.copySync(packageJson, path.join(dist, 'package.json'), { overwrite: true }) || {}).message || 'Done.');
})();
