import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'uxg-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class ListComponent {

  @Input() title ='';
  @Input() columnsMatcher =''
  @Input() abbreviationLength =0
  @Input() data: Array<any> =[];
 

  formatItemName(name:string) {
    if (name) {
      return name.split(' ').map(str => str.charAt(0)).join('').toUpperCase().substring(0, this.abbreviationLength ? this.abbreviationLength : 1);
    }
    return name;
  }
  
}
