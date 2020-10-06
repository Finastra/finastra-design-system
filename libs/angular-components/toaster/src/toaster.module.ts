import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToasterContainerComponent } from './toaster-container.component';
import { ToasterComponent } from './toaster.component';
import { TOASTER_CONFIG } from './toaster.config';
import { ToasterContainerOverlayService, ToasterContainerRegistry, ToasterService } from './toaster.service';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule, FlexLayoutModule],
  declarations: [ToasterContainerComponent, ToasterComponent],
  providers: [
    ToasterService,
    ToasterContainerOverlayService,
    ToasterContainerRegistry,
    { provide: TOASTER_CONFIG, useValue: {} }
  ],
  exports: [ToasterComponent]
})
export class ToasterModule {}
