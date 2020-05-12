import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UxgUserProfileMenuComponent, UxgUserProfileMenuModule } from '@ffdc/uxg-angular-components/user-profile-menu';

describe('UxgUserProfileMenuComponent', () => {
  let component: UxgUserProfileMenuComponent;
  let fixture: ComponentFixture<UxgUserProfileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UxgUserProfileMenuModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxgUserProfileMenuComponent);
    component = fixture.componentInstance;

    component.user = {
      email: 'secret@uxg.ro',
      gravatarEmail: 'gravatar@uxg.ro',
      username: 'Agent 47'
    };

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
