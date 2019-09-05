import { Component, OnInit, Input, ComponentFactory, Type, ComponentFactoryResolver, SimpleChanges, OnChanges, ViewEncapsulation } from '@angular/core';

export interface RepeaterTemplateConfig {
  fieldsMatcher?: any;
  space?: string;
}

@Component({
  selector: 'uxg-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class RepeaterComponent implements OnInit, OnChanges {

  private _data: Array<any> = [];
  @Input()
  get data() {
    return this._data;
  }
  set data(data: Array<any>) {
    this._data = data;
  }
  
  @Input() template: Type<any> | ComponentFactory<any>;

  @Input() orientation: string = "vertical"
  @Input() templateConfig: RepeaterTemplateConfig;


  componentFactory: ComponentFactory<any>;

  constructor(private resolver: ComponentFactoryResolver) { 

  }

  ngOnInit() {
    if(this.template instanceof Type){
      this.componentFactory = this.resolver.resolveComponentFactory(this.template);
    }
  }

  
  ngOnChanges(changes: SimpleChanges): void {
  

    if(changes.orientation){
      this.orientation = changes.orientation.currentValue;     
    }  

    if(changes.template){
      this.componentFactory = this.resolver.resolveComponentFactory(changes.template.currentValue);
    }  
  }

  
}
