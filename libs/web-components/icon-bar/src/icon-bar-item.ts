import '@finastra/divider';
import { IconButton } from '@finastra/icon-button';
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
    notif = '';

    
    constructor() {
        super();
        this.icon = 'apps';
      }

      render() {
        return html`
        ${this.notif?
        html`
        <fds-badge value="${this.notif}" position="topRight" color="secondary">
        ${this.renderStepper()} 
        </fds-badge>` : html`${this.renderStepper()}`}
        `;
      }

      renderStepper() {
        const classes = { 
          current: this.current, 
        };
        return html`<fds-icon-button class="${classMap(classes)}"
        @click="${this.handleItemClick}"
        icon='${this.icon}'
        ?dense='${this.dense}'
        ?primary='${this.primary}'
        ?secondary='${this.secondary}'
      >
      </fds-icon-button>
      `
      }

      handleItemClick() {
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
