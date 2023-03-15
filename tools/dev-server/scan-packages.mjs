import path from 'path';
import globby from 'globby';
import fs from 'fs';

const ROOT_FOLDER = path.resolve('./packages/fds-components-web');

export async function scanPackages() {
  let demoPkgs = await globby(['**/package.json', '!**/node_modules/**'], {
    cwd: ROOT_FOLDER
  });
  demoPkgs = demoPkgs.filter((pkg) => {
    return fs.existsSync(path.join(ROOT_FOLDER, path.dirname(pkg), 'demo/index.html'));
  });
  return demoPkgs
    .map((pkg) => {
      const pkgData = JSON.parse(fs.readFileSync(path.join(ROOT_FOLDER, pkg)));
      return {
        icon: pkgData.icon || 'widgets',
        name: pkgData.displayName || pkgData.name,
        description: pkgData.description,
        demoPath: path.relative(path.resolve('.'), path.join(ROOT_FOLDER, path.dirname(pkg), 'demo/index.html'))
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}
