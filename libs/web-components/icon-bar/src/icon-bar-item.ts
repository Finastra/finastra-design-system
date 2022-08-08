import '@finastra/divider';
import { IconButton } from '@finastra/icon-button';
import '@popperjs/core';
import { html } from 'lit-html';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { IconBar } from './icon-bar';
import { styles } from './icon-bar-item.css';

@customElement('fds-icon-bar-item')
export class IconBarItem extends IconButton {
    static styles = styles;

    @property({ type: Boolean })
    current = false;

    @property({ type: String })
    notification = '';

    @property({ type: String })
    label = '';
    
    constructor() {
        super();
        this.icon = 'apps';
     }

      render() {
        return html`
          ${this.notification?
          html`
          <fds-badge data-tippy-content="This is a tooltip" value="${this.notification}" position="topRight" color="secondary">
          ${this.renderIconButtons()} 
          </fds-badge>
          ` : html`${this.renderIconButtons()}`}
        `;
      }

      renderIconButtons() {
        const classes = {
          current: this.current
        };
        return html`
        <div @click="${this.handleIconClick}" class="iconButton ${classMap(classes)}">
          <fds-icon-button
            icon='${this.icon}'
            ?dense='${this.dense}'
            ?primary='${this.primary}'
            ?secondary='${this.secondary}'
          >
          </fds-icon-button>  
          <span class="label">${this.label}</span>
        </div>
      `
      }

      handleIconClick() {
        if(this.current) {
          return;
        }
        this.current = !this.current;
        this.getParent().deselectOthers(this);
        this.requestUpdate();
      }

      getParent() : IconBar {
        return this.parentElement as IconBar
      }
}

declare global {
    interface HTMLElementTagNameMap {
        'fds-icon-bar-item': IconBarItem;
    }
}
