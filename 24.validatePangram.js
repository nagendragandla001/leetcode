/**
 * Pangram is a sentance where every letter of the english alphabet appears at least once.
 * @param {*} str
 *
 * solution:
 *
 * using set
 */
function isPangram(str) {
  const set = new Set();

  for (let ch of str) {
    set.add(ch);
  }

  return set.size === 26;
}

const input = 'thequickbrownfoxjumpsoverthelazydog';
const result = isPangram(input);
console.log(result);
