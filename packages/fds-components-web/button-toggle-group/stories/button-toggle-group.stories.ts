const README = require('../README.md');
import '@finastra/button-toggle-group';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { actions, argTypes, cssprops } from './sb-generated/fds-button-toggle-group.json';

export default {
  title: 'ACTIONS/Toggle',
  component: 'fds-button-toggle-group',
  argTypes: {
    selectedIndex: argTypes['selected-index'],
    dense: argTypes.dense
  },
  parameters: {
    chromatic: { delay: 1000 },
    actions,
    docs: {
      description: { component: allSanitizers(README) }
    },
    cssprops,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=106565%3A34024&t=keDm0ux9sZfv2aTY-0'
    }
  }
} as Meta;

const Template: Story = ({ dense = false, selectedIndex = 0 }) => {
  return html`<fds-button-toggle-group ?dense=${dense} selected-index=${selectedIndex}>
    <fds-button-toggle icon="event" label="Agenda"></fds-button-toggle>
    <fds-button-toggle icon="mail" label="Messages"></fds-button-toggle>
    <fds-button-toggle icon="people" label="People"></fds-button-toggle>
  </fds-button-toggle-group>`;
};

const LabelTemplate: Story = ({ dense = false, selectedIndex = 0 }) => {
  return html`<fds-button-toggle-group ?dense=${dense} selected-index=${selectedIndex}>
    <fds-button-toggle label="5D"></fds-button-toggle>
    <fds-button-toggle label="1M"></fds-button-toggle>
    <fds-button-toggle label="1Y"></fds-button-toggle>
  </fds-button-toggle-group>`;
};

const IconsTemplate: Story = ({ dense = false, selectedIndex = 0 }) => {
  return html`<fds-button-toggle-group ?dense=${dense} selected-index=${selectedIndex}>
    <fds-button-toggle icon="grid_view" value="grid"></fds-button-toggle>
    <fds-button-toggle icon="format_list_bulleted" value="list"></fds-button-toggle>
  </fds-button-toggle-group>`;
};

export const Default: Story = Template.bind({});

export const Dense: Story = Template.bind({});
Dense.args = {
  dense: true
};

export const Labels: Story = LabelTemplate.bind({});

export const Icons: Story = IconsTemplate.bind({});
