
const gulp = require('gulp')
const { parallel, series} = require('gulp')

//ambas foram importadas pelo npm
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload


function tarefasCSS(callback) {
    //não vou usar mais a pasta vendor no projeto
    //vou minificar esses arquivos
    //concat() -> junta os arquivos
    //cssmin() -> minifica os arquivos css
    //pipe -> tratamenot do arquivo
    //gulp.dest() onde os arquivos vão ser colocados depois de processado
    // gulp.src() vai achar qualquer arquivo com .css
    //suffix vai obrigar a adição de min no nome
    gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css',
    './vendor/owl/css/owl.css', 
    'node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
'./vendor/owl/css/owl.css'])
   .pipe(concat('libs.css'))
   .pipe(cssmin())
   .pipe(rename({suffix: '.min'})) //libs.min.css
   .pipe(gulp.dest('./dist/css'))

   return callback()
}

function tarefasJS(callback) {
     gulp.src('./vendor/**/*.js')
     .pipe(babel({
        comments: false,
        presets: ['@babel/env']
     }))
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'})) //libs.min.js
    .pipe(gulp.dest('./dist/js'))

    return callback()
}

// function tarefasImagem() {
// 	return gulp.src('./src/images/*')
// 	     .pipe(imagemin({
//             pngquant: true,
//             optipng: false,
//             zopflipng: true,
//             jpegRecompress: false,
//             mozjpeg: true,
//             gifsicle: true,
//             svgo: true,
//             concurrent: 10,
//             quiet: true
//         }))
// 		.pipe(gulp.dest('./dist/images'))
// }


//trabalhar com html

function tarefasHTML(callback) {
    gulp.src('./src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))

    return callback()
    //qualquer alteração que deva ser feita, tem que fazer no html padrão, não no que está no dist
}

//cria um novo server pelo gulp
// comando para rodar -> "gulp serve"
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
     gulp.watch('./src/**/*').on('change', process) //repete o processo quando alterar algo em src
    gulp.watch('./src/**/*').on('change', reload)
})

function end(callback) {
    console.log("tarefas concluídas")
    return callback
}


const process =  series(tarefasHTML, tarefasCSS, tarefasJS, end) //

exports.default = process
//para rodar assim tem que ter o return de callback e no terminar usa apenas "gulp"
// exports.styles = tarefasCSS
// exports.scripts = tarefasJS
// exports.images = tarefasImagem


//rodar servidor do node no proj que tá no dist - $ http-server ./dist