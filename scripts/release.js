const path = require('path');
const globby = require('globby');
const args = require('commander');

const releaseScripts = require('./release-scripts');

const cwd = path.resolve(process.cwd());
const rootPkg = require(path.join(cwd, 'package.json'));

(async () => {
  args.option('-v, --version [string|number]', 'Version to change package to').parse(process.argv);

  if (args.version && typeof args.version === 'string') {
    const newVersion = releaseScripts.computeVersion(args.version, rootPkg.version);
    const pkgScopes = ['@ffdc', '@uxg'];

    console.log(`Working dir is ${cwd}`);
    console.log(`New version is ${newVersion} from ${rootPkg.version}`);

    const pkgs = await globby([`**/package.json`, '!**/node_modules']);
    pkgs.forEach(pkg => {
      console.log(`Updating package at ${pkg} to ${newVersion}`);
      pkgScopes.forEach(scope => {
        releaseScripts.bumpUpPackage(path.join(cwd, pkg), newVersion, scope);
      });
    });
  } else {
    throw new Error('Please enter a valid semver version or version type');
  }
})();
