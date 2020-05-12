import { Component, OnInit, OnDestroy, Output, EventEmitter, Input, TemplateRef } from '@angular/core';
import { NavigationNode, CurrentNode } from '../../services/navigation.model';

@Component({
  selector: 'uxg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    class: 'uxg-navbar'
  }
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() brandIcon: string | undefined;
  @Input() currentNode: CurrentNode | undefined;
  @Input() navbarAction!: TemplateRef<any>;

  @Output() menuClick = new EventEmitter<void>();
  @Output() brandAction = new EventEmitter<any>();
  @Output() nodeChosen = new EventEmitter<NavigationNode>();

  ngOnInit() {}
  ngOnDestroy() {}

  onMenuClick() {
    this.menuClick.emit();
  }
}
