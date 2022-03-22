const README = require('../README.md');
import '@finastra/app-card';
import type { AppCard } from '@finastra/app-card';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';

const dummyApp = {
  "name": "Business Economics",
  "author": "Finastra",
  "icon": "https://www.finastra.com/themes/custom/themekit/dist/logo.svg",
  "description": "Application Description goes here. This can vary in length from short to pretty long, so you’ll want to watch that."
};

export default {
  title: 'Components/App Card',
  component: 'fds-app-card',
  args: {
    application: dummyApp
  },
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=6063%3A76'
    },
    cssprops
  }
} as Meta;

const Template: Story<AppCard> = ({ application, extraDense = false, large = false }) => {
  return html`<fds-app-card  .application=${application} ?extraDense=${extraDense} ?large=${large}></fsd-app-card>`;
};

export const Default: Story<AppCard> = Template.bind({});

export const Large: Story<AppCard> = Template.bind({});
Large.args = {
  large: true
};

export const ExtraDense: Story<AppCard> = Template.bind({});
ExtraDense.args = {
  extraDense: true
};

export const CommingSoon: Story<AppCard> = Template.bind({});
CommingSoon.args = {
  application: { ...dummyApp, ...{ "flag": "COMING_SOON" } }
};

export const Published: Story<AppCard> = Template.bind({});
Published.args = {
  application: { ...dummyApp, ...{ "flag": "PUBLISHED" } }
};

export const InReview: Story<AppCard> = Template.bind({});
InReview.args = {
  application: { ...dummyApp, ...{ "flag": "IN_REVIEW" } }
};

export const Draft: Story<AppCard> = Template.bind({});
Draft.args = {
  application: { ...dummyApp, ...{ "flag": "DRAFT" } }
};
