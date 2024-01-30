// easyinvoice.d.ts
declare module 'easyinvoice' {
    export interface InvoiceSenderOrClient {
        company?: string;
        address?: string;
        zip?: string;
        city?: string;
        country?: string;
        /** Custom values */
        [key: string]: string | undefined;
    }

    export interface InvoiceProduct {
        quantity?: string;
        description?: string;
        taxRate?: number;
        price?: number;
    }

    export interface InvoiceSettings {
        currency?: string;
        locale?: string;
        taxNotation?: string;
        marginTop?: number;
        marginRight?: number;
        marginLeft?: number;
        marginBottom?: number;
        format?: 'A4' | 'A3' | 'A5' | 'Legal' | 'Letter' | 'Tabloid';
        height?: `${number}px` | `${number}mm` | `${number}cm` | `${number}in`;
        width?: `${number}px` | `${number}mm` | `${number}cm` | `${number}in`;
        orientation?: 'portrait' | 'landscape';
    }

    export interface InvoiceImages {
        logo?: string;
        background?: string;
    }

    export interface InvoiceTranslations {
        invoice?: string;
        number?: string;
        date?: string;
        dueDate?: string;
        subtotal?: string;
        products?: string;
        quantity?: string;
        price?: string;
        productTotal?: string;
        total?: string;
        vat?: string;
    }

    export interface InvoiceInformation {
        number?: string;
        date?: string;
        dueDate?: string;
    }

    export interface InvoiceData {
        apiKey?: string;
        mode?: 'production' | 'development';
        information?: InvoiceInformation;
        translate?: InvoiceTranslations;
        settings?: InvoiceSettings;
        images?: InvoiceImages;
        sender?: InvoiceSenderOrClient;
        client?: InvoiceSenderOrClient;
        products?: InvoiceProduct[];
        bottomNotice?: string;
        customize?: InvoiceCustomizations;
    }

    export interface InvoiceCustomizations {
        template?: string;
    }

    export interface InvoiceCalculations {
        products: ProductCalculations[];
        tax: TaxCalculations;
        subtotal: number;
        total: number;
    }

    export interface ProductCalculations {
        subtotal: number;
        tax: number;
        total: number;
    }

    export interface TaxCalculations {
        [key: number]: number;
    }

    export interface CreateInvoiceResult {
        pdf: string; // Base64
        calculations: InvoiceCalculations;
    }

    interface EasyInvoice {
        createInvoice: (
            data: InvoiceData,
            cb?: (result: CreateInvoiceResult) => void
        ) => Promise<CreateInvoiceResult>;

        download: (filename?: string, pdf?: string) => void;

        render: (elementId: string, pdf?: string, cb?: () => void) => void;

        print:(pdf?: string) => void
    }

    const easyinvoice: EasyInvoice;
    export default easyinvoice;
}
