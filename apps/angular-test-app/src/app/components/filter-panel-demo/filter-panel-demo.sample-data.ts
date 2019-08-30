export interface Company {
    name: string;
    updated: Date;
}

export interface Tenant {
    name: string;
    updated: Date;
}

export interface FilterNode {
    group: string;
    options: FieldNode[];
}

export interface FieldNode {
    label: string;
    children?: FieldNode[];
}

// export const sampleFilterFields: FilterNode[] = [
//     {
//         group: 'Tenant',
//         options: [
//             {
//                 label: 'United Kingdom',
//                 children: [
//                     {
//                         label: 'England',
//                         children: [
//                             { label: 'England Production' },
//                             { label: 'England Development' },
//                             { label: 'England Sandbos' },
//                         ]
//                     },
//                     {
//                         label: 'Scotland',
//                         children: [
//                             { label: 'Scotland Production' },
//                             { label: 'Scotland Development' },
//                             { label: 'Scotland Sandbos' },
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         group: 'Last update',
//         options: [
//             { label: 'Today' },
//             { label: 'Week' },
//             { label: 'Month' },
//         ]
//     }
// ]

export const sampleFilterFields: FieldNode[] = [
    {
        label: 'United Kingdom',
        children: [
            {
                label: 'England',
                children: [
                    { label: 'England Production' },
                    { label: 'England Development' },
                    { label: 'England Sandbos' },
                ]
            },
            {
                label: 'Scotland',
                children: [
                    { label: 'Scotland Production' },
                    { label: 'Scotland Development' },
                    { label: 'Scotland Sandbos' },
                ]
            }
        ]
    }
]

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