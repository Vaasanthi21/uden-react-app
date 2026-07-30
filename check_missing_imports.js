const fs = require('fs');
const path = require('path');

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract JSX tags used <SomeTag
  const jsxTagMatches = content.match(/<([A-Z][A-Za-z0-9_]*)/g);
  if (!jsxTagMatches) return;

  const usedComponents = new Set(jsxTagMatches.map(m => m.replace('<', '')));
  
  // Extract imports
  const importedSymbols = new Set();
  const importLines = content.match(/^import\s+.*$/gm) || [];
  importLines.forEach(line => {
    // e.g. import Foo from './Foo' or import { Bar, Baz } from './Module'
    const defaultMatch = line.match(/import\s+([A-Z][A-Za-z0-9_]*)\s+from/);
    if (defaultMatch) importedSymbols.add(defaultMatch[1]);
    
    const namedMatch = line.match(/import\s+\{([^}]+)\}/);
    if (namedMatch) {
      namedMatch[1].split(',').forEach(s => {
        const cleaned = s.trim().split(' as ')[0].trim();
        if (/^[A-Z]/.test(cleaned)) importedSymbols.add(cleaned);
      });
    }
  });

  // Ignore standard built-ins or context providers defined locally
  const ignored = new Set(['React', 'Fragment', 'Provider', 'Consumer', 'ScrollReveal', 'Spacer']);

  usedComponents.forEach(comp => {
    if (!importedSymbols.has(comp) && !ignored.has(comp)) {
      // Check if defined inside file
      const isLocallyDefined = new RegExp(`const\\s+${comp}\\s*=`).test(content) || 
                               new RegExp(`function\\s+${comp}\\s*\\(`).test(content) ||
                               new RegExp(`class\\s+${comp}\\s+`).test(content);
      if (!isLocallyDefined) {
        console.log(`⚠️ MISSING IMPORT IN: ${filePath}`);
        console.log(`   Component: <${comp} /> is used but NOT imported!`);
      }
    }
  });
}

function scanDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.git' && item !== 'build') {
        scanDir(full);
      }
    } else if (item.endsWith('.js') || item.endsWith('.jsx')) {
      checkFile(full);
    }
  }
}

console.log('--- SCANNING CODEBASE FOR MISSING IMPORTS ---');
scanDir(path.join(__dirname, 'src'));
console.log('--- SCAN COMPLETE ---');
