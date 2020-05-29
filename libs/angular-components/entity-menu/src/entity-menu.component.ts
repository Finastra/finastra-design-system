import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  OnInit,
  SimpleChanges,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'uxg-entity-menu',
  templateUrl: './entity-menu.component.html',
  styleUrls: ['./entity-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EntityMenuComponent implements OnInit, OnChanges {
  items: any[] = [];
  @Input() data: Array<any> = [];
  @Input() title = '';
  @Input() property?: string;
  @Input() abbreviationLength = 3;
  @Input() bottomLabel = 'View all';

  @Output() bottomClick = new EventEmitter<Event>();
  @Output() itemClick = new EventEmitter<any>();

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data || changes.property) {
      this.items = this.mapData(this.data.slice(0, 9), this.property);
    }
  }

  private mapData(data: any[], property?: string) {
    return data.map((item: any) => {
      const value = property ? item[property] : item;
      return {
        name: value,
        abbr: this.formatItemName(value),
        value: item
      };
    });
  }

  formatItemName(name: string) {
    if (name) {
      return name
        .split(' ')
        .map(str => str.charAt(0))
        .join('')
        .toUpperCase()
        .substring(0, this.abbreviationLength);
    }
    return name;
  }
}
