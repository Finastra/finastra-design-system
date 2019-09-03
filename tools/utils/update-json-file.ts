import { parseJson, JsonParseMode } from '@angular-devkit/core';
import { Tree } from '@angular-devkit/schematics/src/tree/interface';

type UpdateJsonFn<T> = (obj: T) => T | void;

export function updateJsonFile<T>(host: Tree, path: string, callback: UpdateJsonFn<T>): Tree {
  const source = host.read(path);
  if (source) {
    const sourceText = source.toString('utf-8');
    const json = parseJson(sourceText, JsonParseMode.Loose);
    callback((json as {}) as T);
    host.overwrite(path, JSON.stringify(json, null, 2));
  }
  return host;
}
