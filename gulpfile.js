// gulpfile.js
// See https://www.browsersync.io/docs/api/ for function calls

// Optional: If problems occur with css, try using autoprefixer since it is in the official bootstrap docs.
//const autoprefixer = require('gulp-autoprefixer'); // see usage here: https://www.npmjs.com/package/gulp-autoprefixer
//.pipe(sourcemaps.init())      // Part of autoprefixer
//.pipe(postcss([autoprefixer()])) or .pipe(postcss([ autoprefixer(), cssnano() ]))
//.pipe(sourcemaps.write('.'))

// import npm packages as modules to access the package functions
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const concat = require('gulp-concat');

// Compile sass into CSS & auto-inject into browsers
// See https://browsersync.io/docs/gulp#gulp-sass-css
gulp.task('sass', function() {
    return gulp.src("app/src/scss/*.scss")
        .pipe(sass())
        //.pipe(postcss([cssnano()]))   // Uncomment for minimal version; Use PostCSS to minify the file with cssnano()
        .pipe(gulp.dest("app/dist/css"))
        .pipe(browsersync.stream());    // stream method returns a transform stream and can act once or on many files.

});

// Copy bootstrap js files
gulp.task('copyjs', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',         //'node_modules/bootstrap/dist/js/bootstrap.js',
                    ])                                                                 //'node_modules/bootstrap/dist/js/bootstrap.min.js'
        .pipe(gulp.dest('app/src/js'))
        .pipe(browsersync.stream());
});

// Process custom js files and return the stream.
gulp.task('js', function () {
    return gulp.src('app/src/js/*js')
        .pipe(concat('scripts.js'))
        //.pipe(terser())           // Uncomment for minimal version. Tenser, a JavaScript parser and mangler/compressor toolkit
        .pipe(gulp.dest('app/dist/js'))
        .pipe(browsersync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', 'js', function() {

    browsersync.init({
        server: "./app"
    });

    gulp.watch("app/src/scss/*.scss", gulp.series('sass'));
    gulp.watch("app/src/js/*.js", gulp.series('js'));
    gulp.watch("app/*.html").on('change', browsersync.reload);
}));

// Copy Font Awesome icons into project where our static files get served.
gulp.task('icons', function() {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('app/dist/webfonts'));
});

gulp.task('default', gulp.series('icons', 'copyjs', 'serve'));