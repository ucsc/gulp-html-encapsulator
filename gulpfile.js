var gulp = require('gulp');
var smoosh = require('gulp-inline');
var image64 = require('gulp-image64');

gulp.task('smoosh', function () {
    gulp.src('src/**/*.html')        
        .pipe(smoosh())
        .pipe(image64())
        .pipe(gulp.dest('build/'));
});

gulp.task('default', ['smoosh']);