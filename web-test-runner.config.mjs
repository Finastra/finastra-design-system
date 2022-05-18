import fs from 'fs';
import { playwrightLauncher } from '@web/test-runner-playwright';
import { apexchart } from './tools/dev-server/middlewares.mjs';

const packagesPath = 'libs/web-components';
const excludedPackages = ['_helpers'];
const packages = fs
  .readdirSync(packagesPath)
  .filter((dir) => excludedPackages.includes(dir) === false)
  .filter((dir) => fs.statSync(`${packagesPath}/${dir}`).isDirectory() && fs.existsSync(`${packagesPath}/${dir}/test`));

export default {
  nodeResolve: true,
  coverageConfig: {
    report: true,
    reportDir: 'wc-coverage',
    threshold: {
      statements: 90,
      branches: 65,
      functions: 80,
      lines: 90
    },
    exclude: ['**/node_modules/**', '**/*.css.ts']
  },
  testFramework: {
    config: {
      timeout: '3000'
    }
  },
  middleware: [apexchart],
  browsers: [
    //playwrightLauncher({ product: 'firefox', concurrency: 1 }),
    playwrightLauncher({ product: 'chromium' })
    //playwrightLauncher({ product: 'webkit' }),
  ],
  groups: packages.map((pkg) => ({
    name: pkg,
    files: `${packagesPath}/${pkg}/dist/test/**/*.test.js`
  }))
};
