var reverseWords = function (s) {
  let output = '';
  let subString = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' || s.length === i + 1) {
      if (s.length === i + 1) {
        subString = s[i] + subString;
      } else {
        subString = subString + s[i];
      }
      output += subString;
      subString = '';
    } else {
      subString = s[i] + subString;
    }
  }
  return output;
};

const input = 'Hello Nagendra gandla';
const resp = reverseWords(input);
console.log(resp);

// Output: "olleH ardnegaN aldnag";
