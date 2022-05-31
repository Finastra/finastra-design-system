const README = require('../README.md');
import '@finastra/button';
import '@finastra/guided-tour';
import type { GuidedTour, NextStepTrigger } from '@finastra/guided-tour';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'Components/GuidedTour',
  component: 'fds-guided-tour',
  args: {
    data: [{
      "id": "demo-tour-1",
      "name": "Demo tour 1",
      "steps": [
        {
          "selector": "",
          "title": "Welcome to guided tour demo",
          "description": "Start your first tour by clicking next button bellow.",
          "nextStepTrigger": "Trigger next step on next button click"
        },
        {
          "selector": "#guidedtour",
          "title": "This is the component title",
          "description": "To find out how to use this component go to the installation section by clicking next",
          "nextStepTrigger": "Trigger next step on next button click",
          "placement": "bottom"
        },
        {
          "selector": "#installation",
          "title": "How to intall component ",
          "description": "Just run 'npm i @finastra/guided-tour'",
          "placement": "bottom"
        }
      ]
    }]
  },
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  decorators: [
    (story) => html`${story()}<style>
        /* Add you styles here */
      </style>`
  ]
} as Meta;

const Template: Story<GuidedTour> = ({ data }) => {
  return html`<fds-guided-tour  .data=${data as any}>
<fds-button slot="trigger" label="Tours"></fds-button>
</fsd-guided-tour>`;
};

export const Default: Story<GuidedTour> = Template.bind({});
