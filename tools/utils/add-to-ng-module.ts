import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import { createSourceFile, ScriptTarget } from 'typescript';
import { addExportToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { Rule } from '@angular-devkit/schematics';

interface ComponentOptions {
  modulePath: string;
  module: string;
  filename: string;
}

export function addToNgModule(options: ComponentOptions): Rule {
  return (host: Tree) => {
    const text = host.read(options.modulePath);

    if (text && text.length) {
      const exportRecorder = host.beginUpdate(options.modulePath);
      const code = createSourceFile(options.modulePath, text.toString(), ScriptTarget.Latest, true);
      const exportChanges = addExportToModule(code, options.modulePath, options.module, `./${options.filename}`);

      for (const change of exportChanges) {
        if (change instanceof InsertChange) {
          exportRecorder.insertLeft(change.pos, change.toAdd);
        }
      }
      host.commitUpdate(exportRecorder);
    }

    return host;
  };
}
