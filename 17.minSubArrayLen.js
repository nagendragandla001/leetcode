function minSubArrayLen(target, nums) {
  let left = 0;
  let curr = 0;
  let ans = Infinity;

  for (let right = 0; right < nums.length; right++) {
    curr += nums[right];

    while (curr >= target) {
      ans = Math.min(ans, right - left + 1);
      curr -= nums[left];
      left++;
    }
  }

  return ans !== Infinity ? ans : 0;
}

const target = 7;
const nums = [2, 3, 1, 2, 4, 3];

const result = minSubArrayLen(target, nums);
console.log(result);
