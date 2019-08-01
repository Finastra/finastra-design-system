import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  applyTemplates,
  move,
  mergeWith,
  chain,
  noop
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

import gitParse from 'parse-git-config';
import gitPath from 'git-config-path';

import { Schema } from './schema';
import { join } from 'path';
import { readFile } from 'fs-extra';

export default function (schema: Schema): Rule {
  return async (host: Tree, context: SchematicContext) => {
    const gcfg = gitParse.sync({ path: gitPath({ type: 'global' }), cwd: '/' }) || {};
    const lcfg = gitParse.sync({ path: gitPath({ type: 'local' }), cwd: '/' }) || {};

    const user = {
      name: lcfg.user.name || gcfg.user.name,
      email: lcfg.user.email || gcfg.user.email
    };
    const pkg = JSON.parse((await readFile(join(process.cwd(), './package.json'))).toString());
    const filename = strings.dasherize(schema.name);

    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...strings,
        className: strings.classify(schema.name),
        filename,
        version: pkg.version,
        author: `${user.name} <${user.email}>`
      }),
      move(`libs/angular-components/src/${filename}`)
    ]);
    return chain([
      mergeWith(templateSource),
      // updateTsConfig(options),
    ]);
  };
}
