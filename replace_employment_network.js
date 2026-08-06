const fs = require('fs');
const path = require('path');

let count = 0;

function replaceInDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.git' && item !== 'build') {
        replaceInDir(full);
      }
    } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.html') || item.endsWith('.json') || item.endsWith('.md')) {
      let content = fs.readFileSync(full, 'utf8');
      const regexExact = /Unified Employment Network/gi;
      
      if (regexExact.test(content)) {
        console.log(`REPLACING IN: ${full}`);
        
        // Preserve case if needed, or standard replacement
        content = content.replace(/Unified Employment Network/g, 'Unified Development and Employment Network');
        content = content.replace(/unified employment network/g, 'unified development and employment network');
        content = content.replace(/UNIFIED EMPLOYMENT NETWORK/g, 'UNIFIED DEVELOPMENT AND EMPLOYMENT NETWORK');
        
        fs.writeFileSync(full, content, 'utf8');
        count++;
      }
    }
  }
}

console.log('--- SEARCHING FOR "Unified Employment Network" ---');
replaceInDir(path.join(__dirname, 'public'));
replaceInDir(path.join(__dirname, 'src'));
console.log(`--- FINISHED. MODIFIED ${count} FILES. ---`);
