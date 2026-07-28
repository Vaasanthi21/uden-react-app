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

// 1. Checklist Completed (New Purple Clipboard Checklist)
copyFile('media__1785238216632.jpg', 'checklist-completed.jpg');

// 2. Recruitment Team around Screen
copyFile('media__1785238216636.jpg', 'recruitment-team.jpg');

// 3. Candidate Screening / Magnifying Glass
copyFile('media__1785238216656.jpg', 'candidate-network.jpg');

// 4. Contract Handshake
copyFile('media__1785238216653.jpg', 'contract-handshake.jpg');

// 5. JOB Team Illustration
copyFile('media__1785238216789.jpg', 'job-team.jpg');

// 6. Career Growth Line Graph
copyFile('media__1785235035154.jpg', 'career-growth.jpg');

// 7. Other batch 1 & 2 illustrations
copyFile('media__1785224359752.jpg', 'mentor-guidance.jpg');
copyFile('media__1785224359761.jpg', 'team-collaboration.jpg');
copyFile('media__1785224359995.jpg', 'student-roadmap.jpg');
copyFile('media__1785226960693.jpg', 'faq-support-desk.jpg');
copyFile('media__1785226961085.jpg', 'ai-robot-team.jpg');

console.log('ALL_5_TARGET_IMAGES_COPIED_TO_PUBLIC_AND_ASSETS');
