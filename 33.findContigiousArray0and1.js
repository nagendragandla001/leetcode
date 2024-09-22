function findContigiousArratZeroAndOne(nums) {
  let ans = -Infinity;
  const map = new Map();

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      sum--;
    } else {
      sum++;
    }

    if (sum === 0) {
      ans = Math.max(ans, i + 1);
    } else if (map.has(sum)) {
      ans = Math.max(ans, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return ans === -Infinity ? 0 : ans;
}

const input = [0, 1];
const result = findContigiousArratZeroAndOne(input);
console.log(result);
