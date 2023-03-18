const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

function tarefasCSS(cb) {

   return gulp.src(['./css/style.css','./node_modules/bootstrap/dist/css/bootstrap.css',
    './vendor/owl/css/owl.css', './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css', './vendor/jquery-ui/jquery-ui.css'])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'})) 
        .pipe(gulp.dest('./dist/css'))

}

function tarefasJS(){

    return gulp.src(['./js/custom.js','./node_modules/jquery/dist/jquery.js', 
    './node_modules/bootstrap/dist/js/bootstrap.js', './vendor/owl/js/owl.js', 
    './vendor/jquery-mask/jquery.mask.js', './vendor/jquery-ui/jquery-ui.js'])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
}


exports.styles = tarefasCSS
exports.scripts = tarefasJS