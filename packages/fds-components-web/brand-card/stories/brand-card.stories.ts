const README = require('../README.md');
import '@finastra/brand-card';
import { BrandCard } from '@finastra/brand-card';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-brand-card.json';

export default {
  title: 'DATA DISPLAY/Cards/Brand Card',
  component: 'fds-brand-card',
  argTypes,
  args: {
    shortLabel: '',
    dense: false,
    extraDense: false,
    large: false,
    secondary: false
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=140%3A6969'
    },
    cssprops
  },
  decorators: []
} as any as Meta;

const Template: Story<BrandCard> = ({ label, shortLabel, dense, extraDense, large, secondary, outlined, selectable, disabled }) => {
  return html` <fds-brand-card
    label=${label}
    shortLabel=${shortLabel}
    ?dense=${dense}
    ?extraDense=${extraDense}
    ?large=${large}
    ?secondary=${secondary}
    ?outlined=${outlined}
    ?selectable=${selectable}
    ?disabled=${disabled}
  >
  </fds-brand-card>`;
};

export const Default: Story<BrandCard> = Template.bind({});
Default.args = {
  label: 'Application'
};

export const Dense: Story<BrandCard> = Template.bind({});
Dense.args = {
  label: 'Application',
  dense: true
};

export const ExtraDense: Story<BrandCard> = Template.bind({});
ExtraDense.args = {
  label: 'Application',
  extraDense: true
};

export const Large: Story<BrandCard> = Template.bind({});
Large.args = {
  label: 'Application',
  large: true
};

export const Secondary: Story<BrandCard> = Template.bind({});
Secondary.args = {
  label: 'Application',
  secondary: true
};

export const ShortLabel: Story<BrandCard> = Template.bind({});
ShortLabel.args = {
  label: 'Application',
  shortLabel: 'APP'
};
