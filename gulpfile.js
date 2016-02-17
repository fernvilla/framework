var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),

    input  = {
      'css': 'scss/**/*.scss',
      'js': 'js/**/*.js'
    },

    output = {
      'css': 'dist/css',
      'js': 'dist/js'
    };

gulp.task('default', ['watch']);

gulp.task('build-css', function () {
  return gulp.src(input.css)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(output.css));
});

gulp.task('watch', function () {
  gulp.watch(input.css, ['build-css']);
});
