import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/filter-tree.js';
import { FilterTree } from '../src/filter-tree.js';

const testBasic = [
  {
    label: 'item 1'
  },
  {
    label: 'item 2'
  }
];

const testChildren = [
  {
    label: 'Consumer Banking',
    children: [
      {
        label: 'Alerts',
        isSelected: true
      },
      {
        label: 'Customer'
      }
    ]
  }
];

describe('FilterTree', () => {
  it('loads accessibility', async () => {
    const el: FilterTree = await fixture(html`<fds-filter-tree></fds-filter-tree>`);
    el.items = testBasic;

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('loads children', async () => {
    const el: FilterTree = await fixture(html`<fds-filter-tree></fds-filter-tree>`);
    el.items = testChildren;

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });

  it('updates children', async () => {
    const el: FilterTree = await fixture(html`<fds-filter-tree></fds-filter-tree>`);
    el.items = testChildren;

    await elementUpdated(el);
    const treeItems = el.shadowRoot!.querySelectorAll('fds-tree-item')!;
    const checkboxParent = treeItems[0].shadowRoot!.querySelector('fds-checkbox')!;
    const checkboxChild = treeItems[1].shadowRoot!.querySelector('fds-checkbox')!;
    checkboxParent.click();
    await elementUpdated(el);
    await expect(el).to.be.accessible();
    expect(checkboxChild.checked).to.be.true;
    checkboxParent.click();
    await elementUpdated(el);
    expect(checkboxChild.checked).to.be.false;
  });

  it('expands', async () => {
    const el: FilterTree = await fixture(html`<fds-filter-tree></fds-filter-tree>`);
    el.items = testChildren;

    await elementUpdated(el);
    const treeItem = el.shadowRoot!.querySelector('fds-tree-item')!;
    const expand = treeItem.shadowRoot!.querySelector('fds-icon-button')!;
    expand.click();
    await expect(el).to.be.accessible();
  });
});
