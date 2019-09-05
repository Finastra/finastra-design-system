import { Component, OnInit, Input } from '@angular/core';
import { RepeaterTemplateConfig } from '@ffdc/uxg-angular-components/repeater';

@Component({
  selector: 'ffdc-repeater-card-advanced-example',
  templateUrl: './repeater-card-advanced-example.component.html',
  styleUrls: ['./repeater-card-advanced-example.component.css']
})
export class RepeaterCardAdvancedExampleComponent implements OnInit {

  
  @Input() data: any;
  @Input() config: RepeaterTemplateConfig;
  
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }
}
