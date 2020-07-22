import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ffdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-components-test-app';

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.addCustomElement('uxg-ce-banner', [
      {
        name: 'App number',
        value: 935,
        tooltip: 'How many apps'
      },
      {
        name: 'Income',
        value: 9435,
        prefix: '€',
        tooltip: 'Income with prefix currency'
      },
      {
        name: 'Request Result',
        value: 'Pending',
        tooltip: 'Text banner example'
      }
    ]);
  }

  private addCustomElement(selector: string, data: any) {
    const selectorElm = this.document.createElement(selector);
    selectorElm.setAttribute('data', JSON.stringify(data));
    this.document.body.appendChild(selectorElm);
  }
}
