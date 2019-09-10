import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatMenuTrigger, MenuPositionX, MenuPositionY } from '@angular/material';

@Component({
  selector: 'uxg-popover',
  templateUrl: './popover.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverComponent {
  @Input() xPosition: MenuPositionX = 'after';
  @Input() yPosition: MenuPositionY = 'below';
  @Input() popoverContent: TemplateRef<any>;
  @Input() popoverClass: string;

  @ViewChild(MatMenuTrigger, { static: true }) private matMenuTrigger: MatMenuTrigger;

  open() {
    this.matMenuTrigger.openMenu();
  }

  close() {
    this.matMenuTrigger.closeMenu();
  }
}
