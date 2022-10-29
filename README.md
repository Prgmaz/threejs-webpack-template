# ThreeJS Webpack Template
This repo is template for using `threejs` with `webpack` bundler.

## Use this template
- To use this template, open folder where you want this project to be.
- Open terminal or powershell to that folder.
- Type `git clone https://github.com/Prgmaz/threejs-webpack-template.git`
- Now a folder `threejs-webpack-tempalte` will be created, rename that folder and change git's origin url for your own repository.

## HTML, CSS, JS and Assets
To change in HTML, CSS, JS and assets, go to `public` directory and change.

## Main.js
To change in the main script, Go to `src/index.js` and change the code.

## Run the development server
To run the dev server, open the terminal in the folder and type `npm install && npm run dev`. This will install all the packages and run webpack watch which will build all files when you change in source code. To run the server, type `npx serve dist` in the folder. This will run a local server to display HTML files.

## Run the production server
To run the production server, a `start` script is created which can be run by typing `npm run start`. This script will install all the packages and bundle the files in production mode.

