import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityMenuComponent } from './entity-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

describe('EntityMenuModule', () => {
  let component: EntityMenuComponent;
  let fixture: ComponentFixture<EntityMenuComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatButtonModule, MatIconModule, MatCardModule, MatMenuModule],
        declarations: [EntityMenuComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
