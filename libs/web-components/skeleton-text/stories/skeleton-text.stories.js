import { html } from 'lit-html';
//import notes from '../README.md';
//import {Doc} from './logo.docs.mdx';

//import '@finastra/skeleton-text';
import '../dist/skeleton-text';

export default {
  title: 'Components/Skeleton Text',
 /*  parameters: {
    docs: {
      description: { component: Doc },
    },
  } */
};

//👇 We create a “template” of how args map to rendering
const Template = ({  }) => {
  return html`<fds-skeleton-text animated style="width: 40%"></fds-skeleton-text>`;
};

// Default
export const Default = Template.bind({});

Default.args = {
};

export const InsideCard = ({  }) => {
  return html`
  <style>
  .container {
    flex-direction: column;
    width: 100%;
  }
  fds-skeleton-text {
    margin: 5px;
  }
  </style>
    <div class="container">
      <fds-skeleton-text animated style="width: 40%"></fds-skeleton-text>
      <fds-skeleton-text animated></fds-skeleton-text>
      <fds-skeleton-text animated></fds-skeleton-text>
    </div>
  `;
};

