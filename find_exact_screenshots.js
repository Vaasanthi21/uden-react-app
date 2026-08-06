const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:/Users/vasan/.gemini/antigravity/brain/d6345890-f1c5-4b5b-94fb-8175967f1409/.user_uploaded';

const files = fs.readdirSync(userUploadedDir).map(file => {
  const stat = fs.statSync(path.join(userUploadedDir, file));
  return {
    name: file,
    size: stat.size,
    time: stat.mtime
  };
}).sort((a, b) => b.time - a.time);

console.log(`TOTAL UPLOADED MEDIA FILES: ${files.length}`);
files.slice(0, 40).forEach((f, idx) => {
  console.log(`${idx + 1}. ${f.name} | ${f.size} bytes | ${f.time.toISOString()}`);
});
