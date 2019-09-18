export interface FieldNode {
    label: string;
    children?: FieldNode[];
}

export const sampleFilterFields: any =
{
    api: [
        {
            label: 'Consumer Banking',
            children: [
                {
                    label: 'Alerts'
                },
                {
                    label: 'Customer Management'
                },
                {
                    label: 'Money Movement'
                },
            ]
        },
        {
            label: 'Corporate Banking',
            children: [
                {
                    label: 'Account Information'
                },
                {
                    label: 'Back Office'
                },
                {
                    label: 'Payments'
                },
            ]
        },
        {
            label: 'Financial Toolbox'
        },
        {
            label: 'Lending',
            children: [
                {
                    label: 'Data Management'
                },
                {
                    label: 'Integration'
                },
                {
                    label: 'Lending Tools'
                },
            ]
        },
        {
            label: 'Payment',
            children: [
                {
                    label: 'Fees & Billings'
                },
                {
                    label: 'Payment Initiation'
                },
                {
                    label: 'Payment Request'
                },
            ]
        },
    ],
    solution: [
        {
            label: 'Lending',
            children: [
                {
                    label: 'Data Management'
                },
                {
                    label: 'Integration'
                },
                {
                    label: 'Lending Tools'
                },
            ]
        },
    ],
    dataset: [
        {
            label: 'Payment',
            children: [
                {
                    label: 'Fees & Billings'
                },
                {
                    label: 'Payment Initiation'
                },
                {
                    label: 'Payment Request'
                },
            ]
        },
    ]
}