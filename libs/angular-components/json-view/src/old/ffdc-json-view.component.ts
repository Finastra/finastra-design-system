import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'ffdc-json-view',
  templateUrl: './ffdc-json-view.component.html',
  styleUrls: ['./ffdc-json-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FfdcJsonViewComponent implements OnInit {
  @Input() data: Object;

  editorOptions: JsonEditorOptions;

  constructor() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'view';
    this.editorOptions.navigationBar = false;
    this.editorOptions.mainMenuBar = false;
  }

  ngOnInit() {}
}
