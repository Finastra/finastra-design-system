import { FdsColumnType, FdsTableColumn } from "./model";

export function getCellClassByType(column: FdsTableColumn): string{
    let cellType = "";
    switch (column.type) {
        case FdsColumnType.date:
            cellType = "fds-table__cell--date";
            break;
        case FdsColumnType.number:
        case FdsColumnType.type_double:
            cellType = "mdc-data-table__cell--numeric";
            break;
        case FdsColumnType.cell_template:
            cellType = "fds-data-table-cell-template";
            break;
        default:
            cellType = "";
            break;
    }
    return cellType;
}