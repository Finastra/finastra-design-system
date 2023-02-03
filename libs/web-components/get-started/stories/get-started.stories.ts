import '@finastra/button';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';

const README = require('../README.md');

export default {
  title: 'PATTERN/Get Started',
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6BBm9XAsO9lQZQ4xBM4cGr/Patterns-%26-apps?node-id=15347%3A21291'
    }
  },
  args: {}
} as Meta;

const Template: Story = ({ title, description, image, hasMedia, link }) => {
  return html`
    <style>
      .message-body {
        display: flex;
        gap: var(--fds-spacing-5, 48px);
        flex-wrap: wrap;
        justify-content: center;
      }

      .message-title {
        font: normal normal var(--fds-headline-3-font-weight, 800) var(--fds-headline-3-font-size, 1.75rem) /
          var(--fds-headline-3-line-height, 2.4375rem) var(--fds-headline-3-font-family, Spartan);
        color: var(--fds-on-surface, #000000);
        max-width: 460px;
        margin-top: var(--fds-spacing-3, 16px);
        margin-bottom: var(--fds-spacing-3, 16px);
      }

      .message-description {
        font: normal normal var(--fds-body-1-font-weight, 300) var(--fds-body-1-font-size, 1rem) / var(--fds-body-1-line-height, 1.5rem)
          var(--fds-body-1-font-family, Roboto);
        color: var(--fds-on-surface-medium, #0000008a);
        text-align: left;
        max-width: 460px;
      }

      .message-link a {
        color: var(--fds-primary, #694ed6);
        font: normal normal var(--fds-body-1-font-weight, 300) var(--fds-body-1-font-size, 1rem) / var(--fds-body-1-line-height, 1.5rem)
          var(--fds-body-1-font-family, Roboto);
      }

      .message-actions {
        display: flex;
        justify-content: flex-start;
        gap: var(--fds-spacing-3, 16px);
        margin-top: var(--fds-spacing-5, 48px);
        margin-bottom: 32px;
        flex-wrap: wrap;
      }

      .message-image {
        width: 100%;
        max-width: 408px;
      }

      @media only screen and (max-width: 1315px) {
        .message-title,
        .message-description {
          text-align: center;
          max-width: 800px;
        }

        .message-link {
          display: flex;
          justify-content: center;
        }

        .message-actions {
          justify-content: center;
        }
      }

      @media only screen and (max-width: 440px) {
        .message-title {
          text-align: center;
          font: normal normal var(--fds-headline-4-font-weight, 800) var(--fds-headline-4-font-size, 1.3125rem) /
            var(--fds-headline-4-line-height, 1.8125rem) var(--fds-headline-4-font-family, Spartan);
        }

        .message-description {
          text-align: center;
          font: normal normal var(--fds-body-2-font-weight, 300) var(--fds-body-2-font-size, 0.875rem) /
            var(--fds-body-2-line-height, 1.3125rem) var(--fds-body-2-font-family, Roboto);
        }

        .message-link {
          display: flex;
          justify-content: center;
        }

        .message-link a {
          text-align: center;
        }

        .message-actions > fds-button,
        .message-actions > fds-outlined-button {
          width: 100%;
        }
      }
    </style>

    <section class="message-body">
      ${hasMedia ? html`<img class="message-image" src=${image} />` : null}
      <div>
        <div class="message-title">${title}</div>
        <div class="message-description">${description}</div>
        <div class="message-actions">
          <fds-outlined-button label="Explore APIs"></fds-outlined-button>
          <fds-button label="Register application" icon="play_arrow"></fds-button>
        </div>
        <div class="message-link">
          <a href="${link}">How register an application?</a>
        </div>
      </div>
    </section>
  `;
};

export const RegisterApplication: Story = Template.bind({});
RegisterApplication.args = {
  hasMedia: true,
  title: 'Register your first application!',
  description:
    'Select an option below to learn more about the dashboard, setup a customized experience, and get solution-specific training and help.',
  image: 'https://res.cloudinary.com/ffdc/image/upload/v1662625053/ILLUSTRATION_rocket_rudv54.svg'
};

