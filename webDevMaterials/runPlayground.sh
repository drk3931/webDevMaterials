#!/bin/bash


#export these vars for runtime use
export NODE_ENV=development
export PORT=3000

#does an ng serve and runs node
pushd ./frontend/angular-src/playground/ && ./runAngular.sh && popd & nodemon ./backend/node/entry.js