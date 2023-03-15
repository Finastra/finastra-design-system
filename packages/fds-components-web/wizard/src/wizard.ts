import '@finastra/divider';
import '@finastra/stepper';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { styles } from './styles.css';

export enum POSITION {
  right = 'right',
  left = 'left'
}

export interface Page {
  label: string;
  description?: string | null;
  disabled?: Boolean | null;
}

/**
  * @cssprop {color} [--fds-stepper-bg=#fafafa] - Stepper background color
  * @cssprop {color} [--fds-header-bg=#f3f1fc] - Header background color
  * @cssprop {color} [--fds-title-color=#694ed5] - Header title color
  * @cssprop {color} [--fds-icon-border-color=#f3f1fc] - Header icon border color
  * @cssprop {color} [--fds-icon-bg=#fafafa] - Header icon background color
  * @attr {boolean} [stepperOnDark=false] - Stepper on dark
  * @attr [currentStepIndex=0] - Index of current active step.
  * @attr [linear=false] - Used to create a linear stepper that requires the user to complete previous steps before proceeding to following steps. Note that a wizard page is considered as completed when its property completed is true.
  * @attr {boolean} [stepsCounter=false] - make the step counter visible in the stepper.
  * @attr {"topLeft"|"topRight"|"center"} stepperPosition - Stepper position
  * @slot page - Defines a new page inside the wizard that generates a new step automatically.
    It is Used with the fds-wizard-page web component that could contain:
  - page-title: to define a title to the step
  - next-label: to change the next button label for a specific page
  - icon: to define a link to your hosted icon to be displayed next to the title
  - description: to define a description to your step
  - disabled : to disable the step
  - header: to enable the header display (default is false)
  - current: to set the step to current
  - completed: used when linear mode is on to indicate that the step is valid and the next one is unlocked.
  * @slot next - Slot to place an element that manages the transition to the next step.
  * @slot previous - Slot to place an element that manages the transition to the previous step.
  * @slot save - Slot to place an element that appears in the last step. The developer could add his own logic in the onClick Event.
  * @slot left-action - Slot to place an element in the left side of the wizard actions bar.
*/
@customElement('fds-wizard')
export class Wizard extends LitElement {
  static styles = styles;

  @queryAssignedElements({ slot: 'page' })
  _pages!: Array<HTMLElement>;

  @queryAssignedElements({ slot: 'next' })
  _nextBtn!: HTMLElement;

  @query('#stepper') protected stepper!: HTMLElement;

  @query('.wizard-container') protected wizardContainer!: HTMLElement;

  @property({ type: Boolean })
  stepsCounter = false;

  /**
   * @type {"left"|"right"} stepperPositon - Stepper postion
   */
  @property({ reflect: true }) stepperPosition: POSITION = POSITION.left;

  @property({ type: Boolean })
  stepperOnDark = false;

  @property({ type: Boolean })
  linear = false;

  protected save = false;
  protected back = false;
  protected disabled: Boolean | null = null;
  protected allNextDisabled = true;
  protected allBackDisabled = true;
  protected initialNextLabel = '';

  @state()
  protected arrayPages: Page[] = [];

  @property({ type: Number })
  currentStepIndex = 0;

  constructor() {
    super();
    this.addEventListener('step-click', this.onStepClickEvent);
  }

  onStepClickEvent(event) {
    if (event.type === 'step-click') {
      this.goToStepIndex(+event.detail.value);
    }
  }

  render() {
    return html` <div class="wizard">
      <div class="wizard-container">
        ${this.stepperPosition === 'left' ? html`${this.renderStepper()}` : ''}
        <div class="content">
          <div class="pages">
            <slot name="page" @slotchange=${this.onPagesSlotChanged}></slot>
          </div>
        </div>
        ${this.stepperPosition === 'right' ? html` <fds-divider vertical></fds-divider> ${this.renderStepper()}` : ''}
      </div>
      <div class="footer">
        <fds-divider></fds-divider>
        ${this.renderActions()}
      </div>
    </div>`;
  }

