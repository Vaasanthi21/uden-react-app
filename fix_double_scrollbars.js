const fs = require('fs');
const path = require('path');

const overflowMatches = [];

function searchOverflow(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'build') {
        searchOverflow(full);
      }
    } else if (/\.(js|jsx|css|scss|html)$/i.test(f)) {
      const code = fs.readFileSync(full, 'utf8');
      if (/(overflow-y\s*:\s*(scroll|auto)|overflow\s*:\s*(scroll|auto))/i.test(code)) {
        overflowMatches.push({ file: full, code: code.substring(0, 300) });
      }
    }
  }
}

searchOverflow(path.join(__dirname, 'src'));
searchOverflow(path.join(__dirname, 'public'));

console.log('FOUND OVERFLOW MATCHES:', overflowMatches.map(m => m.file));
fs.writeFileSync(path.join(__dirname, 'overflow_report.json'), JSON.stringify(overflowMatches, null, 2));
