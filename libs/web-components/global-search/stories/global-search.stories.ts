const README = require('../README.md');
import '@finastra/global-search';
import { FdsGlobalSearch } from '@finastra/global-search';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypes, cssprops } from './sb-generated/fds-global-search.json';

export default {
  title: 'FORMS/GlobalSearch',
  component: 'fds-global-search',
  argTypes,
  args: {
    placeholder: 'Search the result',
  },
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  }
} as Meta;

const Template: Story<FdsGlobalSearch> = ({
  value,
  placeholder,
  loading
}) => {
  return html`<fds-global-search .value=${ifDefined(value)} .loading=${ifDefined(loading)} .placeholder=${ifDefined(placeholder)}>

</fds-global-search>`;
};

export const Default: Story = Template.bind({});

// export const ClearButton: Story = Template.bind({});
// ClearButton.args = {
//   showClearButton: true
// };
