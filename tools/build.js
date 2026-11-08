'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(__dirname, 'pages');
const OUT = ROOT;

const pages = fs
  .readdirSync(PAGES_DIR)
  .filter((f) => f.endsWith('.js'))
  .sort();

let built = 0;
for (const file of pages) {
  const mod = require(path.join(PAGES_DIR, file));
  const html = typeof mod === 'function' ? mod() : mod.html;
  const name = typeof mod === 'object' && mod.filename ? mod.filename : file.replace(/\.js$/, '.html');
  fs.writeFileSync(path.join(OUT, name), html, 'utf8');
  built++;
  console.log(`  ✓ ${name}  (${(html.length / 1024).toFixed(1)} kB)`);
}

console.log(`\nBuilt ${built} pages into ${path.relative(process.cwd(), OUT) || '.'}/`);
