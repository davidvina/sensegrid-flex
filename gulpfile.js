// https://css-tricks.com/gulp-for-beginners/

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// paths for css only
var path = {
  src: 'dist/',
  dest: 'sample/',
};

// sass task
gulp.task('sass', function () {
  return gulp.src(path.src + 'scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({

    //options
    //outputStyle: 'compressed',
  })
      .on('error', sass.logError) // prevent stop task
    ) // Using gulp-sass
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.dest + 'css'))
    .pipe(browserSync.reload({
      stream: true,
    }));
});

// init browserSync server
gulp.task('initBrowserSync', function () {
  browserSync.init({
    server: {

      // options
      baseDir: path.dest,
      directory: true,
    },
  });
});

// sincronize javascript folders
gulp.task('sync-javascript', function () {
  return gulp.src(path.src + 'js/**/*.js')
    .pipe(gulp.dest(path.dest + 'js'))
    .pipe(browserSync.reload({
      stream: true,
    }));
});

// initBrowserSync and sass tasks runs before
gulp.task('default', ['initBrowserSync', 'sass', 'sync-javascript'], function () {

  // compile scss if changes on **/*.scss
  gulp.watch(path.src + '**/*.scss', ['sass']);

  // watch html
  gulp.watch(path.dest + '**/*.html', browserSync.reload);

  // watch javascript
  gulp.watch(path.src + 'js/*.js', ['sync-javascript']);

});
