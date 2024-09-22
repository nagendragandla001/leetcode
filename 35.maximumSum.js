function findMaxSum(nums) {
  let max = -1;
  const map = new Map();

  for (const num of nums) {
    const right = num % 10;
    const left = Math.trunc(num / 10);

    if (map.has(right + left)) {
      const val = map.get(right + left) + num;
      map.set(right + left, val);
      max = Math.max(max, val);
    } else {
      map.set(right + left, num);
    }
  }

  return max;
}

const input = [10, 12, 19, 14];
const result = findMaxSum(input);
console.log(result);
