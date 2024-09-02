function findMaximumNoOfBaloons(text) {
  let map = new Map();
  let count = Number.POSITIVE_INFINITY;

  for (const ch of text) {
    const val = ch === 'l' || ch === 'o' ? 0.5 : 1;
    map.set(ch, (map.get(ch) || 0) + val);
  }

  for (const ch of 'balloon') {
    if (!map.has(ch)) {
      return 0;
    }
    count = Math.min(count, map.get(ch));
  }

  return Math.floor(count);
}

const input = 'nllooba';
const result = findMaximumNoOfBaloons(input);

console.log(result);
