# Table

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/data-table?style=for-the-badge)](https://www.npmjs.com/package/@finastra/data-table)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/data-table?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/data-table')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-data-table-default)

Table component allow user display a set of data. 


## Table Usage

### Import

```
npm i @finastra/data-table
```

```ts
import '@finastra/data-table';
const data = [
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
            currency: 'EUR',
            amount: 3
        }
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
            currency: 'EUR',
            amount: 2
        }
    }];
const columns = [
    { id: 'API', name: 'API', type: 'string', align: 'center', displayName: 'Display Api' },
    { id: 'End Point', name: 'End Point', type: 'string', align: 'left', sortable: true },
    { id: 'Hour of Day', name: 'Hour of Day', type: 'string', align: 'left' },
    { id: 'Status Code', name: 'Status Code', type: 'string', align: 'left' },
    { id: 'Error Response', name: 'Error Response', type: 'string', align: 'center' },
    { id: 'No. of Calls', name: 'No. of Calls', type: 'number', align: 'right', sortable: true }
];
const columnsToDisplay = ['API', 'End Point', 'Hour of Day', 'Status Code', 'Error Response', 'No. of Calls'];
...
<fds-data-table
    [dataSource]="${data}"
    [columns]="${columns}"
    [columnsToDisplay]="${columnsToDisplay}"
    [selectable]="true"
    [multiSelect]="false"
></fds-data-table>
```

### Pure HTML pages

```html
<script type="module" src="https://unpkg.com/@finastra/data-table@latest/dist/src/data-table.js?module"></script>

<fds-data-table id="data-table"></fds-data-table>
<script>

    const dataTable = document.querySelector('#data-table');
    dataTable.dataSource = [
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
            currency: 'EUR',
            amount: 3
        }
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
            currency: 'EUR',
            amount: 2
        }
    }];
    dataTable.columns = [
        { id: 'API', name: 'API', type: 'string', align: 'center', displayName: 'Display Api' },
        { id: 'End Point', name: 'End Point', type: 'string', align: 'left', sortable: true },
        { id: 'Hour of Day', name: 'Hour of Day', type: 'string', align: 'left' },
        { id: 'Status Code', name: 'Status Code', type: 'string', align: 'left' },
        { id: 'Error Response', name: 'Error Response', type: 'string', align: 'center' },
        { id: 'No. of Calls', name: 'No. of Calls', type: 'number', align: 'right', sortable: true }
    ];
    dataTable.columnsToDisplay = ['API', 'End Point', 'Hour of Day', 'Status Code', 'Error Response', 'No. of Calls'];
    dataTable.selectable=true;
    dataTable.multiSelect=false;
    dataTable.addEventListener('onFdsDataTableRowSelected', (e) => {
       // your actions here
    })

</script>
```

## Pagination Usage 
### Import 
```import '@finastra/data-table';```

```html
 <fds-data-table-pagination    
    length="11"
    pageIndex="0"
    pageSize="5"
    pageSizeOptions="[5, 10, 20]"
    showFirstLastButtons="true"
     >
 </fds-data-table-pagination>
 ```

### Pure HTML pages

```html
<script type="module" src="https://unpkg.com/@finastra/data-table@latest/dist/src/data-table.js?module"></script>

<fds-data-table-pagination id="fds-data-table-pagination"></fds-data-table-pagination>
<script>
    const dataTablePagination = document.querySelector('#fds-data-table-pagination');
    dataTablePagination.length = ELEMENT_DATA.length;
    dataTablePagination.pageIndex = 0;
    dataTablePagination.pageSize = 5;
    dataTablePagination.pageSizeOptions = [5, 10, 20]
    dataTablePagination.showFirstLastButtons = true;
    dataTablePagination.addEventListener('onFdsPaginationChanged', (e) => {
       // your actions here
    })
<script>
 ```



 ## Data Table Component with Pagination
 
 Here is just an example component of combining `fds-data-table` and `fds-data-table-pagination`.
 You can use it directly if it is suitable to your case. If not you can create your own component with `fds-data-table` and `fds-data-table-pagination`
 ### Import 
 ```import '@finastra/data-table';```

 ```html
 <fds-data-table-with-pagination 
    [dataSource]="${data}"
    [columns]="${columns}"
    [columnsToDisplay]="${columnsToDisplay}"
    [selectable]="true"
    [multiSelect]="false"
    [pageIndex]="0"
    [pageSize]="5"
    [pageSizeOptions]="[5, 10, 20]"
    [showFirstLastButtons]="true"
></fds-data-table-with-pagination>
 ```

 ### Pure HTML pages

```html
<script type="module" src="https://unpkg.com/@finastra/data-table@latest/dist/src/data-table.js?module"></script>

 <fds-data-table-with-pagination 
   id="fds-data-table-with-pagination"
></fds-data-table-with-pagination>
<script>
    const dataTableWithPagination = document.querySelector('#fds-data-table-with-pagination');
    dataTableWithPagination.dataSource = ELEMENT_DATA
    dataTableWithPagination.columns = [
        { id: 'API', name: 'API', type: 'string', align: 'center', displayName: 'Display Api' },
        { id: 'End Point', name: 'End Point', type: 'string', align: 'left', sortable: true },
        { id: 'Hour of Day', name: 'Hour of Day', type: 'string', align: 'left' },
        { id: 'Status Code', name: 'Status Code', type: 'string', align: 'left' },
        { id: 'Error Response', name: 'Error Response', type: 'string', align: 'center' },
        { id: 'No. of Calls', name: 'No. of Calls', type: 'number', align: 'right', sortable: true }
    ];
    dataTableWithPagination.columnsToDisplay = ['API', 'End Point', 'Hour of Day', 'Status Code', 'Error Response', 'No. of Calls'];
    dataTableWithPagination.selectable=true;
    dataTableWithPagination.multiSelect=false;
    dataTableWithPagination.length = ELEMENT_DATA.length;
    dataTableWithPagination.pageIndex = 0;
    dataTableWithPagination.pageSizeOptions = [5, 10, 20]
    dataTableWithPagination.showFirstLastButtons = true;
    dataTableWithPagination.addEventListener('onFdsDataTableWithPaginationRowSelected', (e) => {
       // your actions here
    })
<script>
 ```