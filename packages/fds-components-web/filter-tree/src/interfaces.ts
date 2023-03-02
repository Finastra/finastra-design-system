export interface treenode {
  label: string;
  children?: treenode[];
  isSelected?: boolean;
  level?: number;
  expandable?: boolean;
}

export interface flattreenode {
  item: string;
  level: number;
  selected: boolean;
  expandable?: boolean;
  id: string;
}

export interface treestate {
  added: treenode[];
  removed: treenode[];
}
