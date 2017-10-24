var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify'); // Converts jsx to js
var source = require('vinyl-source-stream'); // Converts string to a stream

//browserify bundles all the JavaScript files togethers into main.js
gulp.task('browserify', function(){
	browserify('./src/js/main.js')
		.transform('reactify') //transforms JSX into JavaScript
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('dist/js'));
});

//pipes the below assets into the dist folder
gulp.task('copy', function(){
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
	gulp.src('src/css/*.*')
		.pipe(gulp.dest('dist/css'));
	gulp.src('src/js/vendors/*.*')
		.pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['browserify', 'copy'], function(){
	//gulp.watch keeps gulp running so as updates are made they can be seen live while coding
	return gulp.watch('src/**/*.*', ['browserify', 'copy']); 
});
