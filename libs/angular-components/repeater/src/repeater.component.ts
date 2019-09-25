import { Component, OnInit, Input, ComponentFactory, Type, ComponentFactoryResolver, SimpleChanges, OnChanges, ViewEncapsulation, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

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
  @Input() orientation = "horizontal";
  @Input() multiSelect = false;
  @Input() space: string;
  @Input() columnsMatcher: { [k: string]: string } = {};
  @Output() selectionChange:EventEmitter<any> =  new EventEmitter<any>();

  componentFactory: ComponentFactory<any>;

  selectedItems:{ [k: string]: any };

  constructor(private resolver: ComponentFactoryResolver) { 

  }

  ngOnInit() {
    if(this.component instanceof Type){
      this.componentFactory = this.resolver.resolveComponentFactory(this.component);
    }
    this.selectedItems = {};
  }

  onClick(index:number, value: any){
    if(!this.multiSelect && !this.selectedItems[index]){
      this.selectedItems = {};
      this.selectedItems[index] = value;
    }else if(!this.multiSelect && this.selectedItems[index]){
      delete this.selectedItems[index];
    }else if(this.multiSelect && this.selectedItems[index]){
      delete this.selectedItems[index];
    }else{
      this.selectedItems[index] = value;
    }
   
    this.selectionChange.emit({'value':this.selectedItems});
  }
  
  isSelected(index){
    return this.selectedItems[index]!==null && this.selectedItems[index]!==undefined;
  }
  

  ngOnChanges(changes: SimpleChanges): void {  

    if(changes.orientation){
      this.orientation = changes.orientation.currentValue; 
    }  

    if(changes.multiSelect){
      this.multiSelect = changes.multiSelect.currentValue;    
      this.selectedItems = {}; 
    }  

    if(changes.component){
      this.componentFactory = this.resolver.resolveComponentFactory(changes.component.currentValue);
    }  

    
  }

  
}
