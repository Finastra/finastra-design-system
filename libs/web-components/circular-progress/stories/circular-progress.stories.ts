const README = require('../README.md');
import '@finastra/circular-progress';
import type { CircularProgress } from '@finastra/circular-progress';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-circular-progress.json';

export default {
  title: 'DATA DISPLAY/Progress Indicator/Circular Progress',
  component: 'fds-circular-progress',
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
  }
} as Meta;

const Template: Story<CircularProgress> = ({ progress, indeterminate = false }) => {
  return html`<fds-circular-progress progress=${progress} ?indeterminate=${indeterminate}></fds-circular-progress>`;
};

export const Default: Story<CircularProgress> = Template.bind({});
Default.args = {
  progress: 0.3
};

export const Indeterminate: Story<CircularProgress> = Template.bind({});
Indeterminate.args = {
  progress: 0,
  indeterminate: true
};
Indeterminate.parameters = {
  chromatic: { disableSnapshot: true }
};
