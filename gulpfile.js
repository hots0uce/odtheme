var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var del = require('del');
var util = require('gulp-util');
var config = require('./gulp.config.json');

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src('js/od.js')
    	.pipe(browserify({
          insertGlobals : false,
          debug : false
        }))
        .pipe(uglify())
    .pipe(gulp.dest(config.paths.build + '/js'))
    .pipe(notify('Scripts browserify\'ed and uglified'));
});

gulp.task('less',function() {

  gulp.src('./less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      compress: false
    }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css'))
    .pipe(notify('Less compiled, prefixed, minified'));
});

gulp.task('css',['less'],function() {
  gulp.src(['./css/main.css','./wp-comment.txt'])
    .pipe(concat({path:'style.css'}))
    .pipe(gulp.dest(config.paths.build))
    .pipe(notify('Theme style.css built.'));
});

gulp.task('watchall',function() {
	gulp.watch(['./**/*.*','!./node_modules'], ['wordpress']);
});

gulp.task('clean',function() {
  del([config.paths.build]);
  gulp.src('./index.php').pipe(notify('Project Cleaned.'));
});

gulp.task('wordpress', ['scripts','css'], function() {
  gulp.src(['./*.php','./img/**/*.*'],{base:'./'})
    .pipe(gulp.dest(config.paths.build));
  gulp.src('./index.php').pipe(notify('Ready for Wordpress'));
});


gulp.task('default',['wordpress']);
