import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { UxgWizardPageComponent } from './wizard-page.component';
import { ButtonHubService } from '../services/button-hub.service';
import { PageCollectionService } from '../services/page-collection.service';
import { WizardNavigationService } from '../services/wizard-navigation.service';

describe('UxgWizardPageComponent', () => {
  let component: UxgWizardPageComponent;
  let fixture: ComponentFixture<UxgWizardPageComponent>;

  const mockPageCollection = {
    getPageIndex: jest.fn(),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UxgWizardPageComponent],
      providers: [
        ButtonHubService,
        { provide: PageCollectionService, useValue: mockPageCollection },
        WizardNavigationService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxgWizardPageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
