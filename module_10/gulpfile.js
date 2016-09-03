var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');

gulp.task('default', function() {
	 return gulp.src('./src/css/*.css')
		.pipe(concat('style.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('./dist/css'));
});