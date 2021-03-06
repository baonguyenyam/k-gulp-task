'use strict';

import path from 'path';
import fs from 'fs';
import del from 'del';
import babel from 'gulp-babel';
import through from 'through2';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import rev from 'gulp-rev';
import revReplace from 'gulp-rev-replace';
import useref from 'gulp-useref';
import inject from 'gulp-inject';
import replace from 'gulp-replace';


module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target);
    let destconfig = path.join(target, url.config);
    let destjs = path.join(target, url.scripts.assets);
    let destcss = path.join(target, url.styles.assets);

    // Run task
    gulp.task('revreplace', () => {
        var target2 = gulp.src(path.join(target, '**/*.html'));
        return target2.pipe(inject(gulp.src([
                path.join(target, '**/*.css'),
                path.join(target, '**/*.js')
            ], {
                read: false,
                ignorePath: '/' + target + '/',
                addRootSlash: true
            })))
            .pipe(replace('/' + target + '/', '/'))
            .pipe(gulp.dest(dest));
    });

};