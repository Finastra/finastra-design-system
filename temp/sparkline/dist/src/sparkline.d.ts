import { LitElement } from 'lit';
/**
 * @attr {boolean} [success=false] - Set color to success
 * @attr {boolean} [error=false] - Set color to error
 */
export declare class Sparkline extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * An array of numbers
     * @type {Array}
     */
    data: number[];
    render(): import("lit").TemplateResult<1>;
    protected renderPath(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'fds-sparkline': Sparkline;
    }
}
