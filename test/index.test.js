var easyinvoice = require('../index');

test('return value is base64', callback => {
    easyinvoice.createInvoice({}, function (result) {
        expect(isBase64(result.pdf)).toBe(true);
        callback();
    });
});

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