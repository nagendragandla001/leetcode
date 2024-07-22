const longestOnes = function (nums, k) {
  let left = 0;
  let curr = 0;
  let ans = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] == '0') {
      curr += 1;
    }

    while (curr > k) {
      if (nums[left] == '0') {
        curr -= 1;
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

const input = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const result = longestOnes(input, 2);

console.log(result);
