import { Component, OnInit, ComponentFactory, Input, ViewChild, ViewContainerRef, OnChanges, SimpleChanges, ComponentRef } from '@angular/core';

@Component({
  selector: 'uxp-component-repeater',
  templateUrl: './component-repeater.component.html',
  styleUrls: ['./component-repeater.component.css']
})
export class ComponentRepeaterComponent implements OnInit, OnChanges {
 

  @Input() factory: ComponentFactory<any>;
  @Input() data: any;
  @Input() columnsMatcher: Object;
  
  ref:  ComponentRef<any>;
  
  @ViewChild('componentHolder', { read: ViewContainerRef, static: true })
  componentHolder: ViewContainerRef;

  constructor() { }

  ngOnInit() {
    this.updateComponent();  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.factory){
      this.updateComponent();
    }else if(changes.columnsMatcher && this.ref){
      this.ref.instance.columnsMatcher = changes.columnsMatcher.currentValue;
      if( this.ref.instance.cd ){
        this.ref.instance.cd.detectChanges(); 
      }   
      
    }else if(changes.data && this.ref){
      this.ref.instance.data = changes.data.currentValue;
      if( this.ref.instance.cd ){
        this.ref.instance.cd.detectChanges();
      }
    }
  }

  updateComponent():void{
    if(this.factory){
      if(this.ref){
        this.ref.destroy();
      }
      this.ref = this.componentHolder.createComponent(this.factory);
      this.ref.instance.data = this.data;
      this.ref.instance.columnsMatcher = this.columnsMatcher;

      if( this.ref.instance.cd ){
        this.ref.instance.cd.detectChanges();
        this.ref.instance.cd.markForCheck();
      }

      
    }   
  }

}
