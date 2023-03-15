const README = require('../README.md');
import '@finastra/search-input';
import type { SearchInput } from '@finastra/search-input';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-search-input.json';

export default {
  title: 'FORMS/Search Input',
  component: 'fds-search-input',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=56704%3A19089'
    },
    cssprops
  }
} as Meta;

const Template: Story<SearchInput> = ({
  loading,
  showClearButton,
  label,
  placeholder,
  required,
  icon,
  type,
  validationMessage,
  disabled,
  dense,
  helper,
  labelInside
}) => {
  return html`<fds-search-input
    ?loading=${loading}
    ?showClearButton=${showClearButton}
    label=${label}
    placeholder=${placeholder}
    ?required=${required}
    icon=${icon}
    type=${type}
    validationMessage=${validationMessage}
    ?disabled=${disabled}
    ?dense=${dense}
    helper=${helper}
    ?labelInside=${labelInside}
  ></fds-search-input>`;
};

export const Default: Story<SearchInput> = Template.bind({});
Default.args = {
  placeholder: 'Search ...',
  value: 'Banking',
  icon: 'search',
  showClearButton: true
};

export const Loading: Story<SearchInput> = Template.bind({});
Loading.args = {
  placeholder: 'Search ...',
  value: 'Banking',
  icon: 'search',
  loading: true
};
Loading.parameters = {
  chromatic: { disableSnapshot: true }
};

export const Disabled: Story<SearchInput> = Template.bind({});
Disabled.args = {
  placeholder: 'Search ...',
  value: 'Banking',
  icon: 'search',
  disabled: true
};
