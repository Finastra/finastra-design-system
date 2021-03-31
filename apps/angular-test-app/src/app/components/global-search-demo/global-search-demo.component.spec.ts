import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSearchDemoComponent } from './global-search-demo.component';
import { GlobalSearchModule } from '@finastra/angular-components/global-search';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

describe('GlobalSearchDemoComponent', () => {
  let component: GlobalSearchDemoComponent;
  let fixture: ComponentFixture<GlobalSearchDemoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatIconModule, MatSnackBarModule, GlobalSearchModule, MatCardModule],
        declarations: [GlobalSearchDemoComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSearchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
