const {src, dest, series, watch } = require(`gulp`),
    CSSLinter = require(`gulp-stylelint`),
    htmlCompressor = require(`gulp-htmlmin`);

let compressHTML = () => {
    return src(`*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
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
exports.lintCSS = lintCSS;
exports.compressHTML = compressHTML;
