#!/usr/bin/env bash

env -i
git add .
echo enter a commit message:
read msg
env -i
git commit -m "$msg"
env -i
git push

echo building react app
yarn build
echo build finished

cd build
echo deploying
surge --project /Users/Ethan/Desktop/goUMD-site/~decoument~/build/ --domain goumd-app.surge.sh
echo completed deployment
