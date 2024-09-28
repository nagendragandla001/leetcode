function removeAllAdjucentDuplicates(str) {
  if (!str) {
    return '';
  }
  let stack = [];

  for (const ch of str) {
    let prev = stack.length && stack[stack.length - 1];

    if (prev === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.join('');
}

const input = 'abbaca';
const result = removeAllAdjucentDuplicates(input);
console.log(result);
