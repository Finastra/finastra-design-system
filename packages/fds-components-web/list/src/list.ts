import { ListBase } from '@material/mwc-list/mwc-list-base';
import { customElement } from 'lit/decorators.js';
import { styles } from './list-styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Color of the select item.
 * @cssprop {color} [--fds-secondary=#C137A2] - Color of the controls.
 * @attr [activatable=false] - Sets activated attribute on selected items which provides a focus-persistent highlight.
 * @attr [multi=false] - When true, enables selection of multiple items.
 * @attr [noninteractive=false] - Disables focus and pointer events for the list item.
 * @slot default - Content to display in the lists internal <ul> element.
 */

@customElement('fds-list')
export class List extends ListBase {
  static override styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-list': List;
  }
}
