import { html } from 'lit';
import {
  FdsColumnType,
  FdsTableChip,
  FdsTableColumn,
  FdsTableLinearProgress,
  FdsTableLink,
  FdsTableRow,
  FdsTableTypeDouble
} from './model';
import { getCellClassByType } from './utils';

export class FdsTableCellStore {
  private _row: FdsTableRow;
  private _column: FdsTableColumn;
  private dense = false;

  constructor(row: FdsTableRow, column: FdsTableColumn, dense: boolean) {
    this._row = row;
    this._column = column;
    this.dense = dense;
  }

  getTableDataCellTemplate() {
    const cellType = getCellClassByType(this._column);

    return html` <td class="mdc-data-table__cell ${cellType} ${this._column.align}" style=${this._column._style ? this._column._style : ''}>
      ${this._getCellTemplateByType()}
    </td>`;
  }

  private _getCellTemplateByType() {
    switch (this._column.type) {
      case FdsColumnType.date:
        return this._getDateTemplate(this._row[this._column.id]);
      case FdsColumnType.type_double:
        return this._getTypeDoubleTemplate(this._row[this._column.id]);
      case FdsColumnType.linear_progress:
        return this._getLinearProgressTemplate(this._row[this._column.id]);
      case FdsColumnType.chip:
        return this._getChipTemplate(this._row[this._column.id]);
      case FdsColumnType.link:
        return this._getLinkTemplate(this._row[this._column.id]);
      case FdsColumnType.cell_template:
        return this._getCustomizedCellTemplate(this._row[this._column.id]);
      default:
        return this._row[this._column.id];
    }
  }
  private _getDateTemplate(date: string) {
    return html` <fds-icon>date_range_outline</fds-icon> ${date} `;
  }
  private _getTypeDoubleTemplate(data: FdsTableTypeDouble) {
    return html` <div>${data.amount} <span style="font-weight: bold">${data.currency}</span></div>`;
  }

  private _getChipTemplate(data: FdsTableChip) {
    return html` <fds-chip ?dense="${this.dense}" .label=${data.label} .icon=${data.icon}></fds-chip> `;
  }

  private _getLinearProgressTemplate(progress: FdsTableLinearProgress) {
    const data = this._getPercentageNumber(progress);
    return html`
      <div class="fds-data-table-linear-progress">
        <span>${data.percentage}</span>
        <fds-linear-progress .progress=${data.number}></fds-linear-progress>
      </div>
    `;
  }

  private _getLinkTemplate(link: FdsTableLink) {
    return html`
      <a class="fds-data-table-link" @click=${() => window.open(link.link, '_blank')}>
        <span>${link.text}</span>
      </a>
    `;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _getCustomizedCellTemplate(customized: any) {
    if (this._column.cellTemplateId) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const element = (document.getElementById(this._column?.cellTemplateId) as any).cloneNode(true);
      if (element) {
        for (const key in customized) {
          element.innerHTML = element.innerHTML.replace(new RegExp('\\{' + key + '\\}', 'gi'), customized[key]);
        }

        const customizedCell = element?.content?.cloneNode(true);
        return html` ${customizedCell} `;
      }
    }

    return html``;
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
    };
  }
}
