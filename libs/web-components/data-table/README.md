# Table

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/data-table?style=for-the-badge)](https://www.npmjs.com/package/@finastra/data-table)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/data-table?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/data-table')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/data-display-data-table--default)

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

### Events

| Event                       | Description                                                        |
| --------------------------- | ------------------------------------------------------------------ |
| `onFdsDataTableRowSelected` | Selected data can be founded from `event.detail` with array format |

<!-- DOC:fds-data-table -->

#### Properties

| Property                   | Attribute                  | Type               | Default    | Description                                                                                                                    |
| -------------------------- | -------------------------- | ------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `columns`                  | `columns`                  | `FdsTableColumn[]` | []         | Array of column definitions.                                                                                                   |
| `columnsToDisplay`         | `columnsToDisplay`         | `string[]`         | []         | Array of column ids to display.                                                                                                |
| `dataSource`               | `dataSource`               | `FdsTableRow[]`    | "[]"       | Array of data to display in the table.                                                                                         |
| `dense`                    | `dense`                    | `boolean`          | false      | Wether display data table in a smaller size                                                                                    |
| `emitPureData`             | `emitPureData`             | `boolean`          | true       | Whether event should emit only user data without fds data table used properties such like \_fdsRowId/\_fdsRowSelected etc.     |
| `multiSelect`              | `multiSelect`              | `boolean`          | false      | Whether to allow multiple rows to be selected.                                                                                 |
| `override`                 |                            |                    |            |                                                                                                                                |
| `selectable`               | `selectable`               | `boolean`          | false      | Whether to show if a row is selected.                                                                                          |
| `showMultiSelectCheckBox`  | `showMultiSelectCheckBox`  | `boolean`          | false      | Whether to show select checkbox column. When showMultiSelectCheckBox=true implicits selectable=true multiSelect=true.          |
| `showSingleSelectRadioBox` | `showSingleSelectRadioBox` | `boolean`          | false      | Whether to show single select radio box column. When showSingleSelectRadioBox=true implicits selectable=true multiSelect=false |
| `styles`                   |                            | `CSSResult[]`      | ["styles"] |                                                                                                                                |

#### Events

| Event                       | Description                |
| --------------------------- | -------------------------- |
| `onFdsDataTableRowSelected` | Fired when selecting a row |

#### CSS Custom Properties

| Property                        | Default | Description                                                                                                                                                                  |
| ------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--fds-data-table-border-width` | "1px"   | Size of the border width                                                                                                                                                     |
| `--fds-data-table-max-height`   | "615px" | Max height of table. By default there will be max 10 rows displayed which means 615px for normal size. 439px for dense size. 538px for dense size with checkbox or radiobox. |

<!-- /DOC:fds-data-table -->

Interfaces:

```

export interface FdsTableColumn {
    id: string; //unique id for table column
    name: string; // column name
    type: FdsColumnType; // the data type of this column => can apply different template to this column
    align?: 'left' | 'right' | 'center'; // text align in cell
    displayName?: string; // column display name if not provided, name will display
    sortable?: boolean; // can sort this column;
    cellTemplateId?: string; // used for customized cell
    _style?: string; // customized style for one column
}

export interface FdsTableDataItem {
    _fdsTableRowStyle?: string;  // customized style for one row
}

export interface FdsTableRow extends FdsTableDataItem {
    _fdsSelected?: boolean, //identify if current row is selected or not
    _fdsSelectDisabled?: boolean, //identify if current row is selectable or not
    _fdsRowId?: string, //a unique id for current row.
}
```

## Pagination Usage

### Import

`import '@finastra/data-table';`

```html
<fds-data-table-pagination length="11" pageIndex="0" pageSize="5" pageSizeOptions="[5, 10, 20]" showFirstLastButtons="true">
</fds-data-table-pagination>
```

### Events

| Event                    | Description                                 |
| ------------------------ | ------------------------------------------- |
| `onFdsPaginationChanged` | Page event can be founded in `event.detail` |

PageEvent Detail format:

```
 {
    pageIndex: number ,
    pageSize: number,
    length: number,
    previousPageIndex: number
 }
```

## Data Table Component with Pagination

Here is just an example component of combining `fds-data-table` and `fds-data-table-pagination`.
You can use it directly if it is suitable to your case. If not you can create your own component with `fds-data-table` and `fds-data-table-pagination`

### Import

`import '@finastra/data-table';`

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

### Events

| Event                                     | Description                                                        |
| ----------------------------------------- | ------------------------------------------------------------------ |
| `onFdsDataTableWithPaginationRowSelected` | Selected data can be founded from `event.detail` with array format |

<!-- DOC:fds-data-table-with-pagination -->

This component is a simple example combining fds-data-table with fds-data-table-pagination component.
If it can meet your requirements, you can use it directly with it.
If it can't meet your requirements, you can use fds-data-table with fds-data-table-pagination to compose your own logic.

#### Properties

| Property                    | Attribute                   | Type               | Default    | Description                                                                                                                    |
| --------------------------- | --------------------------- | ------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `columns`                   | `columns`                   | `FdsTableColumn[]` | []         | Array of column definitions.                                                                                                   |
| `columnsToDisplay`          | `columnsToDisplay`          | `string[]`         | []         | Array of column ids to display.                                                                                                |
| `dataSource`                | `dataSource`                | `FdsTableRow[]`    | "[]"       | Array of data to display in the table.                                                                                         |
| `dense`                     | `dense`                     | `boolean`          | false      | Wether display data table in a smaller size                                                                                    |
| `multiSelect`               | `multiSelect`               | `boolean`          | false      | Whether to allow multiple rows to be selected.                                                                                 |
| `override`                  |                             |                    |            |                                                                                                                                |
| `pageIndex`                 | `pageIndex`                 | `number`           | 0          |                                                                                                                                |
| `pageSizeOptions`           | `pageSizeOptions`           | `number[]`         | "[]"       | Array of page sizes to display, pageSize will take the first element otherwise pageSize will be 5.                             |
| `recordSelectionCrossPages` | `recordSelectionCrossPages` | `boolean`          | false      | Wether selection cross pages is enabled                                                                                        |
| `selectable`                | `selectable`                | `boolean`          | false      | Whether to show if a row is selected.                                                                                          |
| `showFirstLastButtons`      | `showFirstLastButtons`      | `boolean`          | false      | Whether to display the first and last page buttons.                                                                            |
| `showMultiSelectCheckBox`   | `showMultiSelectCheckBox`   | `boolean`          | false      | Whether to show select checkbox column. When showMultiSelectCheckBox=true implicits selectable=true multiSelect=true.          |
| `showSingleSelectRadioBox`  | `showSingleSelectRadioBox`  | `boolean`          | false      | Whether to show single select radio box column. When showSingleSelectRadioBox=true implicits selectable=true multiSelect=false |
| `styles`                    |                             | `CSSResult[]`      | ["styles"] |                                                                                                                                |

#### Methods

| Method                         | Type                |
| ------------------------------ | ------------------- |
| `getDataByPagination`          | `(): FdsTableRow[]` |
| `onDataTablePaginationChanged` | `(e: any): void`    |
| `onDataTableRowSelected`       | `(e: any): void`    |

#### Events

| Event                                     | Description                |
| ----------------------------------------- | -------------------------- |
| `onFdsDataTableWithPaginationRowSelected` | Fired when selecting a row |

#### CSS Custom Properties

| Property                        | Default | Description                                                                                                                                                                  |
| ------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--fds-data-table-border-width` | "1px"   | Size of the border width                                                                                                                                                     |
| `--fds-data-table-max-height`   | "615px" | Max height of table. By default there will be max 10 rows displayed which means 615px for normal size. 439px for dense size. 538px for dense size with checkbox or radiobox. |

<!-- /DOC:fds-data-table-with-pagination -->

## Advanced feature

If you want not only text contents in table component instead more complex contents, table component can also provide support for you!

### Style for table

As the style for web component is under the shadow dom, normally the external css style will not apply to table component.
But we want to provide more possible for developer in case their designer want other style.

#### Style for rows

If you want to apply special style for a table row, you can just assgin value to `_fdsTableRowStyle` to your data array, it accepts a css style string.
We provide an interface `FdsTableDataItem` if you want make your data row with an type.

```
FdsTableDataItem {
    _fdsTableRowStyle?: string;
}
```

#### Style for columns

The same for columns, if you want to apply some style to the columns, you can assign value to `_style` to your column definition, it accepts a css style string.
You can check `FdsTableColumn` interface. There are some properties which you may not know. You will get it in the next section.

```
export interface FdsTableColumn {
    id: string; //unique id for table column
    name: string; // column name
    type: FdsColumnType; // the data type of this column **check the cell type section for more info
    align?: 'left' | 'right' | 'center'; // text align in cell, center as default value
    displayName?: string; // column display name if not provided, name will display
    sortable?: boolean; // can sort this column or not;
    cellTemplateId?: string; // used for customized cell, check it in the Cell Type section
    _style?: string; // customized style for one column
}
```

### Cell Type

While table is used to display data, you may need some special cell include string, number and date. We will provide some special cell types for you if you want:

```
export enum FdsColumnType {
    string = 'string',
    number = 'number',
    date = 'date',
    type_double = 'type_double',
    link = 'link',
    chip = 'chip',
    linear_progress = 'linear_progress',
    cell_template = 'cell_template',
}
```

#### Basic Cell Type

`string`, `number` and `date` type are general used basic cell types.

By default the align for all cell is center. However you can set the align direction by yourself in the column definition.
But we highly recommand that you should put align to left for number type cell.

#### Type Double Cell

`type_double` cell is common used in finance scenarios such like `3 €`.
You can give the data with the spec:

```
export interface FdsTableTypeDouble {
    amount: number;
    currency: string;
}
```

By default `type_double` type cell is align to right.

#### Link Cell

`link` cell is used to put a link inside the table cell.

```
export interface FdsTableLink {
    text: string;
    link: string;
}
```

#### Chip Cell

`chip` cell is used to put a chip inside the table cell.

```
export interface FdsTableChip{
    label: string;
    color?: 'success' | 'info' | 'error';
    icon?: string;
}
```

#### Linear Progress Cell

`linear_progress` cell is used to put a linear process cell inside the table cell.

```
export type FdsTableLinearProgress = number | string;

```

You can set the value as number between [0, 1] or you can give the value with string in a percentage format for example: '80%';

### Customized Cell with simple template

`cell_template` cell is used when none of our predefined cell can meet your requriements. However it is an **experimental feature**. As web component is stand alone to any framework, so if you want to use the component from any other framework like angular or react. There may be issues if you use a framework component as cell template. So far cell template doesn't support complex user case. But you can create any template which native html can support.

You can assign any data to the `cell_template` column as it is intended to give the freedom of creation.

To map the template to table cell, you should set `cellTemplateId` to your column definition. So that table component can know which template to load.

To dynamic assign data into your template you need to use `{}`to wrap your varaible. We highly recommand you use `template` element to wrap your template since the content in `template` will not display unless you cal it.

Example for template:

```
<fds-data-table>
    <template id="fds-cell-template">
        <span>{name}</span><!-- name should be a property in the data object -->
    </template>
</fds-data-table>
```

Example for column definition:

```
    {
        ....
        type: 'cell_template',
        cellTemplateId: 'fds-cell-template',
        ...
    }
```

Example for data:

```
    any {
        name: 'cell template cell here!' // data where the template will access
    }
```
