import { addons } from '@storybook/addons';
import '!style-loader!css-loader!sass-loader!./styles.scss';

addons.setConfig({
  showPanel: true,
  showToolbar: true,
  enableShortcuts: false
});
