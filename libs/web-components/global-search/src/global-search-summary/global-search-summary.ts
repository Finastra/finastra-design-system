import { customElement } from "lit/decorators.js";
import { FdsGlobalSearchSummaryBase } from "./global-search-summary-base";
import { styles } from "./global-search-summary.css";


/**
 * @attr [searchText=""] - the search text to summary.
 * @attr [resultCount= 0] - how many results exist for current search text.
 */

@customElement('fds-global-search-summary')
export class FdsGlobalSearchSummary extends FdsGlobalSearchSummaryBase {
    static override styles = [styles];
}

declare global {
    interface HTMLElementTagNameMap {
        'fds-global-search-summary': FdsGlobalSearchSummary;
    }
}