import { Component, OnInit, Input, ComponentFactory, Type, ComponentFactoryResolver, SimpleChanges, OnChanges, ViewEncapsulation } from '@angular/core';


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
  
  @Input() component: Type<any> | ComponentFactory<any>;

  @Input() orientation: string = "vertical";
  @Input() space: string;
  @Input() columnsMatcher: Object;


  componentFactory: ComponentFactory<any>;

  constructor(private resolver: ComponentFactoryResolver) { 

  }

  ngOnInit() {
    if(this.component instanceof Type){
      this.componentFactory = this.resolver.resolveComponentFactory(this.component);
    }
  }

  
  ngOnChanges(changes: SimpleChanges): void {
  

    if(changes.orientation){
      this.orientation = changes.orientation.currentValue;     
    }  

    if(changes.component){
      this.componentFactory = this.resolver.resolveComponentFactory(changes.component.currentValue);
    }  
  }

  
}
