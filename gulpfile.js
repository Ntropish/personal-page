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
gulp.task('index-html', function () {
    return gulp.src(['resources/templates/index.jade'])
        .pipe( jade( {pretty: true} ) )
        .pipe( gulp.dest('./'));
});
gulp.task('main-html', function () {
    return gulp.src(['resources/templates/*.jade'])
        .pipe( jade( {pretty: true} ) )
        .pipe( gulp.dest('./'));
});
gulp.task('project-html', function () {
    return gulp.src(['resources/project-templates/*.jade'])
        .pipe( jade( {pretty: true} ) )
        .pipe( gulp.dest('./resources/html/projects/'));
});


gulp.task('watch', ['css', 'js', 'main-html', 'project-html', 'index-html'], function () {

    gulp.watch('resources/sass/*.sass', ['css'] );
    gulp.watch('resources/javascripts/*.js', ['js'] );
    gulp.watch(['resources/templates/index.jade', 'resources/templates/layout.jade'], ['index-html'] );
    gulp.watch('resources/templates/*.jade', ['main-html'] );
    gulp.watch('resources/project-templates/*.jade', ['project-html']);

});

gulp.task('default', ['css', 'js', 'main-html', 'project-html', 'index-html']);