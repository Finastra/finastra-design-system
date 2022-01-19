import { addons } from '@storybook/addons';
import theme from './theme-light';

addons.setConfig({
  showPanel: true,
  isToolshown: true,
  toolbar: {
    title: { hidden: false, },
    zoom: { hidden: false, },
    eject: { hidden: true, },
    copy: { hidden: true, },
    fullscreen: { hidden: true, },
  },
});
