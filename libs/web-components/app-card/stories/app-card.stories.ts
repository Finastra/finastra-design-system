const README = require('../README.md');
import '@finastra/app-card';
import type { AppCard } from '@finastra/app-card';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './custom-element.json';

const dummyApp = {
  "name": "Business Economics",
  "author": "Finastra",
  "tags": '["Account Information", "Api", "Banking"]',
  "icon": "https://i.ibb.co/vJfF8kH/Logo-1.png",
  "description": "Application Description goes here. This can vary in length from short to pretty long, so you’ll want to watch that."
};

export default {
  title: 'Components/App Card',
  component: 'fds-app-card',
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

const Template: Story<AppCard> = ({ name, author, tags, icon, flag, description, extraDense = false, large = false }) => {
  return html`<fds-app-card  name=${name} author=${author} tags=${tags} icon=${icon} flag=${flag} description=${description} ?extraDense=${extraDense} ?large=${large}></fds-app-card>`;
};

export const Default: Story<AppCard> = Template.bind({});
Default.args = {
  name: dummyApp.name,
  author: dummyApp.author,
  icon: dummyApp.icon,
  description: dummyApp.description
};

export const Large: Story<AppCard> = Template.bind({});
Large.args = {
  name: dummyApp.name,
  author: dummyApp.author,
  icon: dummyApp.icon,
  description: dummyApp.description,
  large: true
};

export const ExtraDense: Story<AppCard> = Template.bind({});
ExtraDense.args = {
  name: dummyApp.name,
  author: dummyApp.author,
  icon: dummyApp.icon,
  description: dummyApp.description,
  extraDense: true
};

export const Tags: Story<AppCard> = Template.bind({});
Tags.args = {
  name: dummyApp.name,
  author: dummyApp.author,
  tags: dummyApp.tags as any,
  icon: dummyApp.icon,
  description: dummyApp.description,
  large: true
};

export const ComingSoon: Story<AppCard> = Template.bind({});
ComingSoon.args = {
  name: dummyApp.name,
  author: dummyApp.author,
  icon: dummyApp.icon,
  description: dummyApp.description,
  flag: "COMING_SOON"
};

export const Published: Story<AppCard> = Template.bind({});
Published.args = {
  name: dummyApp.name,
  author: dummyApp.author,
  icon: dummyApp.icon,
  description: dummyApp.description,
  flag: "PUBLISHED"
};

export const InReview: Story<AppCard> = Template.bind({});
InReview.args = {
  name: dummyApp.name,
  author: dummyApp.author,
  icon: dummyApp.icon,
  description: dummyApp.description,
  flag: "IN_REVIEW"
};

export const Draft: Story<AppCard> = Template.bind({});
Draft.args = {
  name: dummyApp.name,
  author: dummyApp.author,
  icon: dummyApp.icon,
  description: dummyApp.description,
  flag: "DRAFT"
};
