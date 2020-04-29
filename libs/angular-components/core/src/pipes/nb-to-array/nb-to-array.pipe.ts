import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nbToArray' })
export class NbToArrayPipe implements PipeTransform {
  transform(value: number): number[] {
    return Array(value)
      .fill(0)
      .map((x, i) => i + 1);
  }
}
