const gulp = require('gulp')
const { parallel, series} = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

function tarefasCSS(callback) {

   gulp.src(['./src/css/style.css','./node_modules/bootstrap/dist/css/bootstrap.css',
    './vendor/owl/css/owl.css', './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css', './vendor/jquery-ui/jquery-ui.css'])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'})) 
        .pipe(gulp.dest('./dist/css'))

       return callback()

}

function tarefasJS(callback){

    gulp.src(['./src/js/custom.js','./node_modules/jquery/dist/jquery.js', 
    './node_modules/bootstrap/dist/js/bootstrap.js', './vendor/owl/js/owl.js', 
    './vendor/jquery-mask/jquery.mask.js'])
        .pipe(babel({
            comments: false,
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))

       return callback()
}

function tarefasHTML(callback) {
    gulp.src('./src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))

    return callback()
}

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process) 
    gulp.watch('./src/**/*').on('change', reload)
})

function end(callback) {
    console.log("Tarefas Concluídas")
    return callback
}

const process =  parallel(tarefasHTML, tarefasCSS, tarefasJS, end) 
exports.styles = tarefasCSS
exports.scripts = tarefasJS

exports.default = process


exports.default = parallel(tarefasHTML, tarefasCSS, tarefasJS)