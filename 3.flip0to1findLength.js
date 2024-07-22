const findLength = (str) => {
  let left = (curr = ans = 0);

  console.log('Input is: ', str);
  console.log('---------- \n\n');

  for (let right = 0; right < str.length; right++) {
    console.log(`Step ${right} is: `, str[right]);

    if (str[right] === '0') {
      curr++;
    }

    console.log('Current is: ', curr);

    while (curr > 1) {
      console.log('Inside while ', str[left], left, curr);
      if (str[left] === '0') {
        curr -= 1;
      }
      left++;
    }

    console.log(
      'Ans: ',
      ans,
      ' right: ',
      right,
      ' left: ',
      left,
      `   (${right} - ${left} + 1)`,
      right - left + 1
    );

    ans = Math.max(ans, right - left + 1);
    console.log('Final Ans - -', ans);
    console.log('\n\n');
  }

  return ans;
};
const input = '1101100111';

const result = findLength(input);
console.log(result);
