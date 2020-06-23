import { Component } from '@angular/core';
import { NavigationNode } from '@ffdc/uxg-angular-components/global-nav';

@Component({
  selector: 'ffdc-global-nav-demo',
  templateUrl: './global-nav-demo.component.html',
  styleUrls: ['./global-nav-demo.component.scss'],
  host: {
    class: 'ffdc-global-nav-demo'
  }
})
export class GlobalNavDemoComponent {
  appName = 'Global Nav Demo';

  demoAppList: NavigationNode[] = [
    {
      path: 'global-nav',
      title: 'app1',
      tooltip: 'app1',
      icon: 'dashboard'
    },
    {
      path: 'app2.com',
      title: 'app2',
      tooltip: 'app2',
      icon: 'dashboard'
    },
    {
      path: 'app3.com',
      title: 'app3',
      tooltip: 'app3',
      icon: 'dashboard'
    },
    {
      path: 'app4.com',
      title: 'app4',
      tooltip: 'app4',
      icon: 'dashboard'
    }
  ];

  nodeChosen(node: any) {
    console.log(node);
    // this.router.navigate([node.path]);
  }

  brandAction(event: any) {
    console.log(event);
  }

  logout() {
    console.log('logout');
  }
}
