var axios = require('axios');

class EasyInvoice {
    constructor (pdf) {
        this._pdf = pdf;
    }

    createInvoice (options, cb = () => {
    }) {
        return new Promise((resolve, reject) => {
            var url = 'https://api.factuursimpel.nl/v1/invoices';

            const data = {
                data: options
            };
            axios.post(url, data)
                .then((response) => {
                    var result = response.data.data;
                    this._pdf = result.pdf;
                    resolve(result);
                    cb(result);
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    }

    download (filename = 'invoice.pdf', pdf = this._pdf) {
        if (typeof window === 'undefined') {
            throw new Error('Easy Invoice download() is only supported in the browser.');
        } else {
            downloadFile(filename, 'application/pdf', pdf);
        }
    }

    get pdf () {
        return this._pdf;
    }

    set pdf (value) {
        this._pdf = value;
    }
}

module.exports = new EasyInvoice();

// module.exports = {
//     createInvoice: function (options, cb = () => {
//     }) {
//         return new Promise((resolve, reject) => {
//             var url = 'https://api.factuursimpel.nl/v1/invoices';
//
//             const data = {
//                 data: options
//             };
//             axios.post(url, data)
//                 .then(function (response) {
//                     var result = response.data.data;
//                     resolve(result);
//                     cb(result);
//                 })
//                 .catch(function (error) {
//                     console.log(error);
//                 });
//         });
//     },
//     download: function (invoiceBase64, cb = () => {
//     }) {
//         return new Promise((resolve, reject) => {
//             downloadFile('invoice.pdf', 'application/pdf', invoiceBase64);
//             resolve(true);
//             cb(true);
//
//         })
//     }
// }

function downloadFile (fileName, contentType, base64) {
    const blob = base64toBlob(base64, contentType);
    // Check if IE
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
        const linkSource = 'data:' + contentType + ';base64,' + base64;
        const downloadLink = document.createElement('a');

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }
}

// Required for IE compatibility
function base64toBlob (base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    // var byteCharacters = decodeURIComponent(escape(window.atob(base64Data)))
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, {
        type: contentType
    });
}
