import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { executeNgPackagrBuilder } from '@angular-devkit/build-angular';
import { readFileSync, writeFileSync } from 'fs-extra';
import { sync as globby } from 'globby';
import { join, resolve } from 'path';
import { Observable } from 'rxjs';

import { Schema } from './schema';

function componentsBuilder(options: Schema, context: BuilderContext): Observable<BuilderOutput> {
  const project = JSON.parse(readFileSync(options.project).toString());
  const src = join(process.cwd(), options.project.replace('/ng-package.json', ''));
  const dest = resolve(src, project.dest);

  return new Observable((subscriber) => {
    executeNgPackagrBuilder(
      {
        project: options.project,
        tsConfig: options.tsConfig
      },
      context
    ).subscribe((result) => {
      subscriber.next(result);

      if (result.success === true) {
        try {
          for (const asset of globby(['**/_*.theme.scss'], { expandDirectories: true, cwd: src })) {
            const from = join(src, asset);
            const to = join(dest, asset.replace('src/', ''));

            let scss = readFileSync(from, { encoding: 'utf-8' });
            scss = scss.replace('angular-theme', '~@finastra/angular-theme');

            writeFileSync(to, scss.toString());
          }
        } catch (err) {
          subscriber.error(err);
        }

        subscriber.complete();
      }
    });
  });
}

export default createBuilder(componentsBuilder);
