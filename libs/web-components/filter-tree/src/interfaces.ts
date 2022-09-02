
export interface TreeNode {
    label: string;
    children?: TreeNode[];
    isSelected?: boolean;
    level?: number,
  }
  
  export interface FlatTreeNode {
    item: string;
    level: number;
    selected: boolean;
  }
  
  export interface TreeState {
    added: TreeNode[],
    removed: TreeNode[]
  }
  