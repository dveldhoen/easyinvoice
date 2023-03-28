require('esbuild')
    .build({
            logLevel: 'info',
            entryPoints: ['src/browser/browser.ts'],
            bundle: true,
            sourcemap: 'external',
            minify: true,
            outfile: 'dist/easyinvoice.min.js',
            external: ['pdfjs-dist'],
            legalComments: 'none',
    })
    .catch(() => process.exit(1));
