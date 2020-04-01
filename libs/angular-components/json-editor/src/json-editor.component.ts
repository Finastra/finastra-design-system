import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { JsonEditorOptions, JsonEditorMode, JsonEditorTreeNode, IError } from './model';
import * as jsonEditor from 'jsoneditor';
@Component({
  selector: 'uxg-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonEditorComponent implements OnInit, OnDestroy {
  private jsonEditor: any;
  public id = 'uxgjsoneditor' + Math.floor(Math.random() * 1000000);
  disabled = false;
  isFocused = false;

  public optionsChanged = false;

  @ViewChild('jsonEditorContainer', { static: true }) jsonEditorContainer: ElementRef;

  private _data: Object = {};

  @Input() options: JsonEditorOptions = new JsonEditorOptions();
  @Input('data')
  set data(value: Object) {
    this._data = value;
    if (this.jsonEditor) {
      this.jsonEditor.destroy();
      this.ngOnInit();
    }
  }

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  jsonChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
  ngOnInit() {
    let optionsBefore = this.options;
    if (!this.optionsChanged && this.jsonEditor) {
      optionsBefore = this.jsonEditor.options;
    }

    if (!this.options.onChangeJSON && this.jsonChange) {
      this.options.onChangeJSON = this.onChangeJSON.bind(this);
    }

    if (!this.options.onChange && this.change) {
      this.options.onChange = this.onChange.bind(this);
    }
    const optionsCopy = Object.assign({}, optionsBefore);

    // expandAll is an option only supported by ang-jsoneditor and not by the the original jsoneditor.
    delete optionsCopy.expandAll;

    if (!this.jsonEditorContainer.nativeElement) {
      console.error(`Can't find the ElementRef reference for jsoneditor)`);
    }
    this.jsonEditor = new jsonEditor(this.jsonEditorContainer.nativeElement, optionsCopy, this._data);

    if (this.options.expandAll) {
      this.jsonEditor.expandAll();
    }
  }
  ngOnDestroy() {}

  // Implemented as part of ControlValueAccessor.
  private onChangeModel = (e: any) => {};

  public onChange(e: any) {
    if (this.jsonEditor) {
      this.onChangeModel(this.jsonEditor.get());
      this.change.emit(this.jsonEditor.get());
    }
  }

  public onChangeJSON(e: any) {
    if (this.jsonEditor) {
      this.jsonChange.emit(this.jsonEditor.get());
    }
  }

  /**
   * JSON EDITOR FUNCTIONS
   */

  public collapseAll() {
    this.jsonEditor.collapseAll();
  }

  public expandAll() {
    this.jsonEditor.expandAll();
  }

  public focus() {
    this.jsonEditor.focus();
  }

  public get(): JSON {
    return this.jsonEditor.get();
  }

  public getMode(): JsonEditorMode {
    return this.jsonEditor.getMode() as JsonEditorMode;
  }

  public getName(): string {
    return this.jsonEditor.getName();
  }

  public getText(): string {
    return this.jsonEditor.getText();
  }

  public set(json: JSON) {
    this.jsonEditor.set(json);
  }

  public setMode(mode: JsonEditorMode) {
    this.jsonEditor.setMode(mode);
  }

  public setName(name: string) {
    this.jsonEditor.setName(name);
  }

  public setSelection(start: any, end: any) {
    this.jsonEditor.setSelection(start, end);
  }

  public getSelection(): any {
    return this.jsonEditor.getSelection();
  }

  public getValidateSchema(): any {
    return this.jsonEditor.validateSchema;
  }

  public setSchema(schema: any) {
    this.jsonEditor.setSchema(schema);
  }

  public search(query: string) {
    this.jsonEditor.search(query);
  }

  public setOptions(newOptions: JsonEditorOptions) {
    if (this.jsonEditor) {
      this.jsonEditor.destroy();
    }
    this.optionsChanged = true;
    this.options = newOptions;
    this.ngOnInit();
  }

  public update(json: JSON) {
    this.jsonEditor.update(json);
  }

  public destroy() {
    this.jsonEditor.destroy();
  }

  public isValidJson() {
    try {
      JSON.parse(this.getText());
      return true;
    } catch (e) {
      return false;
    }
  }
}
