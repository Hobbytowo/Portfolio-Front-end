const gulp = require('gulp')
const packageInfo = require('./package.json')

const plumber = require('gulp-plumber')
const htmlReplace = require('gulp-replace')
const browserSync = require('browser-sync').create()
const rename = require('gulp-rename')

const banner = require('gulp-banner')
const bannerComment = `/*! ${ packageInfo.name } v${ packageInfo.version } | ` +
  `Copyright ${ new Date().getFullYear() } ${ packageInfo.author } */\n\n`

// HTML
const htmlMinify = require('gulp-html-minifier')
const htmlFileInclude = require('gulp-file-include')

gulp.task('html', () => {
  const stream = gulp.src('./src/html/*.html')
    .pipe(plumber())
    .pipe(htmlFileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlReplace(
      'qF5T9r8RxNt4TKCm',
      'styles.min.css'
    ))
    .pipe(htmlReplace(
      '6KzCdyZgZnJvkkaC',
      'app.min.js'
    ))
    .pipe(htmlMinify({
      collapseWhitespace: true,
      minifyJS: true,
      removeComments: true,
      sortClassName: true,
      sortAttributes: true
    }))
    .pipe(gulp.dest('./dist'))

  stream.on('end', browserSync.reload)
})
// e/o HTML

// CSS
const sass = require('gulp-sass')
const cssnano = require('gulp-cssnano')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('css', () => {
  const stream = gulp.src('./src/css/index.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(banner(bannerComment, { pkg: packageInfo }))
    .pipe(rename({
      basename: 'styles',
      suffix: '.min',
      extname: '.css'
    }))
    .pipe(gulp.dest('./dist'))

  stream.on('end', browserSync.reload)
})
// e/o CSS

// JS
const webpack = require('webpack-stream')
const webpackConfig = require('./webpack.config')

gulp.task('js', () => {
  const stream = gulp.src('./src/js/index.js')
    .pipe(plumber())
    .pipe(webpack(webpackConfig))
    .pipe(banner(bannerComment, { pkg: packageInfo }))
    .pipe(rename({
      basename: 'app',
      suffix: '.min',
      extname: '.js'
    }))
    .pipe(gulp.dest('./dist'))

  stream.on('end', browserSync.reload)
})
// e/o JS

// Eslint
const eslint = require('gulp-eslint')
const eslintConfig = require('./.eslintrc')

gulp.task('eslint', () => {
  gulp.src('./src/js/**!(vendor)')
    .pipe(eslint(eslintConfig))
    .pipe(eslint.format())
})

// e/o Eslint

gulp.task('watch', ['html', 'css', 'js'], () => {
  browserSync.init({
    server: {
      baseDir: './dist/'
    }
  })

  gulp.watch('./src/css/**/*', ['css'])
  gulp.watch('./src/html/**/*', ['html'])
  gulp.watch('./src/js/**/*', ['js', 'eslint'])
})

gulp.task('default', ['html', 'css', 'js'])
