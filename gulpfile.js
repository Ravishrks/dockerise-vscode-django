const { watch, series, src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css'); // Minifies css file
const terser = require('gulp-terser'); // Minifies js file

// normal setup
const djangoSetup = {
    rootLocation: './',
    name: 'app',
    devProxyServer: "http://localhost:8000"

}

// project
const myProject = djangoSetup['rootLocation'] + djangoSetup['name']


// config app for template (no need to manually create html file)
// all app name and template name will be auto extracted
let appTemplates = {
    main: {
        templates: ['base.html', 'index.html']

    },
    users: {
        templates: ['login.html', 'logout.html']

    },
    article: {
        templates: ['article.html']

    },
}

// copy html template to respective template location

function syncTemplate() {
    // getting app length
    let appLength = Object.keys(appTemplates).length

    for (var i = 0; i < appLength; i++) {
        // getting app name
        var appName = Object.keys(appTemplates)[i]

        // extracting template
        var template = appTemplates[appName]['templates']

        var htmlSource = './src/templates/' + appName  + '/*.html';
        var htmlDest = myProject + '/' + appName + '/' +'templates/' + appName + '/';

        sourceToDestination(htmlSource, htmlDest);

        console.log(htmlDest)
        console.log(htmlSource)


        console.log(template)
    }


}

// source to destination
function sourceToDestination(source, destination) {
    return src(source)
        .pipe(dest(destination))
}


// source file
const fileSrc = {
    scss: ['./src/scss/style.scss'], // to be compiled to css
    css: myProject + '/main/static/main/css/*.css', // will help during bundeling and minification
    js: ['./src/js/*.js'] // all js source
}

// Build file (Keep all static files in single main app)
const buildSrc = {
    css: [myProject + '/main/static/main/css/'],
    js: [myProject + '/main/static/main/js/'],
    bulidProdLocation: [myProject + '/main/static/main/']
}

// files to be watched by browser sync
const watchFileSrc = {
    scss: ['./src/scss/*.scss'],
    js: ['./src/js/*.js'],
    html: ['./src/**/**/*.html']

}



// compiling sass to css development
function cssDev() {
    return src(fileSrc["scss"])
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(dest(buildSrc["css"]))
        .pipe(browserSync.stream());

}

// Create js development
function jsDev() {
    return src(fileSrc["js"])
        .pipe(concat('all.js'))
        .pipe(dest(buildSrc["js"]))
        .pipe(browserSync.stream());

}

// Creates css minified production 
function css() {
    return src(fileSrc["css"]) //locating sass
        .pipe(concat('bundle.min.css')) // putting  all css into one file
        .pipe(cleanCSS()) // minify css
        .pipe(dest(buildSrc["bulidProdLocation"])) //saving to destination

}

// Create js minified production 
function js() {
    return src(fileSrc["js"])
        .pipe(concat('bundle.min.js'))
        .pipe(terser()) // minify js
        .pipe(dest(buildSrc["bulidProdLocation"]))

}


// create watch function
function live() {

    // browser reloading
    browserSync.init({
        open:false, // for headless env
        proxy: djangoSetup["devProxyServer"]
    });

    // watch and compile
    watch(watchFileSrc["scss"], cssDev);
    watch(watchFileSrc["js"], jsDev);
    watch(watchFileSrc["html"], syncTemplate);

    // reload browser when file changes
    watch(watchFileSrc["scss"]).on('change', browserSync.reload);
    watch(watchFileSrc["js"]).on('change', browserSync.reload);
    watch(watchFileSrc["html"]).on('change', browserSync.reload);
}

// export tasks
exports.default = series(cssDev, jsDev, live);
exports.prod = series(cssDev, jsDev, syncTemplate, css, js);
exports.sync = syncTemplate

