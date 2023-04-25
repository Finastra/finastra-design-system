import '@finastra/button';
import '@finastra/icon';
import '@finastra/textfield';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';

const README = require('../README.md');

enum Status {
  Success = 'success',
  Error = 'error'
}

export default {
  title: 'PATTERN/Status Message',
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6BBm9XAsO9lQZQ4xBM4cGr/Patterns-%26-apps?node-id=15347%3A21292'
    }
  },
  args: {
    hasMedia: true,
    hasAction: true,
    status: Status.Success,
    statusIcon: 'done',
    label: 'action',
    icon: 'done',
    image: 'https://res.cloudinary.com/ffdc/image/upload/v1660131969/ILLUSTRATION_profile_r4rzd0.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing sodales tellus habitant feugiat vitae faucibus nec elit mauris non sapien consequat ornare amet, ac. Tempor ullamcorper senectus.'
  },
  decorators: [
    (story) => html`${story()}
      <style>
        .message-body {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .message-title {
          font: normal normal var(--fds-headline-3-font-weight, 800) var(--fds-headline-3-font-size, 1.75rem) /
            var(--fds-headline-3-line-height, 2.4375rem) var(--fds-headline-3-font-family, Spartan);
          color: var(--fds-on-surface, #000000);
          max-width: 480px;
          text-align: center;
          margin-top: var(--fds-spacing-3, 16px);
          margin-bottom: var(--fds-spacing-3, 16px);
        }

        .message-description {
          font: normal normal var(--fds-body-1-font-weight, 300) var(--fds-body-1-font-size, 1rem) / var(--fds-body-1-line-height, 1.5rem)
            var(--fds-body-1-font-family, Roboto);
          color: var(--fds-on-surface-medium, #0000008a);
          text-align: center;
          max-width: 808px;
        }

        .message-action {
          margin-top: var(--fds-spacing-4, 24px);
          margin-bottom: var(--fds-spacing-4, 24px);
        }

        .message-icon-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }

        .message-icon-container.success {
          background: #26d07c1a;
        }

        .message-icon-container.error {
          background: #d600400a;
        }

        .message-icon {
          --mdc-icon-size: 32px;
        }

        .message-icon.success {
          color: var(--fds-success, #008744);
        }

        .message-icon.error {
          color: var(--fds-error, #e40046);
        }

        .message-image {
          width: 100%;
          max-width: 408px;
        }

        .message-input {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          max-width: 540px;
          margin-top: var(--fds-spacing-5, 48px);
          flex-wrap: wrap;
          gap: var(--fds-spacing-3, 16px);
        }

        .message-input fds-textfield {
          max-width: 440px;
          width: 100%;
        }

        @media only screen and (max-width: 440px) {
          .message-title {
            font: normal normal var(--fds-headline-4-font-weight, 800) var(--fds-headline-4-font-size, 1.3125rem) /
              var(--fds-headline-4-line-height, 1.8125rem) var(--fds-headline-4-font-family, Spartan);
          }

          .message-description {
            font: normal normal var(--fds-body-2-font-weight, 300) var(--fds-body-2-font-size, 0.875rem) /
              var(--fds-body-2-line-height, 1.3125rem) var(--fds-body-2-font-family, Roboto);
          }
        }
      </style>`
  ]
} as Meta;

const Template: Story = ({ status, statusIcon, title, description, icon, label, image, hasMedia, hasAction }) => {
  return html`
    <section class="message-body">
      <div class="message-icon-container ${status}">
        <fds-icon large class="message-icon ${status}">${statusIcon}</fds-icon>
      </div>
      <div class="message-title">${title}</div>
      <div class="message-description">${description}</div>
      ${hasAction ? html`<fds-button class="message-action" label="${label}" icon="${icon}"></fds-button>` : null}
      ${hasMedia ? html`<img class="message-image" src=${image} />` : null}
    </section>
  `;
};

export const CreationSuccess: Story = Template.bind({});
CreationSuccess.args = {
  status: Status.Success,
  title: 'Your profile has been created.',
  icon: 'play_arrow',
  label: 'Take a tour'
};

export const LinkSent: Story = Template.bind({});
LinkSent.args = {
  status: Status.Success,
  title: 'We will send you a link where you can change your password.',
  hasAction: false,
  image: 'https://res.cloudinary.com/ffdc/image/upload/v1660131969/ILLUSTRATION_link_doslxz.svg'
};

export const FailedLogin: Story = Template.bind({});
FailedLogin.args = {
  status: Status.Error,
  statusIcon: 'error',
  title: 'We failed to log you.',
  label: 'Retry',
  icon: 'refresh',
  image: 'https://res.cloudinary.com/ffdc/image/upload/v1660131969/ILLUSTRATION_login_xh8t2b.svg'
};

export const PageNotFound: Story = Template.bind({});
PageNotFound.args = {
  status: Status.Error,
  statusIcon: 'error',
  title: 'Page not found',
  hasAction: false,
  image: 'https://res.cloudinary.com/ffdc/image/upload/v1660131969/ILLUSTRATION_notfound_seulkw.svg'
};

const InputTemplate: Story = ({ title, description, image, hasMedia, hasInput }) => {
  return html`
    <section class="message-body">
      ${hasMedia ? html`<img class="message-image" src=${image} />` : null}
      <div class="message-title">${title}</div>
      <div class="message-description">${description}</div>
      <div class="message-input">
        <fds-textfield type="email" label="Your e-mail" icon="person" labelinside></fds-textfield>
        <fds-button label="Send"></fds-button>
      </div>
    </section>
  `;
};

export const PasswordReset: Story = InputTemplate.bind({});
PasswordReset.args = {
  title: 'Enter your email address to reset your password.',
  image: 'https://res.cloudinary.com/ffdc/image/upload/v1660131969/ILLUSTRATION_password_amz8of.svg',
  hasInput: true
};
