<p align="center"><a href="https://easyinvoice.cloud" target="_blank" rel="noopener noreferrer"><img width="250" src="https://easyinvoice.cloud/img/logo.png" alt="Easy Invoice logo"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/easyinvoice"><img src="https://img.shields.io/npm/v/easyinvoice.svg" alt="Version"></a>
  <a href="https://github.com/dveldhoen/easyinvoice/actions?query=branch%3Amaster"><img src="https://github.com/dveldhoen/easyinvoice/workflows/build/badge.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/dveldhoen/easyinvoice"><img src="https://img.shields.io/codecov/c/github/dveldhoen/easyinvoice/master.svg" alt="Coverage Status"></a>
  <a href="https://david-dm.org/dveldhoen/easyinvoice"><img src="https://david-dm.org/dveldhoen/easyinvoice.svg" alt="Build Status"></a>
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
<a href="https://github.com/dveldhoen/easyinvoice/"><img src="https://img.shields.io/github/stars/dveldhoen/easyinvoice.svg?style=social&label=Star" alt="Pull Request's Welcome"></a>
</p>



## Features
- [x] Create invoices
- [ ] List, get, update, delete invoices (api ready / npm in progress)
- [ ] Create, list, get, update, delete clients (api ready / npm in progress)
- [ ] More soon...

