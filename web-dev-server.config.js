import { devIndex, esjRender, apexchart } from './tools/dev-server/middlewares.mjs';

export default {
  port: 4000,
  watch: true,
  open: true,
  nodeResolve: true,
  plugins: [],
  middleware: [esjRender, devIndex, apexchart],
  preserveSymlinks: true,
  compatibility: 'none',
  rootDir: '.',
  debug: false
};
