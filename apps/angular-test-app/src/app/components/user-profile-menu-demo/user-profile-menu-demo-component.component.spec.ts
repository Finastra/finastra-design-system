import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileMenuDemoComponentComponent } from './user-profile-menu-demo-component.component';

describe('UserProfileMenuDemoComponentComponent', () => {
  let component: UserProfileMenuDemoComponentComponent;
  let fixture: ComponentFixture<UserProfileMenuDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileMenuDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileMenuDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
