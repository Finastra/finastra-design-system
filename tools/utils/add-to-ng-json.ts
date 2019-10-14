import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import { addExportToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { Rule, SchematicContext } from '@angular-devkit/schematics';
import { readJsonInTree, updateJsonInTree, getWorkspacePath } from '@nrwl/workspace';

interface NgJsonOptions {
  projectName: string;
}

interface AngularArchitect {
  [key: string]: any;

  test: {
    builder: string;
    options: Record<string, any>;
  };

  lint: {
    builder: string;
    options: Record<string, any>;
  };
}

interface AngularProject {
  [key: string]: any;

  root: string;
  projectType: 'library';
  sourceRoot: string;
  prefix: 'uxg';

  architect: AngularArchitect;
}

type AngularJson = Record<string, any | AngularProject>;

export function addToNgJson(options: NgJsonOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    updateJsonInTree(getWorkspacePath(host), (json: AngularJson) => {
      const project: AngularProject = {
        projectType: 'library',
        root: `libs/angular-components/${options.projectName}`,
        sourceRoot: `libs/angular-components/${options.projectName}`,
        prefix: 'uxg',

        architect: {
          lint: {
            builder: '@angular-devkit/build-angular:tslint',
            options: {
              tsConfig: [
                `libs/angular-components/${options.projectName}/tsconfig.lib.json`,
                `libs/angular-components/${options.projectName}/tsconfig.spec.json`
              ],
              exclude: ['**/node_modules/**', `!libs/angular-components/${options.projectName}/**`]
            }
          },
          test: {
            builder: '@nrwl/jest:jest',
            options: {
              jestConfig: `libs/angular-components/${options.projectName}/jest.config.js`,
              tsConfig: `libs/angular-components/${options.projectName}/tsconfig.spec.json`,
              setupFile: `libs/angular-components/${options.projectName}/test-setup.ts`
            }
          }
        },
        schematics: {
          '@nrwl/angular:component': {
            styleext: 'scss'
          }
        }
      };

      json.projects[options.projectName] = project;
      return json;
    })(host, context);
  };
}
