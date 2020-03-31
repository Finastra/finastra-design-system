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
  @Input() data: Array<any> = [];
  @Input() title = '';
  @Input() columnsMatcher = '';
  @Input() abbreviationLength = 0;
  @Input() bottomLabel = '';

  @Output() bottomClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemClick: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    if (this.data) {
      this.data = this.data.slice(0, 9);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.data = this.data.slice(0, 9);
    }
  }

  formatItemName(name: string) {
    if (name) {
      return name
        .split(' ')
        .map(str => str.charAt(0))
        .join('')
        .toUpperCase()
        .substring(0, this.abbreviationLength ? this.abbreviationLength : 1);
    }
    return name;
  }
}
