import { Component, OnInit, Input, ChangeDetectorRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { RepeaterTemplateConfig } from '@ffdc/uxg-angular-components/repeater';

@Component({
  selector: 'ffdc-repeater-card-example',
  templateUrl: './repeater-card-example.component.html',
  styleUrls: ['./repeater-card-example.component.css'],  
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepeaterCardExampleComponent implements OnInit {

  @Input() data: any;
  @Input() config: RepeaterTemplateConfig;
  
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.data);
  }

}
