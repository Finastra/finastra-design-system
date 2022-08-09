const README = require('../README.md');
import '@finastra/global-search';
import { FdsGlobalSearch, FDS_GLOBAL_SEARCH_INPUT_CHANGED, FDS_GLOBAL_SEARCH_ITEM_REMOVED, FDS_GLOBAL_SEARCH_ITEM_SELECTED, FDS_GLOBAL_SEARCH_PAGE_SELECTED } from '@finastra/global-search';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypes, cssprops } from './sb-generated/fds-global-search.json';

export default {
  title: 'NAVIGATION/Global Search',
  component: 'fds-global-search',
  argTypes,
  args: {
    placeholder: 'Search the marketplace',
  },
  parameters: {
    actions: {
      handles: [
        FDS_GLOBAL_SEARCH_INPUT_CHANGED,
        FDS_GLOBAL_SEARCH_ITEM_SELECTED,
        FDS_GLOBAL_SEARCH_PAGE_SELECTED,
        FDS_GLOBAL_SEARCH_ITEM_REMOVED
      ]
    },
    docs: {
      description: { component: README }
    },
    design:{
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system'
    },
    cssprops
  }
} as Meta;

const Template: Story<FdsGlobalSearch> = ({
  value,
  placeholder,
  loading,
  enableRecentSearch
}) => {
  return html`
  <div>
    <fds-global-search 
      .value=${ifDefined(value)} 
      .loading=${ifDefined(loading)} 
      .placeholder=${ifDefined(placeholder)} 
      .enableRecentSearch=${ifDefined(enableRecentSearch)} 
      style="width: 100%; height: 60px;">
      <fds-global-search-group 
        slot="searches"
        title="Trending Searches"
        icon="trending_up"
        .items=${ [{
                  text: 'enterprise risk',
                },{
                  text: 'customer service',
                }]} >
      </fds-global-search-group>
      <fds-global-search-page 
        slot="pages" 
        title=${"Popular applications"}
        .items=${
          [
            {
              logo: '//us1-cdn.openchannel.io/59bfc432ca753d60bf995c46/public/603e561d130c5a04da2d3d7c.jpg',
              text: "CloudMargin"
            }
          ]
        }
        >
      </fds-global-search-page>
    </fds-global-search>
  </div>
`;
};

export const Default: Story = Template.bind({});
