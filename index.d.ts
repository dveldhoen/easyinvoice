export type InvoiceSenderOrClient = {
    company?: string
    address?: string
    zip?: string
    city?: string
    country?: string
    /** Custom values */
    [key: string]: string
}

export type InvoiceProduct = {
    quantity?: string
    description?: string
    "tax-rate"?: number
    price?: number
}

export type InvoiceSettings = {
    currency?: string,
    /** Defaults to en-US, used for number formatting (See documentation 'Locales and Currency') */
    locale?: string,
    /** Defaults to 'vat' */
    "tax-notation"?: string,
    /** Defaults to '25' */
    "margin-top"?: number,
    /** Defaults to '25' */
    "margin-right"?: number,
    /** Defaults to '25' */
    "margin-left"?: number,
    /** Defaults to '25' */
    "margin-bottom"?: number,
    /** Defaults to A4 */
    format?: 'A4' | 'A3' | 'A5' | 'Legal' | 'Letter' | 'Tabloid'
    height?: `${number}px` | `${number}mm` | `${number}cm` | `${number}in`
    width?: `${number}px` | `${number}mm` | `${number}cm` | `${number}in`
    /** Defaults to portrait */
    orientation?: 'portrait' | 'landscape'

}

export type InvoiceImages = {
    /** The logo on top of your invoice */
    logo?: string,
    /** The invoice background */
    background?: string
}

export type InvoiceTranslations = {
    /** Default to 'INVOICE' */
    invoice?: string,
    /** Defaults to 'Number' */
    number?: string,
    /** Default to 'Date' */
    date?: string,
    /** Defaults to 'Due Date' */
    "due-date"?: string,
    /** Defaults to 'Subtotal' */
    subtotal?: string,
    /** Defaults to 'Products' */
    products?: string,
    /** Default to 'Quantity' */
    quantity?: string,
    /** Defaults to 'Price' */
    price?: string,
    /** Defaults to 'Total' */
    "product-total"?: string,
    /** Defaults to 'Total' */
    total?: string
}

export type InvoiceInformation = {
    number?: string,
    date?: string,
    "due-date"?: string
}

export type InvoiceData = {
    information?: InvoiceInformation,
    /** Translate your invoice to your preferred language */
    translate?: InvoiceTranslations,
    /** Settings to customize your invoice */
    settings?: InvoiceSettings,
    images?: InvoiceImages,
    /** Your own data */
    sender?: InvoiceSenderOrClient
    /** Your recipient */
    client?: InvoiceSenderOrClient
    /** The products you would like to see on your invoice. Total values are being calculated automatically */
    products?: InvoiceProduct[]
    /** The message you would like to display on the bottom of your invoice */
    "bottom-notice"?: string
    /** Customize enables you to provide your own templates. Please review the documentation for instructions and examples */
    customize?: InvoiceCustomizations
}

type InvoiceCustomizations = {
    /**
     * Must be base64 encoded html
     * Example: fs.readFileSync('template.html', 'base64')
     */
    template?: () => Buffer
}

export type InvoiceCalculations = {
    /** Array of objects reflecting the products used in creation	 */
    products: ProductCalculations[]
    /** Object containing total calculated tax per unique tax rate */
    tax: TaxCalculations
    /** Rounded price without tax for all products	 */
    subtotal: number
    /** Rounded price with tax for all products	 */
    total: number
}

type ProductCalculations = {
    subtotal: number
    tax: number
    total: number
}

type TaxCalculations = {
    /** The key is a unique tax rate and the value is the total calculated tax for the rate */
    [key: number]: number
}

type CreateInvoiceResult = {
    pdf: string // Base64
    calculations: InvoiceCalculations
}

declare module 'easyinvoice' {
    const easyinvoice: {
        createInvoice: (
            data: InvoiceData,
            cb?: (result: CreateInvoiceResult) => void
        ) => Promise<CreateInvoiceResult>

        /**
         * Download the generated invoice (browser only)
         * @param {String} filename The file name to save as (defaults to 'invoice.pdf')
         * @param {String} pdf The base64 PDF string gotten from running createInvoice
         */
        download: (filename?: string, pdf?: string) => void

        /**
         * Render the generated invoice (browser only)
         * @param elementId The ID of the element to render the PDF in
         * @param pdf The base64 PDF string gotten from running createInvoice
         * @param cb Callback function that is called when rendering is complete
         */
        render: (elementId: string, pdf?: string, cb?: () => void) => void
    }

    export = easyinvoice
}
