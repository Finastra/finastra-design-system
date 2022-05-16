import '@finastra/button';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styles } from './styles.css';

@customElement('fds-wizard')
export class Wizard extends LitElement {
  static styles = styles;

  @query('[name="page"]') protected _pages!: HTMLSlotElement;
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
  selected = false;

  protected pages = 0;
  protected save = false;
  protected disabled: Boolean | null = null;
  protected currentIndex = 0;
  protected maxSteps = 0;
  protected arrayPages: any[] = [];

  constructor() {
    super();
    //this.init();
  }


  render() {
    return html`
    <div class="row">
      <div>
        <h2>${this.title}</h2>
      </div>
      <div class="wizard">
        <div class='col'>
          <div class="actions">
            <slot name="page" @slotchange=${this.onPagesSlotChanged}></slot>
            ${this.save ? this.renderSaveSlot() : html` <slot name="next" @click="${this._handleNextClick}"></slot>`}
            <slot name="cancel" @click="${this._handleCancelClick}"></slot>
            <slot name="back" @click="${this._handleBackClick}"></slot>
          </div>
        </div>
        <div class='col'>
          <div class="card">
            <fds-vertical-stepper id="stepper" currentStepIndex="0"></fds-vertical-stepper>
          </div>
        </div>
      </div>
    </div>
    `;
  }


  renderSaveSlot(): TemplateResult {
    return html`<slot name="save" @click="${this._handleSaveClick}"></slot>`;
  }
  onPagesSlotChanged() {
    const pages = this._pages.assignedNodes();
    (pages[0] as any).setAttribute('selected', true);
    pages.forEach((page: any, index) => {
      if (page.getAttribute('disabled') != null) {
        this.disabled = true;
      }
      else if (page.hasAttribute('current')) {
        this.currentIndex = index;
        this.stepper['currentStepIndex'] = this.currentIndex;
        page.setAttribute('selected', true);
        (pages[0] as any).removeAttribute("selected");
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
    const pages = this._pages.assignedNodes();
    if (this.currentIndex !== (pages.length - 1)) {
      this.nextStep(pages);
      this.checkNextStepDisabled(pages, this.currentIndex);
      (pages[this.currentIndex] as any).setAttribute('selected', true);
    }
    if (this.currentIndex + 1 == (pages.length)) {
      this.save = true;
      this.requestUpdate();
    }
  }

  _handleBackClick() {
    console.log(this.currentIndex);
    if (this.currentIndex != 0) {
      const pages = this._pages.assignedNodes();
      if (this.currentIndex == (pages.length - 1)) {
        this.save = false;
        this.requestUpdate();
      }
      this.previousStep(pages);
      this.checkPreviousStepDisabled(pages,this.currentIndex);
      (pages[this.currentIndex] as any).setAttribute('selected', true);
    }
  }

  checkNextStepDisabled(pages, current) {
    if ((pages[current] as any).hasAttribute('disabled')) {
      this.stepper['currentStepIndex']++;
      this.currentIndex++;
      current++;
      this.checkNextStepDisabled(pages, current);
    } else {
      console.log("not disabled");
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
    (pages[this.currentIndex] as any).removeAttribute("selected");
    this.currentIndex++;
  }

  previousStep(pages) {
    this.currentIndex = this.stepper['currentStepIndex'];
    this.stepper['currentStepIndex']--;
    (pages[this.currentIndex] as any).removeAttribute("selected");
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
