import { FDS_TABLE_DATA_ROW_PREFIX } from './constants';
import { FdsColumnType, FdsTableColumn, FdsTableRow } from './model';

export function getCellClassByType(column: FdsTableColumn): string {
  let cellType = '';
  switch (column.type) {
    case FdsColumnType.date:
      cellType = 'fds-table__cell--date';
      break;
    case FdsColumnType.number:
    case FdsColumnType.type_double:
      cellType = 'mdc-data-table__cell--numeric';
      break;
    case FdsColumnType.cell_template:
      cellType = 'fds-data-table-cell-template';
      break;
    default:
      cellType = '';
      break;
  }
  return cellType;
}

export function formatFdsDataSource(data: FdsTableRow[]): FdsTableRow[] {
  return data.map((rowData, index) => {
    return {
      ...rowData,
      _fdsRowId: rowData._fdsRowId ? rowData._fdsRowId : FDS_TABLE_DATA_ROW_PREFIX + index,
      _fdsSelected: rowData._fdsSelected ? rowData._fdsSelected : false,
      _fdsSelectDisabled: rowData._fdsSelectDisabled ? rowData._fdsSelectDisabled : false
    };
  });
}

export function getFdsDataTablePureData(data: FdsTableRow): FdsTableRow {
  const dataCopy = { ...data };
  delete dataCopy._fdsRowId;
  delete dataCopy._fdsSelected;
  delete dataCopy._fdsSelectDisabled;
  delete dataCopy._fdsTableRowStyle;
  return dataCopy;
}
