export function BKDRHash(str: string): number {
  const seed = 131;
  const seed2 = 137;
  let hash = 0;
  str += 'x';
  const MAX_SAFE_INTEGER = 9007199254740991 / seed2;
  for (let i = 0; i < str.length; i++) {
    if (hash > MAX_SAFE_INTEGER) {
      hash = hash / seed2;
    }
    hash = hash * seed + str.charCodeAt(i);
  }
  return hash;
}
