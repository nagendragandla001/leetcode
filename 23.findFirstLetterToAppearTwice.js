function findFirstLetterToAppearTwice(str) {
  const set = new Set();

  for (let ch of str) {
    if (set.has(ch)) {
      return ch;
    }

    set.add(ch);
  }
  return '';
}

const input = 'abcdeda';
const result = findFirstLetterToAppearTwice(input);

console.log(result);
