import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ffdc-repeater-card-advanced-example',
  templateUrl: './repeater-card-advanced-example.component.html',
  styleUrls: ['./repeater-card-advanced-example.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RepeaterCardAdvancedExampleComponent implements OnInit {
  @Input() data: any;
  @Input() columnsMatcher: any;

  constructor() {}

  ngOnInit() {}
}
