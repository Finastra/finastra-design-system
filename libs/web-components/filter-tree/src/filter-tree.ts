import "@finastra/list";
import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styles } from './styles.css';

export interface TreeNode {
  label: string;
  children?: TreeNode[];
  parent?: TreeNode;
  isSelected?: boolean;
}

@customElement('fds-filter-tree')
export class FilterTree extends LitElement {
  static styles = styles;

  @query('fds-filter') protected filter!: HTMLDivElement;

  left=false;

  constructor() {
    super();
  }

  @property({ type: Array })
  items: TreeNode[] = [];

 async connectedCallback() {
    await super.connectedCallback();
    const list = await this.shadowRoot?.getElementById('list');

    list?.addEventListener('selected', (event) =>  {
      console.log(event);
    });
  }

  render() {
    return html`
      ${this.renderChildren(this.items,0)}
    `;
  }

  
  renderChildren(items: TreeNode[], level = 0) {
    return html`
    <ul>
      <fds-list id="list" multi>
        ${items.map((item) => {
        return html`
        <li>
          <fds-check-list-item left> ${item.label} </fds-check-list-item>
          ${item.children ? html` ${this.renderChildren(item.children, level+1)} `: ''}
        </li>
        `
      })}
      </fds-list>
    </ul> `
  }

  // getParentNode(currentNode: TreeNode): TreeNode | null {
  //   let parentNode: TreeNode | null = null;
  //   this.items.forEach((node) => {
  //     if (node.children && node.children.length > 0) {
  //       node.children.forEach((child) => {
  //         if (currentNode.label === child.label) {
  //           parentNode = node;
  //         }
  //       });
  //     }
  //   });
  //   return parentNode;
  // }
}


declare global {
  interface HTMLElementTagNameMap {
    'fds-filter-tree': FilterTree;
  }
}
