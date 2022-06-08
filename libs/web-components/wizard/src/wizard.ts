import '@finastra/button';
import '@finastra/divider';
import '@finastra/stepper';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';
import { styles } from './styles.css';

export enum POSITION {
  right = 'right',
  left = 'left',
}

/**
  * @cssprop {color} [--fds-stepper-bg=#fafafa] - Stepper background color
  * @attr {boolean} [stepperOnDark=false] - Stepper on dark
*/

@customElement('fds-wizard')
export class Wizard extends LitElement {
  static styles = styles;

  @queryAssignedElements({ slot: 'page' })
  _pages!: Array<HTMLElement>;
  @query('#stepper') protected stepper!: HTMLElement;

  @query('[name="next"]') protected _nextAction!: HTMLSlotElement;
  @query('[name="cancel"]') protected _cancelAction!: HTMLSlotElement;
  @query('[name="save"]') protected _saveAction!: HTMLSlotElement;
  @query('[name="back"]') protected _backAction!: HTMLSlotElement;

  /**
   * @type {"left"|"right"} stepperPositon - Stepper postion
   */
  @property({ reflect: true }) stepperPositon: POSITION = POSITION.left;

  @property({ type: Boolean })
  stepperOnDark = false;

  cancelAction: any;
  saveAction: any

  protected save = false;
  protected back = false;
  protected disabled: Boolean | null = null;
  protected arrayPages: any[] = [];
  protected currentStepIndex = 0;

  constructor() {
    super();
    this.addEventListener('step-click', this.onStepClickEvent)
  }

  onStepClickEvent(event) {
    if (event.type === 'step-click') {
      this.goToStepIndex(+event.detail.value);
    }
  }

  render() {
    return html`
      <div class="wizard">
        ${this.stepperPositon === 'left' ?
        html`
        <div class='stepper-container ${this.stepperOnDark ? ' dark-theme' : '' }'>
          <fds-vertical-stepper secondary id="stepper" currentStepIndex=${this.currentStepIndex}></fds-vertical-stepper>
        </div>
        <fds-divider vertical></fds-divider>
        `: ''}
        <div class='content'>
          <div class="pages">
            <slot name="page" @slotchange=${this.onPagesSlotChanged}></slot>
          </div>
          <div class="footer">
            <fds-divider></fds-divider>
            <div class="actions">
              <div class="next">
                ${this.back ? this.renderBackSlot() : ''}
                ${this.save ? this.renderSaveSlot() : html`
                <slot name="next" @click="${this._handleNextClick}"></slot>
                `}
              </div>
              <div class="cancel">
                <slot name="cancel" @click="${this._handleCancelClick}"></slot>
              </div>
            </div>
          </div>
        </div>
        ${this.stepperPositon === 'right' ?
        html`
        <fds-divider vertical></fds-divider>
        <div class='stepper-container ${this.stepperOnDark ? ' dark-theme' : '' }'>
          <fds-vertical-stepper secondary id="stepper" currentStepIndex=${this.currentStepIndex}></fds-vertical-stepper>
        </div>
        `: ''}
      </div>
    `;
  }

  renderSaveSlot(): TemplateResult {
    return html`<slot name="save" @click="${this._handleSaveClick}"></slot>`;
  }

  renderBackSlot(): TemplateResult {
    return html`<slot name="back" @click="${this._handleBackClick}"></slot>`;
  }

  onPagesSlotChanged() {
    (this._pages[this.currentStepIndex] as any).setAttribute('current', true);
    this._pages.forEach((page: any, index) => {
      this.checkAttributes(page, index);
      this.arrayPages.push({
        'label': page.getAttribute('title'),
        'description': page.getAttribute('description'),
        'disabled': this.disabled
      });
      this.disabled = null;
    });
    this.stepper['steps'] = this.arrayPages;
  }

  checkAttributes(page: HTMLElement, index: number) {
    if (page.getAttribute('disabled') !== null) {
      this.disabled = true;
    }
    if (page.hasAttribute('current') && (this._pages[this.currentStepIndex] !== page)) {
      this.updateCurrentPage(index);
      this.stepper['currentStepIndex'] = this.currentStepIndex;
      this.back = true;
      if (this.currentStepIndex === (this._pages.length - 1)) {
        this.save = true;
      }
    }
    this.requestUpdate();
  }

  checkNextStepDisabled(pages: Array<HTMLElement>, current: number) {
    if ((pages[current] as any).hasAttribute('disabled')) {
      this.stepper['currentStepIndex']++;
      this.currentStepIndex++;
      current++;
      this.checkNextStepDisabled(pages, current);
    } else {
      return;
    }
  }

  checkPreviousStepDisabled(pages: Array<HTMLElement>, current: number) {
    if ((pages[current] as any).hasAttribute('disabled')) {
      this.stepper['currentStepIndex']--;
      this.currentStepIndex--;
      current--;
      if(current === 0) {
        this.back=false;
      }
      this.checkPreviousStepDisabled(pages, current);
      this.requestUpdate();
    } else {
      return;
    }
  }

  goToNextStep(pages: Array<HTMLElement>) {
    this.currentStepIndex = this.stepper['currentStepIndex'];
    this.stepper['currentStepIndex']++;
    (pages[this.currentStepIndex] as any).removeAttribute("current");
    this.currentStepIndex++;
  }

  goToPreviousStep(pages: Array<HTMLElement>) {
    this.currentStepIndex = this.stepper['currentStepIndex'];
    this.stepper['currentStepIndex']--;
    (pages[this.currentStepIndex] as any).removeAttribute("current");
    this.currentStepIndex--;
  }

  goToStepIndex(index: number) {
    this.back = true;
    this.save = false;
    if ((index) === (this._pages.length - 1)) {
      this.save = true;
    }
    if (index === 0) {
      this.back = false;
      this.requestUpdate();
    }
    this.updateCurrentPage(index);
    this.requestUpdate();
  }

  updateCurrentPage(index: number) {
    (this._pages[this.currentStepIndex] as any).removeAttribute("current");
    this.currentStepIndex = index;
    (this._pages[this.currentStepIndex] as any).setAttribute('current', true);
  }

  _handleNextClick() {
    this.back = true;
    if (this.currentStepIndex !== (this._pages.length - 1)) {
      this.goToNextStep(this._pages);
      this.checkNextStepDisabled(this._pages, this.currentStepIndex);
      (this._pages[this.currentStepIndex] as any).setAttribute('current', true);
    }
    if (this.currentStepIndex + 1 === (this._pages.length)) {
      this.save = true;
    }
    this.requestUpdate();
  }

  _handleBackClick() {
    if (this.currentStepIndex !== 0) {
      if (this.currentStepIndex === 1) {
        this.back = false;
      }
      if (this.currentStepIndex === (this._pages.length - 1)) {
        this.save = false;
      }
      this.goToPreviousStep(this._pages);
      this.checkPreviousStepDisabled(this._pages, this.currentStepIndex);
      (this._pages[this.currentStepIndex] as any).setAttribute('current', true);
    }
    this.requestUpdate();
  }

  _handleCancelClick() {
    try {
      this.cancelAction();
    } catch (error) {
    }
  }

  _handleSaveClick() {
    try {
      this.saveAction();
    } catch (error) {
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-wizard': Wizard;
  }
}
