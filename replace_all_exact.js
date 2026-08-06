const fs = require('fs');
const path = require('path');

let count = 0;
const modifiedFiles = [];

function processDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.git' && item !== 'build') {
        processDir(full);
      }
    } else if (/\.(js|jsx|ts|tsx|html|json|css|scss|md)$/i.test(item)) {
      let content = fs.readFileSync(full, 'utf8');
      
      const hasMatch = /unified\s+employment\s+network/i.test(content);
      if (hasMatch) {
        console.log('FOUND MATCH IN:', full);
        
        content = content.replace(/UNIFIED EMPLOYMENT NETWORK/g, 'UNIFIED DEVELOPMENT AND EMPLOYMENT NETWORK');
        content = content.replace(/Unified Employment Network/g, 'Unified Development and Employment Network');
        content = content.replace(/unified employment network/g, 'unified development and employment network');
        content = content.replace(/Unified employment network/g, 'Unified Development and Employment Network');
        
        fs.writeFileSync(full, content, 'utf8');
        count++;
        modifiedFiles.push(full);
      }
    }
  }
}

processDir(path.join(__dirname, 'public'));
processDir(path.join(__dirname, 'src'));

console.log(`TOTAL MODIFIED: ${count}`);
console.log('FILES:', modifiedFiles);
