const README = require('../README.md');
import '@finastra/tabs';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';

export default {
  title: 'Navigation/Tabs',
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
  },
  decorators: [
    (story) => html`${story()}<style>
        fds-tab-group {
          width: 700px; 
          height: 300px
        }
        .content {
          padding-top: 24px
        }
      </style>`
  ]
} as Meta;


const Template: Story = ({ selectedIndex, separator, headerPosition, headerDisplayType }) => {
  return html`<fds-tab-group selectedIndex=${selectedIndex} ?separator=${separator} headerPosition=${headerPosition} headerDisplayType=${headerDisplayType}>
  <fds-tab-item label="Dashboard">
    <div class="content">
      Ipsum ut nulla do consequat voluptate laboris nulla. Ullamco laborum ut irure dolor consectetur ipsum consequat nisi occaecat ea. Ipsum esse deserunt adipisicing id in voluptate adipisicing eu ipsum velit aliquip aliqua veniam eiusmod. Nulla ea Lorem cillum culpa ut reprehenderit exercitation sint reprehenderit occaecat. Proident fugiat amet laborum non quis. In id voluptate commodo irure excepteur proident adipisicing cupidatat qui reprehenderit minim Lorem commodo anim.
    </div>
  </fds-tab-item>
  <fds-tab-item label="Evolution">
    <div class="content">
      Do amet exercitation magna aliqua non aliquip consequat ipsum. Fugiat fugiat labore nulla officia cillum et minim excepteur. Aliquip eu do ex officia id pariatur id ea eu. Veniam consequat commodo velit fugiat exercitation laboris commodo adipisicing velit qui mollit magna veniam consequat.
    </div>
  </fds-tab-item>
  <fds-tab-item label="Trend">
    <div class="content">
      Ex et laboris quis proident qui duis. Id aliqua enim cupidatat adipisicing cillum et amet eiusmod. Cupidatat excepteur exercitation consequat occaecat consequat aliqua.
    </div>
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
