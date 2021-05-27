import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { StatusStepComponent } from './status-step/status-step.component';

@Component({
  selector: 'uxg-horizontal-status-stepper',
  templateUrl: './horizontal-status-stepper.component.html',
  styleUrls: ['./horizontal-status-stepper.component.scss'],
  host: { class: 'uxg-horizontal-status-stepper' }
})
export class HorizontalStatusStepperComponent implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}
  @ContentChildren(StatusStepComponent) public steps?: QueryList<StatusStepComponent>;

  @Input() public currentStep = -1;

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  isComplete(stepNumber: number): boolean {
    return stepNumber < this.currentStep;
  }

  isCurrent(stepNumber: number): boolean {
    return stepNumber === this.currentStep;
  }
}
