var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var connect = require('gulp-connect');
var clean = require('gulp-clean');


// Compile to HTML
gulp.task('templates', function() {
  gulp.src('./src/*.jade')
    .pipe(jade({
      pretty: true	
    }))
    .pipe(gulp.dest('./static/'))
    .pipe(connect.reload());
});

// Compile sass to css
gulp.task('sass', function () {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('static/styles'))
        .pipe(connect.reload());
});

gulp.task('clean', function () {
	gulp.src('static', {read:false})
		.pipe(clean());
});

gulp.task('serve', ['watch'], function() {
	connect.server({
		root: 'static',
		livereload: true
	});
});

gulp.task('watch', function() {
	gulp.watch('./src/*.jade', ['templates']);
	gulp.watch('./src/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'templates']);