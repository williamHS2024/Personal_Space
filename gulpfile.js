import {src,dest, watch} from "gulp"
import * as dartSass from "sass"
import gulpSass from "gulp-sass"

const sass = gulpSass(dartSass);

export function css(done){
    src("src/scss/app.scss")
        .pipe(sass().on("error",sass.logError))
        .pipe(dest("public/build/css"))
    done();
}

export function cssViewNew(done){
    src("src/scss/panelInfo.scss")//Cambiaar conforme se ocupa un archivo nuevo de scss
        .pipe(sass().on("error",sass.logError))
        .pipe(dest("public/build/css"))
    done();
}

export function dev(){
    watch("src/scss/**/*.scss",css)
}

export function devCreateCSS(){
    watch("src/scss/**/*.scss",cssViewNew)
}