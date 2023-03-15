const README = require('../README.md');
import '@finastra/linear-progress';
import type { LinearProgress } from '@finastra/linear-progress';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-linear-progress.json';

export default {
  title: 'DATA DISPLAY/Progress Indicator/Linear Progress',
  component: 'fds-linear-progress',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=0%3A1264'
    },
    cssprops
  },
  decorators: [
    (story) =>
      html`${story()}
        <style>
          fds-linear-progress {
            width: 300px;
          }
        </style>`
  ]
} as Meta;

const Template: Story<LinearProgress> = ({ progress, indeterminate = false }) => {
  return html`<fds-linear-progress progress=${progress} ?indeterminate=${indeterminate}></fds-linear-progress>`;
};

export const Default: Story<LinearProgress> = Template.bind({});
Default.args = {
  progress: 0.5
};

export const Indeterminate: Story<LinearProgress> = Template.bind({});
Indeterminate.args = {
  progress: 0,
  indeterminate: true
};
Indeterminate.parameters = {
  chromatic: { disableSnapshot: true }
};
