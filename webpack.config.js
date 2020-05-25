var webpack = require('webpack');
var config = [];

function generateConfig(name) {
    var environment = name.indexOf('min') > -1 ? 'production' : 'development';
    var config = {
        mode: environment,
        entry: './index.js',
        target: 'node',
        output: {
            filename: name + '.js',
            sourceMapFilename: name + '.map',
            library: 'easyinvoice',
            libraryTarget: 'umd',
            globalObject: 'this'
        },
        node: {
            process: false
        },
        devtool: 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            })
        ]
    };

    return config;
}

['easyinvoice', 'easyinvoice.min'].forEach(function (key) {
    config.push(generateConfig(key));
});

console.log(config);

module.exports = config;