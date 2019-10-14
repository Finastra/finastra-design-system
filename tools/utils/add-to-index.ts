import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import { createSourceFile, ScriptTarget } from 'typescript';
import { InsertChange } from '@schematics/angular/utility/change';
import { Rule } from '@angular-devkit/schematics';

interface ComponentOptions {
  indexPath: string;
  filename: string;
}

export function addToIndex(options: ComponentOptions): Rule {
  return (host: Tree) => {
    const text = host.read(options.indexPath);

    if (text && text.length) {
      const exportRecorder = host.beginUpdate(options.indexPath);
      const code = createSourceFile(options.indexPath, text.toString(), ScriptTarget.Latest, true);
      exportRecorder.insertLeft(code.end, `export * from './${options.filename}'`);
      host.commitUpdate(exportRecorder);
    }

    return host;
  };
}
