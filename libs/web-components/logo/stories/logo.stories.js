import README from '../README.md';
import { html } from 'lit-html';
import '@finastra/logo';

export default {
  title: 'Components/Logo',
  argTypes: {
    dense: { control: 'boolean' }
  },
  args: {
    dense: false
  },
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops: {
      "fds-logo": {
        control: "text",
        description: "String representing an image encoded in base64",
      },
      "fds-logo-width": {
        value: "122px",
        control: "text",
      },
      "fds-logo-height": {
        value: "60px",
        control: "text",
      },
    }
  }
};

const Template = ({ dense = false }) => {
  return html`<fds-logo  ?dense=${dense}></fsd-logo>`;
};

export const Default = Template.bind({});

export const Dense = Template.bind({});
Dense.args = {
  dense: true
};
