const {src, dest, series, watch } = require(`gulp`),
    CSSLinter = require(`gulp-stylelint`),
    jsLinter = require(`gulp-eslint`),
    babel = require(`gulp-babel`),
    browserSync = require(`browser-sync`),
    htmlCompressor = require(`gulp-htmlmin`),
    cssCompressor = require(`gulp-clean-css`),
    jsCompressor = require(`gulp-uglify`),
    reload = browserSync.reload;

let compressHTML = () => {
    return src(`*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let compressCSS = () => {
    return src(`styles/*.css`)
    .pipe(cssCompressor())
    .pipe(dest(`prod/styles`));
};

let lintCSS = () => {
    return src(`styles/main.css`)
        .pipe(CSSLinter({
            failAfterError: false,
            reporters: [
                {formatter: `string`, console: true}
            ]
        }));
};

let lintJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`));
};

let transpileJSForDev = () => {
    return src(`scripts/*.js`)
        .pipe(babel())
        .pipe(dest(`js`));
};

let transpileJSForProd = () => {
    return src(`scripts/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/js`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        server: {
            baseDir: [
                `./`
            ]
        }
    });
    watch(`scripts/*.js`, series(lintJS, transpileJSForDev))
        .on(`change`, reload);

    watch(`styles/**/*.css`, lintCSS)
        .on(`change`, reload);

};

exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
exports.default = serve;
exports.serve = series(
    lintJS,
    transpileJSForDev,
    lintCSS,
    serve
);
