const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/vasan/.gemini/antigravity/brain/d6345890-f1c5-4b5b-94fb-8175967f1409/.user_uploaded';
const publicDir = path.join(__dirname, 'public/images');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// First set of images
fs.copyFileSync(path.join(srcDir, 'media__1785224359752.jpg'), path.join(publicDir, 'mentor-guidance.jpg'));
fs.copyFileSync(path.join(srcDir, 'media__1785224359761.jpg'), path.join(publicDir, 'team-collaboration.jpg'));
fs.copyFileSync(path.join(srcDir, 'media__1785224359995.jpg'), path.join(publicDir, 'student-roadmap.jpg'));

// Second set of 3 new images
fs.copyFileSync(path.join(srcDir, 'media__1785226974261.jpg'), path.join(publicDir, 'candidate-network.jpg'));
fs.copyFileSync(path.join(srcDir, 'media__1785226974269.jpg'), path.join(publicDir, 'faq-support-desk.jpg'));
fs.copyFileSync(path.join(srcDir, 'media__1785226974390.jpg'), path.join(publicDir, 'ai-robot-team.jpg'));

console.log('ALL_6_PUBLIC_IMAGES_COPIED_SUCCESSFULLY');
