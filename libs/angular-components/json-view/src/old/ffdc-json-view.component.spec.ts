import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfdcJsonViewComponent } from './ffdc-json-view.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';

describe('Json view component', () => {
  let component: FfdcJsonViewComponent;
  let fixture: ComponentFixture<FfdcJsonViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgJsonEditorModule],
      declarations: [FfdcJsonViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfdcJsonViewComponent);
    component = fixture.componentInstance;
    component.data = {
      name: 'Identity provider',
      number: 1
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    const bannerElement = fixture.debugElement;
    expect(bannerElement).toBeTruthy();
  });
});
