var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var inject = require('gulp-inject');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:4000"
    });
});

gulp.task('inject', function () {
    var target = gulp.src('./app/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(
        [
            './app/js/bundle.js',
            './app/**/*.css'
        ],
        {read: false});

    // Pipe the sources into the index.html file, then place index.html back into ./app
    return target.pipe(inject(sources, {ignorePath: '/app'}))
        .pipe(gulp.dest('./app'));
});

gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('app/js/app.modules.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./app/js'))
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch("./app/css/**/*.css", ["scripts", "inject"]);
    gulp.watch("./app/views/**/*.html", ["scripts", "inject"]);
    gulp.watch("./app/js/**/*.js", ["scripts", "inject"]);
})

gulp.task('default', ['scripts', 'inject', 'watch'])
