import { storybookPlugin } from '@web/dev-server-storybook';
import baseConfig from '../web-dev-server.config.mjs';

export default {
  ...baseConfig,
  port: 8181,
  open: '/',
  middleware: [],
  plugins: [storybookPlugin({ type: 'web-components' }), ...baseConfig.plugins]
};
