var axios = require('axios');

module.exports = {
    createInvoice: function (options, cb = () => {
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
    },
    // getInvoice : function (arg2, arg3, arg4){
    //     console.log(arg2,arg3,arg4);
    // }
}