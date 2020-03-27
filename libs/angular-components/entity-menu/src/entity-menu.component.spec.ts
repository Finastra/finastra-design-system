import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityMenuComponent } from './entity-menu.component';

describe('EntityMenuModule', () => {
  let component: EntityMenuComponent;
  let fixture: ComponentFixture<EntityMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntityMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
