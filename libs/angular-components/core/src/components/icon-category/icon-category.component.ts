import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'uxg-icon-category',
  templateUrl: './icon-category.component.html',
  styleUrls: ['./icon-category.component.scss'],
  host: {
    class: 'uxg-icon-category'
  }
})
export class IconCategoryComponent implements OnInit {
  @Input() ariaLabel?: string;
  @Input() icon?: string;

  constructor() {}

  ngOnInit(): void {}
}
