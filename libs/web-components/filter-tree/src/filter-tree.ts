import "@finastra/list";
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';
import './tree-node/nested-node';

export interface TreeNode {
  label: string;
  children?: TreeNode[];
  parent?: TreeNode;
  isSelected?: boolean;
}
@customElement('fds-filter-tree')
export class FilterTree extends LitElement {
  static styles = styles;
  left=false;

  @property({ type: Array })
  items: TreeNode[] = [];

  selected=false;


  render() {
    return html`
    ${this.renderChildren(this.items,0)}
    `;
  }

  renderChildren(items: TreeNode[], depth = 0) {
    return html`
    <ul>
      ${items.map((item) => {
        this.requestUpdate();
        return html`
        <li>
          <fds-check-list-item left> ${item.label} </fds-check-list-item>
          ${item.children ? html` ${this.renderChildren(item.children, depth+1)} `: ''}
        </li>
        `
      })}
    </ul>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-filter-tree': FilterTree;
  }
}
