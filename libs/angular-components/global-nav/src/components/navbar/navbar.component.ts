import { Component, OnInit, OnDestroy, Output, EventEmitter, Input, TemplateRef, OnChanges } from '@angular/core';
import { NavigationNode } from '../../services/navigation.model';

@Component({
  selector: 'uxg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    class: 'uxg-navbar'
  }
})
export class NavbarComponent implements OnInit, OnDestroy, OnChanges {
  @Input() brandIcon: string | undefined;
  @Input() currentNode!: NavigationNode;
  @Input() navbarAction!: TemplateRef<any>;
  @Input() appName!: string;

  @Output() menuClick = new EventEmitter<void>();
  @Output() brandAction = new EventEmitter<any>();
  @Output() nodeChosen = new EventEmitter<NavigationNode>();

  ngOnInit() {}

  ngOnChanges() {}

  ngOnDestroy() {}

  onMenuClick() {
    this.menuClick.emit();
  }
}
