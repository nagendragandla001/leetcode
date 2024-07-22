const findMaxAverage = function (nums, k) {
  let curr = 0;

  for (let i = 0; i < k; i++) {
    curr += nums[i];
  }

  let ans = curr;

  for (let i = k; i < nums.length; i++) {
    curr += nums[i] - nums[i - k];

    ans = Math.max(ans, curr);
  }

  return ans / k;
};

const input = [1, 12, -5, -6, 50, 3];
const k = 4;

// const input = [5];
// const k = 1;

const result = findMaxAverage(input, k);

console.log(result);
