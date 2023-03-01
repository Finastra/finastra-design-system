const watch = require('node-watch');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const ora = require('ora');
const chalk = require('chalk');
const { sep } = require('path');

const watchOptions = {
  recursive: true,
  filter: (path) => {
    if (path.indexOf('node_modules') > -1) {
      return false;
    }
    return /.(?:ts|scss)$/.test(path);
  }
};

watch('packages/fds-components-web', watchOptions, function (_event, fileName) {
  addToQueue(fileName);
});

const spinner = ora({
  text: 'Watcher Started, watching for changes',
  spinner: 'dots'
}).start();

spinner.stopAndPersist({
  symbol: '✔',
  color: 'green'
});

let updating = false;

async function addToQueue(fileName) {
  if (updating || fileName.includes('.d.ts')) {
    return;
  }

  spinner.stopAndPersist({
    text: chalk.green(`saw change to ${fileName}`),
    symbol: '🔭'
  });

  updating = true;
  const buildSass = fileName.endsWith('scss');
  let execPromise;

  var wcFolder = fileName.split(sep).slice(0, 3).join('/');
  if (buildSass) {
    spinner.color = 'magenta';
    spinner.text = chalk.magenta('Building Styles and Typescript');
    spinner.start();
    execPromise = exec(`npm run build:style -w ${wcFolder}`);
  } else {
    spinner.color = 'blue';
    spinner.text = chalk.blue('Building Typescript');
    spinner.start();
    execPromise = exec(`npm run build:ts | npm run wca`);
  }

  try {
    const { stdout } = await execPromise;
    console.log(stdout);
  } catch ({ stdout, stderr }) {
    console.log(stdout);
    console.log('ERROR:', stderr);
  }

  spinner.stopAndPersist({
    symbol: '🎉',
    text: chalk.yellow(`Build complete - Watching for changes
    `)
  });
  updating = false;
}
