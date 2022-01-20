import { addons } from '@storybook/addons';
import '!style-loader!css-loader!sass-loader!./styles.scss';

addons.setConfig({
  showPanel: true,
  isToolshown: true,
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: true }
  }
});
