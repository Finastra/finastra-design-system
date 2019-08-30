export interface Company {
    name: string;
    updated: Date;
}

export interface Tenant {
    name: string;
    updated: Date;
}

export const sampleFilterFields = [
    {
        group: "Tenant",
        options: [
            { label: 'British Production' },
            { label: 'British Sandbox' },
            { label: 'British Development' }
        ]
    },
    {
        group: "Company",
        options: [
            { label: 'Kore.io' },
            { label: 'Geezeo' },
            { label: 'Sonect' }
        ]
    }
];

export const companies: Company[] = [
    {
        name: 'Kore.io',
        updated: new Date('1/1/18'),
    },
    {
        name: 'Geezeo',
        updated: new Date('2/20/18'),
    },
    {
        name: 'Sonect',
        updated: new Date('6/28/18'),
    }
];

export const tenants: Tenant[] = [
    {
        name: 'British Production',
        updated: new Date('8/20/18')
    },
    {
        name: 'British Sandbox',
        updated: new Date('1/1/18')
    },
    {
        name: 'British Development',
        updated: new Date('6/20/18')
    }
];