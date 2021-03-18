import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { StatusStepComponent } from './status-step/status-step.component';

@Component({
  selector: 'uxg-horizontal-status-stepper',
  templateUrl: './horizontal-status-stepper.component.html',
  styleUrls: ['./horizontal-status-stepper.component.scss'],
  host: { class: 'uxg-horizontal-status-stepper' }
})
export class HorizontalStatusStepperComponent implements AfterViewInit {
  @ContentChildren(StatusStepComponent) public steps?: QueryList<StatusStepComponent>;

  constructor(private cdr: ChangeDetectorRef) {}

  public ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  @Input() public currentStep: number = -1;

  public isComplete(stepNumber: number): boolean {
    return stepNumber < this.currentStep;
  }

  public isCurrent(stepNumber: number): boolean {
    return stepNumber === this.currentStep;
  }
}
