import { customElement, property } from 'lit/decorators.js';
import { Button } from '@finastra/button';

import '@material/mwc-button';
import '@material/mwc-icon';

@customElement('fds-menu-trigger')
export class MenuTrigger extends Button {

  @property({ type: Boolean }) on = false;

  constructor() {
    super();
    this.trailingIcon = true;
    this.icon = "expand_more";
    this.addEventListener('click', this.toggle);
  }

  updated(changedProperties: Map<string, unknown>) {
    this.on ? this.icon = "expand_less" : this.icon = "expand_more";
    super.update(changedProperties);
  }

  toggle() {
    this.on = !this.on;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-menu-trigger': MenuTrigger;
  }
}
