import easyinvoice from '../src/lib/easyinvoice';
import isBase64 from 'is-base64';

describe('testing index file', () => {
    test('return value should be base64', () => {
        easyinvoice.createInvoice({}, function (result: any) {
            expect(isBase64(result.pdf)).toBe(true);
        });
    });
});
