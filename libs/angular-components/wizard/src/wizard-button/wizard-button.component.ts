import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { WizardNavigationService } from '../services/wizard-navigation.service';
import { ButtonHubService } from '../services/button-hub.service';

export const DEFAULT_BUTTON_TYPES: any = {
  cancel: 'cancel',
  previous: 'previous',
  next: 'next',
  done: 'done',
  custom: 'custom'
};

@Component({
  selector: 'uxg-wizard-button',
  templateUrl: './wizard-button.component.html',
  host: {
    '[class.uxg-wizard-button]': 'true',
    '[class.auto-margin]': 'isCancel || isCustom',
    '[attr.aria-hidden]': 'isHidden'
  }
})
export class UxgWizardButton implements OnInit {
  @Input('type') public type: string = '';

  @Input('uxgWizardButtonDisabled') public disabled: boolean = false;

  @Input('uxgWizardButtonHidden') public hidden: boolean = false;

  @Input('uxgWizardButtonAlwaysShow') alwaysShow: boolean = false;

  @Output('uxgWizardButtonClicked') wasClicked = new EventEmitter<string>(false);

  constructor(public navService: WizardNavigationService, public buttonService: ButtonHubService) {}

  private checkDefaultType(value: string = '', type: string) {
    if (DEFAULT_BUTTON_TYPES[type] === value) {
      return true;
    }
    return false;
  }

  public get isNext(): boolean {
    return this.checkDefaultType(this.type, 'next');
  }

  public get isPrevious(): boolean {
    return this.checkDefaultType(this.type, 'previous');
  }

  public get isDone(): boolean {
    return this.checkDefaultType(this.type, 'done');
  }

  public get isCancel(): boolean {
    return this.checkDefaultType(this.type, 'cancel');
  }

  public get isCustom(): boolean {
    return this.checkDefaultType(this.type, 'custom');
  }

  public get isDisabled(): boolean {
    const disabled = true;
    const nav = this.navService;
    const page = this.navService.currentPage;

    if (!this.buttonService.buttonsReady) {
      return !disabled;
    }

    if (this.disabled || !page) {
      return true;
    }

    if (this.isCancel) {
      return !disabled;
    }

    if (this.isPrevious && (nav.currentPageIsFirst || page.previousStepDisabled)) {
      return disabled;
    }

    if (this.isNext && (nav.currentPageIsLast || page.nextStepDisabled)) {
      return disabled;
    }

    return !disabled;
  }

  public get isHidden(): boolean {
    const hidden = true;
    const nav = this.navService;

    if (!this.buttonService.buttonsReady) {
      return !hidden;
    }

    if (this.hidden) {
      return true;
    }

    if (this.isCancel) {
      return !hidden;
    }

    if (this.isPrevious && nav.currentPageIsFirst) {
      return hidden;
    }

    if (this.isNext && nav.currentPageIsLast) {
      return hidden;
    }

    if (this.isDone && !nav.currentPageIsLast && !this.alwaysShow) {
      return hidden;
    }

    return !hidden;
  }

  public get _disabledAttribute(): string | null {
    if (this.isDisabled) {
      return '';
    }
    return null;
  }

  click() {
    if (this.isDisabled) {
      return;
    }

    this.wasClicked.emit(this.type);
    this.buttonService.buttonClicked(this.type);
  }

  ngOnInit() {}
}
