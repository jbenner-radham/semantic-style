'use strict';

var csscomb = require('gulp-csscomb');
var gulp    = require('gulp');
var less    = require('gulp-less');

gulp.task('style', () => {
    return gulp.src('src/less/main.less')
        .pipe(less())
        .pipe(csscomb())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['style']);
