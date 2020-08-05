// created from https://github.com/lodash/lodash/issues/3298#issuecomment-341685354
import mapValues from 'lodash/mapValues';

interface ChainableFunctions {
  [key: string]: (...args: any[]) => any;
}

export function createChain(chainableFunctions: ChainableFunctions) {
  return function (input: any) {
    let value = input;

    const wrapper = {
      ...mapValues(chainableFunctions, (f) => (...args: any[]) => {
        // lodash always puts input as the first argument
        value = f(value, ...args);
        return wrapper;
      }),
      value: () => value
    };

    return wrapper;
  };
}
