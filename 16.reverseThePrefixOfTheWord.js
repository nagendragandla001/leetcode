/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let output = '';

  let start = 0;
  let segment = '';

  while (start < word.length) {
    segment += word[start];

    if (word[start] === ch) {
      for (let char of segment) {
        output = char + output;
      }

      const rest = word.slice(start + 1);
      output += rest;
      break;
    } else {
      start++;
    }
  }

  return output || word;
};

const input = 'Nagendra';

const result = reversePrefix(input, 'd');
console.log(result);
