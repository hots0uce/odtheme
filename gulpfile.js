var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var del = require('del');

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src('js/src/od.js')
    	.pipe(browserify({
          insertGlobals : false,
          debug : false
        }))
        .pipe(uglify())
    .pipe(gulp.dest('js/dist'))
    .pipe(notify('Scripts browserify\'ed and uglified'));
});

gulp.task('css',function() {

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

gulp.task('watchall',function() {
	gulp.watch(['js/src/**/*.js','css/less/**/*.less'], ['scripts','css']);
});


gulp.task('default',['scripts','css']);
