import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ffdc-paginator-demo',
  templateUrl: './paginator-demo.component.html',
  styleUrls: ['./paginator-demo.component.scss']
})
export class PaginatorDemoComponent implements OnInit {
  ngOnInit(): void {

  }
  displayEventInConsole($event){
    console.log($event);
  }
}
