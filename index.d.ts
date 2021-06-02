export type InvoiceSenderOrClient = {
    company?: string
    address?: string
    zip?: string
    city?: string
    country?: string
    [key: string]: string // custom1, custom2, etc.
}

export type InvoiceProduct = {
    quantity: string
    description: string
    tax: number
    price: number
}

export type InvoiceData = {
    documentTitle?: string // Defaults to INVOICE
    locale?: string // Defaults to en-US, used for number formatting (see docs)
    currency?: string // See documentation 'Locales and Currency' for more info
    taxNotation?: string //vat or gst
    marginTop?: number // Defaults to 25
    marginRight?: number // Defaults to 25
    marginLeft?: number // Defaults to 25
    marginBottom?: number // Defaults to 25
    logo?: string //URL or base64
    background?: string // URL or base64 (img or pdf)
    sender?: InvoiceSenderOrClient
    client?: InvoiceSenderOrClient
    invoiceNumber?: string
    invoiceDate?: string
    products?: InvoiceProduct[]
    bottomNotice?: string
    /**
     * Used for translating the headers to your preferred language
     *
     */
    translate?: {
        invoiceNumber?: string
        invoiceDate?: string
        products?: string
        quantity?: string
        price?: string
        subtotal?: string
        total?: string
    }
}

type CreateInvoiceResult = {
    pdf: string // Base64
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
