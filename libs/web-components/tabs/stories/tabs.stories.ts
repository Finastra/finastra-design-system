const README = require('../README.md');
import '@finastra/tabs';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Components/Tabs',
  component: 'fds-tab-group',
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
  }
} as Meta;


const Template: Story = ({ selectedIndex, seperator, headerPosition, headerDisplayType }) => {
  return html`<fds-tab-group style="width: 700px; height: 300px" .selectedIndex=${selectedIndex} .seperator=${seperator} .headerPosition=${headerPosition} .headerDisplayType=${headerDisplayType}>
  <fds-tab-item label="Dashboard">
    Ipsum ut nulla do consequat voluptate laboris nulla. Ullamco laborum ut irure dolor consectetur ipsum consequat nisi occaecat ea. Ipsum esse deserunt adipisicing id in voluptate adipisicing eu ipsum velit aliquip aliqua veniam eiusmod. Nulla ea Lorem cillum culpa ut reprehenderit exercitation sint reprehenderit occaecat. Proident fugiat amet laborum non quis. In id voluptate commodo irure excepteur proident adipisicing cupidatat qui reprehenderit minim Lorem commodo anim.
  </fds-tab-item>
  <fds-tab-item label="Evolution">
    Do amet exercitation magna aliqua non aliquip consequat ipsum. Fugiat fugiat labore nulla officia cillum et minim excepteur. Aliquip eu do ex officia id pariatur id ea eu. Veniam consequat commodo velit fugiat exercitation laboris commodo adipisicing velit qui mollit magna veniam consequat.
  </fds-tab-item>
  <fds-tab-item label="Trend">
    Ex et laboris quis proident qui duis. Id aliqua enim cupidatat adipisicing cillum et amet eiusmod. Cupidatat excepteur exercitation consequat occaecat consequat aliqua.
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
  headerDisplayType: 'segmented:'
};

export const Classic: Story = Template.bind({});
Classic.args = {
  selectedIndex: 0,
  headerDisplayType: 'classic'
};

export const Seperated: Story = Template.bind({});
Seperated.args = {
  selectedIndex: 0,
  seperator: true
};

export const Center: Story = Template.bind({});
Center.args = {
  selectedIndex: 0,
  headerPosition: 'center'
};
