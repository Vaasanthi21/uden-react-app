const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/vasan/.gemini/antigravity/brain/d6345890-f1c5-4b5b-94fb-8175967f1409/.user_uploaded';
const targetDir = path.join(__dirname, 'src/assets/images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const file1 = path.join(srcDir, 'media__1785224359752.jpg');
const file2 = path.join(srcDir, 'media__1785224359761.jpg');
const file3 = path.join(srcDir, 'media__1785224359995.jpg');

const base64_1 = fs.readFileSync(file1).toString('base64');
const base64_2 = fs.readFileSync(file2).toString('base64');
const base64_3 = fs.readFileSync(file3).toString('base64');

const jsContent = `export const MentorGuidanceImage = "data:image/jpeg;base64,${base64_1}";
export const TeamCollaborationImage = "data:image/jpeg;base64,${base64_2}";
export const StudentRoadmapImage = "data:image/jpeg;base64,${base64_3}";
`;

const jsPath = path.join(__dirname, 'src/utils/consts/uploaded_illustrations.js');
fs.writeFileSync(jsPath, jsContent);
console.log('ILLUSTRATIONS_GENERATED_SUCCESSFULLY');
