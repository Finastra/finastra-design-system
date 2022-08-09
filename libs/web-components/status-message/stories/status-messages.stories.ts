import '@finastra/button';
import '@finastra/textfield';
import '@material/mwc-icon';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import link from './assets/link.svg';
import login from './assets/login.svg';
import notfound from './assets/notfound.svg';
import password from './assets/password.svg';
import profile from './assets/profile.svg';


const README = require('../README.md');


enum Status {
  Success = "success",
  Error = "error"
}

export default {
  title: 'PATTERN/Status Message',
  parameters: {
    docs: {
      description: { component: README }
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
    image: profile,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sodales tellus habitant feugiat vitae faucibus nec elit mauris non sapien consequat ornare amet, ac. Tempor ullamcorper senectus.'
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
          font: var(--fds-headline-3);
          color: var(--fds-on-surface);
          max-width: 480px;
          text-align: center;
          margin-top: var(--fds-spacing-3);
          margin-bottom: var(--fds-spacing-3);
        }

        .message-description {
          font: var(--fds-body-1);
          color: var(--fds-on-surface-medium);
          text-align: center;
          max-width: 808px;
        }

        .message-action {
          margin-top: var(--fds-spacing-4);
          margin-bottom: var(--fds-spacing-4);
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
          background: #26D07C1A;
        }

        .message-icon-container.error {
          background: #D600400A;
        }

        .message-icon {
          --mdc-icon-size: 32px;
        }

        .message-icon.success {
          color: var(--fds-success);
        }

        .message-icon.error {
          color: var(--fds-error);
        }

        .message-input {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 540px;
          margin-top: var(--fds-spacing-5);
        }

        .message-input fds-textfield {
          width: 440px;
        }
      </style>`
  ]
} as Meta;

const Template: Story = ({status, statusIcon, title, description, icon, label, image, hasMedia, hasAction}) => {
  return html`
  <section class="message-body">
    <div class="message-icon-container ${status}">
      <mwc-icon class="message-icon ${status}">${statusIcon}</mwc-icon>
    </div>
    <div class="message-title">${title}</div>
    <div class="message-description">${description}</div>
    ${hasAction ? html`<fds-button class="message-action" label="${label}" icon="${icon}"></fds-button>` : null}
    ${hasMedia ? html`<img src=${image}/>` : null}
  </section>
  `;
};

export const CreationSuccess: Story = Template.bind({});
CreationSuccess.args = {
  status: Status.Success,
  title: 'Your profile has been created.',
  icon: 'play_arrow',
  label: 'Take a tour'
}

export const LinkSent: Story = Template.bind({});
LinkSent.args = {
  status: Status.Success,
  title: 'We will send you a link where you can change your password.',
  hasAction: false,
  image: link
}

export const FailedLogin: Story = Template.bind({});
FailedLogin.args = {
  status: Status.Error,
  statusIcon: 'error',
  title: 'We failed to log you.',
  label: 'Retry',
  icon: 'refresh',
  image: login
}

export const PageNotFound: Story = Template.bind({});
PageNotFound.args = {
  status: Status.Error,
  statusIcon: 'error',
  title: 'Page not found',
  hasAction: false,
  image: notfound
}

const InputTemplate: Story = ({title, description, image, hasMedia, hasInput}) => {
  return html`
  <section class="message-body">
    ${hasMedia ? html`<img src=${image}/>` : null}
    <div class="message-title">${title}</div>
    <div class="message-description">${description}</div>
    <div class="message-input">
      <fds-textfield placeholder="Your e-mail" icon="person_outline"></fds-textfield>
      <fds-button label="Send"></fds-button>
    </div>
  </section>
  `;
};

export const PasswordReset: Story = InputTemplate.bind({});
PasswordReset.args = {
  title: 'Enter your email address to reset your password.',
  image: password,
  hasInput: true
}
