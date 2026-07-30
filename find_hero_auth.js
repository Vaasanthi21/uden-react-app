const fs = require('fs');
const path = require('path');

function searchDir(dir, term) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'build') {
        searchDir(fullPath, term);
      }
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes(term)) {
        console.log(`FOUND "${term}" IN: ${fullPath}`);
        const lines = content.split('\n');
        lines.forEach((line, idx) => {
          if (line.includes(term)) {
            console.log(`  Line ${idx + 1}: ${line}`);
          }
        });
      }
    }
  }
}

searchDir(path.join(__dirname, 'src'), 'HeroAuthSegmented');
