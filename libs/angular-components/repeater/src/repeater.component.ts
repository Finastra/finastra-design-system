import {
  Component,
  OnInit,
  Input,
  ComponentFactory,
  Type,
  ComponentFactoryResolver,
  SimpleChanges,
  OnChanges,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';

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

  @Input() component!: Type<any> | ComponentFactory<any>;
  @Input() orientation = 'horizontal';
  @Input() multiSelect = false;
  @Input() space = '0px';
  @Input() columnsMatcher: { [k: string]: string } = {};
  @Input() selectedKeys: number[] = [];
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  selectedItems: { [k: string]: any } = {};
  componentFactory?: ComponentFactory<any>;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    if (this.component instanceof Type) {
      this.componentFactory = this.resolver.resolveComponentFactory(this.component);
    }
  }

  onClick(index: number, value: any) {
    if (!this.selectedItems) {
      this.selectedItems = {};
    }
    if (!this.multiSelect && !this.selectedItems[index]) {
      this.selectedItems = { [index]: value };
    } else if (!this.multiSelect && this.selectedItems[index]) {
      this.selectedItems = {};
    } else if (this.multiSelect && this.selectedItems[index]) {
      delete this.selectedItems[index];
    } else {
      this.selectedItems[index] = value;
    }

    this.selectionChange.emit({ value: this.selectedItems });
  }

  isSelected(index: number) {
    return this.selectedItems && this.selectedItems[index] !== null && this.selectedItems[index] !== undefined;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.orientation) {
      this.orientation = changes.orientation.currentValue;
    }

    if (changes.multiSelect) {
      this.multiSelect = changes.multiSelect.currentValue;
      this.selectedItems = {};
    }

    if (changes.component) {
      this.componentFactory = this.resolver.resolveComponentFactory(changes.component.currentValue);
    }

    if (changes.selectedKeys) {
      this.selectedKeys = changes.selectedKeys.currentValue;
      this.selectedItems = {};
      if (!this.multiSelect && this.selectedKeys.length > 0) {
        this.selectedItems[this.selectedKeys[0]] = this.data[this.selectedKeys[0]];
      }
      if (this.multiSelect && this.multiSelect) {
        this.selectedKeys.forEach((selectionIndex) => {
          this.selectedItems[selectionIndex] = this.data[selectionIndex];
        });
      }
    }
  }
}
