export type InvoiceSenderOrClient = {
    company?: string
    address?: string
    zip?: string
    city?: string
    country?: string
    [key: string]: string
}

export type InvoiceProduct = {
    quantity?: string
    description?: string
    tax?: number
    price?: number
}

export type InvoiceSettings = {
    currency?: string,
    locale?: string,
    taxNotation?: string,
    "margin-top"?: number,
    "margin-right"?: number,
    "margin-left"?: number,
    "margin-bottom"?: number,
    format?: string
}

export type InvoiceImages = {
    logo?: string,
    background?: string
}

export type InvoiceTranslations = {
        invoice?: string,
        number?: string,
        date?: string,
        "due-date"?: string,
        subtotal?: string,
        products?: string,
        quantity?: string,
        price?: string,
        "product-total"?: string,
        total?: string
}

export type InvoiceInformation = {
    number?: string,
    date?: string,
    "due-date"?: string
}

export type InvoiceData = {
    information?: InvoiceInformation,
    translate?: InvoiceTranslations,
    settings?: InvoiceSettings,
    images?: InvoiceImages,
    sender?: InvoiceSenderOrClient
    client?: InvoiceSenderOrClient
    products?: InvoiceProduct[]
    bottomNotice?: string
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
