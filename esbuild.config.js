require('esbuild')
    .build({
        logLevel: 'info',
        entryPoints: ['src/index.ts'],
        bundle: true,
        sourcemap: 'external',
        minify: true,
        outfile: 'dist/easyinvoice.min.js',
        external: ['pdfjs-dist'],
        legalComments: 'none',
    })
    .catch(() => process.exit(1));