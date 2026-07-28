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

function copyFile(src, publicName) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(publicDir, publicName));
    fs.copyFileSync(src, path.join(assetsDir, publicName));
    console.log(`SUCCESSFULLY_COPIED: ${publicName}`);
  } else {
    console.log(`NOT_FOUND: ${src}`);
  }
}

// 1. Recruitment Team illustration (Hire From Us / Companies Page)
const recruitSrc = path.join(tempStorageDir, 'media__1785237090473.jpg');
copyFile(recruitSrc, 'recruitment-team.jpg');

// 2. Career Growth Line Graph
copyFile(path.join(userUploadedDir, 'media__1785235035154.jpg'), 'career-growth.jpg');

// 3. All other 6 illustrations
copyFile(path.join(userUploadedDir, 'media__1785224359752.jpg'), 'mentor-guidance.jpg');
copyFile(path.join(userUploadedDir, 'media__1785224359761.jpg'), 'team-collaboration.jpg');
copyFile(path.join(userUploadedDir, 'media__1785224359995.jpg'), 'student-roadmap.jpg');
copyFile(path.join(userUploadedDir, 'media__1785226960653.jpg'), 'candidate-network.jpg');
copyFile(path.join(userUploadedDir, 'media__1785226960693.jpg'), 'faq-support-desk.jpg');
copyFile(path.join(userUploadedDir, 'media__1785226961085.jpg'), 'ai-robot-team.jpg');

console.log('ALL_IMAGES_COPIED_TO_PUBLIC_AND_ASSETS');
