// Pulled all interfaces out of `navigation.service.ts` because of this:
// https://github.com/angular/angular-cli/issues/2034
// Then re-export them from `navigation.service.ts`

export interface NavigationNode {
  path?: string;
  title?: string;
  tooltip?: string;
  icon?: string;
  openInNewTab?: boolean;
}

/**
 *  view: 'SideNav' | 'TopBar' | 'Footer' | etc
 */
export interface NavigationViews {
  [view: string]: NavigationNode[];
}

export interface ParamMapBuilder {
  [key: string]: () => Promise<string>;
}
