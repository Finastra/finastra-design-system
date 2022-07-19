import {
  addProjectConfiguration, formatFiles, generateFiles, installPackagesTask, joinPathFragments,
  names, Tree, updateJson
} from '@nrwl/devkit';

export default async function (host: Tree, schema: any) {

  // Starts with fds- or fds
  const regex=/^(fds\-|fds)/i
  schema.name = schema.name.replace(regex,'');

  const normalizedNames = names(schema.name);
  const version = require('./libs/web-components/button/package.json').version
  generateFiles(host, joinPathFragments(__dirname, './files'), `./libs/web-components/${normalizedNames.fileName}`, {
    ...normalizedNames,
    version
  });
  updateJson(host, `./libs/web-components/tsconfig.json`, (json) => {
    json.references.push({ path: normalizedNames.fileName });
    return json;
  });
  addProjectConfiguration(host, normalizedNames.fileName, {
    root: `libs/web-components/${normalizedNames.fileName}`,
    targets: {
      lint: {
        executor: '@nrwl/linter:eslint',
        options: {
          lintFilePatterns: [`libs/web-components/${normalizedNames.fileName}/src/**/*.ts`]
        }
      }
    },
    tags: ['web-components']
  });
  await formatFiles(host);
  return () => {
    installPackagesTask(host, true);
  };
}
