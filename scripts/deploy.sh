#!/usr/bin/env bash

yarn build &&

cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@gitee.com:nwkami5010/goldensun.git &&
git push -u origin master -f &&
cd ..