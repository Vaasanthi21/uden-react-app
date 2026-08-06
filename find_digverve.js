const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'build') {
        searchDir(fullPath);
      }
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.html') || file.endsWith('.json')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('Digverve') || content.includes('Digiverve')) {
        console.log(`FOUND IN: ${fullPath}`);
      }
    }
  }
}

searchDir(path.join(__dirname, 'public'));
searchDir(path.join(__dirname, 'src'));
