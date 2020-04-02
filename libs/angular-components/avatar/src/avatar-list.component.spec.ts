import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarListComponent } from './avatar-list.component';

describe('AvatarListComponent', () => {
  let component: AvatarListComponent;
  let fixture: ComponentFixture<AvatarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
