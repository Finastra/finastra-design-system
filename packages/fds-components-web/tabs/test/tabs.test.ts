import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/index.js';
import { TabGroup } from '../src/index.js';

describe('TabGroup', () => {
  it('loads accessibly', async () => {
    const el: TabGroup = await fixture(html`
      <fds-tab-group id="tabGroup">
        <fds-tab-item label="Tab 1">
          <div>
            Esse adipisicing minim sit voluptate id. Voluptate incididunt elit irure ipsum deserunt. Adipisicing officia in labore amet
            occaecat amet laboris fugiat. Occaecat consectetur aliquip ad quis aute esse eiusmod veniam amet aliquip do ipsum. Officia dolor
            aute id pariatur elit adipisicing. In et duis do qui pariatur deserunt elit velit consequat magna. Duis dolor do proident nulla
            fugiat sint.
          </div>
        </fds-tab-item>
        <fds-tab-item label="Tab 2"
          >Consectetur eiusmod tempor duis nostrud sit officia. Do amet consequat duis culpa adipisicing culpa pariatur. Exercitation cillum
          deserunt ea in et eiusmod deserunt elit eiusmod laborum laborum velit sunt. Non aliqua sint est magna elit nisi aliquip culpa
          nostrud.</fds-tab-item
        >
      </fds-tab-group>
    `);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
});
