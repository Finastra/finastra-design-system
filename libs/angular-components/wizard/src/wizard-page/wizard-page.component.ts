import { Component, ContentChild, EventEmitter, OnInit, Output, TemplateRef, Input } from '@angular/core';
import { ButtonHubService } from '../services/button-hub.service';
import { PageCollectionService } from '../services/page-collection.service';
import { WizardNavigationService } from '../services/wizard-navigation.service';
import { UxgWizardPageDescription } from './wizard-page-description.directive';
import { UxgWizardPageTitle } from './wizard-page-title.directive';

@Component({
  selector: 'uxg-wizard-page',
  template: '<ng-content *ngIf="current"></ng-content>',
  styleUrls: ['./wizard-page.component.scss'],
  host: {
    '[id]': 'id',
    role: 'tabpanel',
    '[attr.aria-hidden]': '!current',
    '[class.active]': 'current',
    '[class.uxg-wizard-page]': 'true'
  }
})
export class UxgWizardPage implements OnInit {
  @Output('uxgWizardPageOnLoad') onLoad: EventEmitter<string> = new EventEmitter();

  @Output('uxgWizardPageNext') nextButtonClicked: EventEmitter<UxgWizardPage> = new EventEmitter();

  @Output('uxgWizardPagePrevious') previousButtonClicked: EventEmitter<UxgWizardPage> = new EventEmitter();

  @Output('uxgWizardPageDone') doneButtonClicked: EventEmitter<UxgWizardPage> = new EventEmitter();

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

  @ContentChild(UxgWizardPageTitle, { static: true })
  public pageTitle: UxgWizardPageTitle;

  @ContentChild(UxgWizardPageDescription, { static: true })
  public pageDescription: UxgWizardPageDescription;

  private _disabled: boolean = false;

  public get disabled(): boolean {
    return this._disabled;
  }

  @Input('uxgWizardPageDisabled')
  public set pageDisabled(val: boolean) {
    const valBool = !!val;
    if (valBool !== this._disabled) {
      this._disabled = valBool;
      this.pageDisabledChange.emit(valBool);
    }
  }

  @Output('uxgWizardPageDisabledChange') pageDisabledChange: EventEmitter<boolean> = new EventEmitter();

  private _nextStepDisabled: boolean = false;

  public get nextStepDisabled(): boolean {
    return this._nextStepDisabled;
  }

  @Input('uxgWizardPageNextDisabled')
  public set nextStepDisabled(val: boolean) {
    const valBool = !!val;
    if (valBool !== this._nextStepDisabled) {
      this._nextStepDisabled = valBool;
      this.nextStepDisabledChange.emit(valBool);
    }
  }

  @Output('uxgWizardPageNextDisabledChange') nextStepDisabledChange: EventEmitter<boolean> = new EventEmitter();

  private _previousStepDisabled: boolean = false;

  public get previousStepDisabled(): boolean {
    return this._previousStepDisabled;
  }

  @Input('uxgWizardPagePreviousDisabled')
  public set previousStepDisabled(val: boolean) {
    const valBool = !!val;
    if (valBool !== this._previousStepDisabled) {
      this._previousStepDisabled = valBool;
      this.previousStepDisabledChange.emit(valBool);
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

  ngOnInit() {}
}
