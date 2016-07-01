'use strict';

import path from 'path';
import runSequence from 'run-sequence';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target);

    // Run task
    gulp.task('watch', () => {
        if (!setgulp.production) {
            // Styles
            gulp.watch([
                path.join(url.source, url.styles.root, '**/*.css')
            ], ['css']);

            gulp.watch([
                path.join(url.source, url.styles.root, '**/*.less')
            ], ['less']);

            gulp.watch([
                path.join(url.source, url.styles.root, '**/*.styl')
            ], ['styl']);

            gulp.watch([
                path.join(url.source, url.styles.root, '**/*.{sass,scss}')
            ], ['sass']);

            // Scripts
            gulp.watch([
                path.join(url.source, url.scripts.root, '**/*.js')
            ], ['babel']);

            gulp.watch([
                path.join(url.source, url.scripts.root, '**/*.coffee')
            ], ['coffee']);

            gulp.watch([
                path.join(url.source, url.scripts.root, '**/*.ts')
            ], ['ts']);

            // Scripts
            gulp.watch([
                path.join(url.source, '**/*.jade')
            ], ['jade']);


            // Copy
            gulp.watch([
                path.join(url.source, '**/*')
            ], ['copy']);

            // All other files
            gulp.watch(path.join(url.views, '**/*')).on('change', browserSync.reload);
        }
    });
}