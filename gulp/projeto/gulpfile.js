const gulp1 = import('gulp')
const gulp = require('gulp')

//ambas foram importadas pelo npm
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = import('gulp-imagemin')

function tarefasCSS(cb) {
    //não vou usar mais a pasta vendor no projeto
    //vou minificar esses arquivos
    //concat() -> junta os arquivos
    //cssmin() -> minifica os arquivos css
    //pipe -> tratamenot do arquivo
    //gulp.dest() onde os arquivos vão ser colocados depois de processado
    // gulp.src() vai achar qualquer arquivo com .css
    //suffix vai obrigar a adição de min no nome
   return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css',
    './vendor/owl/css/owl.css', 
    'node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
'./vendor/owl/css/owl.css'])
   .pipe(concat('libs.css'))
   .pipe(cssmin())
   .pipe(rename({suffix: '.min'})) //libs.min.css
   .pipe(gulp.dest('./dist/css'))
}

function tarefasJS() {
    return gulp.src('./vendor/**/*.js')
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'})) //libs.min.js
    .pipe(gulp.dest('./dist/js'))
}

// function tarefasImagem() {
//     return gulp.src('./src/images/*')
//     .pipe(imagemin([
// 	imagemin.gifsicle({interlaced: true}),
// 	imagemin.mozjpeg({quality: 75, progressive: true}),
// 	imagemin.optipng({optimizationLevel: 5}),
// 	imagemin.svgo({
// 		plugins: [
// 			{removeViewBox: true},
// 			{cleanupIDs: false}
// 		]
// 	})
// ]))
//     .pipe(gulp.dest('./dist/images'))
// }

function tarefasImagem() {
	return gulp.src('./src/images/*')
	     .pipe(imagemin({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
		.pipe(gulp.dest('./dist/images'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
