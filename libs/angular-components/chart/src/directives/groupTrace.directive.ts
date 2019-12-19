import { Input, ContentChildren, QueryList, Component } from '@angular/core';
import { Trace } from './trace.directive';
import { Plotly } from 'angular-plotly.js/src/app/shared/plotly.interface';

@Component({ selector: 'uxg-group-traces' })
export class GroupTraces {
  @Input() columnPosition: number;
  @Input() rowPosition: number;

  @ContentChildren(Trace) traces: QueryList<Trace>;

  getTraces(): Partial<Plotly.Data>[] {
    return this.traces
      .map(trace => {
        const t = trace.getPlotlyTrace();
        if (t) t.domain = this.domain;
        return t;
      })
      .filter(trace => !!trace);
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
