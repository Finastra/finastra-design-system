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

export interface CurrentNode {
  path: string; // path of navigationNode.
  currentPath?: string; // path of router
  view: string;
  nodes: NavigationNode[];
}

/**
 * A map of current nodes by view.
 * This is needed because some paths map to nodes in more than one view.
 * If a view does not contain a node that matches the current path then the value will be undefined.
 */
export interface CurrentNodes {
  [view: string]: CurrentNode;
}

export interface ParamMapBuilder {
  [key: string]: () => Promise<string>;
}
