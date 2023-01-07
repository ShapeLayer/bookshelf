yarn run deploy
git config user.name github-actions
git config user.email github-actions@github.com
git checkout -b deploy
git add .
git commit -m "Build page" -m "`date`"
git push -f origin deploy