  renderStepper(): TemplateResult {
    return html` <div class="stepper-container ${this.stepperOnDark ? ' dark-theme' : ''}">
      ${this.stepsCounter ? this.renderCounterInStepper() : ''}
      <fds-vertical-stepper
        label-mode="center"
        .steps=${this.arrayPages}
        secondary
        id="stepper"
        currentStepIndex=${this.currentStepIndex}
      ></fds-vertical-stepper>
    </div>`;
  }

  renderCounterInStepper(): TemplateResult {
    return html` <div class="steps-counter">Step ${this.updateStepsCounter(this.currentStepIndex)}</div> `;
  }
  renderActions(): TemplateResult {
    return html`<div class="actions">
      <div class="left">
        <slot name="left-action"></slot>
      </div>
      <div class="center">
        <slot name="content-action"></slot>
      </div>
      <div class="right">
        <slot name="right-action"></slot>
        ${this.back ? this.renderBackSlot() : ''} ${this.save ? this.renderSaveSlot() : html`${this.renderNextSlot()}`}
      </div>
    </div>`;
  }

  renderSaveSlot(): TemplateResult {
    return html`<slot name="done"></slot>`;
  }

  renderBackSlot(): TemplateResult {
    return html`<slot name="previous" @click="${this._handleBackClick}"></slot>`;
  }

  renderNextSlot(): TemplateResult {
    return html`<slot name="next" @click="${this._handleNextClick}"></slot>`;
  }

  onPagesSlotChanged() {
    this._pages[this.currentStepIndex].setAttribute('current', 'true');
    this.updateActionsState(this.currentStepIndex);
    if (this._nextBtn[0]) {
      this.initialNextLabel = this._nextBtn[0].label;
    }
    this.initAllPages();
  }

  initAllPages() {
    const steps: Page[] = [];
    this._pages.forEach((page: HTMLElement, index: number) => {
      this.checkAttributes(page, index);
      page.setAttribute('stepsCounter', this.updateStepsCounter(this.currentStepIndex));
      this.stepper.setAttribute('stepsCounter', this.updateStepsCounter(this.currentStepIndex));
      steps.push({
        label: page.getAttribute('page-title') as string,
        description: page.getAttribute('description') as string,
        disabled: this.linear ? true : this.disabled
      });
      this.disabled = null;
      this.arrayPages = steps;
      if (this.linear) {
        this.arrayPages[this.currentStepIndex].disabled = false;
      }
    });
  }

  updateActionsState(current: number) {
    if (!this.currentPageIsLast(current) && !this.currentPageIsFirst(current) && !this.currentPageIsDisabled(current)) {
      this.back = true;
    }

    if (this.currentPageIsLast(current) && !this.currentPageIsDisabled(current)) {
      this.save = true;
      this.back = true;
    }

    if (this.currentPageIsFirst(current)) {
      this.back = false;
    }

    if (this._pages[current].hasAttribute('current') && this._pages[current].hasAttribute('disabled')) {
      console.error('A current could not be disabled');
    }
    this.requestUpdate();
  }

  currentPageIsLast(current: number) {
    return current == this._pages.length - 1;
  }

  currentPageIsDisabled(current: number) {
    return this._pages[current].hasAttribute('disabled');
  }

  currentPageIsFirst(current: number) {
    return current == 0;
  }

  checkAttributes(page: HTMLElement, index: number) {
    if (page.getAttribute('disabled') !== null) {
      this.disabled = true;
    }
    if (page.hasAttribute('current') && this._pages[this.currentStepIndex] !== page) {
      this.updateCurrentPage(index);
      this.stepper['currentStepIndex'] = this.currentStepIndex;
      this.updateActionsState(this.currentStepIndex);
    }
    this.requestUpdate();
  }

  checkNextStepDisabled(pages: Array<HTMLElement>, current: number) {
    if (!this.currentPageIsDisabled(current)) return;
    this.stepper['currentStepIndex']++;
    if (current !== this._pages.length - 1) {
      this.currentStepIndex++;
      current++;
      this.checkNextStepDisabled(pages, current);
    }
  }

  checkPreviousStepDisabled(pages: Array<HTMLElement>, current: number) {
    if (!this.currentPageIsDisabled(current)) return;
    this.stepper['currentStepIndex']--;
    this.currentStepIndex--;
    current--;
    this.updateActionsState(current);
    this.checkPreviousStepDisabled(pages, current);
    this.requestUpdate();
  }

