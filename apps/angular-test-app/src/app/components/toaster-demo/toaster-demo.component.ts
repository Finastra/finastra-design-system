import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ToasterConfig, ToasterService, ToastType } from '@finastra/angular-components/toaster';

@Component({
  selector: 'ffdc-toaster-demo',
  templateUrl: './toaster-demo.component.html',
  styleUrls: ['./toaster-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ToasterDemoComponent {
  toasterMessage = 'Some message';
  toasterType = ToastType.INFO;
  toasterDuration = 5000;
  toasterDestroyByClick = true;
  toasterTypes = ToastType;

  constructor(private toasterService: ToasterService) {}

  displayToaster() {
    const config: Partial<ToasterConfig> = {
      duration: this.toasterDuration,
      type: this.toasterType,
      destroyByClick: this.toasterDestroyByClick
    };
    this.toasterService.show(this.toasterMessage, config);
  }
}
