
import { customElement } from 'lit/decorators.js';
import { FdsGlobalSearchGroupBase } from './global-search-group-base';
import { styles } from './global-search-group.css';

@customElement('fds-global-search-group')
export class FdsGlobalSearchGroup extends FdsGlobalSearchGroupBase {
    static styles = styles;
}
declare global {
    interface HTMLElementTagNameMap {
        'fds-global-search-item': FdsGlobalSearchGroup;
    }
}