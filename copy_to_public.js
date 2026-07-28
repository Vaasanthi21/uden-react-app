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

// 1. Recruitment Team illustration (Hire From Us / Companies Page)
const recruitImgFile = path.join(tempStorageDir, 'media__1785237090473.jpg');
if (fs.existsSync(recruitImgFile)) {
  fs.copyFileSync(recruitImgFile, path.join(publicDir, 'recruitment-team.jpg'));
  fs.copyFileSync(recruitImgFile, path.join(assetsDir, 'recruitment-team.jpg'));
}

// 2. All other 6 illustrations
fs.copyFileSync(path.join(userUploadedDir, 'media__1785224359752.jpg'), path.join(publicDir, 'mentor-guidance.jpg'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1785224359761.jpg'), path.join(publicDir, 'team-collaboration.jpg'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1785224359995.jpg'), path.join(publicDir, 'student-roadmap.jpg'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1785226960653.jpg'), path.join(publicDir, 'candidate-network.jpg'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1785226960693.jpg'), path.join(publicDir, 'faq-support-desk.jpg'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1785226961085.jpg'), path.join(publicDir, 'ai-robot-team.jpg'));

// Copy to assetsDir for direct Webpack imports
fs.copyFileSync(path.join(userUploadedDir, 'media__1785224359752.jpg'), path.join(assetsDir, 'mentor-guidance.jpg'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1785224359761.jpg'), path.join(assetsDir, 'team-collaboration.jpg'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1785224359995.jpg'), path.join(assetsDir, 'student-roadmap.jpg'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1785226960653.jpg'), path.join(assetsDir, 'candidate-network.jpg'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1785226960693.jpg'), path.join(assetsDir, 'faq-support-desk.jpg'));
fs.copyFileSync(path.join(userUploadedDir, 'media__1785226961085.jpg'), path.join(assetsDir, 'ai-robot-team.jpg'));

console.log('ALL_PAGE_ILLUSTRATION_IMAGES_COPIED');
