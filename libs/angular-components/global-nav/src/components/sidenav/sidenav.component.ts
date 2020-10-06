import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  Inject,
  forwardRef,
  ChangeDetectorRef,
  SimpleChanges
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationNode } from '../../services/navigation.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'uxg-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnChanges {
  @Input() appName!: string;
  @Input() navigationNodes!: NavigationNode[];
  @Input() activeRoute!: string;

  @Output() logout = new EventEmitter<void>();
  @Output() nodeChosen = new EventEmitter<NavigationNode>();

  currentNodes!: NavigationNode[];

  iconName!: string;

  constructor(@Inject(forwardRef(() => MatSidenav)) private _host: MatSidenav, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.iconName = this.getIconName(this.appName);
    this._host.openedChange.subscribe(() => {
      this.currentNodes = this.navigationNodes;
      this.cd.markForCheck();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.navigationNodes) {
      this.currentNodes = changes.navigationNodes.currentValue;
    }
  }

  private getIconName(name: string) {
    if (!name) return name;
    const words = name.replace('-', ' ').split(' ');
    if (words && words.length === 1) return name;
    return !words
      ? ''
      : words
          .map((word) => word.substring(0, 1))
          .join('')
          .substring(0, 3);
  }

  onClick(node: NavigationNode) {
    this.nodeChosen.emit(node);
    this._host.close();
  }

  isActive(path: string) {
    if (this.activeRoute) return this.activeRoute.includes(path);
  }
}
