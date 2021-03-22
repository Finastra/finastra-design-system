import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HorizontalStatusStepperComponent } from './horizontal-status-stepper.component';
import { StatusStepComponent } from './status-step/status-step.component';

@NgModule({
  exports: [HorizontalStatusStepperComponent, StatusStepComponent],
  imports: [CommonModule, MatIconModule],
  declarations: [HorizontalStatusStepperComponent, StatusStepComponent]
})
export class StatusStepperModule {}
