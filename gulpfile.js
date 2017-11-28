/*
* gulp
* npm install browser-sync gulp gulp-sass gulp-autoprefixer gulp-pug gulp-uncss gulp-clean-css gulp-print gulp-changed gulp-imagemin gulp-pngquant gulp-notify gulp-rename del jquery
*/

var browserSync   = require('browser-sync'),

    gulp          = require('gulp'),
    pug           = require('gulp-pug'),

    sass          = require('gulp-sass'),
    uncss         = require('gulp-uncss'),
    cleanCSS      = require('gulp-clean-css'),
    autoprefixer  = require('gulp-autoprefixer'),

    changed       = require('gulp-changed'),

    imagemin      = require('gulp-imagemin'),
    pngquant      = require('gulp-pngquant'),

    print         = require('gulp-print'),
    notify        = require('gulp-notify'),
    rename        = require('gulp-rename'),

    del           = require('del');

var config = {
  dist: 'dist/',
  src: 'src/',

  pugin: 'src/pug/*.pug',
  stylein: 'src/style/*.{sass,scss}',
  jsin: 'src/js/**/*.js',
  imgin: 'src/img/**/*.{jpg,jpeg,png,gif,svg,ico}',
  fontin: 'src/fonts/**/*',

  htmlout: 'dist/',
  styleout: 'dist/style/',
  jsout: 'dist/js/',
  imgout: 'dist/img/',
  fontout: 'dist/fonts/',

  pugwatch: 'src/pug/**/*.pug',
  stylewatch: 'src/style/**/*.{sass,scss}'
};

gulp.task('browser-sync', ['sass','pug','js'], function() {
  browserSync({
    server: {
      baseDir: config.dist
    },
    notify: false
  });
});

gulp.task('sass', function () {
  return gulp.src(config.stylein)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 15 versions']
    }))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.styleout));
});

gulp.task('pug', function buildHTML() {
  return gulp.src([config.pugin])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(config.htmlout));
});

gulp.task('js', function () {
  return gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      config.jsin
    ])
    .pipe(gulp.dest(config.jsout))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('images', function(){
  return gulp.src(config.imgin)
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(config.imgout));
});

gulp.task('fonts',function(){
  return gulp.src(config.fontin)
    .pipe(gulp.dest(config.fontout));
});

gulp.task('clean', function() {
  return del.sync([config.dist]);
});

gulp.task('default', ['clean'], function() {
  gulp.start('js', 'images', 'fonts', 'browser-sync', 'watch');
});

gulp.task('watch', function () {
  gulp.watch([config.stylewatch], ['sass']).on("change", browserSync.reload)
  gulp.watch([config.pugwatch], ['pug']).on("change", browserSync.reload)
  gulp.watch([config.jsin], ['js']).on("change", browserSync.reload)
  gulp.watch([config.imgin], ['images']);
});