const WelcomeTemplate: Story = ({ title, description, images, link }) => {
  return html`
    <style>
      .section-body {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        overflow: hidden;
        padding: var(--fds-spacing-0, 0px) var(--fds-spacing-3, 16px);
      }

      .section-title {
        font: normal normal var(--fds-headline-3-font-weight, 800) var(--fds-headline-3-font-size, 1.75rem) /
          var(--fds-headline-3-line-height, 2.4375rem) var(--fds-headline-3-font-family, Spartan);
        color: var(--fds-on-surface, #000000);
        align-self: center;
        max-width: 800px;
        margin-top: var(--fds-spacing-3, 16px);
        margin-bottom: var(--fds-spacing-3, 16px);
      }

      .section-description {
        margin: auto;
        font: normal normal var(--fds-body-1-font-weight, 300) var(--fds-body-1-font-size, 1rem) / var(--fds-body-1-line-height, 1.5rem)
          var(--fds-body-1-font-family, Roboto);
        color: var(--fds-on-surface-medium, #0000008a);
        text-align: center;
        max-width: 680px;
      }

      .section-image-container {
        display: flex;
        gap: var(--fds-spacing-3, 16px);
        padding: var(--fds-spacing-4, 24px) var(--fds-spacing-0, 0px);
        overflow-x: scroll;
        max-width: 100%;
      }

      .section-card {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        flex: 1 0;
        border-radius: 4px;
        background: var(--fds-background, #fafafa);
        border: 1px solid var(--fds-outline, #0000001f);
      }

      .section-card:hover {
        cursor: pointer;
        background: var(--fds-surface-hover, rgba(145, 126, 224, 0.04));
      }

      .section-card:active {
        cursor: pointer;
        background: var(--fds-surface-selected, rgba(145, 126, 224, 0.08));
      }

      .section-image {
        max-width: 264px;
      }

      .section-image-label {
        text-align: center;
        font: normal normal var(--fds-subtitle-1-font-weight, 500) var(--fds-subtitle-1-font-size, 1rem) /
          var(--fds-subtitle-1-line-height, 1.5rem) var(--fds-subtitle-1-font-family, Roboto);
        color: var(--fds-primary, #917ee0);
        padding: var(--fds-spacing-4, 24px) var(--fds-spacing-3, 16px);
      }

      .section-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-top: var(--fds-spacing-5, 48px);
      }

      .section-link a {
        color: var(--fds-primary, #694ed6);
        font: normal normal var(--fds-body-1-font-weight, 300) var(--fds-body-1-font-size, 1rem) / var(--fds-body-1-line-height, 1.5rem)
          var(--fds-body-1-font-family, Roboto);
      }

      @media only screen and (max-width: 440px) {
        .section-title {
          text-align: center;
          font: normal normal var(--fds-headline-4-font-weight, 800) var(--fds-headline-4-font-size, 1.3125rem) /
            var(--fds-headline-4-line-height, 1.8125rem) var(--fds-headline-4-font-family, Spartan);
        }

        .section-description {
          text-align: center;
          font: normal normal var(--fds-body-2-font-weight, 300) var(--fds-body-2-font-size, 0.875rem) /
            var(--fds-body-2-line-height, 1.3125rem) var(--fds-body-2-font-family, Roboto);
        }

        .section-image {
          max-width: 184px;
        }

        .section-actions {
          gap: var(--fds-spacing-3, 16px);
          justify-content: center;
        }

        .section-link {
          order: 2;
        }
      }
    </style>

    <section class="section-body">
      <div class="section-title">${title}</div>
      <div class="section-description">${description}</div>
      <div class="section-image-container">
        ${images.map(
          (img) =>
            html`<div class="section-card">
              <img class="section-image" src=${img.url} />
              <div class="section-image-label">${img.label}</div>
            </div>`
        )}
      </div>

      <div class="section-actions">
        <div class="section-link">
          <a href="${link}">View all resources</a>
        </div>
        <fds-button label="Take a tour" icon="play_arrow"></fds-button>
      </div>
    </section>
  `;
};

export const WelcomeScreen: Story = WelcomeTemplate.bind({});
WelcomeScreen.args = {
  title: 'Welcome to Super App!',
  description:
    'Select an option below to learn more about the dashboard, setup a customized experience, and get solution-specific training and help.',
  images: [
    {
      label: 'Take a tour',
      url: 'https://res.cloudinary.com/ffdc/image/upload/v1663315543/ILLUSTRATION_get-started_zr5cyf.svg'
    },
    {
      label: 'Get training & help',
      url: 'https://res.cloudinary.com/ffdc/image/upload/v1663315543/ILLUSTRATION_get-started3_ivid6c.svg'
    },
    {
      label: 'Personalize your experience',
      url: 'https://res.cloudinary.com/ffdc/image/upload/v1663315543/ILLUSTRATION_get-started2_fcvog4.svg'
    }
  ],
  link: '#'
};
