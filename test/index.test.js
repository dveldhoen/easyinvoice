var easyinvoice = require('../index.js');
var fs = require("fs");

test('return value is base64', callback => {
    easyinvoice.createInvoice({}, function (result) {
        expect(isBase64(result.pdf)).toBe(true);
        callback();
    });
});

test('if pdf file is stored locally', async () => {
    const data = {};
    const result = await easyinvoice.createInvoice(data);
    await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
    expect(fs.existsSync("invoice.pdf")).toBe(true);
    await fs.unlinkSync("invoice.pdf");
    expect(fs.existsSync("invoice.pdf")).toBe(false);
});

// test('if download pdf throws no error', async () => {
//     const data = {};
//     const result = await easyinvoice.createInvoice(data);
//     await easyinvoice.download('invoice.pdf', result.pdf);
// });

function isBase64(str) {
    if (str === '' || str.trim() === '') {
        return false;
    }
    try {
        return btoa(atob(str)) === str;
    } catch (err) {
        return false;
    }
}
