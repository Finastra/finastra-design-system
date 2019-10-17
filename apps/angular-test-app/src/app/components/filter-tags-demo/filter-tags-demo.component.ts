import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ffdc-filter-tags-demo',
  templateUrl: './filter-tags-demo.component.html',
  styleUrls: ['./filter-tags-demo.component.scss']
})
export class FilterTagsDemoComponent implements OnInit {
  constructor() {}

  dataDemo = ['Malauzai', 'North America', 'Money Movement', 'Static Data'];
  chosenTags: string[] = [];

  changeFilter(tags: string[]) {
    this.chosenTags = tags;
  }

  ngOnInit() {}
}
