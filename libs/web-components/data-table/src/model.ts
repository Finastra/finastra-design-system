
export enum FdsColumnType {
    string = 'string',
    number = 'number',
    date = 'date',
    link = 'link',
    typedouble = 'typedouble',
    cellTemplate = 'cellTemplate',
    checkbox = 'checkbox',
    chip = 'chip',
    linear_progress = 'linear_progress'
}

export enum FdsColumnSortDirection {
    none = 'none',
    asc = 'asc',
    desc = 'desc'
}
export interface FdsTableColumn {
    id: string;
    name: string; // column name
    type: FdsColumnType; // the data type of this column => can apply different template to this column
    align?: 'left' | 'right' | 'center'; // text align in cell
    displayName?: string;
    sortable: boolean; // can sort this column;
    bold?: boolean;
    _style?: string; // customized style for one column
}
export interface FdsTableDataItem {
    _style?: string;  // customized style for one row
}
export interface FdsTableRow {
    _fdsSelected?: boolean,
    _fdsRowId?: string
    _style?: string;
}

export interface FdsTableTypeDouble {
    amount: number;
    currency: string;
}

export interface FdsTableChip{
    label: string;
    color?: 'success' | 'info' | 'error';
    icon?: string;
}
// number should between [0, 1], 
// accept type: number: 0.8 or string: '80%'
export type FdsTableLinearProgress = number | string;