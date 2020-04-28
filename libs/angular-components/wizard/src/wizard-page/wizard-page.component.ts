import { Component, ContentChild, EventEmitter, OnInit, Output, TemplateRef, Input } from '@angular/core';
import { ButtonHubService } from '../services/button-hub.service';
import { PageCollectionService } from '../services/page-collection.service';
import { WizardNavigationService } from '../services/wizard-navigation.service';
import { UxgWizardPageDescriptionComponent } from './wizard-page-description.directive';
import { UxgWizardPageTitleComponent } from './wizard-page-title.directive';

@Component({
  selector: 'uxg-wizard-page',
  template: '<ng-content *ngIf="current"></ng-content>',
  host: {
    '[id]': 'id',
    role: 'tabpanel',
    '[attr.aria-hidden]': '!current',
    '[class.active]': 'current',
    '[class.no-title]': '!showTitle',
    '[class.uxg-wizard-page]': 'true'
  }
})
export class UxgWizardPageComponent {
  @Output('uxgWizardPageOnLoad') load: EventEmitter<string> = new EventEmitter();

  @Output('uxgWizardPageNext') nextButtonClicked: EventEmitter<UxgWizardPageComponent> = new EventEmitter();

  @Output('uxgWizardPagePrevious') previousButtonClicked: EventEmitter<UxgWizardPageComponent> = new EventEmitter();

  @Output('uxgWizardPageDone') doneButtonClicked: EventEmitter<UxgWizardPageComponent> = new EventEmitter();

  public get id() {
    return `uxg-wizard-page-${this.pageCollection.getPageIndex(this)}`;
  }

  public get current(): boolean {
    return this.navService.currentPage === this;
  }

  constructor(
    private navService: WizardNavigationService,
    public pageCollection: PageCollectionService,
    public buttonService: ButtonHubService
  ) {}

  @ContentChild(UxgWizardPageTitleComponent, { static: true })
  public pageTitle!: UxgWizardPageTitleComponent;

  @ContentChild(UxgWizardPageDescriptionComponent, { static: true })
  public pageDescription!: UxgWizardPageDescriptionComponent;

  private _disabled = false;

  public get disabled(): boolean {
    return this._disabled;
  }

  @Input('uxgWizardPageDisabled')
  public set disabled(val: boolean) {
    if (val !== this._disabled) {
      this._disabled = val;
      this.pageDisabledChange.emit(val);
    }
  }

  @Output('uxgWizardPageDisabledChange') pageDisabledChange: EventEmitter<boolean> = new EventEmitter();

  private _nextStepDisabled = false;

  public get nextStepDisabled(): boolean {
    return this._nextStepDisabled;
  }

  @Input('uxgWizardPageNextDisabled')
  public set nextStepDisabled(val: boolean) {
    if (val !== this._nextStepDisabled) {
      this._nextStepDisabled = val;
      this.nextStepDisabledChange.emit(val);
    }
  }

  @Output('uxgWizardPageNextDisabledChange') nextStepDisabledChange: EventEmitter<boolean> = new EventEmitter();

  private _previousStepDisabled = false;

  public get previousStepDisabled(): boolean {
    return this._previousStepDisabled;
  }

  @Input('uxgWizardPagePreviousDisabled')
  public set previousStepDisabled(val: boolean) {
    if (val !== this._previousStepDisabled) {
      this._previousStepDisabled = val;
      this.previousStepDisabledChange.emit(val);
    }
  }

  @Output('uxgWizardPagePreviousDisabledChange')
  public previousStepDisabledChange: EventEmitter<boolean> = new EventEmitter();

  public get title(): TemplateRef<any> {
    return this.pageTitle.pageTitleTemplateRef;
  }

  public get description(): TemplateRef<any> {
    return this.pageDescription.pageDescriptionTemplateRef;
  }

  private _showTitle = true;

  public get showTitle(): boolean {
    return this._showTitle;
  }

  public set showTitle(val: boolean) {
    this._showTitle = val;
  }
}
