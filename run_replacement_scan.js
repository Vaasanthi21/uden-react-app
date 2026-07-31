const fs = require('fs');
const path = require('path');

let totalReplaced = 0;
const report = [];

function scanAndReplace(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'build') {
        scanAndReplace(full);
      }
    } else if (/\.(js|jsx|ts|tsx|html|json|md)$/i.test(f)) {
      let code = fs.readFileSync(full, 'utf8');
      if (/UNIFIED EMPLOYMENT NETWORK/g.test(code) || /Unified Employment Network/g.test(code) || /unified employment network/g.test(code)) {
        code = code.replace(/UNIFIED EMPLOYMENT NETWORK/g, 'UNIFIED DEVELOPMENT AND EMPLOYMENT NETWORK');
        code = code.replace(/Unified Employment Network/g, 'Unified Development and Employment Network');
        code = code.replace(/unified employment network/g, 'unified development and employment network');
        code = code.replace(/Unified employment network/g, 'Unified Development and Employment Network');
        fs.writeFileSync(full, code, 'utf8');
        totalReplaced++;
        report.push(full);
      }
    }
  }
}

scanAndReplace(path.join(__dirname, 'public'));
scanAndReplace(path.join(__dirname, 'src'));

console.log('REPLACEMENT REPORT:', totalReplaced, report);
fs.writeFileSync(path.join(__dirname, 'replacement_report.json'), JSON.stringify(report, null, 2));
