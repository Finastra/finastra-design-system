import { Pipe, PipeTransform } from '@angular/core';
import { get } from 'lodash-es';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe<T> implements PipeTransform {
  transform(collection: Array<T>, property: string): Array<{ key: string; value: [T] }> {
    if (!collection) {
      return null;
    }

    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[get(current, property)]) {
        previous[get(current, property)] = [current];
      } else {
        previous[get(current, property)].push(current);
      }

      return previous;
    }, {});

    return Object.keys(groupedCollection).map(key => ({
      key,
      value: groupedCollection[key],
    }));
  }
}
