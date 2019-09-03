import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  applyTemplates,
  move,
  mergeWith,
  chain
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

import gitParse from 'parse-git-config';
import gitPath from 'git-config-path';

import { Schema } from './schema';
import { join } from 'path';
import { readFile } from 'fs-extra';

import { registerLocalPackage, addToNgModule } from '../../utils';

export default function(schema: Schema): Rule {
  return async (host: Tree, context: SchematicContext) => {
    const globalGitConfig = gitParse.sync({ path: gitPath({ type: 'global' }), cwd: '/' }) || {};
    const localGitConfig = gitParse.sync({ path: gitPath({ type: 'local' }), cwd: '/' }) || {};

    const user = {
      name: (localGitConfig.user && localGitConfig.user.name) || globalGitConfig.user.name,
      email: (localGitConfig.user && localGitConfig.user.email) || globalGitConfig.user.email
    };

    const pkg = JSON.parse((await readFile(join(process.cwd(), './package.json'))).toString());
    const filename = strings.dasherize(schema.name);
    const dest = `libs/angular-components/${filename}`;
    const classNamePrefix = strings.classify(schema.name);

    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...strings,
        className: classNamePrefix,
        filename,
        version: pkg.version,
        author: `${user.name} <${user.email}>`
      }),
      move(dest)
    ]);

    return chain([
      addToNgModule({
        modulePath: 'libs/angular-components/components.module.ts',
        module: `${classNamePrefix}Module`,
        filename: `${filename}/${filename}.module`
      }),
      mergeWith(templateSource),
      registerLocalPackage(dest, `@ffdc/uxg-angular-components/${filename}`)
    ]);
  };
}