## Demo
[JS Fiddle: Plain Javascript](https://jsfiddle.net/easyinvoice/rjtsxhp3/)
<br/>
[JS Fiddle: Vue](https://jsfiddle.net/easyinvoice/gpb1osav/)
<br/>
[JS Fiddle: React](https://jsfiddle.net/easyinvoice/qfs8dk0p/)
<br/>
[JS Fiddle: Angular](https://jsfiddle.net/easyinvoice/pmt3bs9q/)

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
    "currency": "USD",
    "taxNotation": "vat", //or gst
    "marginTop": 25,
    "marginRight": 25,
    "marginLeft": 25,
    "marginBottom": 25,
    "logo": "https://www.easyinvoice.cloud/img/logo.png", //or base64
    //"logoExtension": "png", //only when logo is base64
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
    "invoiceNumber": "2020.0001",
    "invoiceDate": "05-01-2020",
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
    "bottomNotice": "Kindly pay your invoice within 15 days."
};

//Create your invoice! Easy!
easyinvoice.createInvoice(data, function (result) {
    //The response will contain a base64 encoded PDF file
    console.log(result.pdf);
});
```

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

## Supported currencies
|       |       |
|-------|-------|
|	AED	|	AED	|
|	AFN	|	AFN	|
|	ALL	|	ALL	|
|	AMD	|	AMD	|
|	ANG	|	ANG	|
|	AOA	|	AOA	|
|	ARS	|	ARS	|
|	AUD	|	A$	|
|	AWG	|	AWG	|
|	AZN	|	AZN	|
|	BAM	|	BAM	|
|	BBD	|	BBD	|
|	BDT	|	BDT	|
|	BGN	|	BGN	|
|	BHD	|	BHD	|
|	BIF	|	BIF	|
|	BMD	|	BMD	|
|	BND	|	BND	|
|	BOB	|	BOB	|
|	BRL	|	R$	|
|	BSD	|	BSD	|
|	BTC	|	BTC	|
|	BTN	|	BTN	|
|	BTS	|	BTS	|
|	BWP	|	BWP	|
|	BYN	|	BYN	|
|	BZD	|	BZD	|
|	CAD	|	CA$	|
|	CDF	|	CDF	|
|	CHF	|	CHF	|
|	CLF	|	CLF	|
|	CLP	|	CLP	|
|	CNH	|	CNH	|
|	CNY	|	CN¥	|
|	COP	|	COP	|
|	CRC	|	CRC	|
|	CUC	|	CUC	|
|	CUP	|	CUP	|
|	CVE	|	CVE	|
|	CZK	|	CZK	|
|	DASH	|	DASH	|
|	DJF	|	DJF	|
|	DKK	|	DKK	|
|	DOGE	|	DOGE	|
|	DOP	|	DOP	|
|	DZD	|	DZD	|
|	EAC	|	EAC	|
|	EGP	|	EGP	|
|	EMC	|	EMC	|
|	ERN	|	ERN	|
|	ETB	|	ETB	|
|	ETH	|	ETH	|
|	EUR	|	€	|
|	FCT	|	FCT	|
|	FJD	|	FJD	|
|	FKP	|	FKP	|
|	FTC	|	FTC	|
|	GBP	|	£	|
|	GEL	|	GEL	|
|	GGP	|	GGP	|
|	GHS	|	GHS	|
|	GIP	|	GIP	|
|	GMD	|	GMD	|
|	GNF	|	GNF	|
|	GTQ	|	GTQ	|
|	GYD	|	GYD	|
|	HKD	|	HK$	|
|	HNL	|	HNL	|
|	HRK	|	HRK	|
|	HTG	|	HTG	|
|	HUF	|	HUF	|
|	IDR	|	IDR	|
|	ILS	|	₪	|
|	IMP	|	IMP	|
|	INR	|	₹	|
|	IQD	|	IQD	|
|	IRR	|	IRR	|
|	ISK	|	ISK	|
|	JEP	|	JEP	|
|	JMD	|	JMD	|
|	JOD	|	JOD	|
|	JPY	|	¥	|
|	KES	|	KES	|
|	KGS	|	KGS	|
|	KHR	|	KHR	|
|	KMF	|	KMF	|
|	KPW	|	KPW	|
|	KRW	|	₩	|
|	KWD	|	KWD	|
|	KYD	|	KYD	|
|	KZT	|	KZT	|
|	LAK	|	LAK	|
|	LBP	|	LBP	|
|	LD	|	LD	|
|	LKR	|	LKR	|
|	LRD	|	LRD	|
|	LSL	|	LSL	|
|	LTC	|	LTC	|
|	LYD	|	LYD	|
|	MAD	|	MAD	|
|	MDL	|	MDL	|
|	MGA	|	MGA	|
|	MKD	|	MKD	|
|	MMK	|	MMK	|
|	MNT	|	MNT	|
|	MOP	|	MOP	|
|	MRO	|	MRO	|
|	MRU	|	MRU	|
|	MUR	|	MUR	|
|	MVR	|	MVR	|
|	MWK	|	MWK	|
|	MXN	|	MX$	|
|	MYR	|	MYR	|
|	MZN	|	MZN	|
|	NAD	|	NAD	|
|	NGN	|	NGN	|
|	NIO	|	NIO	|
|	NMC	|	NMC	|
|	NOK	|	NOK	|
|	NPR	|	NPR	|
|	NVC	|	NVC	|
|	NXT	|	NXT	|
|	NZD	|	NZ$	|
|	OMR	|	OMR	|
|	PAB	|	PAB	|
|	PEN	|	PEN	|
|	PGK	|	PGK	|
|	PHP	|	PHP	|
|	PKR	|	PKR	|
|	PLN	|	PLN	|
|	PPC	|	PPC	|
|	PYG	|	PYG	|
|	QAR	|	QAR	|
|	RON	|	RON	|
|	RSD	|	RSD	|
|	RUB	|	RUB	|
|	RWF	|	RWF	|
|	SAR	|	SAR	|
|	SBD	|	SBD	|
|	SCR	|	SCR	|
|	SDG	|	SDG	|
|	SEK	|	SEK	|
|	SGD	|	SGD	|
|	SHP	|	SHP	|
|	SLL	|	SLL	|
|	SOS	|	SOS	|
|	SRD	|	SRD	|
|	SSP	|	SSP	|
|	STD	|	STD	|
|	STN	|	STN	|
|	STR	|	STR	|
|	SVC	|	SVC	|
|	SYP	|	SYP	|
|	SZL	|	SZL	|
|	THB	|	THB	|
|	TJS	|	TJS	|
|	TMT	|	TMT	|
|	TND	|	TND	|
|	TOP	|	TOP	|
|	TRY	|	TRY	|
|	TTD	|	TTD	|
|	TWD	|	NT$	|
|	TZS	|	TZS	|
|	UAH	|	UAH	|
|	UGX	|	UGX	|
|	USD	|	$	|
|	UYU	|	UYU	|
|	UZS	|	UZS	|
|	VEF	|	VEF	|
|	VEF_BLKMKT	|	VEF_BLKMKT	|
|	VEF_DICOM	|	VEF_DICOM	|
|	VEF_DIPRO	|	VEF_DIPRO	|
|	VES	|	VES	|
|	VND	|	₫	|
|	VTC	|	VTC	|
|	VUV	|	VUV	|
|	WST	|	WST	|
|	XAF	|	FCFA	|
|	XAG	|	XAG	|
|	XAU	|	XAU	|
|	XCD	|	EC$	|
|	XDR	|	XDR	|
|	XMR	|	XMR	|
|	XOF	|	CFA	|
|	XPD	|	XPD	|
|	XPF	|	CFPF	|
|	XPM	|	XPM	|
|	XPT	|	XPT	|
|	XRP	|	XRP	|
|	YER	|	YER	|
|	ZAR	|	ZAR	|
|	ZMW	|	ZMW	|
|	ZWL	|	ZWL	|
