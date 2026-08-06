const { execSync } = require('child_process');
const cwd = 'c:\\Users\\vasan\\.gemini\\antigravity\\scratch\\uden-app-react';

try {
    console.log('1. Checking current branch...');
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd }).toString().trim();
    console.log(`Current branch: ${currentBranch}`);

    console.log('2. Creating / Checkout branch "vasanthi"...');
    try {
        execSync('git checkout -b vasanthi', { cwd, stdio: 'inherit' });
    } catch (e) {
        execSync('git checkout vasanthi', { cwd, stdio: 'inherit' });
    }

    console.log('3. Pushing branch "vasanthi" to GitLab remote...');
    const pushOutput = execSync('git push -u gitlab vasanthi', { cwd, encoding: 'utf8' });
    console.log('GitLab Push Output:\n', pushOutput);

    console.log('✅ SUCCESSFULLY PUSHED BRANCH "vasanthi" TO GITLAB!');
} catch (err) {
    console.error('❌ Error executing git commands:', err.message);
    if (err.stdout) console.log('stdout:', err.stdout.toString());
    if (err.stderr) console.log('stderr:', err.stderr.toString());
}
