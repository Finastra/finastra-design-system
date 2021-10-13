import { addons } from '@web/storybook-prebuilt/addons';
import theme from './theme';

addons.setConfig({
  theme: theme,
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
