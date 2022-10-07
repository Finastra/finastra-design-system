
export const ELEMENT_DATA = [
    {
        API: 'Exchange Rates',
        'End Point': 'End point 1',
        'Date Time': '01-10-2019',
        'Day of Week': 'Monday',
        'Hour of Day': '16h-17h',
        'Status Code': '200',
        'Error Response': 'OK',
        'No. of Calls': 3,
        Revenue: {
            currency: '€',
            amount: 3
        },
        Status: {
            label: 'Approved'
        },
        "Confidence Score": 0.8
    },
    {
        API: 'Exchange Rates',
        'End Point': 'End point 2',
        'Date Time': '02-01-2019',
        'Day of Week': 'Monday',
        'Hour of Day': '16h-17h',
        'Status Code': '400',
        'Error Response': 'Bad Request',
        'No. of Calls': 2,
        Revenue: {
            currency: '€',
            amount: 2
        },
        Status: {
            label: 'Rejected'
        },
        "Confidence Score": '50%'
    },
    {
        API: 'Exchange Rates',
        'End Point': 'End point 3',
        'Date Time': '03-01-2019',
        'Day of Week': 'Monday',
        'Hour of Day': '17h-18h',
        'Status Code': '500',
        'Error Response': 'Server Error',
        'No. of Calls': 4,
        Revenue: {
            currency: '€',
            amount: 4
        },
        _class: 'hello',
        Status: {
            label: 'Denied'
        },
        "Confidence Score": 0
    },
    {
        API: 'Exchange Rates',
        'End Point': 'End point 4',
        'Date Time': '04-01-2019',
        'Day of Week': 'Monday',
        'Hour of Day': '17h-18h',
        'Status Code': '500',
        'Error Response': 'Bad Request',
        'No. of Calls': 7,
        Revenue: {
            currency: '€',
            amount: 5
        },
        Status: {
            label: 'Rejected'
        },
        "Confidence Score": 0.9
    },
    {
        API: 'Exchange Rates',
        'End Point': 'End point 5',
        'Date Time': '05-01-2019',
        'Day of Week': 'Monday',
        'Hour of Day': '18h-19h',
        'Status Code': '200',
        'Error Response': 'OK',
        'No. of Calls': 6,
        Revenue: {
            currency: '€',
            amount: 6
        },
        Status: {
            label: 'Rejected'
        },
        "Confidence Score": 1
    },
    {
        API: 'Exchange Rates',
        'End Point': 'End point 6',
        'Date Time': '06-01-2019',
        'Day of Week': 'Monday',
        'Hour of Day': '18h-19h',
        'Status Code': '400',
        'Error Response': 'OK',
        'No. of Calls': 8,
        Revenue: {
            currency: '€',
            amount: 5
        },
        Status: {
            label: 'Rejected'
        },
        "Confidence Score": 0.7
    },
    {
        API: 'Exchange Rates',
        'End Point': 'End point 7',
        'Date Time': '07-01-2019',
        'Day of Week': 'Monday',
        'Hour of Day': '16h-17h',
        'Status Code': '500',
        'Error Response': 'OK',
        'No. of Calls': 1,
        Revenue: {
            currency: '€',
            amount: 1
        },
        Status: {
            label: 'Rejected'
        },
        "Confidence Score": 0.3
    },
    {
        API: 'Exchange Rates',
        'End Point': 'End point 8',
        'Date Time': '08-01-2019',
        'Day of Week': 'Monday',
        'Hour of Day': '16h-17h',
        'Status Code': '200',
        'Error Response': 'OK',
        'No. of Calls': 3,
        Revenue: {
            currency: '€',
            amount: 6
        },
        Status: {
            label: 'Rejected'
        },
        "Confidence Score": 0.8
    },
    {
        API: 'Exchange Rates',
        'End Point': 'End point 9',
        'Date Time': '09-01-2019',
        'Day of Week': 'Monday',
        'Hour of Day': '16h-17h',
        'Status Code': '200',
        'Error Response': 'OK',
        'No. of Calls': 3,
        Revenue: {
            currency: '€',
            amount: 7
        },
        Status: {
            label: 'Denied'
        },
        "Confidence Score": 0.8
    },
    {
        API: 'Exchange Rates',
        'End Point': 'End point 10',
        'Date Time': '10-01-2019',
        'Day of Week': 'Monday',
        'Hour of Day': '16h-17h',
        'Status Code': '200',
        'Error Response': 'OK',
        'No. of Calls': 3,
        Revenue: {
            currency: '€',
            amount: 9
        },
        Status: {
            label: 'Rejected'
        },
        "Confidence Score": 0.8
    },
    {
        API: 'Exchange Rates',
        'End Point': 'End point 11',
        'Date Time': '11-01-2019',
        'Day of Week': 'Monday',
        'Hour of Day': '16h-17h',
        'Status Code': '200',
        'Error Response': 'OK',
        'No. of Calls': 3,
        Revenue: {
            currency: '€',
            amount: 3
        },
        Status: {
            label: 'Approved'
        },
        "Confidence Score": 0.8
    }
];


export const columns = [
    { id: 'API', name: 'API', type: 'string', align: 'center', displayName: 'Display Api' },
    { id: 'End Point', name: 'End Point', type: 'string', align: 'left', sortable: true },
    { id: 'Hour of Day', name: 'Hour of Day', type: 'string', align: 'left' },
    { id: 'Status Code', name: 'Status Code', type: 'string', align: 'left' },
    { id: 'Error Response', name: 'Error Response', type: 'string', align: 'center' },
    { id: 'No. of Calls', name: 'No. of Calls', type: 'number', align: 'right', sortable: true },
    { id: 'Revenue', name: 'Revenue', type: 'typedouble', align: 'right', sortable: true },
    { id: 'Status', name: 'Status', type: 'chip', align: 'center' },
    { id: 'Confidence Score', name: 'Confidence Score', type: 'linear_progress', align: 'center' }
];

export const columnsToDisplay = ['API', 'End Point', 'Hour of Day', 'Status Code', 'Error Response', 'No. of Calls', 'Revenue', 'Status', 'Confidence Score'];