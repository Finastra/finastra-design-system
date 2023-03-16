import { LitElement } from 'lit';
export declare class CreditCard extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The name of the card owner
     */
    name: string;
    /**
     * The disclosed card numbers
     */
    lastDigits: number;
    /**
     * The card validity date
     */
    date: string;
    /**
     * Hidden digits format
     */
    hiddenDigits: string;
    render(): import("lit").TemplateResult<1>;
    protected renderNumber(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fds-credit-card': CreditCard;
    }
}
