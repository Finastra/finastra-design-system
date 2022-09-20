// // import '@finastra/button';
// // import "@material/mwc-icon-button";
// import { createPopper, Instance, Placement } from "@popperjs/core";
// import flip from '@popperjs/core/lib/modifiers/flip.js';
// import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
// import { html, LitElement, TemplateResult } from "lit";
// import { customElement, property, queryAsync, state } from "lit/decorators.js";
// import { classMap } from 'lit/directives/class-map.js';
// import { ANIMATION_OPTIONS, getCenterPopperOptions, getElement, getSlideKeyframe, makeOverlayPath, newCustomEvent } from './guided-tour-helpers';
// import { styles } from './guided-tour-step.css';
// import { NextStepTrigger, TourStep } from './guided-tour.model';

// @customElement('fds-guided-tour-step')
// export class GuidedTourStep extends LitElement {
//   static styles = styles;

//   @state() _showTour = false;
//   @state() _showStep = false;
//   @state() _attachTo: any = null;

//   @property({type: Object}) step!: TourStep;
//   @property({type: Boolean}) isFirst = false;
//   @property({type: Boolean}) isLast = false;

//   @queryAsync('#guide-tooltip') tooltipElement!: Promise<HTMLElement>;

//   tooltip: Instance | undefined;
//   private elementClickHandler = (e: Event) => {
//     this._handleNext(e);
//   };

//   override render() {
//     return html`${this._renderElementHighlight()} ${this._renderStep(this.step)}`;
//   }

//   override connectedCallback() {
//     super.connectedCallback();

//     window.onresize = () => {
//       this.requestUpdate();
//     };
//   }

//   override disconnectedCallback() {
//     this._attachTo?.removeEventListener('click', this.elementClickHandler);
//   }

//   private _renderStep(step: TourStep) {
//     return html`
//       <!-- <div
//         id="guide-tooltip"
//         role="tooltip"
//         class=${classMap({'visible-step': this._showStep})}
//       >
//         <mwc-icon-button
//           @click="${this._handleClose}"
//           dense
//           icon="close"
//           class="close-button"
//         ></mwc-icon-button>
//         <div class="step-title">${step?.title}</div>
//         <div class="step-description">${step?.description}</div>
//         <div class="step-actions">
//           <fds-button
//             fullwidth
//             style="display: ${this.isLast ||
//             step?.nextStepTrigger === NextStepTrigger.elementClick
//               ? 'none'
//               : 'flex'}"
//             class="guide-action"
//             @click="${this._handleNext}"
//             standard
//             label="Next"
//           ></fds-button>
//           <fds-button
//             fullwidth
//             style="display: ${!this.isLast ? 'none' : 'flex'}"
//             class="guide-action"
//             @click="${this._handleClose}"
//             standard
//             label="Complete"
//           ></fds-button>
//           <fds-button
//             text
//             fullwidth
//             style="display: ${this.isFirst || this.step?.hidePreviousBtn ? 'none' : 'flex'}"
//             class="guide-action"
//             @click="${this._handleBack}"
//             standard
//             label="Back"
//           ></fds-button>
//         </div>
//         <div id="arrow" data-popper-arrow></div>
//       </div> -->
//     `;
//   }

//   private _renderElementHighlight(): TemplateResult {
//     this._showTour = true;
//     this._attachTo?.removeEventListener('click', this.elementClickHandler);
//     if (this.step?.selector) {
//       getElement(this.step.selector).then((el: any) => {
//         this._attachTo = el;
//         this._attachTo?.scrollIntoView();
//         this._attachTo?.removeEventListener('click', this.elementClickHandler);
//         if(this.step?.nextStepTrigger === NextStepTrigger.elementClick){
//             this._attachTo?.addEventListener('click', this.elementClickHandler);
//         }
//         this._createTooltip(this.step?.placement);
//       });
//     } else {
//       this._attachTo = document.body;
//       this._createTooltip(this.step?.placement);
//     }
//     const classes = {
//       'tour-overlay-container': true,
//       'tour-is-visible': this._showTour
//     };
//     const elDomRect =
//       this.step?.placement !== 'center' && this.step?.selector
//         ? this._attachTo?.getBoundingClientRect() || {}
//         : {};

//     return html` <svg class=${classMap(classes)} style="pointer-events: ${this.step?.nextStepTrigger !== NextStepTrigger.elementClick ? 'all' : 'none'}">
//       <path
//         d=${makeOverlayPath(
//           elDomRect.width,
//           elDomRect.height,
//           elDomRect.x,
//           elDomRect.y,
//           8
//         )}
//       />
//     </svg>`;
//   }

//   private _handleClose(e: Event) {
//     this.dispatchEvent(newCustomEvent('close-step', e));
//   }

//   private _handleNext(e: Event) {
//     this.dispatchEvent(newCustomEvent('next-step', e));
//   }

//   private _handleBack(e: Event) {
//     this.dispatchEvent(newCustomEvent('previous-step', e));
//   }

//   private async _createTooltip(placement: Placement | 'center' = 'center') {
//     let element = this._attachTo;
//     const tooltipEl = await this.tooltipElement;
//     if (this.tooltip) {
//       this.tooltip.destroy();
//     }
//     let popperOptions: any = {};
//     if (placement === 'center') {
//       popperOptions = getCenterPopperOptions();
//       element = document.body;
//     } else {
//       popperOptions = {
//         placement,
//         strategy: 'fixed',
//         modifiers: [
//           {
//             name: 'offset',
//             options: {
//               offset: [0, 16],
//             },
//           },
//           preventOverflow, flip
//         ],
//       };
//     }
//     this.tooltip = createPopper(element, tooltipEl, popperOptions);
//     await this.tooltip?.update().then(async (state) => {
//       if (placement !== 'center') {
//         const transform = state?.styles?.popper.transform;
//         const data: string[] = transform
//           ?.substring(transform.indexOf('(') + 1, transform.lastIndexOf(')'))
//           .split(', ') as string[];
//         if(data) {
//             tooltipEl?.animate(
//                 getSlideKeyframe(placement, data[0], data[1]),
//                 ANIMATION_OPTIONS
//               );
//         }

//       }
//       this._showStep = true;
//     });
//   }
// }
