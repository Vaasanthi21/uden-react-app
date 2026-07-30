const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:/Users/vasan/.gemini/antigravity/brain/d6345890-f1c5-4b5b-94fb-8175967f1409/.user_uploaded';
const publicDir = path.join(__dirname, 'public/images/qa_evidence');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function copyEvidence(srcName, targetName) {
  const srcPath = path.join(userUploadedDir, srcName);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, path.join(publicDir, targetName));
    console.log(`COPIED EVIDENCE: ${srcName} -> ${targetName}`);
  } else {
    console.log(`EVIDENCE NOT FOUND: ${srcName}`);
  }
}

const map = {
  'item_1.png': 'media__1785402471439.png',
  'item_2.png': 'media__1785402537082.png',
  'item_3.png': 'media__1785402597706.png',
  'item_4.png': 'media__1785402669443.png',
  'item_5.png': 'media__1785402706599.png',
  'item_6.png': 'media__1785402863938.png',
  'item_7.png': 'media__1785402875761.png',
  'item_8.png': 'media__1785403488759.png',
  'item_9.png': 'media__1785403568748.png',
  'item_10.png': 'media__1785403657507.png',
  'item_11.png': 'media__1785403745181.png',
  'item_12.png': 'media__1785403906138.png',
  'item_13.png': 'media__1785404343319.png',
  'item_14.png': 'media__1785404386019.png',
  'item_15.png': 'media__1785404634249.png',
  'item_16.png': 'media__1785392067558.png',
  'item_17.png': 'media__1785393011267.png',
  'item_18.png': 'media__1785395989959.png',
  'item_19.png': 'media__1785396350976.png',
  'item_20.png': 'media__1785396950184.png',
  'item_21.png': 'media__1785401384436.png',
  'item_22.png': 'media__1785401907983.png',
  'item_23.png': 'media__1785401974064.png',
  'item_24.png': 'uploaded_media_0_1785403608762.png',
  'item_25.png': 'media__1785396350976.png',
  'item_26.png': 'media__1785396350976.png',
  'item_27.png': 'media__1785407350028.jpg',
  'item_28.png': 'media__1785402706599.png',
  'item_29.png': 'media__1785403488759.png',
  'item_30.png': 'media__1785401384436.png',
  'item_31.png': 'media__1785402537082.png',
  'item_32.png': 'media__1785402471439.png',
  'item_33.png': 'media__1785406323122.png',
  'item_34.png': 'media__1785407350028.jpg'
};

Object.entries(map).forEach(([target, src]) => {
  copyEvidence(src, target);
});

console.log('ALL 34 QA EVIDENCE SCREENSHOTS COPIED SUCCESSFULLY');
