const README = require('../README.md');
import '@finastra/skeleton';
import type { Skeleton } from '@finastra/skeleton';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-skeleton.json';

export default {
  title: 'DATA DISPLAY/Skeleton',
  component: 'fds-skeleton',
  argTypes,
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    cssprops
  },
  decorators: [
    (story) => html`${story()}
      <style>
        .skeleton-card {
          display: grid;
        }
        .header {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-bottom: 16px;
        }
        .content {
          display: flex;
          gap: 16px;
        }
        .info {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 12px;
        }
      </style> `
  ]
} as Meta;

const Template: Story<Skeleton> = ({ type, size, width, height }) => {
  return html`<fds-skeleton type=${type} size=${ifDefined(size)} width=${ifDefined(width)} height=${ifDefined(height)}></fds-skeleton>`;
};

export const Default: Story<Skeleton> = Template.bind({});
export const Demo: Story<Skeleton> = () => {
  return html`
    <div class="skeleton-card">
      <div class="header">
        <fds-skeleton type="circle"></fds-skeleton>
        <fds-skeleton></fds-skeleton>
      </div>
      <div class="content">
        <fds-skeleton type="rectangle"></fds-skeleton>
        <div class="info">
          <fds-skeleton size="h2"></fds-skeleton>
          <fds-skeleton size="h3"></fds-skeleton>
          <fds-skeleton size="h5"></fds-skeleton>
          <fds-skeleton width="80px"></fds-skeleton>
        </div>
      </div>
    </div>
  `;
};
