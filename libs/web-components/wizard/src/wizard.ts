import '@finastra/button';
import '@finastra/divider';
import '@finastra/stepper';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';
import { styles } from './styles.css';

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

  @property({ type: String })
  title = 'Button';

  @property({ type: Number })
  currentStepIndex = -1;

  @property({ type: Boolean })
  reverseStepper = false;

  protected pages = 0;
  protected save = false;
  protected back= false;
  protected disabled: Boolean | null = null;
  protected currentIndex = 0;
  protected maxSteps = 0;
  protected arrayPages: any[] = [];

  constructor() {
    super();
  }


  render() {
    return html`
      <div class="wizard">
        ${this.reverseStepper ?
              html`<div class='stepper'>
            <fds-vertical-stepper id="stepper" currentStepIndex="0"></fds-vertical-stepper>
        </div>`: ''}
        <div class='content'>
            <div class="pages">
            <slot name="page" @slotchange=${this.onPagesSlotChanged}></slot>
            </div>
            <div class="footer">
            <fds-divider></fds-divider>
            <div class="actions">
            <div class="next">
              ${this.back ? this.renderBackSlot() : ''}
              ${this.save ? this.renderSaveSlot() : html` <slot name="next" @click="${this._handleNextClick}"></slot>`}
              </div>
              <div class="cancel">
            <slot name="cancel" @click="${this._handleCancelClick}"></slot>
            </div>
            </div>
            </div>
        </div>
        ${!this.reverseStepper ?
              html`<div class='stepper'>
            <fds-vertical-stepper id="stepper" currentStepIndex="0"></fds-vertical-stepper>
        </div>`: ''}
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
    (this._pages[0] as any).setAttribute('current', true);
    this._pages.forEach((page: any, index) => {
      if (page.getAttribute('disabled') != null) {
        this.disabled = true;
      }
      else if(page.hasAttribute('current')) {
        this.currentIndex = index;
        this.stepper['currentStepIndex'] = this.currentIndex;
        (this._pages[0] as any).removeAttribute("current");
        page.setAttribute('current', true);
        this.back=true;
        this.requestUpdate();
      }
      this.arrayPages.push({
        'label': page.getAttribute('title'),
        'description': page.getAttribute('description'),
        'disabled': this.disabled
      });
      this.disabled = null;
    });
    this.stepper['steps'] = this.arrayPages;
  }

  deselect(index, pages) {
    console.log(pages[index]);
  }

  _handleNextClick() {
    this.back=true;
    this.requestUpdate();
    if (this.currentIndex !== (this._pages.length - 1)) {
      this.nextStep(this._pages);
      this.checkNextStepDisabled(this._pages, this.currentIndex);
      (this._pages[this.currentIndex] as any).setAttribute('current', true);
    }
    if (this.currentIndex + 1 == (this._pages.length)) {
      this.save = true;
      this.requestUpdate();
    }
  }

  _handleBackClick() {
    if (this.currentIndex != 0) {
      if (this.currentIndex == 1) {
        this.back=false;
        this.requestUpdate();
      }
      if (this.currentIndex == (this._pages.length - 1)) {
        this.save = false;
        this.requestUpdate();
      }
      this.previousStep(this._pages);
      this.checkPreviousStepDisabled(this._pages, this.currentIndex);
      (this._pages[this.currentIndex] as any).setAttribute('current', true);
    }
  }

  checkNextStepDisabled(pages, current) {
    if ((pages[current] as any).hasAttribute('disabled')) {
      this.stepper['currentStepIndex']++;
      this.currentIndex++;
      current++;
      this.checkNextStepDisabled(pages, current);
    } else {
      return;
    }
  }

  checkPreviousStepDisabled(pages, current) {
    if ((pages[current] as any).hasAttribute('disabled')) {
      this.stepper['currentStepIndex']--;
      this.currentIndex--;
      current--;
      this.checkPreviousStepDisabled(pages, current);
    } else {
      return;
    }
  }

  nextStep(pages) {
    this.currentIndex = this.stepper['currentStepIndex'];
    this.stepper['currentStepIndex']++;
    (pages[this.currentIndex] as any).removeAttribute("current");
    this.currentIndex++;
  }

  previousStep(pages) {
    this.currentIndex = this.stepper['currentStepIndex'];
    this.stepper['currentStepIndex']--;
    (pages[this.currentIndex] as any).removeAttribute("current");
    this.currentIndex--;
  }

  _handleCancelClick() {
    console.log("cancel");
  }

  _handleSaveClick() {
    console.log("save");
  }
}



declare global {
  interface HTMLElementTagNameMap {
    'fds-wizard': Wizard;
  }
}
