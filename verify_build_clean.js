const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/modules/components/feature/FeatureOdyssey.jsx',
  'src/modules/pages/Home/Home.jsx',
  'src/modules/pages/JobSeekers/JobSeekers.jsx',
  'src/modules/pages/CampusPlacement/campus.js'
];

targetFiles.forEach(f => {
  const full = path.join(__dirname, f);
  if (fs.existsSync(full)) {
    console.log(`✅ VERIFIED EXISTENCE: ${f}`);
  } else {
    console.error(`❌ MISSING FILE: ${f}`);
  }
});
