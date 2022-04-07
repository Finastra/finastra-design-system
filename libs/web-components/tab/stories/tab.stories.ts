const README = require('../README.md');
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@finastra/tab';
import '@finastra/tab-bar';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/Tab',
  component: 'fds-tab',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=251%3A5493'
    },
    cssprops
  },
} as Meta;

const Template: Story = ({ label, icon, segmented, stacked, classic}) => {
  return html`<fds-tab-bar>
  <fds-tab label=${label} icon=${icon} ?segmented=${segmented} ?classic=${classic} ?stacked=${stacked}></fds-tab>
</fds-tab-bar>`;
};

export const Default: Story = Template.bind({});
Default.args = {
  label: 'Active',
  icon: "location_on",
};
