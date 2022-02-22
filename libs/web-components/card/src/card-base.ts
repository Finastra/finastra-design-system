import { BaseCard } from '@finastra/base-card';
import { html, TemplateResult } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export type AspectRatioType = '16-9' | 'square' | '';

/**
 * @slot primary-action - Slot to add actions in primary text at the bottom, it is the main tappable area of the card.
 * @slot button-action - Slot to add action buttons with text
 * @slot icon-action - Slot to add icon action buttons with no text
 * @slot media - Slot to a media area that displays a custom `background-image` with `background-size: cover`
 */
export class CardBase extends BaseCard {
  @query('[name="primary-action"]') protected _primaryActionSlot!: HTMLSlotElement;

  @query('[name="media"]') protected _mediaSlot!: HTMLSlotElement;

  @query('[name="icon-action"]') protected _iconSlot!: HTMLSlotElement;

  @query('[name="button-action"]') protected _buttonSlot!: HTMLSlotElement;

  /**
   * To have a single action button take up the entire width of the action row
   */
  @property({ type: Boolean }) fullBleed = false;

  /**
   * To have a single action button take up the entire width of the action row
   */
  @property({ type: Boolean }) mediaPrimaryAction = false;

  /**
   * Maintains the given aspect ratio on a media subelement by dynamically scaling its height relative to its width.
   */
  @property({ type: String }) mediaAspectRatio: AspectRatioType = '';

  protected buttonCount = 0;

  protected iconCount = 0;

  protected primaryActionCount = 0;

  protected mediaCount = 0;

  protected contentCount = 0;

  protected onButtonSlotChanged() {
    const buttons = this._buttonSlot.assignedNodes();
    this.buttonCount = buttons.length;
    if (this.buttonCount > 0) {
      buttons.forEach((button) => {
        const buttonElement = button as HTMLElement;
        buttonElement.classList.add('mdc-card__action');
        buttonElement.classList.add('mdc-card__action--button');
      });
    }
    this.requestUpdate();
  }

  protected onIconSlotChanged() {
    const icons = this._iconSlot.assignedNodes();
    this.iconCount = icons.length;
    if (this.iconCount > 0) {
      icons.forEach((icon) => {
        const iconElement = icon as HTMLElement;
        iconElement.classList.add('mdc-card__action');
        iconElement.classList.add('mdc-card__action--icon');
      });
    }
    this.requestUpdate();
  }

  protected onPrimaryActionSlotChanged() {
    this.primaryActionCount = this._primaryActionSlot.assignedNodes().length;
    this.requestUpdate();
  }

  protected onMediaSlotChanged() {
    this.mediaCount = this._mediaSlot.assignedNodes().length;
    this.requestUpdate();
  }

  protected onContentSlotChanged(event: Event) {
    this.contentCount = (event.target as HTMLSlotElement).assignedElements().length;
    this.requestUpdate();
  }

  protected renderCardContent(): TemplateResult {
    return html` ${this.renderPrimaryAction()} ${this.renderMedia()}
      <slot @slotchange=${this.onContentSlotChanged}></slot>
      ${this.renderActions()}`;
  }

  protected renderPrimaryAction() {
    const primaryActionSlotTemplate = html`<slot name="primary-action" @slotchange=${this.onPrimaryActionSlotChanged}></slot>`;
    const classes = {
      'mdc-card__primary-action-last-child':
        this.iconCount === 0 && this.buttonCount === 0 && this.mediaCount == 0 && this.contentCount == 0
    };
    if (this.primaryActionCount > 0) {
      return html`<div class="mdc-card__primary-action ${classMap(classes)}" tabindex="0">
        <mwc-ripple></mwc-ripple>
        ${primaryActionSlotTemplate}
      </div>`;
    }
    return primaryActionSlotTemplate;
  }

  protected renderMedia() {
    const mediaSlotTemplate = html`<slot name="media" @slotchange=${this.onMediaSlotChanged}></slot>`;
    // (zoofadoofa): we may want to support css property for aspectRatio
    // providing an aspect ratio mixin override of the mdc mixin
    const classes = {
      'mdc-card__media--16-9': this.mediaAspectRatio === '16-9',
      'mdc-card__media--square': this.mediaAspectRatio === 'square',
      'mdc-card__media-first-child': this.primaryActionCount === 0,
      'mdc-card__media-last-child': this.iconCount === 0 && this.buttonCount === 0 && this.contentCount === 0
    };
    const mediaTemplate = html`<div class="mdc-card__media ${classMap(classes)}">${mediaSlotTemplate}</div>`;
    if (this.mediaCount > 0) {
      if (this.mediaPrimaryAction) {
        return html`<div class="mdc-card__primary-action" tabindex="0">
          <mwc-ripple></mwc-ripple>
          ${mediaTemplate}
        </div>`;
      }
      return mediaTemplate;
    }
    return mediaSlotTemplate;
  }

  protected renderActions() {
    const buttonSlotTemplate = html`<slot name="button-action" @slotchange=${this.onButtonSlotChanged}></slot>`;
    const iconSlotTemplate = html`<slot name="icon-action" @slotchange=${this.onIconSlotChanged}></slot>`;

    if (this.iconCount > 0 || this.buttonCount > 0) {
      const classes = { 'mdc-card__actions--full-bleed': this.fullBleed };

      return html` <div class="mdc-card__actions ${classMap(classes)}">
        ${this.wrapButtonSlot(buttonSlotTemplate)} ${this.wrapIconSlot(iconSlotTemplate)}
      </div>`;
    }

    return html` ${buttonSlotTemplate} ${iconSlotTemplate} `;
  }

  protected wrapButtonSlot(buttonSlotTemplate: TemplateResult | string) {
    if (this.buttonCount > 0 && !this.fullBleed) {
      return html` <div class="mdc-card__action-buttons">${buttonSlotTemplate}</div>`;
    }
    return buttonSlotTemplate;
  }

  protected wrapIconSlot(iconSlotTemplate: TemplateResult | string) {
    if (this.iconCount > 0) {
      return html` <div class="mdc-card__action-icons">${iconSlotTemplate}</div>`;
    }
    return iconSlotTemplate;
  }
}
