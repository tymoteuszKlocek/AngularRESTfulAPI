var gulp        = require('gulp');
var browserSync = require('browser-sync');


// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init(["css/*.css", "js/**/*.js", "js/*.js", "view/*.html", "./*.html", "partials/*.html"],{
        server: {
        	baseDir:"./"
        }
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);