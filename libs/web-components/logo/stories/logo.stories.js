import { html } from 'lit-html';
//import notes from '../README.md';
//import {Doc} from './logo.docs.mdx';

import '@finastra/logo';

export default {
  title: 'Components/Logo (js)'
  /*  parameters: {
    docs: {
      description: { component: Doc },
    },
  } */
};

//👇 We create a “template” of how args map to rendering
const Template = ({ dense = false }) => {
  return html`<fds-logo ?dense=${dense}></fds-logo>`;
};

// Default
export const Default = Template.bind({});

Default.args = {
  dense: false
};

// Dense
export const Dense = Template.bind({});

Dense.args = {
  dense: true
};
