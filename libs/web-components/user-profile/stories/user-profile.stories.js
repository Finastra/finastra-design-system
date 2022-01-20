import README from '../README.md';
import { html } from 'lit-html';
import '@finastra/user-profile';

export default {
  title: 'Components/user-profile',
  parameters: {
    docs: {
      iframeHeight: 600,
      description: { component: README }
    },
  },
  argTypes: {
    dense: { control: 'boolean' },
    open: { control: 'boolean' },
    name: { control: 'text'},
    userInfo: {
      table: {
        category: 'slot'
      },
      control: null
    },
    actions: {
      table: {
        category: 'slot'
      },
      control: null
    }
  },
  args: {
    dense: false,
    open: false,
    name :'',
  }
};

const Template = ({ dense = false, open =true }) => {
  return html` 
  <style>
    fds-user-profile p {
      font: var(--fds-body-1);
      color: var(--fds-on-background);
    }
    fds-user-profile .item-list {
      padding-bottom: 16px;
    }
    fds-user-profile mwc-list-item {
      color: var(--fds-on-background);
    }
    fds-user-profile fds-divider {
      position: relative;
      padding-top: 16px;
      margin-right: -16px;
      margin-left: -16px;
    }
    fds-user-profile fds-button {
      line-height: 0px;
    }
    fds-user-profile fds-button+fds-button {
      margin-top: 8px;
    }
  </style>

  <fds-user-profile .name=${name} ?dense=${dense} ?open=${open}>
  <div slot="userInfo">raya.hristova@finastra.com</div>
  <div slot="actions">
    <fds-button dense fullwidth label="Logout" icon="logout"></fds-button>
    <fds-button text fullwidth label="View profile"></fds-button>
  </div>
</fds-user-profile>`;
};

export const Default = Template.bind({});

export const Dense = Template.bind({});
Dense.args = {
  dense: true,
  open: true
};
