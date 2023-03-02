import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/index.js';
import { ExpansionPanel, ExpansionPanelItem } from '../src/index.js';

describe('ExpansionPanel', () => {
  let el: ExpansionPanel;

  beforeEach(async () => {
    el = await fixture(html` <fds-expansion-panel>
      <fds-expansion-panel-item expanded>
        <div slot="title">Setting</div>
        <div slot="description">Global setting</div>
        <div class="content">content</div>
      </fds-expansion-panel-item>
      <fds-expansion-panel-item>
        <div slot="title">Security</div>
        <div slot="description">Security parametre</div>
        <div class="content">content</div>
      </fds-expansion-panel-item>
      <fds-expansion-panel-item disabled>
        <div slot="title">Private</div>
        <div slot="description">Security parametre</div>
        <div class="content">content</div>
      </fds-expansion-panel-item>
      <fds-expansion-panel-item>
        <div slot="title">Hobbies</div>
        <div slot="description">Hobbies parametre</div>
        <div class="content">content</div>
      </fds-expansion-panel-item>
    </fds-expansion-panel>`);

    await elementUpdated(el);
  });

  it('loads accessibly', async () => {
    await expect(el).to.be.accessible();
  });

  it('should toggle expansion other items', async () => {
    const nodes = el.getExpansionItems();
    (nodes[1] as ExpansionPanelItem).shadowRoot?.querySelector('.expansion-panel-item-header')?.dispatchEvent(new MouseEvent('click'));
    expect((nodes[1] as ExpansionPanelItem).expanded).to.equal(true);
  });
});
