const README = require('../README.md');
import '@finastra/spark-line';
import type { SparkLine } from '@finastra/spark-line';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { actions, argTypes, cssprops } from './sb-generated/fds-spark-line.json';

const dataSparkline = [
  { x: 0, y: 9022.51 },
  { x: 1, y: 6090.17 },
  { x: 2, y: 5949.23 },
  { x: 3, y: 8127.28 },
  { x: 4, y: 7806.76 },
  { x: 5, y: 2826.21 },
  { x: 6, y: 8447.03 },
  { x: 7, y: 3891.71 },
  { x: 8, y: 7168.04 },
  { x: 9, y: 6818.79 }
];
export default {
  title: 'DATA DISPLAY/Spark Line',
  component: 'fds-spark-line',
  argTypes,
  args: {
    data: dataSparkline,
    height: 100,
    width: 50
  },
  parameters: {
    actions,
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: ' https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=48606%3A19621'
    }
  },
  decorators: [],
  cssprops
} as Meta;

const Template: Story<SparkLine> = ({ data = dataSparkline, height = 100, width = 50 }) => {
  return html`<fds-spark-line .data=${dataSparkline} .height=${height} .width=${width}></fds-spark-line>`;
};

export const Default: Story<SparkLine> = Template.bind({});
