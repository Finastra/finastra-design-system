export interface TreeNode {
  label: string;
  children?: TreeNode[];
  isSelected?: boolean;
  level?: number;
  expandable?: Boolean;
}

export interface FlatTreeNode {
  item: string;
  level: number;
  selected: boolean;
  expandable?: Boolean;
  id: string;
}

export interface TreeState {
  added: TreeNode[];
  removed: TreeNode[];
}
