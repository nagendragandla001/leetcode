function getEqualSubStrWithinBudget(s1, s2, maxCost) {
  if (s1.length !== s2.length) {
    return 0;
  }

  let ans = 0;
  let left = 0;
  let count = 0;

  for (let right = 0; right < s1.length; right++) {
    count += Math.abs(s1[right].charCodeAt() - s2[right].charCodeAt());

    while (count > maxCost) {
      count -= Math.abs(s1[left].charCodeAt() - s2[left].charCodeAt());
      left++;
    }

    ans = Math.max(ans, count);
  }
  return ans;
}

const s1 = 'abcd';
const s2 = 'bcdf';
const maxCost = 3;

const result = getEqualSubStrWithinBudget(s1, s2, maxCost);
console.log(result);
