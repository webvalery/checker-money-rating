const { src, dest } = require('gulp');

// Плагины
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');
// Обработка Fonts
const fonts = () => {
  return src(path.fonts.src)
    .pipe(newer(path.fonts.dest))
    .pipe(fonter(app.fonter))
    .pipe(dest(path.fonts.dest))
    .pipe(ttf2woff2())
    .pipe(dest(path.fonts.dest));
}

module.exports = fonts;