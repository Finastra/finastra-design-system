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
              "<span class='uxg-subtitle-2'>Changelog feature</span></br>The changelog tracks progress on features, updates and bugfixes for each new release of the Developer Portal. It's available in the <i>What's new</i> section of the user profile menu.",
            type: 'New'
          },
          {
            category: 'UX',
            description:
              "<span class='uxg-subtitle-2'>User settings persistence</span></br>Various user settings (such as theme preferences, feature preview toggles, etc.) are now saved and persisted on further logins.",
            type: 'New'
          },
          {
            category: 'Documentation',
            description: 'New section about Vendor Validation Process added to Platform Overview guide.',
            type: 'New'
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
              "<span class='uxg-subtitle-2'>Changelog feature</span></br>The changelog tracks progress on features, updates and bugfixes for each new release of the Developer Portal. It's available in the <i>What's new</i> section of the user profile menu.",
            type: 'New'
          },
          {
            category: 'UX',
            description:
              "<span class='uxg-subtitle-2'>User settings persistence</span></br>Various user settings (such as theme preferences, feature preview toggles, etc.) are now saved and persisted on further logins.",
            type: 'New'
          },
          {
            category: 'Documentation',
            description: 'New section about Vendor Validation Process added to Platform Overview guide.',
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
            description:
              "<span class='uxg-subtitle-2'>Documentation revamp</span></br>Documentation page was restructured into 4 new guides. They are available on the new Documentation landing page, making it easier to navigate directly to your point of interest.",
            type: 'Update'
          },
          {
            category: 'Documentation',
            description:
              "<div>New sample client tutorials added to Examples guide:</div><ul><li><a target='_blank' href='documentation/examples/sample-app-spi'>SPI Application Tutorial</a></li><li><a target='_blank' href='documentation/examples/sample-events'>Events Notification Application Tutorial</a></li></ul>",
            type: 'Update'
          }
        ]
      }
    ];
  }
}
