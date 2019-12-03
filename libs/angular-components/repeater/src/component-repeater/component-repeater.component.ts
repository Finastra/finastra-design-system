import {
  Component,
  OnInit,
  ComponentFactory,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'uxg-component-repeater',
  templateUrl: './component-repeater.component.html',
  styleUrls: ['./component-repeater.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentRepeaterComponent implements OnInit {
  private _factory: any;
  @Input() set factory(data: ComponentFactory<any>) {
    this._factory = data;
    this.updateComponent();
  }

  private _data: any;
  @Input() set data(data: any) {
    this._data = data;
    if (this.ref) {
      this.ref.instance.data = this._data;
      if (this.ref.instance.cd) {
        this.ref.instance.cd.detectChanges();
      }
    }
  }

  _columnsMatcher: Object = {};
  @Input() set columnsMatcher(data: Object) {
    this._columnsMatcher = data;
    if (this.ref) {
      this.ref.instance.columnsMatcher = this._columnsMatcher;
      if (this.ref.instance.cd) {
        this.ref.instance.cd.detectChanges();
      }
    }
  }

  private _selected = false;
  @Input() set selected(selected: boolean) {
    this._selected = selected;
    if (this.ref) {
      this.ref.instance.selected = this._selected;
      if (this.ref.instance.cd) {
        this.ref.instance.cd.detectChanges();
      }
    }
  }

  ref!: ComponentRef<any>;

  @ViewChild('componentHolder', { read: ViewContainerRef, static: true })
  componentHolder!: ViewContainerRef;

  constructor() {}

  ngOnInit() {
    this.updateComponent();
  }

  updateComponent(): void {
    if (this._factory) {
      if (this.ref) {
        this.ref.destroy();
      }
      this.ref = this.componentHolder.createComponent(this._factory);

      if (this._data) {
        this.ref.instance.data = this._data;
      }

      if (this._columnsMatcher) {
        this.ref.instance.columnsMatcher = this._columnsMatcher;
      }

      if (this._selected) {
        this.ref.instance.selected = this._selected;
      }

      if (this.ref.instance.cd) {
        this.ref.instance.cd.detectChanges();
      }
    }
  }
}
