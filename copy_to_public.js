const fs = require('fs');
const path = require('path');

const userVideo = 'C:/Users/vasan/Videos/Screen Recorder Echo/20260728_16_09_19_491.mp4';
const publicVideoDir = path.join(__dirname, 'public/videos');
const assetsDir = path.join(__dirname, 'src/assets/images');

if (!fs.existsSync(publicVideoDir)) {
  fs.mkdirSync(publicVideoDir, { recursive: true });
}

if (fs.existsSync(userVideo)) {
  fs.copyFileSync(userVideo, path.join(publicVideoDir, 'career-growth-video.mp4'));
  fs.copyFileSync(userVideo, path.join(assetsDir, 'career-growth-video.mp4'));
  console.log('VIDEO_COPIED_SUCCESSFULLY');
} else {
  console.log('USER_VIDEO_NOT_FOUND');
}
