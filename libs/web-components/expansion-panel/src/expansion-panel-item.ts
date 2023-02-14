import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ExpansionPanel } from './expansion-panel';

import { styles } from './expansion-panel-item.css';

@customElement('fds-expansion-panel-item')
export class ExpansionPanelItem extends LitElement {
  static styles = styles;

  /**
   * Whether the expansion item should be disabled
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * Whether the expansion item is expaned
   */
  @property({ type: Boolean })
  expanded = false;

  private _hideToggleIcon = false;

  @property({ type: Boolean })
  /**
   * Whether the expension indicator is hidden
   */
  public get hideToggleIcon() {
    return this._hideToggleIcon || this.getParent().hideToggleIcon;
  }

  public set hideToggleIcon(value) {
    this._hideToggleIcon = value;
  }

  private _toggleIconPosition?: 'before' | 'after';

  @property({ type: String })
  /**
   * The position of toggle indicator
   */
  public get toggleIconPosition(): 'before' | 'after' {
    return this._toggleIconPosition || this.getParent().toggleIconPosition;
  }

  public set toggleIconPosition(value: 'before' | 'after') {
    this._toggleIconPosition = value;
  }

  handleHeaderClick() {
    if (this.disabled) return;
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.getParent().closeOtherExpansionItems(this);
    }
    this.dispatchEvent(new CustomEvent(this.expanded ? 'opened' : 'closed', { bubbles: true, cancelable: true }));
  }

  render() {
    const classes = {
      expanded: this.expanded,
      disabled: this.disabled,
      'toggle-icon-before': this.toggleIconPosition === 'before',
      'display-mode-default': this.getParent().displayMode === 'default'
    };
    return html` <div class="expansion-panel-item ${classMap(classes)}" aria-disabled="${this.disabled}">
      <div class="expansion-panel-item-header" @click=${this.handleHeaderClick} aria-disabled="${this.disabled}">
        <div class="expansion-panel-item-header__content">
          <span class="expansion-panel-item-header__title"><slot name="title"></slot></span>
          <span class="expansion-panel-item-header__description"><slot name="description"></slot></span>
        </div>
        ${this.hideToggleIcon ? '' : html`<div class="expansion-panel-item-expansion-indicator"></div>`}
      </div>
      <div class="expansion-panel-item-body">
        <slot></slot>
      </div>
    </div>`;
  }

  getParent(): ExpansionPanel {
    return this.parentElement as ExpansionPanel;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-expansion-panel-item': ExpansionPanelItem;
  }
}
