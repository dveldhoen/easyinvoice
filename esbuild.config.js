require('esbuild')
    .build({
        logLevel: 'info',
        entryPoints: ['index.js'],
        bundle: true,
        sourcemap: true,
        minify: true,
        outfile: 'dist/easyinvoice.min.js'
    })
    .catch(() => process.exit(1));
