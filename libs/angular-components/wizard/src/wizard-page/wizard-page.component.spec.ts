import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { UxgWizardPage } from './wizard-page.component';
import { ButtonHubService } from '../services/button-hub.service';
import { PageCollectionService } from '../services/page-collection.service';
import { WizardNavigationService } from '../services/wizard-navigation.service';

describe('UxgWizardPage', () => {
  let component: UxgWizardPage;
  let fixture: ComponentFixture<UxgWizardPage>;

  const mockPageCollection = {
    getPageIndex: jest.fn()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UxgWizardPage],
      providers: [
        ButtonHubService,
        { provide: PageCollectionService, useValue: mockPageCollection },
        WizardNavigationService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxgWizardPage);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
