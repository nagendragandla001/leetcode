/**
 * Given a string s, determine if all characters have the same frequency.
 * For example, given s = "abacbc", return true. All characters appear twice.
 * Given s = "aaabb", return false. "a" appears 3 times, "b" appears 2 times. 3 != 2.
 */

function checkAllCharsHaveEqualNoOfOccurrences(str) {
  const map = new Map();

  for (const ch of str) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  const set = new Set();

  for (const val of map.values()) {
    set.add(val);
  }

  return set.size === 1;
}

const s = 'abacbc';

const result = checkAllCharsHaveEqualNoOfOccurrences(s);
console.log(result);
