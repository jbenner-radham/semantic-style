'use strict';

const browserSync = require('browser-sync').create();
const csscomb     = require('gulp-csscomb');
const gulp        = require('gulp');
const less        = require('gulp-less');
const rename      = require('gulp-rename');

gulp.task('less', () => {
    const options = {
        sourceMap: {
            sourceMapFileInline: true
        }
    };

    return gulp.src('src/less/main.less')
        .pipe(rename('semantic-style.less'))
        .pipe(less(options))
        .pipe(csscomb())
        .pipe(gulp.dest('dist'));
});

gulp.task('serve:demo', ['less'], () => {
    const fileGlobs = ['demo/*.html', 'dist/*.css'];

    browserSync.init({
        notify: false,
        port:   9000,
        server: {
            baseDir: ['demo', 'dist']
        }
    });

    gulp.watch(fileGlobs).on('change', browserSync.reload);
});

gulp.task('default', ['less']);
