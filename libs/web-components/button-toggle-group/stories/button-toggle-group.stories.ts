const README = require('../README.md');
import '@finastra/button-toggle-group';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './sb-generated/fds-button-toggle-group.json';

export default {
  title: 'ACTIONS/Toggle',
  component: 'fds-button-toggle-group',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=94522%3A28102'
    }
  }
} as Meta;

const Template: Story = ({dense=false}) => {
  return html`<fds-button-toggle-group ?dense=${dense}>
  <fds-button-toggle icon="event" label="Left"></fds-button-toggle>
  <fds-button-toggle icon="edit" label="Middle" ></fds-button-toggle>
  <fds-button-toggle icon="share" label="Right"></fds-button-toggle>
</fds-button-toggle-group>`;
};

const LabelTemplate: Story = ({dense=false}) => {
  return html`<fds-button-toggle-group ?dense=${dense}>
  <fds-button-toggle label="5D"></fds-button-toggle>
  <fds-button-toggle label="1M"></fds-button-toggle>
  <fds-button-toggle label="1Y"></fds-button-toggle>
</fds-button-toggle-group>`;
};

const IconsTemplate: Story = ({dense=false}) => {
  return html`<fds-button-toggle-group ?dense=${dense}>
  <fds-button-toggle icon="event"></fds-button-toggle>
  <fds-button-toggle icon="edit" ></fds-button-toggle>
  <fds-button-toggle icon="share"></fds-button-toggle>
</fds-button-toggle-group>`;
};

export const Default: Story = Template.bind({});

export const Dense: Story = Template.bind({});
Dense.args = {
  dense: true,
};

export const Labels: Story = LabelTemplate.bind({});

export const Icons: Story = IconsTemplate.bind({});