  goToNextStep(pages: Array<HTMLElement>) {
    this.currentStepIndex = this.stepper['currentStepIndex'];
    this.stepper['currentStepIndex']++;
    pages[this.currentStepIndex].removeAttribute('current');
    this.currentStepIndex++;
    this.wizardContainer.scrollTop = 0;
  }

  goToPreviousStep(pages: Array<HTMLElement>) {
    this.currentStepIndex = this.stepper['currentStepIndex'];
    this.stepper['currentStepIndex']--;
    pages[this.currentStepIndex].removeAttribute('current');
    this.currentStepIndex--;
    this.wizardContainer.scrollTop = 0;
  }

  goToStepIndex(index: number) {
    this.back = true;
    this.save = false;
    this.updateActionsState(index);
    this.updateCurrentPage(index);
    this.requestUpdate();
  }

  updateCurrentPage(index: number) {
    this._pages[this.currentStepIndex].removeAttribute('current');
    this.currentStepIndex = index;
    this.wizardContainer.scrollTop = 0;
    this.UpdatePage();
  }

  updateStepsCounter(current: number) {
    return +current + 1 + '/' + this._pages.length;
  }

  UpdatePage() {
    this._pages[this.currentStepIndex].setAttribute('current', 'true');
    this._pages[this.currentStepIndex].setAttribute('stepsCounter', this.updateStepsCounter(this.currentStepIndex));
    this.stepper.setAttribute('stepsCounter', this.updateStepsCounter(this.currentStepIndex));
  }

  checkNextStep() {
    if (this.currentStepIndex !== this._pages.length - 1) {
      this.goToNextStep(this._pages);
      this.checkNextStepDisabled(this._pages, this.currentStepIndex);
      this.UpdatePage();
    }
    this.updateActionsState(this.currentStepIndex);
    this.requestUpdate();
  }

  _handleNextClick() {
    if (this.CheckIfAllNextStepsDisabled(this.currentStepIndex)) {
      return;
    }

    if (this.linear) {
      if (this._pages[this.currentStepIndex]?.getAttribute('completed')) {
        if (this._pages[+this.currentStepIndex + 1].getAttribute('disabled') === '') {
          this._pages[+this.currentStepIndex + 1].removeAttribute('disabled');
        }
        this.arrayPages[+this.currentStepIndex + 1].disabled = false;
        this.checkNextStep();
      } else {
        return;
      }
    } else {
      this.checkNextStep();
    }
  }

  _handleBackClick() {
    if (this.CheckIfAllBackStepsDisabled(this.currentStepIndex)) {
      return;
    }
    if (this.currentStepIndex !== 0) {
      if (this.currentStepIndex === 1) {
        this.back = false;
      }
      if (this.currentStepIndex === this._pages.length - 1) {
        this.save = false;
      }
      this.goToPreviousStep(this._pages);
      this.checkPreviousStepDisabled(this._pages, this.currentStepIndex);
      this.UpdatePage();
    }
    this.requestUpdate();
  }

  CheckIfAllNextStepsDisabled(current: number) {
    if (current !== this._pages.length - 1) {
      current++;
      if (!this.currentPageIsDisabled(current)) {
        this.allNextDisabled = false;
      } else {
        this.allNextDisabled = true;
        this.CheckIfAllNextStepsDisabled(current);
      }
    }
    return this.allNextDisabled;
  }

  CheckIfAllBackStepsDisabled(current: number) {
    if (current !== 0) {
      current--;
      if (!this.currentPageIsDisabled(current)) {
        this.allBackDisabled = false;
      } else {
        this.allBackDisabled = true;
        this.CheckIfAllBackStepsDisabled(current);
      }
    }
    return this.allBackDisabled;
  }

  updated() {
    if (this._nextBtn[0] && this.initialNextLabel) {
      if (this._pages[this.currentStepIndex].getAttribute('next-label') !== null) {
        this._nextBtn[0].label = this._pages[this.currentStepIndex].getAttribute('next-label');
      } else {
        this._nextBtn[0].label = this.initialNextLabel;
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-wizard': Wizard;
  }
}
