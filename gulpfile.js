'use strict';

const csscomb = require('gulp-csscomb');
const gulp    = require('gulp');
const less    = require('gulp-less');
const rename  = require('gulp-rename');

gulp.task('style', () => {
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

gulp.task('default', ['style']);
