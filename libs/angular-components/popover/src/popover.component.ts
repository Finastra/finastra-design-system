import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatMenuTrigger, MenuPositionX, MenuPositionY } from '@angular/material/menu';

@Component({
  selector: 'uxg-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {
  @Input() xPosition: MenuPositionX = 'after';
  @Input() yPosition: MenuPositionY = 'below';
  @Input() popoverContent!: TemplateRef<any>;
  @Input() popoverClass!: string;

  get isOpen(): boolean {
    return this.matMenuTrigger.menuOpen;
  }

  @ViewChild(MatMenuTrigger, { static: true }) private matMenuTrigger!: MatMenuTrigger;

  open() {
    this.matMenuTrigger.openMenu();
  }

  close() {
    this.matMenuTrigger.closeMenu();
  }
}
