function isValid(str) {
  let stack = [];
  const matching = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (const ch of str) {
    if (ch in matching) {
      stack.push(ch);
    } else {
      if (!stack.length) {
        return false;
      }

      let previousOpening = stack.pop();
      if (matching[previousOpening] != ch) {
        return false;
      }
    }
  }

  return !stack.length;
}
const input = '{}[]()';

const result = isValid(input);
console.log(result);
