const watch = require('node-watch');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const watchOptions = {
  recursive: true,
  filter: (path) => {
    if (path.indexOf('node_modules') > -1) {
      return false;
    }
    return /.(?:ts|scss)$/.test(path);
  }
};

watch('libs/web-components', watchOptions, function (_event, fileName) {
  addToQueue(fileName);
});

let updating = false;

async function addToQueue(fileName) {
  if (updating) {
    return;
  }
  console.log(`saw change to ${fileName}`);
  updating = true;
  const buildSass = fileName.endsWith('scss');
  let execPromise;
  if (buildSass) {
    console.log('building styles and typescript');
    execPromise = exec('npm run wc:build');
  } else {
    console.log('building typescript');
    execPromise = exec('npm run wc:build:ts');
  }
  try {
    const { stdout } = await execPromise;
    console.log(stdout);
  } catch ({ stdout, stderr }) {
    console.log(stdout);
    console.log('ERROR:', stderr);
  }
  console.log('watcher build complete!');
  updating = false;
}

console.log('watcher started!');
