import { customElement } from "lit/decorators.js";
import { FdsGlobalSearchPageBase } from "./global-search-page-base";
import { styles } from "./global-search-page.css";

@customElement('fds-global-search-page')
export class FdsGlobalSearchPage extends FdsGlobalSearchPageBase {
    static override styles = [styles];
}

declare global {
    interface HTMLElementTagNameMap {
        'fds-global-search-page': FdsGlobalSearchPage;
    }
}