'use strict';

const csscomb = require('gulp-csscomb');
const gulp    = require('gulp');
const less    = require('gulp-less');
const rename  = require('gulp-rename');

gulp.task('style', () => {
    return gulp.src('src/less/main.less')
        .pipe(rename('semantic-style.less'))
        .pipe(less({sourceMap: {sourceMapFileInline: true}}))
        .pipe(csscomb())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['style']);
