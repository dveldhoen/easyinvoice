var webpack = require("webpack");
var config = [];

// module.exports = {
//     mode: 'production',
//     entry: './index.js',
//     output: {
//         filename: 'easyinvoice.js',
//         sourceMapFilename: 'easyinvoice.js.map',
//         library: 'easyinvoice'
//     },
//     devtool: false,
//     plugins: [
//         new webpack.SourceMapDevToolPlugin({
//             filename: 'easyinvoice.js.map',
//         })
//     ]
// };

function generateConfig(name) {
    var environment = name.indexOf('min') > -1 ? 'production' : 'development';
    var config = {
        mode: environment,
        entry: './index.js',
        output: {
            filename: name + '.js',
            sourceMapFilename: name + '.map',
            library: 'easyinvoice',
            libraryTarget: 'umd'
        },
        node: {
            process: false
        },
        devtool: 'source-map'
    };

    return config;
}

['easyinvoice', 'easyinvoice.min'].forEach(function (key) {
    config.push(generateConfig(key));
});

console.log(config);

module.exports = config;