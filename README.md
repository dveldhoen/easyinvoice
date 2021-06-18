<p align="center"><a href="https://easyinvoice.cloud" target="_blank" rel="noopener noreferrer"><img width="250" src="https://public.easyinvoice.cloud/img/logo_en_original.png" alt="Easy Invoice logo"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/easyinvoice"><img src="https://img.shields.io/npm/v/easyinvoice.svg" alt="Version"></a>
  <a href="https://github.com/dveldhoen/easyinvoice/actions?query=branch%3Amaster"><img src="https://github.com/dveldhoen/easyinvoice/workflows/build/badge.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/dveldhoen/easyinvoice"><img src="https://img.shields.io/codecov/c/github/dveldhoen/easyinvoice/master.svg" alt="Coverage Status"></a>  
  <br/>
  <a href="https://npmcharts.com/compare/easyinvoice?minimal=true"><img src="https://img.shields.io/npm/dm/easyinvoice.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/easyinvoice"><img src="https://img.shields.io/npm/l/easyinvoice.svg" alt="License"></a>
  <a href="https://github.com/dveldhoen/easyinvoice"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="Pull Request's Welcome"></a>
</p>

<p align="center">
If this package helped you out please star us on Github!
<br/>
Much appreciated!
<br/>
<br/>
<a href="https://github.com/dveldhoen/easyinvoice/"><img src="https://img.shields.io/github/stars/dveldhoen/easyinvoice.svg?style=social&label=Star" alt="Pull Request's Welcome"></a>
</p>

## Platform support
|<b>Platform</b> | Repository |Supported  | Link |
|---|---|---|---|
| PHP | Composer |Yes! | <a href="https://packagist.org/packages/easyapis.io/easyinvoice"><img src="https://img.shields.io/badge/EasyInvoice%20on-Composer-blue" alt="Available on Composer"></a> |
| Javascript | NPM | Yes! | <a href="https://www.npmjs.com/package/easyinvoice"><img src="https://img.shields.io/badge/EasyInvoice%20on-NPM-blue" alt="Available on NPM"></a> |
| Python | PIP | Yes! | <a href="https://pypi.org/project/easyinvoice/"><img src="https://img.shields.io/badge/EasyInvoice%20on-PIP-blue" alt="Available on PIP"></a> |
| Java | Maven | In progress... |  |

