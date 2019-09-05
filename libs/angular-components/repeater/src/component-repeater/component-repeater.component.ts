import { Component, OnInit, ComponentFactory, Input, ViewChild, ViewContainerRef, OnChanges, SimpleChanges, ComponentRef } from '@angular/core';
import { RepeaterTemplateConfig } from '../repeater.component';

@Component({
  selector: 'uxp-component-repeater',
  templateUrl: './component-repeater.component.html',
  styleUrls: ['./component-repeater.component.css']
})
export class ComponentRepeaterComponent implements OnInit, OnChanges {
 

  @Input() factory: ComponentFactory<any>;
  @Input() data: any;
  @Input() templateConfig: RepeaterTemplateConfig;
  
  ref:  ComponentRef<any>;
  
  @ViewChild('extensionOutlet', { read: ViewContainerRef, static: true })
  extensionOutlet: ViewContainerRef;

  constructor() { }

  ngOnInit() {
    this.updateComponent();  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.factory){
      this.updateComponent();
    }else if(changes.templateFieldsConfig && this.ref){
      this.ref.instance.templateFieldsConfig = changes.templateFieldsConfig.currentValue;
      if( this.ref.instance.cd ){
        this.ref.instance.cd.detectChanges(); 
      }   
      console.log(changes.templateFieldsConfig.currentValue);
      
    }else if(changes.data && this.ref){
      this.ref.instance.data = changes.data.currentValue;
      if( this.ref.instance.cd ){
        this.ref.instance.cd.detectChanges();
      }
      console.log(changes.data.currentValue);
    }
  }

  updateComponent():void{
    if(this.factory){
      if(this.ref){
        this.ref.destroy();
      }
      this.ref = this.extensionOutlet.createComponent(this.factory);
      this.ref.instance.data = this.data;
      this.ref.instance.config = this.templateConfig;

      if( this.ref.instance.cd ){
        this.ref.instance.cd.detectChanges();
        this.ref.instance.cd.markForCheck();
      }

      
    }   
  }

}
