var gulp = require('gulp');


gulp.task('default', function() {
	return gulp.src('./bower_components/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('./src/js/lib'));
});