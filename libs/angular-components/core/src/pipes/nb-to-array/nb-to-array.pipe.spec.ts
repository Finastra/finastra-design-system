import { NbToArrayPipe } from './nb-to-array.pipe';

describe('NbToArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new NbToArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('should create an array', () => {
    const value = 3;
    const pipe = new NbToArrayPipe();

    const result = pipe.transform(value);

    expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
  });
});
