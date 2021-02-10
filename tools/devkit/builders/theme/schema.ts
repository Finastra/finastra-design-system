import { JsonObject, JsonArray } from '@angular-devkit/core';

export interface Schema extends JsonObject {
  inputPath: string;
  outputPath: string;
  silent: boolean;
  outputStyle: 'compressed' | 'expanded';
  sourceMap: boolean;
  assets: string[];
}
