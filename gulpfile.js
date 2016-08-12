var gulp = require('gulp');
var smoosh = require('gulp-inline');
var image64 = require('gulp-image64');
var markdown = require('gulp-markdown');
var template = require('gulp-template-html');

gulp.task('smoosh', function () {
    gulp.src('src/**/*.html')        
        .pipe(smoosh())
        .pipe(image64())
        .pipe(gulp.dest('build/'));
});

// 1. Convert md -> HTML
// 2. Add styles from a base.css stylesheet that is in the src directory
// 3. Base64 encode any img tags
// 4. Write the HTML file to the build directory

// Reference: http://gulpjs.com
// Reference: https://www.npmjs.com/package/gulp-template-html

gulp.task('markdown', function () {
    return gulp.src('src/**/*.md')
        .pipe(markdown())
        .pipe(template('static/template.html'))
        .pipe(smoosh())
        .pipe(image64())
        .pipe(gulp.dest('build/'));
});

gulp.task('default', ['smoosh']);