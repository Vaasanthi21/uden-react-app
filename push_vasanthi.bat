@echo off
echo ========================================================
echo Pushing updated .gitlab-ci.yml to branch 'vasanthi'...
echo ========================================================
cd /d "c:\Users\vasan\.gemini\antigravity\scratch\uden-app-react"
git checkout vasanthi
git add .gitlab-ci.yml
git commit -m "ci: add node image to fix gitlab-ci pipeline"
git push gitlab vasanthi
echo ========================================================
echo Success! Pushed CI pipeline fix to branch 'vasanthi'.
echo ========================================================
pause
