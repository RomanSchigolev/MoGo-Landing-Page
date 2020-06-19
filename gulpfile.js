const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const autoPrefixer = require('gulp-autoprefixer');
const minCss = require('gulp-clean-css');

const scripts = () => {
  return gulp.src([
    './src/js/main.js',
    './src/js/map.js',
    './src/js/libraries.js'
  ])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'));
};
exports.scripts = scripts;

const styles = () => {
  return gulp.src([
    './src/css/main.css',
    './src/css/media.css'
  ])
    .pipe(autoPrefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(minCss())
    .pipe(gulp.dest('./dist/styles'));
};
exports.styles = styles;

exports.default = gulp.series(
  gulp.parallel(
    styles,
    scripts,
  )
);