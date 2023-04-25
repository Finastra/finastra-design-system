const README = require('../README.md');
import '@finastra/app-bar';
import '@finastra/button';
import '@finastra/guided-tour';
import type { GuidedTour } from '@finastra/guided-tour';
import '@finastra/icon-button';
import '@finastra/user-profile';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { allSanitizers } from '../../../../scripts/markdown-sanitizers';
import { argTypes, cssprops } from './sb-generated/fds-guided-tour.json';

export default {
  title: 'NAVIGATION/Guided Tour',
  component: 'fds-guided-tour',
  argTypes,
  args: {
    data: {
      stepInfo: 'Step ${currentStep} of ${totalSteps}',
      steps: [
        {
          selector: '[data-tour="start"]',
          title: 'Step 1 title',
          description:
            'Lorem ipsum dolor sit amet. Ab rerum totam et vero error est commodi autem et dolores magnam sed harum quibusdam sed tempore eligendi et quos perspiciatis. Eos autem natus eum iusto sunt sit laborum dolores At reprehenderit cumque. ',
          marginRight: 5,
          marginTop: 5,
          marginBottom: 5,
          marginLeft: -9,
          radius: 20,
          placement: 'bottom',
          mainAxis: 25,
          crossAxis: 0
        },
        {
          selector: '[data-tour="menu"]',
          title: 'Step 2 title',
          description:
            'Lorem ipsum dolor sit amet. Ab rerum totam et vero error est commodi autem et dolores magnam sed harum quibusdam sed tempore eligendi et quos perspiciatis. Eos autem natus eum iusto sunt sit laborum dolores At reprehenderit cumque. ',
          placement: 'right',
          marginRight: -12,
          marginTop: -5,
          marginBottom: -5,
          marginLeft: -5,
          mainAxis: 10
        },
        {
          selector: '[data-tour="notification"]',
          title: 'Step 3 title',
          description:
            'Lorem ipsum dolor sit amet. Ab rerum totam et vero error est commodi autem et dolores magnam sed harum quibusdam sed tempore eligendi et quos perspiciatis. Eos autem natus eum iusto sunt sit laborum dolores At reprehenderit cumque. ',
          placement: 'bottom',
          marginRight: -4,
          marginTop: -5,
          marginBottom: -5,
          marginLeft: -3,
          mainAxis: 15,
          radius: 20
        },
        {
          selector: '[data-tour="more"]',
          title: 'Step 4 title',
          description:
            'Lorem ipsum dolor sit amet. Ab rerum totam et vero error est commodi autem et dolores magnam sed harum quibusdam sed tempore eligendi et quos perspiciatis. Eos autem natus eum iusto sunt sit laborum dolores At reprehenderit cumque. ',
          placement: 'left',
          marginRight: -5,
          marginTop: -5,
          marginBottom: -5,
          marginLeft: -5,
          mainAxis: 15
        },
        {
          title: 'Step 5 title',
          description:
            'Lorem ipsum dolor sit amet. Ab rerum totam et vero error est commodi autem et dolores magnam sed harum quibusdam sed tempore eligendi et quos perspiciatis. Eos autem natus eum iusto sunt sit laborum dolores At reprehenderit cumque. '
        }
      ]
    },
    show: false,
    currentStepIndex: 0,
    showStepInfo: false
  },
  parameters: {
    docs: {
      description: { component: allSanitizers(README) }
    },
    cssprops
  },
  decorators: [
    (story) => html`${story()}<style>
        fds-app-bar {
          min-width: calc(68vw - 100px);
        }
        p {
          color: var(--fds-on-background);
          font: var(--fds-body-1);
        }
        fds-button {
          padding-left: 16px;
        }
        fds-user-profile fds-button {
          padding-right: 16px;
        }
        fds-user-profile fds-button + fds-button {
          margin-top: var(--fds-spacing-2);
        }
        .app {
          display: flex;
          flex-direction: column;
          gap: 24px;

          align-items: center;
        }
      </style>
      <script>
        const guidedtour = document.getElementById('guidedtour');
        const button = document.getElementById('start');
        button.addEventListener('click', function () {
          guidedtour.show = true;
        });
      </script> `
  ]
} as Meta;

const Template: Story<GuidedTour> = ({ data, show, currentStepIndex, showStepInfo }) => {
  return html`<div class="app">
    <fds-app-bar appName="FDS">
      <fds-icon-button data-tour="menu" icon="menu" slot="navigationIcon"></fds-icon-button>

      <fds-icon-button data-tour="notification" icon="notifications" slot="actions"></fds-icon-button>
      <fds-icon-button data-tour="help" icon="help" slot="actions"></fds-icon-button>
      <fds-user-profile data-tour="user-profile" slot="actions" userName="Raya Hristova" shortName="R">
        <div slot="userInfo">raya.hristova@finastra.com</div>
        <div slot="actions">
          <fds-button fullwidth label="Logout" icon="logout"></fds-button>
          <fds-button text fullwidth label="View profile"></fds-button>
        </div>
      </fds-user-profile>
      <fds-icon-button data-tour="more" icon="more_vert" slot="actions"></fds-icon-button>
    </fds-app-bar>

    <fds-guided-tour
      id="guidedtour"
      .data=${data}
      currentStepIndex=${currentStepIndex}
      ?show=${show}
      ?showStepInfo=${showStepInfo}
    ></fds-guided-tour>
    <fds-button data-tour="start" id="start" label="Start Tours"></fds-button>
  </div>`;
};

const TemplateWidthSlotButton: Story<GuidedTour> = ({ data, show, currentStepIndex, showStepInfo }) => {
  return html`<div class="app">
    <fds-app-bar appName="FDS">
      <fds-icon-button data-tour="menu" icon="menu" slot="navigationIcon"></fds-icon-button>

      <fds-icon-button data-tour="notification" icon="notifications" slot="actions"></fds-icon-button>
      <fds-icon-button data-tour="help" icon="help" slot="actions"></fds-icon-button>
      <fds-user-profile data-tour="user-profile" slot="actions" userName="Raya Hristova" shortName="R">
        <div slot="userInfo">raya.hristova@finastra.com</div>
        <div slot="actions">
          <fds-button fullwidth label="Logout" icon="logout"></fds-button>
          <fds-button text fullwidth label="View profile"></fds-button>
        </div>
      </fds-user-profile>
      <fds-icon-button data-tour="more" icon="more_vert" slot="actions"></fds-icon-button>
    </fds-app-bar>

    <fds-guided-tour id="guidedtour" .data=${data} currentStepIndex=${currentStepIndex} ?show=${show} ?showStepInfo=${showStepInfo}>
      <fds-icon-button slot="skip-button" icon="logout"></fds-icon-button>
      <fds-icon-button slot="next-button" icon="arrow_forward"></fds-icon-button>
      <fds-icon-button slot="back-button" icon="arrow_back"></fds-icon-button>
      <fds-icon-button slot="done-button" icon="check"></fds-icon-button>
    </fds-guided-tour>
    <fds-button data-tour="start" id="start" label="Start Tours"></fds-button>
  </div>`;
};

export const Default: Story<GuidedTour> = Template.bind({});
export const SlotButton: Story<GuidedTour> = TemplateWidthSlotButton.bind({});
