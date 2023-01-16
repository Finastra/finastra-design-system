const README = require('../README.md');
import '@finastra/tabs';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-tab-group.json';

export default {
  title: 'Navigation/Tabs',
  component: 'fds-tab-group',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=251%3A5493'
    },
    cssprops
  },
  decorators: [
    (story) => html`${story()}<style>
        fds-tab-group {
          width: 700px;
          height: 300px;
        }
        .content {
          padding-top: 24px;
        }
      </style>`
  ]
} as Meta;

const Template: Story = ({ selectedIndex, separator, headerPosition, headerDisplayType }) => {
  return html`<fds-tab-group
    selectedIndex=${selectedIndex}
    ?separator=${separator}
    headerPosition=${headerPosition}
    headerDisplayType=${headerDisplayType}
  >
    <fds-tab-item label="Dashboard">
      <div class="content">Content for the <b>Dashboard</b> tab</div>
    </fds-tab-item>
    <fds-tab-item label="Evolution">
      <div class="content">Content for the <b>Evolution</b> tab</div>
    </fds-tab-item>
    <fds-tab-item label="Trend">
      <div class="content">Content for the <b>Trend</b> tab</div>
    </fds-tab-item>
  </fds-tab-group>`;
};

export const Default: Story = Template.bind({});
Default.args = {
  selectedIndex: 1
};

export const Segmented: Story = Template.bind({});
Segmented.args = {
  selectedIndex: 0,
  headerDisplayType: 'segmented'
};

export const Classic: Story = Template.bind({});
Classic.args = {
  selectedIndex: 0,
  headerDisplayType: 'classic'
};

export const Separated: Story = Template.bind({});
Separated.args = {
  selectedIndex: 0,
  separator: true
};

export const Center: Story = Template.bind({});
Center.args = {
  selectedIndex: 0,
  headerPosition: 'center'
};

export const End: Story = Template.bind({});
End.args = {
  selectedIndex: 0,
  headerPosition: 'end'
};