[comment]: <> (## Features)

[comment]: <> (- [x] Create invoices)

[comment]: <> (- [ ] List, get, update, delete invoices &#40;api ready / npm in progress&#41;)

[comment]: <> (- [ ] Create, list, get, update, delete clients &#40;api ready / npm in progress&#41;)

[comment]: <> (- [ ] More soon...)

<br/>

## Sample
<div align="center">
    <img width="350" style="border: 1px black solid" src="https://public.easyinvoice.cloud/img/sample-invoice.png" alt="Easy Invoice Sample Logo Only">
    <img width="350" style="border: 1px black solid" src="https://public.easyinvoice.cloud/img/sample-invoice-background.png" alt="Easy Invoice Sample With Background">
</div>

### JSON Configs used for above samples:

- <a href="https://public.easyinvoice.cloud/json/easyinvoice-sample.json">[View JSON] First Sample</a>
- <a href="https://public.easyinvoice.cloud/json/easyinvoice-sample-background.json">[View JSON] Second Sample</a>

## Demo
[JS Fiddle: Plain Javascript](https://jsfiddle.net/easyinvoice/rjtsxhp3/)
<br/>
[JS Fiddle: Vue](https://jsfiddle.net/easyinvoice/gpb1osav/)
<br/>
[JS Fiddle: React](https://jsfiddle.net/easyinvoice/qfs8dk0p/)
<br/>
[JS Fiddle: Angular](https://jsfiddle.net/easyinvoice/pmt3bs9q/)

## Step-by-step guide
Read our step-by-step guide on Medium. <a href="https://medium.com/@dveldhoen/creating-invoices-in-nodejs-eaae01f0d3a4">Click here!</a>

## Installing

Using npm:

```bash
$ npm install easyinvoice --save
```

Using yarn:

```bash
$ yarn add easyinvoice
```

Using unkpg CDN:

```html
<script src="https://unpkg.com/easyinvoice/dist/easyinvoice.min.js"></script>
```

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/easyinvoice/dist/easyinvoice.min.js"></script>
```

## Import

Html
```html
<script src="https://unpkg.com/easyinvoice/dist/easyinvoice.min.js"></script>
```

NodeJS
```js
var easyinvoice = require('easyinvoice');
```

Vue/React
```js
import easyinvoice from 'easyinvoice';
```

Angular
```js
import * as easyinvoice from 'easyinvoice';
//ór (not both)
import { easyinvoice } from 'easyinvoice';
```

## Example (NodeJS)

```js
//Import the library into your project
var easyinvoice = require('easyinvoice');

var data = {
    //"documentTitle": "RECEIPT", //Defaults to INVOICE
    //"locale": "de-DE", //Defaults to en-US, used for number formatting (see docs)
    "currency": "USD", //See documentation 'Locales and Currency' for more info
    "taxNotation": "vat", //or gst
    "marginTop": 25,
    "marginRight": 25,
    "marginLeft": 25,
    "marginBottom": 25,
    "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png", //or base64
    "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg", //or base64 //img or pdf
    "sender": {
        "company": "Sample Corp",
        "address": "Sample Street 123",
        "zip": "1234 AB",
        "city": "Sampletown",
        "country": "Samplecountry"
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
    },
    "client": {
       	"company": "Client Corp",
       	"address": "Clientstreet 456",
       	"zip": "4567 CD",
       	"city": "Clientcity",
       	"country": "Clientcountry"
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
    },
    "invoiceNumber": "2021.0001",
    "invoiceDate": "1.1.2021",
    "products": [
        {
            "quantity": "2",
            "description": "Test1",
            "tax": 6,
            "price": 33.87
        },
        {
            "quantity": "4",
            "description": "Test2",
            "tax": 21,
            "price": 10.45
        }
    ],
    "bottomNotice": "Kindly pay your invoice within 15 days.",
    //Used for translating the headers to your preferred language
    //Defaults to English. Below example is translated to Dutch
    // "translate": { 
    //     "invoiceNumber": "Factuurnummer",
    //     "invoiceDate": "Factuurdatum",
    //     "products": "Producten", 
    //     "quantity": "Aantal", 
    //     "price": "Prijs",
    //     "subtotal": "Subtotaal",
    //     "total": "Totaal" 
    // }
};

//Create your invoice! Easy!
easyinvoice.createInvoice(data, function (result) {
    //The response will contain a base64 encoded PDF file
    console.log(result.pdf);
});
```

## Locales and Currency
Used for number formatting and the currency symbol:
```js
//E.g. for Germany, prices would look like 123.456,78 €
const data = { locale: 'de-DE', currency: 'EUR'};

//E.g. for US, prices would look like $123,456.78
const data = { locale: 'en-US', currency: 'USD'};
```

Formatting and symbols are applied through the [ECMAScript Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

[Click here for a list of locale codes](https://datahub.io/core/language-codes/r/3.html)
<br/>
[Click here for a list of currency codes](https://www.iban.com/currency-codes)

Disclaimer: Not all locales and currency codes found in the above lists might be supported by the ECMAScript Internationalization API.

## Logo and Background
The logo and url inputs accept either a URL or a base64 encoded file.

Supported file types:

- Logo: image
- Background: image, pdf

### URL

```js
const data = {
    logo: "https://public.easyinvoice.cloud/img/logo_en_original.png",
    background: "https://public.easyinvoice.cloud/img/watermark_draft.jpg",
};
```

### Base64

```js
const data = {
    //Note: Sample base64 string
    //Please use the link below to convert your image to base64
    logo: "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    background: "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
};
```

### Local File (NodeJS only)

```js
//Import fs to be able to read from the local file system
var fs = require("fs");

//Use the code below to read your local file as a base64 string
const data = {
    logo: fs.readFileSync('logo.png', 'base64'),
    background: fs.readFileSync('images/background.png', 'base64')
};
```

[Click here for an online tool to convert an image to base64](https://base64.guru/converter/encode/image)

### Async/await support
```js
const result = await easyinvoice.createInvoice(data);
console.log(result.pdf);
```

### To store the file locally (NodeJS)
```js
var fs = require('fs');

const data = {};
const result = await easyinvoice.createInvoice(data);                       
await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
```

### Download your invoice (browser only)

Using callback
```js
const data = {};
easyinvoice.createInvoice(data, function (result) {
    easyinvoice.download('myInvoice.pdf', result.pdf);
    //	you can download like this as well:
    //	easyinvoice.download();
    //	easyinvoice.download('myInvoice.pdf');   
});
```

Using async/await
```js
const data = {};
const result = await easyinvoice.createInvoice(data);                       
easyinvoice.download('myInvoice.pdf', result.pdf);
//	you can download like this as well:
//	easyinvoice.download();
//	easyinvoice.download('myInvoice.pdf');
```

### Render(view) your invoice (browser only)

html
```html
<!-- Only include when rendering is required -->
<script src="https://unpkg.com/pdfjs-dist/build/pdf.min.js"></script>
<script src="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js"></script>

<!-- Include pdfjs version 2.3.200 for Internet Explorer compatibility, no worker required -->
<!-- <script src="https://unpkg.com/pdfjs-dist@2.3.200/build/pdf.min.js"></script> -->

<!-- The pdf will be rendered within this div -->
<div id="pdf"></div>
```

css (optional)
```css
#pdf {
  text-align: center;
}

#pdf canvas {
  border: 1px solid black;
  width: 95%;
}
```

js: Using Callback
```js
var data = {};
var elementId = 'pdf';
easyinvoice.createInvoice(data, function(result) {
    easyinvoice.render(elementId, result.pdf, function(){
        console.log('Invoice rendered!');
    });
});
```

js: Using async/await
```js
const data = {}; 
const elementId = 'pdf'; 
const result = await easyinvoice.createInvoice(data);      
await easyinvoice.render(elementId, result.pdf);
```

You could view your base64 pdf through the following website:
https://base64.guru/converter/decode/pdf

Paste the base64 string and click 'Decode Base64 to PDF'.

