const fs = require('fs');
const path = require('path');

const matches = [];

function searchInDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.git' && item !== 'build') {
        searchInDir(full);
      }
    } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.html') || item.endsWith('.json') || item.endsWith('.md')) {
      let content = fs.readFileSync(full, 'utf8');
      if (/Unified\s+Employment\s+Network/i.test(content)) {
        matches.push(full);
        content = content.replace(/Unified Employment Network/g, 'Unified Development and Employment Network');
        content = content.replace(/unified employment network/g, 'unified development and employment network');
        content = content.replace(/UNIFIED EMPLOYMENT NETWORK/g, 'UNIFIED DEVELOPMENT AND EMPLOYMENT NETWORK');
        content = content.replace(/Unified employment network/g, 'Unified Development and Employment Network');
        fs.writeFileSync(full, content, 'utf8');
      }
    }
  }
}

searchInDir(path.join(__dirname, 'public'));
searchInDir(path.join(__dirname, 'src'));

console.log('REPLACED IN FILES:');
console.log(matches);
fs.writeFileSync(path.join(__dirname, 'replaced_files.json'), JSON.stringify(matches, null, 2));
