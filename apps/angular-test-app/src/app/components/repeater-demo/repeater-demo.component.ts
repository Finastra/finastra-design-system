import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
const ELEMENT_DATA: any[] = [
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '01-10-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '02-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '400',
    'Error Response': 'Bad Request',
    'No. of Calls': 2
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '03-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '17h-18h',
    'Status Code': '500',
    'Error Response': 'Server Error',
    'No. of Calls': 4
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '04-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '17h-18h',
    'Status Code': '500',
    'Error Response': 'Bad Request',
    'No. of Calls': 7
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '05-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '18h-19h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 6
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '06-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '18h-19h',
    'Status Code': '400',
    'Error Response': 'OK',
    'No. of Calls': 8
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '07-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '500',
    'Error Response': 'OK',
    'No. of Calls': 1
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '08-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3
  },
  {
    API: 'Exchange Rates',
    'End Point': 'End point 1',
    'Date Time': '09-01-2019',
    'Day of Week': 'Monday',
    'Hour of Day': '16h-17h',
    'Status Code': '200',
    'Error Response': 'OK',
    'No. of Calls': 3
  }
];
@Component({
  selector: 'ffdc-repeater-demo',
  templateUrl: './repeater-demo.component.html',
  styleUrls: ['./repeater-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RepeaterDemoComponent implements OnInit {
  dataSource = ELEMENT_DATA; //data

  constructor() { }

  ngOnInit() {
  }

}
