export const CHART_DEFAULT_PLOTLY_LAYOUT = {
  autosize: true,
  margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 0,
    pad: 0
  }
};

export const CHART_DEFAULT_PLOTLY_CONFIG = {
  displaylogo: false,
  responsive: true
};

export enum ChartType {
  bar = 'bar',
  stackedBar = 'stackedBar',
  line = 'line',
  scatter = 'scatter',
  scatterLine = 'scatterLine',
  stackedLine = 'stackedLine',
  fullStackedLine = 'fullStackedLine',
  spline = 'spline',
  stackedSpline = 'stackedSpline',
  fullStackedSpline = 'fullStackedSpline',
  stepline = 'stepline',
  steparea = 'steparea',
  area = 'area',
  stackedArea = 'stackedArea',
  fullStackedArea = 'fullStackedArea',
  pie = 'pie',
  donut = 'donut'
}

export enum ChartOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export interface ChartTypeConvertion {
  name: string;
  group: string;
  trace: any;
  layout?: any;
}

export const CHART_PLOLTLY_TYPE: Record<ChartType, ChartTypeConvertion> = {
  [ChartType.bar]: {
    name: 'bar',
    group: 'bar',
    trace: {
      type: 'bar'
    },
    layout: {
      barmode: 'group'
    }
  },
  [ChartType.stackedBar]: {
    name: 'stackedBar',
    group: 'bar',
    trace: {
      type: 'bar'
    },
    layout: {
      barmode: 'relative'
    }
  },
  [ChartType.line]: {
    name: 'line',
    group: 'line',
    trace: {
      type: 'scatter'
    }
  },
  [ChartType.scatter]: {
    name: 'scatter',
    group: 'line',
    trace: {
      type: 'scatter',
      mode: 'markers'
    }
  },
  [ChartType.scatterLine]: {
    name: 'scatter+line',
    group: 'line',
    trace: {
      type: 'scatter',
      mode: 'lines+markers'
    }
  },
  [ChartType.stackedLine]: {
    name: 'Stacked line',
    group: 'line',
    trace: {
      type: 'scatter',
      stackgroup: 'one',
      fill: 'none'
    }
  },
  [ChartType.fullStackedLine]: {
    name: 'Full stacked line',
    group: 'line',
    trace: {
      type: 'scatter',
      stackgroup: 'one',
      groupnorm: 'percent',
      fill: 'none'
    }
  },
  [ChartType.spline]: {
    name: 'Spline',
    group: 'line',
    trace: {
      type: 'scatter',
      line: { shape: 'spline' }
    }
  },
  [ChartType.stackedSpline]: {
    name: 'Stacked spline',
    group: 'line',
    trace: {
      type: 'scatter',
      stackgroup: 'one',
      mode: 'lines+markers',
      fill: 'none',
      line: { shape: 'spline' }
    }
  },
  [ChartType.fullStackedSpline]: {
    name: 'Full stacked spline',
    group: 'line',
    trace: {
      type: 'scatter',
      stackgroup: 'one',
      groupnorm: 'percent',
      mode: 'lines+markers',
      fill: 'none',
      line: { shape: 'spline' }
    }
  },
  [ChartType.stepline]: {
    name: 'Stepline',
    group: 'line',
    trace: {
      type: 'scatter',
      line: { shape: 'hv' }
    }
  },
  [ChartType.steparea]: {
    name: 'Step area',
    group: 'line',
    trace: {
      type: 'scatter',
      stackgroup: 'one',
      line: { shape: 'hv' }
    }
  },
  [ChartType.area]: {
    name: 'Area',
    group: 'line',
    trace: {
      type: 'scatter',
      stackgroup: 'one'
    }
  },
  [ChartType.stackedArea]: {
    name: 'Stacked area',
    group: 'line',
    trace: {
      type: 'scatter',
      stackgroup: 'one'
    }
  },
  [ChartType.fullStackedArea]: {
    name: 'Full stacked area',
    group: 'line',
    trace: {
      type: 'scatter',
      stackgroup: 'one',
      groupnorm: 'percent'
    }
  },
  [ChartType.pie]: {
    name: 'pie',
    group: 'pie',
    trace: {
      type: 'pie'
    }
  },
  [ChartType.donut]: {
    name: 'donut',
    group: 'pie',
    trace: {
      type: 'pie',
      hole: 0.5,
      automargin: true,
      textposition: 'inside'
    }
  }
};
