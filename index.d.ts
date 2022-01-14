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
    /** See documentation 'Locales and Currency' for more info. Leave empty for no currency. */
    currency?: string,
    /** Defaults to en-US, used for number formatting (See documentation 'Locales and Currency') */
    locale?: string,
    /** Defaults to 'vat' */
    'tax-notation'?: string,
    /** Defaults to 25 */
    "margin-top"?: number,
    /** Defaults to 25 */
    "margin-right"?: number,
    /** Defaults to 25 */
    "margin-left"?: number,
    /** Defaults to 25 */
    "margin-bottom"?: number,
    /** Defaults to 'A4' */
    format?: 'A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid'
}

export type InvoiceImages = {
    /** The logo on top of your invoice */
    logo?: string,
    /** The invoice background */
    background?: string
}

export type InvoiceTranslations = {
    /** Defaults to 'INVOICE' */
    invoice?: string,
    /** Defaults to 'Number' */
    number?: string,
    /** Defaults to 'Date' */
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
    /** Invoice number */
    number?: string,
    /** Invoice date */
    date?: string,
    /** Invoice due date */
    "due-date"?: string
}

export type CustomizeInvoice = {
    /** Must be base64 encoded html */
    template: string
}

export type InvoiceData = {
    customize?: CustomizeInvoice
    information?: InvoiceInformation,
    translate?: InvoiceTranslations,
    settings?: InvoiceSettings,
    images?: InvoiceImages,
    sender?: InvoiceSenderOrClient
    client?: InvoiceSenderOrClient
    products?: InvoiceProduct[]
    /** The message you would like to display on the bottom of your invoice */
    "bottom-notice"?: string
}

export type InvoiceCalculations = {
    products: {
        /** Rounded price without tax per product	 */
        subtotal: number | null
        /** Rounded tax per product	 */
        tax: number | null
        /** Rounded price including tax per product	 */
        total: number | null
    }[]
    tax: {
        /** Total tax for all products with same tax rate */
        [key: string]: number
    }
    /** Rounded price without tax for all products	 */
    subtotal: number
    /** Rounded price without tax for all products	 */
    total: number
}

type CreateInvoiceResult = {
    /** Base64 string representation of the invoice pdf */
    pdf: string
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
