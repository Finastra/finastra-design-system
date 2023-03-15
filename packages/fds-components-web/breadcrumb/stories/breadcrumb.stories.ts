const README = require('../README.md');
import '@finastra/breadcrumb';
import type { Breadcrumb } from '@finastra/breadcrumb';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-breadcrumb.json';

export default {
  title: 'NAVIGATION/Breadcrumb',
  component: 'fds-breadcrumb',
  argTypes,
  args: {
    items: [
      {
        label: 'Home',
        link: '#'
      },
      {
        label: 'Link 2',
        link: '#link-2'
      },
      {
        label: 'Link 3',
        link: '#link-2/link-3'
      }
    ]
  },
  parameters: {
    actions: {
      handles: ['selected']
    },
    docs: {
      description: { component: allSanitizers(README) }
    },
    cssprops
  }
} as Meta;

const Template: Story<Breadcrumb> = ({ items }) => {
  return html`<fds-breadcrumb .items=${items}></fds-breadcrumb>`;
};

export const Default: Story<Breadcrumb> = Template.bind({});

const WithStyle: Story<Breadcrumb> = Template.bind({});
WithStyle.decorators = [
  (story) => html`${story()}<style>
      fds-breadcrumb {
        background: #12022a;
        --fds-breadcrumb-divider: '>';
        --fds-breadcrumb-divider-color: #ccc;
        padding: 16px;
      }

      fds-breadcrumb::part(a) {
        color: #9083bd;
        text-decoration: none;
        font-weight: bold;
      }

      fds-breadcrumb::part(span) {
        color: #9d4192;
        font-weight: bold;
      }
    </style>`
];
WithStyle.args = {
  items: [
    {
      label: 'Home',
      link: '#'
    },
    {
      label: 'DATASETS',
      link: '/datasets'
    },
    {
      label: 'Customer Data',
      link: '/datasets/customer-data'
    }
  ]
};
