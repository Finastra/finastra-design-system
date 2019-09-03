import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import { updateJsonFile } from './update-json-file';

interface TsConfigPartialType {
  compilerOptions: {
    baseUrl: string;
    paths: {
      [key: string]: string[];
    };
  };
}

export function registerLocalPackage(dest: string, packageName: string) {
  return (host: Tree) => {
    if (!host.exists('tsconfig.json')) {
      return host;
    }

    return updateJsonFile(host, 'tsconfig.json', (tsconfig: TsConfigPartialType) => {
      if (!tsconfig.compilerOptions.paths) {
        tsconfig.compilerOptions.paths = {};
      }

      if (!tsconfig.compilerOptions.paths[packageName]) {
        tsconfig.compilerOptions.paths[packageName] = [];
      }

      const paths = tsconfig.compilerOptions.paths[packageName];

      const packages = new Set(paths);
      packages.add(`${dest}/src/index.ts`);

      if (packages.size !== paths.length) {
        paths.push(`${dest}/src/index.ts`);
      }
    });
  };
}
