import { InitialsPipe } from './initials.pipe';

describe('InitialsPipe', () => {
  it('create an instance', () => {
    const pipe = new InitialsPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns proper initials', () => {
    const pipe = new InitialsPipe();
    const name = 'Iam LegendDairy';
    expect(pipe.transform(name, null)).toEqual('IL');
  });
});
