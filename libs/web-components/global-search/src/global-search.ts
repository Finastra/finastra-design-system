
import { customElement } from 'lit/decorators.js';
import { FdsGlobalSearchBase } from './global-search-base';
import { styles } from './global-search.css';

@customElement('fds-global-search')
export class FdsGlobalSearch extends FdsGlobalSearchBase {
    static styles = styles;
}