function backSpaceCompare(s, t) {
  function verify(str) {
    const stack = [];
    for (let c of str) {
      if (c === '#') {
        stack.pop();
      } else {
        stack.push(c);
      }
    }

    return stack;
  }

  function convertArrToStr(arr) {
    let str = '';

    for (let s of arr) {
      str += s;
    }
    return str;
  }

  const sResult = convertArrToStr(verify(s));
  const tResult = convertArrToStr(verify(t));

  return sResult === tResult;
}

const result = backSpaceCompare('ab#c', 'ad#c');

console.log(result);
