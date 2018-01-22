// use gulp for node_modules
var gulp = require('gulp');
// use gulp-sass for node_modules
var sass = require('gulp-sass');
// use browser-sync for node_modules
var browserSync = require('browser-sync').create();
// use Optimizing CSS and JavaScript gulp-useref
var useref = require('gulp-useref');
// use the gulp-uglify plugin 
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
// use the gulp-cssnano plugin
var cssnano = require('gulp-cssnano');
// use optimizing images with gulp-imagemin
var imagemin = require('gulp-imagemin');
// use the gulp-cache plugin
var cache = require('gulp-cache');
// use Cleaning up with del
var del = require('del');
// use run-sequence plugin
var runSequence = require('run-sequence');

// Task for process Sass
gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss') // The source folder to the sass file.
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css')) // Outputs the file in the destination folder
        .pipe(browserSync.reload({
            stream: true
        })) // Use browserSync when files sass changed.
});

// Create a browserSync task
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

// Gulp watch syntax
gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/sass/**/*.scss', ['sass']); // watch all Sass files and run the sass task
    // other watcher
    gulp.watch('app/*.html', browserSync.reload); // reload after file html changed
    gulp.watch('app/js/**/*.js', browserSync.reload); // reload after file js changed
});

// Create a useref task
gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

// Create a images task
gulp.task('images', function () {
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin({
            // Setting interlaced to true
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});

// Create a fonts task
gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

// Create a clean:dist task
gulp.task('clean:dist', function () {
    return del.sync('dist'); // Gulp will delete the `dist` folder for you whenever gulp clean:dist is run.
});

// Create a clean:cache task
gulp.task('cache:clear', function (callback) {
	return cache.clearAll(callback)
});

// Task for build optimizing
gulp.task('build', function (callback) {
    runSequence('clean:dist', ['sass', 'useref', 'images', 'fonts'], callback)
});

// Task for development
gulp.task('default', function (callback) {
    runSequence(['sass','browserSync', 'watch'], callback)
});