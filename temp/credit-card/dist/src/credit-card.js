import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';
let CreditCard = class CreditCard extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name of the card owner
         */
        this.name = 'Jane Cooper';
        /**
         * The disclosed card numbers
         */
        this.lastDigits = 9067;
        /**
         * The card validity date
         */
        this.date = '03/24';
        /**
         * Hidden digits format
         */
        this.hiddenDigits = '**** **** ****';
    }
    render() {
        return html `
      <svg viewBox="0 0 248 152" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#shadow)">
          <rect width="220" height="123" rx="8" transform="matrix(-1 0 0 1 234 11)" fill="url(#bg)" />
        </g>

        <path
          fill-opacity=".3"
          d="M29 29.5V43a4 4 0 0 0 4 4h17.6c1.3 0 2.4-1.1 2.4-2.5v-15c0-1.4-1-2.5-2.4-2.5H31.4a2.5 2.5 0 0 0-2.4 2.5Zm6 7.5a1.2 1.2 0 1 1 0 2.5h-2.4a1.2 1.2 0 1 1 0-2.5H35Zm0-3.8a1.2 1.2 0 1 1 0 2.5h-2.4a1.2 1.2 0 1 1 0-2.5H35Zm0-3.7a1.2 1.2 0 1 1 0 2.5h-2.4a1.2 1.2 0 1 1 0-2.5H35Z"
        />

        <text id="name" x="30" y="70" font-size="12px" font-weight="bold" font-family="Roboto" fill="white">${this.name}</text>

        <text id="number" x="30" y="88" font-size="12px" font-weight="lighter" font-family="Roboto" fill="white">
          ${this.renderNumber()}
        </text>

        <text x="222" y="99" font-size="10px" font-weight="lighter" font-family="Roboto" text-anchor="end" fill="white">Valid</text>

        <text id="date" x="222" y="117" font-size="12px" font-weight="bolder" font-family="Roboto" text-anchor="end" fill="white">
          ${this.date}
        </text>

        <path
          fill="#fff"
          d="m196.6 39.5 2.5-6.3h2.7l-4 9.3H195l-2.3-8a11 11 0 0 0-2.7-1.1v-.2h4.2c.6 0 1 .2 1.2.8l.9 4.1v.1l.3 1.3Zm6.4-6.3-1.7 9.3h2.6l1.6-9.3H203Zm10.2.2c-.5-.2-1.3-.4-2.3-.4-2.5 0-4.3 1.3-4.4 3 0 1.4 1.3 2.2 2.3 2.6 1 .5 1.4.7 1.4 1.1 0 .7-.8 1-1.6 1a6 6 0 0 1-2.4-.5l-.4-.2-.3 2.1c.6.3 1.7.5 2.9.5 2.7 0 4.4-1.2 4.5-3.2 0-1-.7-1.8-2.2-2.5-1-.4-1.5-.7-1.5-1.2 0-.3.5-.8 1.5-.8a5 5 0 0 1 2 .4l.2.1.3-2Z"
        />
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M218 33.2h2l2 9.3h-2.4l-.3-1.4H216l-.6 1.4h-2.7l3.8-8.5c.3-.6.8-.8 1.4-.8Zm-.2 3.4s-.9 2-1 2.6h2l-.5-2.7-.2-.8a50.3 50.3 0 0 1-.3.9Z"
          clip-rule="evenodd"
        />

        <defs>
          <filter id="shadow" x="0" y="0" width="248" height="152" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_33364_25729" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="7" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_33364_25729" result="effect2_dropShadow_33364_25729" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_33364_25729" result="effect3_dropShadow_33364_25729" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_33364_25729" result="shape" />
          </filter>

          <linearGradient id="bg" gradientTransform="rotate(40)">
            <stop offset="0%" stop-color="#694ED6" />
            <stop offset="100%" stop-color="#FF4999" />
          </linearGradient>
        </defs>
      </svg>
    `;
    }
    renderNumber() {
        return html `${this.hiddenDigits + ' ' + this.lastDigits.toString()}`;
    }
};
CreditCard.styles = styles;
__decorate([
    property({ type: String })
], CreditCard.prototype, "name", void 0);
__decorate([
    property({ type: Number, attribute: 'last-digits' })
], CreditCard.prototype, "lastDigits", void 0);
__decorate([
    property({ type: String })
], CreditCard.prototype, "date", void 0);
__decorate([
    property({ type: String, attribute: 'hidden-digits' })
], CreditCard.prototype, "hiddenDigits", void 0);
CreditCard = __decorate([
    customElement('fds-credit-card')
], CreditCard);
export { CreditCard };
//# sourceMappingURL=credit-card.js.map