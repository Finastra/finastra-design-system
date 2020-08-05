import { Input, ContentChildren, QueryList, Component } from '@angular/core';
import { TraceComponent } from './trace.component';

@Component({
  selector: 'uxg-group-traces',
  template: ''
})
export class GroupTracesComponent {
  @Input() columnPosition?: number;
  @Input() rowPosition?: number;

  @ContentChildren(TraceComponent) traces!: QueryList<TraceComponent>;

  getTraces(): any[] {
    return this.traces
      .map((trace) => {
        const t = trace.getPlotlyTrace();
        if (t && (this.columnPosition !== undefined || this.columnPosition !== undefined)) t.domain = this.domain;
        return t;
      })
      .filter((trace) => !!trace);
  }

  private get domain() {
    const domain: any = {};
    if (this.columnPosition !== undefined) {
      domain.column = this.columnPosition;
    }
    if (this.rowPosition !== undefined) {
      domain.row = this.rowPosition;
    }
    return domain;
  }
}
