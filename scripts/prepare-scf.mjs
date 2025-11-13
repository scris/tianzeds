#!/usr/bin/env node
// Prepare a deployable bundle for Tencent SCF
// - Ensures Vite build exists
// - Copies dist/ and scf/ and package.json into .scf_build/
// - Installs production deps (if network available)
// - Optionally zips to ./.scf/site.zip when --zip is passed

import { execSync } from 'node:child_process';
import { mkdirSync, rmSync, existsSync, cpSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const scfDir = path.join(root, 'scf');
const outDir = path.join(root, '.scf_build');
const zipOutDir = path.join(root, '.scf');

if (!existsSync(distDir)) {
  console.error('dist/ not found. Run `pnpm build` or `npm run build` first.');
  process.exit(1);
}

if (!existsSync(scfDir)) {
  console.error('scf/ not found.');
  process.exit(1);
}

// clean and recreate
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

// copy runtime files
cpSync(distDir, path.join(outDir, 'dist'), { recursive: true });
cpSync(scfDir, path.join(outDir, 'scf'), { recursive: true });
cpSync(path.join(root, 'package.json'), path.join(outDir, 'package.json'));
cpSync(path.join(root, 'pnpm-lock.yaml'), path.join(outDir, 'pnpm-lock.yaml'), { force: true });

// Place scf_bootstrap at ZIP root (required by SCF Custom Runtime)
try {
  cpSync(path.join(scfDir, 'scf_bootstrap'), path.join(outDir, 'scf_bootstrap'));
  execSync('chmod +x scf_bootstrap', { cwd: outDir });
} catch {}

// Install production deps in .scf_build
let installed = false;
for (const cmd of [
  'pnpm i --prod --frozen-lockfile',
]) {
  try {
    execSync(cmd, { cwd: outDir, stdio: 'inherit' });
    installed = true;
    break;
  } catch {}
}
if (!installed) {
  console.warn('Warning: Failed to install production deps in .scf_build. Ensure node_modules exists before deploying.');
}

// Optional zip
if (process.argv.includes('--zip')) {
  mkdirSync(zipOutDir, { recursive: true });
  const zipPath = path.join(zipOutDir, 'site.zip');
  try {
    execSync(`zip -r9 ${JSON.stringify(zipPath)} .`, { cwd: outDir, stdio: 'inherit' });
    console.log(`Packaged SCF artifact: ${zipPath}`);
  } catch (e) {
    console.warn('Warning: zip command failed. Please install `zip` or compress .scf_build manually.');
  }
}
