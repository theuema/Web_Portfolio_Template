// README.md //START.md
# Information on how this project works
This document provides a little summary of how to start with Gulp, Bootstrap and Sass from scratch. 

## General Information
We want to build a Web application using [Bootstrap](https://getbootstrap.com/) take advantage of [Sass](https://sass-lang.com/) and also have a fluent and easy build process where we can change and adapt Bootstrap themes. For the build process we use [Gulp](https://gulpjs.com/) (instead of [Webpack](https://webpack.js.org/), altough there is a major bug on MacOS Catalina. 

On MacOS Catalina+ with installed command line tools (CLT) or Xcode:
Before doing anything perform the instructions from `node-gyp-rebuild_MacOS_patch.md` for to successfully rebuild node-gyp when installing the project dependency modules.

## Bootstrap CSS
[Go to Homepage](https://getbootstrap.com/).

Bootstrap is the most popular CSS Framework currently used. It can be used to save time and effort by using predefined web components such as buttons, cards, navigation bars and powerful utility classes to create responsive layouts.

## Sass
[Go to Homepage](https://sass-lang.com/).

Sass is a style sheet language released almost 13 years ago which is sort of an extension for regular CSS capabilities. Using Sass you can make us of variables, mixins (functions) and better organize your style sheets structure overall. It is highly recommended as it will save you a lot of time and effort down the road.

Sass is used to utilize the bootstrap sass source files to take advantage of variables, maps, mixins, and functions to help you build faster and customize your project. Sass is a very simple CSS pre-processor. In fact, it is an extension to CSS which lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff. See the following link for more [information.](https://www.w3schools.com/sass/sass_intro.asp)

## Gulp
[Go to Homepage](https://gulpjs.com/).

A toolkit to automate & enhance your workflow
Leverage gulp and the flexibility of JavaScript to automate slow, repetitive workflows and compose them into efficient build pipelines. It is a JavaScript librariy used to compile a theme’s source files and create a local server. 


# Installation

```
brew install node 
```
We use Node to develop Node.js powered apps. 
Bootstrap will require a Sass compiler and Autoprefixer for a setup that matches the official compiled versions.
NPM Package Manager, which comes with node, is used to pull in Bootstrap’s source files (install) Bootstrap in your Node.js powered application. Consider the following loose convention: Source files are commonly in folders named src/ or app/, while compiled files are often found in /dist, public/, or build/ folders.

Source files are files that are meant to be processed by a theme’s build tools. The folder app/ contains the source files in this project.
Compiled files are generated as a result of running a compiling process (also called a "build process") on the source files. The folder dist/ contains the compiled files in this project.
Static files are ones that aren’t processed or generated. The folder web/ contains the static html files in this project. Other static files can be fonts or images. 
See instructions and a visualized version of the build process [here](https://themes.getbootstrap.com/guide/).

With either of the two following ways we can set up the following folder structure: 
```
PROJ=gulpproj && \
mkdir $PROJ && cd $PROJ && \
touch gulpfile.js && \
mkdir app && cd app && touch index.html && mkdir dist src && \
cd dist && mkdir css js && cd .. && cd src && mkdir js scss img font && \
cd js && touch scripts.js && cd .. && cd scss && \
touch styles.scss _variables.scss && cd ....
```

## Using scripts via package.json
It is necessary to use SASS for compiling the style sheet (scss) and Autoprefixer for CSS vendor prefixing.
```
brew install sass/sass/sass
```

```
npm init -y && \\
npm install bootstrap@next --save-dev && \\
npm install postcss-cli autoprefixer npm-run-all --save-dev
```
npm init initializes our node project and creates the package.json file. 
npm install installs our project dependencies for this project. 

Info: We used "--save-dev" thus packages will appear in your `devDependencies` and can be easily installed using `npm install` next time. 

We import Bootstrap’s source Sass files. This can either be done in parts or all of Bootstrap. [See instructions](https://getbootstrap.com/docs/5.0/customize/sass/). 

Add the following to your styles.scss: 
```
// styles.scss
// My color overrides

// other @imports.. from e.g.: app/scss

// Option A: Include all of Bootstrap

@import "../node_modules/bootstrap/scss/bootstrap";
```

We then can define compiling steps we need to do this in package.json via scripts. 
Example is shown below: 

```
{
  "name": "project-name",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "styles":"sass app/scss/styles.scss | postcss --use autoprefixer -o dist/css/styles.bootstrap.css",
    "styles-min":"sass app/scss/styles.scss --style compressed | postcss --use autoprefixer -o dist/css/styles.bootstrap.min.css",
    "all":"npm-run-all --parallel styles styles-min"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "autoprefixer": "^10.1.0",
    "bootstrap": "^5.0.0-beta1",
    "npm-run-all": "^4.1.5",
    "postcss-cli": "^8.3.1"
  }
}
```

To create the output file `styles.bootstrap.css` run: `npm run styles`, to create a compressed output file `styles.bootstrap.min.css` run: `npm run styles-min`. To create both files at once run: `npm run all`. Those commands are defined as a script in `package.json`.


## Using Gulp
[Using Gulp 4 in your workflow for Sass and JS files](https://coder-coder.com/gulp-4-walk-through/).
[Quick setup for Gulp 4 + Browsersync + Sass](https://coder-coder.com/quick-guide-to-browsersync-gulp-4/#adding-browsersync-to-your-gulpfile).
[How to set up Gulp 4, Bootstrap, Sass and BrowserSync for a simple workflow](https://themesberg.com/blog/tutorial/gulp-4-bootstrap-sass-browsersync).
[Super simple Gulp tutorial for beginners](https://coder-coder.com/gulp-tutorial-beginners/).

Install the gulp-cli globally (-g) on your command line by running `npm install gulp-cli -g`

Open a terminal and go to your project folder and execute the following command:
```
npm init -y && \\
npm install --save-dev gulp gulp-sass gulp-postcss cssnano gulp-terser  browser-sync gulp-concat
```
npm init initializes our node project and creates the package.json file. 
npm install installs our project dependencies for this project. 

Info: We used "--save-dev" thus packages will appear in your `devDependencies` and can be easily installed using `npm install` next time. 

gulp-sass compiles Sass files to CSS.
gulp-postcss and the cssnano plugin minify the final CSS file.
gulp-terser minifies our JavaScript file.
browser-sync runs and syncs a local server to our website files.

browser-sync will automatically monitor your files for changes, and inject any changes into the browser - all without requiring a manual refresh. [See documentation](https://browsersync.io/docs).

First of all create a new file at the root folder of your project called gulpfile.js. Within this file you will add the Gulp commands that will be available to be used. `touch gulpfile.js`

First off, we are importing the npm packages that we installed as modules. This enables us to access the package functions in our Gulp tasks: 
```
// gulpfile.js

// import npm packages as modules to access the package functions
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const concat = require('gulp-concat');
```

Install the latest version of Bootstrap via NPM:
```
npm install bootstrap@next --save
```
Info: 
[Stack Overflow question on the difference between --save and --save-dev](https://stackoverflow.com/questions/22891211/what-is-the-difference-between-save-and-save-dev).
--save-dev is used to save the package for development purpose. Example: unit tests, minification.. 
--save is used to save the package required for the application to run.

Use the gulp tasks sass, copyjs, js, serve and default provided in gulpfile.js. 

The last line `gulp.task('default', gulp.series('copyjs', 'serve'));` enables you to start the local server and watch for SASS file changes and compile them by only executing `gulp` in the command line. 

### Troubleshooting SASS -> CSS problems
Try to use `gulp-autofixer` in gulpfile.js accordingly. 

If this doesn't work try in source root:
```
touch postcss.config.js && \
npm install gulp-autoprefixer --save-dev
```
Insert `module.exports = {};` to postcss.config.js.


# NPM commands cheatsheet
NPM always has globally installed modules and modules that are specifically installed for a certain project. 
To install local modules in a project, just use the `npm install` command in the project folder. 

`npm --global list` or `npm --g list` shows a list of globally installed modules. 
`npm list` shows a list of locally installed modules. 
`npm install --global gulp-cli` installes the module gulp-cli globally. 
`npm install gulp-cli` installes the module gulp-cli locally (in project). 
`npm update` updates all the modules in a project. `npm -g update` updates the global modules. 

# Search NPM and Gulp Plugins
[NPM](https://www.npmjs.com/).
[Gulp](https://gulpjs.com/plugins).

# Google Fonts on the Web
[Information](https://fonts.google.com/).
[Defining font weight with google fonts](https://stackoverflow.com/questions/7256065/specifying-style-and-weight-for-google-fonts).

Choose all your fonts you want to use. Then define it via css: 
```
font-family: 'Montserrat', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'Ubuntu', sans-serif;
```

Define weight and stuff in certain css classes. 
E.g.: for Regular 400: 
```
font-weight: 400;
```

See class `CDhead` as an example. 

# Font Awesome Icons
[Installing the Free version of Font Awesome](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers).
```
npm install --save @fortawesome/fontawesome-free
```

Reference either the /css/all.css or the /js/all.js, which contains everything you need to use Font Awesome in the <head> of each template or page that you want to use Font Awesome on. Be mindful of paths from where you installed the package from when doing so.

Want just certain styles of icons? - If you would like only to use specific styles rather than the default all option we’ve included in our Web Fonts and SVG frameworks, reference the specific styles you want to use like fa-brands or fa-regular and then the loader fontawesome in place of all.

```
<head>
  <!-- Our project just needs Font Awesome solid + brand -->
  <script defer src="/your-path-to-fontawesome/js/brands.js"></script>
  <script defer src="/your-path-to-fontawesome/js/solid.js"></script>
  <script defer src="/your-path-to-fontawesome/js/fontawesome.js"></script>
</head>
<body>
  <i class="fas fa-user"></i> <!-- uses solid style -->
  <i class="fab fa-github-square"></i> <!-- uses brand style -->
</body>
```

After you get things installed, [check out all of our icons](https://fontawesome.com/icons) and learn how to [reference them in HTML](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use).

## Learn how to use with Sass
[Information](https://fontawesome.com/how-to-use/on-the-web/using-with/sass).

Adding Font Awesome to Your Compile
Copy the scss folder into your project. Then copy the entire webfonts folder into your project where your static files get served.
Open your project’s scss/variables.scss and edit the $fa-font-path variable to point to where you placed the webfonts folder.

```
$fa-font-path:        "../webfonts";
```