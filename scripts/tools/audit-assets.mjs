import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const topicRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const extensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.mp3', '.wav', '.ogg', '.pdf', '.json', '.geojson']);
const files = [];

function walk(directory) {
  readdirSync(directory).forEach(name => {
    const path = join(directory, name);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path);
    else if (extname(path) === '.js') files.push(path);
  });
}

walk(join(topicRoot, 'scripts'));
const references = [];
const fragments = [];
const literalPattern = /(['"])([^'"\n]+\.(?:jpe?g|png|webp|gif|mp3|wav|ogg|pdf|json|geojson))\1/gi;
files.forEach(file => {
  const source = readFileSync(file, 'utf8');
  for (const match of source.matchAll(literalPattern)) {
    const value = match[2];
    if (/^(?:https?:|data:)/i.test(value) || !extensions.has(extname(value).toLowerCase())) continue;
    // A filename (or a nested suffix such as "03/foo.jpg") is often joined to
    // a base folder at runtime. Reporting it as topic-root relative creates a
    // false missing-file warning, so retain it as an unresolved fragment.
    const isCompletePath = value.startsWith('../')
      || value.startsWith('./')
      || /^(?:Tư liệu|infographic|audio|assets|data)\//i.test(value);
    if (!isCompletePath) {
      fragments.push({ file: file.slice(topicRoot.length + 1), value });
      continue;
    }
    const target = value.startsWith('../')
      ? resolve(topicRoot, value)
      : resolve(topicRoot, value.replace(/^\.\//, ''));
    references.push({ file: file.slice(topicRoot.length + 1), value, exists: existsSync(target) });
  }
});

const unique = [...new Map(references.map(item => [`${item.file}\0${item.value}`, item])).values()];
const missing = unique.filter(item => !item.exists);
const uniqueFragments = [...new Map(fragments.map(item => [`${item.file}\0${item.value}`, item])).values()];
console.log(JSON.stringify({
  checkedCompletePaths: unique.length,
  missing,
  unresolvedFragments: uniqueFragments
}, null, 2));
if (process.argv.includes('--strict') && missing.length) process.exitCode = 1;
