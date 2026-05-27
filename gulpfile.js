const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
// const autoprefixer = require('gulp-autoprefixer');
const fileinclude = require('gulp-file-include');
const livereload = require('gulp-livereload');
const connect = require('gulp-connect');
const fs = require('fs');
const path = require('path');

function walkFiles(dir, matcher, results = []) {
  if (!fs.existsSync(dir)) {
    return results;
  }

  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkFiles(fullPath, matcher, results);
      return;
    }

    if (matcher.test(entry.name)) {
      results.push(fullPath);
    }
  });

  return results;
}

function styles() {
  return gulp.src('src/scss/**/*.scss') 
    // // .pipe(autoprefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
}

function html() {
    return gulp.src('src/html/*.html')
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('dist'))
      .pipe(livereload());
  }

  // function images() {
  //   return gulp.src('src/assets/images/**/*.{jpg,jpeg,png,gif,svg}')
  //     .pipe(imagemin())
  //     .pipe(gulp.dest('dist/assets/images'))
  //     .pipe(livereload());
  // }
  
  function copyAssets() {
    const srcAssets = path.join(__dirname, 'src/assets');
    const distAssets = path.join(__dirname, 'dist/assets');

    fs.rmSync(distAssets, { recursive: true, force: true });

    fs.cpSync(
      srcAssets,
      distAssets,
      { recursive: true }
    );

    return Promise.resolve();
  }

  async function webpImages() {
    const imagemin = (await import('imagemin')).default;
    const webp = (await import('imagemin-webp')).default;
    const srcImages = path.join(__dirname, 'src/assets/images');
    const distImages = path.join(__dirname, 'dist/assets/images');
    const imageFiles = walkFiles(srcImages, /\.(png|jpe?g)$/i);

    await Promise.all(imageFiles.map(async (filePath) => {
      const relativePath = path.relative(srcImages, filePath);
      const outputDir = path.join(distImages, path.dirname(relativePath));

      await imagemin([filePath], {
        destination: outputDir,
        plugins: [
          webp({ quality: 82 })
        ]
      });
    }));
  }

  function staticFiles() {
    return gulp.src('src/static/**/*')
    .pipe(gulp.dest('dist'));
  }
  

function server() {
  connect.server({
    root: 'dist',
    livereload: true
  });
}

function watch() {
  livereload.listen();
  gulp.watch('src/scss/**/*.scss', gulp.series(styles));
  gulp.watch('src/html/**/*.html', html);
  gulp.watch('src/includes/**/*.html', html);
  gulp.watch('src/assets/**/*', gulp.series(copyAssets, webpImages));
}

exports.default = gulp.series(styles, copyAssets, webpImages, staticFiles, html, server, watch);

exports.html = html;
exports.watch = watch;
exports.styles = styles;
exports.copyAssets = copyAssets;
exports.webpImages = webpImages;
exports.staticFiles = staticFiles;
