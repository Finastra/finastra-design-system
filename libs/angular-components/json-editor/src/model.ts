export type JsonEditorMode = 'tree' | 'view' | 'form' | 'code' | 'text';

export interface JsonEditorTreeNode {
  field: String;
  value: String;
  path: String[];
}

export interface IError {
  path: (string | number)[];
  message: string;
}

export class JsonEditorOptions {
  public ace: any;
  //   public ajv: Object;

  /**
   *   {function} onChange  Callback method, triggered
  on change of contents.
  Does not pass the contents itself.
  See also `onChangeJSON` and
  `onChangeText`.
   */
  public onChange: ((e: any) => void) | undefined;

  /**
*   // {function} onChangeJSON  Callback method, triggered
//     in modes on change of contents,
//     passing the changed contents
//     as JSON.
//     Only applicable for modes
//     'tree', 'view', and 'form'.
*/
  public onChangeJSON: ((e: any) => void) | undefined;
  public enableSort: boolean;
  public enableTransform: boolean;
  public escapeUnicode: boolean;
  public expandAll: boolean;
  public sortObjectKeys: boolean;
  public history: boolean;
  public mode: JsonEditorMode;
  //   public modes: JsonEditorMode[];
  //   public name: String;
  //   public schema: Object;
  public search: boolean;
  public indentation: Number;
  //   public template: Object;
  //   public theme: Number;
  //   public language: String;
  //   public languages: Object;
  /**
   * Adds main menu bar - Contains format, sort, transform, search etc. functionality. True
   * by default. Applicable in all types of mode.
   */
  //   public mainMenuBar: boolean;

  /**
   * Adds navigation bar to the menu - the navigation bar visualize the current position on
   * the tree structure as well as allows breadcrumbs navigation.
   * True by default.
   * Only applicable when mode is 'tree', 'form' or 'view'.
   */
  //   public navigationBar: boolean;

  /**
   * Adds status bar to the bottom of the editor - the status bar shows the cursor position
   * and a count of the selected characters.
   * True by default.
   * Only applicable when mode is 'code' or 'text'.
   */
  //   public statusBar: boolean;

  constructor() {
    this.enableSort = true;
    this.enableTransform = true;
    this.escapeUnicode = false;
    this.expandAll = false;
    this.sortObjectKeys = false;
    this.history = true;
    this.mode = 'tree';
    this.search = true;
    this.indentation = 2;
  }
}
