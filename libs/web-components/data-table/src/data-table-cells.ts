import { html } from "lit";
import { FdsColumnType, FdsTableChip, FdsTableColumn, FdsTableLinearProgress, FdsTableRow, FdsTableTypeDouble } from "./model";

export class FdsTableCellStore {
    private _row: FdsTableRow;
    private _column: FdsTableColumn;

    constructor(row: FdsTableRow, column: FdsTableColumn) {
        this._row = row;
        this._column = column;
    }

    getTableDataCellTemplate() {
        let cellType = "";
        switch (this._column.type) {
            case FdsColumnType.number:
            case FdsColumnType.typedouble:
                cellType = "mdc-data-table__cell--numeric";
                break;

            default:
                cellType = "";
                break;
        }
        return html`<td class="mdc-data-table__cell ${cellType}">
    ${this._getCellTemplateByType()}
</td>`
    }

    private _getCellTemplateByType() {
        switch (this._column.type) {
            case FdsColumnType.typedouble:
                return this._getTypeDoubleTemplate(this._row[this._column.id]);
            case FdsColumnType.linear_progress:
                return this._getLinearProgressTemplate(this._row[this._column.id]);
            case FdsColumnType.chip:
                return this._getChipTemplate(this._row[this._column.id]);
            default:
                return this._row[this._column.id];
        }
    }
    private _getTypeDoubleTemplate(data: FdsTableTypeDouble) {
        return html`
                <div>
                    ${data.amount} <span style="font-weight: bold">${data.currency}</span>
                </div>`;
    }

    private _getChipTemplate(data: FdsTableChip) {
        return html`
            <fds-chip dense .label=${data.label} .icon=${data.icon}></fds-chip>
        `;
    }

    private _getLinearProgressTemplate(progress: FdsTableLinearProgress) {
        const data = this._getPercentageNumber(progress);
        return html`
            <div>
                <span>${data.percentage}</span>
                <fds-linear-progress .progress=${data.number}></fds-linear-progress>
            </div>
        `;
    }
    private _getPercentageNumber(progress: FdsTableLinearProgress) {
        let percentage: string;
        let number: number;
        if (typeof progress === 'string') {
            percentage = progress;
            number = parseFloat(progress) / 100;
        } else {
            percentage = (progress * 100).toString() + '%';
            number = progress;
        }

        return {
            number: number,
            percentage: percentage
        }
    }
}