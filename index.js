var axios = require('axios');

class easyinvoice {

    static createInvoice(options, cb = () => {
    }) {
        return new Promise((resolve, reject) => {
            var url = "https://api.factuursimpel.nl/v1/invoices";

            const data = {
                data: options
            };
            axios.post(url, data)
                .then(function (response) {
                    var result = response['data']['data'];
                    resolve(result);
                    cb(result);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    };
}

module.exports = easyinvoice;
