const README = require('../README.md');
import '@finastra/filter-tree';
import type { FilterTree } from '@finastra/filter-tree';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-filter-tree.json';

const demoData = [
  {
    label: 'Consumer Banking',
    children: [
      {
        label: 'Alerts',
        isSelected: true
      },
      {
        label: 'Customer Management'
      }
    ]
  },
  {
    label: 'Money Movement'
  },
  {
    label: 'Financial Toolbox'
  }
];

export default {
  title: 'DATA DISPLAY/Filter Tree',
  component: 'fds-filter-tree',
  argTypes,
  args: {
    items: demoData
  },
  parameters: {
    actions: {
      handles: ['filter-tree-check']
    },
    docs: {
      description: { component: allSanitizers(README) }
    }
  },
  decorators: [
    (story) => html`${story()}
      <script>
        const demoData = [
          {
            label: 'Consumer Banking',
            children: [
              {
                label: 'Alerts',
                isSelected: true
              },
              {
                label: 'Customer Management'
              }
            ]
          },
          {
            label: 'Money Movement'
          },
          {
            label: 'Financial Toolbox'
          }
        ];
        const filter = document.getElementById('filter');
        filter.items = demoData;
      </script>`
  ],
  cssprops
} as Meta;

const Template: Story<FilterTree> = ({}) => {
  return html`<fds-filter-tree id="filter" .items=${demoData}></fds-filter-tree>`;
};

export const Default: Story<FilterTree> = Template.bind({});
