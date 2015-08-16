var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var ghPages = require('gulp-gh-pages');


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

// transfer JS files
gulp.task('js', function() {
	gulp.src('./src/js/*.js')
		.pipe(gulp.dest('static/js'))
		.pipe(connect.reload());
});

// transfer CNAME file
gulp.task('cname', function() {
	gulp.src('./src/CNAME')
		.pipe(gulp.dest('static'))
		.pipe(connect.reload());
});

// empty the static folder
gulp.task('clean', function () {
	gulp.src('static', {read:false})
		.pipe(clean());
});

// serve and watch
gulp.task('serve', ['default', 'watch'], function() {
	connect.server({
		root: 'static',
		livereload: true
	});
});

// watch files
gulp.task('watch', function() {
	gulp.watch('./src/*.jade', ['templates']);
	gulp.watch('./src/scss/*.scss', ['sass']);
	gulp.watch('./src/js/*.js', ['js']);
});

// deploy to gh pages
gulp.task('deploy', function() {
	return gulp.src('./static/**/*.*')
		.pipe(ghPages());
});


gulp.task('default', ['sass', 'templates', 'js', 'cname']);