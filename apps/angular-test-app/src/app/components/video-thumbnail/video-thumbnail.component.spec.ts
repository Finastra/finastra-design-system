import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoThumbnailDemoComponent } from './video-thumbnail.component';
import { ToasterModule } from '@ffdc/uxg-angular-components/toaster';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('VideoThumbnailDemoComponent', () => {
  let component: VideoThumbnailDemoComponent;
  let fixture: ComponentFixture<VideoThumbnailDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ToasterModule,
        CommonModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule
      ],
      declarations: [VideoThumbnailDemoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoThumbnailDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create video thumbnail demo ', () => {
    expect(component).toBeTruthy();
  });
});
