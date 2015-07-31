var gulp        = require('gulp');
var concat      = require('gulp-concat');
var cssmin      = require('gulp-minify-css');
var rename      = require('gulp-rename');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var jade        = require('gulp-jade');


gulp.task('js', function () {

    return gulp.src('resources/javascripts/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('resources/uglyjs/'));
});

gulp.task('css', function () {
    return gulp.src('resources/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('resources/css/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('resources/css/'));
});

gulp.task('html', function () {
    return gulp.src(['resources/templates/*.jade'])
        .pipe( jade( {pretty: true} ) )
        .pipe( gulp.dest('./'));
});


gulp.task('watch', ['css', 'js', 'html'], function () {

    gulp.watch('resources/sass/*.sass', ['css'] );
    gulp.watch('resources/javascripts/*.js', ['js'] );
    gulp.watch(['resources/templates/*.jade', 'resources/project-templates/*.jade'], ['html'] );

});

gulp.task('default', ['css', 'js', 'html']);