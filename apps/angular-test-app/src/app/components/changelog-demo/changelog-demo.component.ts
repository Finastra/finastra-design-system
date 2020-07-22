import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChangeLog } from '@ffdc/uxg-angular-components/changelog';

@Component({
  selector: 'ffdc-changelog-demo',
  templateUrl: './changelog-demo.component.html',
  styleUrls: ['./changelog-demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChangelogDemoComponent implements OnInit {
  changelog!: ChangeLog;

  constructor() {}

  ngOnInit() {
    this.changelog = [
      {
        version: '2.0.0',
        date: '2020-07-10',
        categories: ['UX', 'Documentation'],
        changes: [
          {
            category: 'UX',
            description:
              '<span>Lorem ipit amet, consectetur adipiscing elisum dolor sit ait amet, consectetur adipiscing elimet, consectetur adipiscing elit. </span>',
            type: 'New'
          },
          {
            category: 'UX',
            description:
              '<span>Lorem iit amet, consectetur adipiscing elipsum dolor sit amet, consectetur adipiscing elit. </span>',
            type: 'Bugfix'
          },
          {
            category: 'Documentation',
            description:
              '<span>Lorem ipsum dolor sit amet, consecit amet, consectetur adipiscing elitetur adipiscing elit. </span>',
            type: 'Deprecated'
          }
        ]
      },
      {
        version: '2.0.0',
        date: '2020-07-10',
        categories: ['UX', 'Documentation'],
        changes: [
          {
            category: 'UX',
            description:
              '<span>Lorem ipsum dolor sit amet, consectetur adipiscing eliit amet, consectetur adipiscing elit. </span>',
            type: 'Update'
          },
          {
            category: 'Documentation',
            description:
              '<span>it amet, consectetur adipiscing eliit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing elit. </span>',
            type: 'New'
          }
        ]
      },
      {
        version: '1.9.0',
        date: '2020-06-12',
        categories: ['Documentation'],
        changes: [
          {
            category: 'Documentation',
            description: '<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>',
            type: 'Update'
          },
          {
            category: 'Documentation',
            description:
              '<span>Lorem ipsum dolor sit ametit amet, consectetur adipiscing eliit amet, consectetur adipiscing eli, consectetur adipiscing elit. </span>',
            type: 'Bugfix'
          }
        ]
      }
    ];
  }
}
