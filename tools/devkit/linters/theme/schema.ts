import { JsonObject, JsonArray } from '@angular-devkit/core';

export interface Schema extends JsonObject {
  project: string;
  silent: boolean;
  fix: boolean;
}
