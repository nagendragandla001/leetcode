function isAsci(char) {
  const asci = char.charCodeAt(0);
  return (asci >= 65 && asci <= 90) || (asci >= 97 && asci <= 122);
}

function reverseOnlyLetters(str) {
  let output = '';
  let right = str.length - 1;
  let left = 0;

  while (left < str.length) {
    if (!isAsci(str[left])) {
      output += str[left];
      left++;
    } else if (!isAsci(str[right])) {
      right--;
    } else {
      output += str[right];
      left++;
      right--;
    }
  }

  return output;
}

const s = 'a-b123C-dEf-ghIj!';

const result = reverseOnlyLetters(s);
console.log(result);
