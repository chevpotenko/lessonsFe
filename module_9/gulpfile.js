/*plugin gulp*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
/*module*/
var del = require('del');

gulp.task('clean', function(){
	return del(['./src/css', './dist']);
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
});

gulp.task('copy', ['sass'], function () {
  return gulp.src(['./src/index.html', './src/img/*.*', './src/css/**/*.css', './src/js/**/*.js'], { "base" : "./src" })    
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['clean', 'copy']);

gulp.task('watch', function () {
  return gulp.watch('./src/sass/**/*.scss', ['sass']);
});