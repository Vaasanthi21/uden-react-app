const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:/Users/vasan/.gemini/antigravity/brain/d6345890-f1c5-4b5b-94fb-8175967f1409/.user_uploaded';
const tempStorageDir = 'C:/Users/vasan/.gemini/antigravity/brain/tempmediaStorage';
const publicDir = path.join(__dirname, 'public/images');
const assetsDir = path.join(__dirname, 'src/assets/images');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

function copyFile(filename, publicName) {
  let src = path.join(userUploadedDir, filename);
  if (!fs.existsSync(src)) {
    src = path.join(tempStorageDir, filename);
  }
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(publicDir, publicName));
    fs.copyFileSync(src, path.join(assetsDir, publicName));
    console.log(`COPIED: ${filename} -> ${publicName}`);
  } else {
    console.log(`FILE NOT FOUND: ${filename}`);
  }
}

// Geometric Constellation Network Background Pattern
copyFile('media__1785327466073.png', 'network-pattern.png');

// Target illustrations
copyFile('media__1785238216632.jpg', 'checklist-completed.jpg');
copyFile('media__1785238216636.jpg', 'recruitment-team.jpg');
copyFile('media__1785238216656.jpg', 'candidate-network.jpg');
copyFile('media__1785238216653.jpg', 'contract-handshake.jpg');
copyFile('media__1785238216789.jpg', 'job-team.jpg');
copyFile('media__1785235035154.jpg', 'career-growth.jpg');
copyFile('media__1785224359752.jpg', 'mentor-guidance.jpg');
copyFile('media__1785224359761.jpg', 'team-collaboration.jpg');
copyFile('media__1785224359995.jpg', 'student-roadmap.jpg');
copyFile('media__1785226960693.jpg', 'faq-support-desk.jpg');
copyFile('media__1785226961085.jpg', 'ai-robot-team.jpg');

console.log('NETWORK_PATTERN_AND_ALL_IMAGES_COPIED');
