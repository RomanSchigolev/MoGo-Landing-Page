const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const minCss = require('gulp-clean-css');

gulp.task('compress_js', () => {
  return gulp.src([
    './js/main.js',
    './js/map.js',
    './js/libraries.js'
  ])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./scripts'));
});

gulp.task('compress_css', () => {
  return gulp.src([
    './css/main.css',
    './css/media.css'
  ])
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(minCss())
    .pipe(gulp.dest('./styles'));
});