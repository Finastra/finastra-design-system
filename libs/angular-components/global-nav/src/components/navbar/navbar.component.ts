import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { NavigationNode } from '../../services/navigation.model';
import { Breadcrumb } from '@finastra/angular-components/breadcrumb';

@Component({
  selector: 'uxg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    class: 'uxg-navbar'
  }
})
export class NavbarComponent implements OnInit, OnDestroy, OnChanges {
  breadcrumbs: Breadcrumb[] = [];

  @Input() brandIcon: string | undefined;
  @Input() currentNode!: NavigationNode;
  @Input() navbarAction!: TemplateRef<any>;
  @Input() appName!: string;

  @Output() menuClick = new EventEmitter<void>();
  @Output() brandAction = new EventEmitter<any>();
  @Output() nodeChosen = new EventEmitter<NavigationNode>();

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentNode) {
      this.breadcrumbs = this.buildBreadCrumb(this.appName, this.currentNode);
    }
  }

  ngOnDestroy() {}

  onMenuClick() {
    this.menuClick.emit();
  }

  private buildBreadCrumb(appName: string, currentNode: NavigationNode) {
    const breadcrumbs = [];

    if (appName) {
      breadcrumbs.push({
        label: appName,
        url: '/',
        itemClass: 'uxg-h6'
      } as Breadcrumb);
    }

    // Once navigation model evolve to handle deeper levels, this would need to change
    if (currentNode) {
      breadcrumbs.push({
        label: currentNode.title,
        url: currentNode.path
      } as Breadcrumb);
    }

    return breadcrumbs;
  }
}
