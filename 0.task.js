function findLongestSubArraySumWithInK(nums, k) {
  let left = (curr = ans = 0);

  for (let right = 0; right < nums.length; right++) {
    curr += nums[right];

    while (curr > k) {
      curr -= nums[left];
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

const input = [3, 2, 1, 3, 1, 1];
const k = 5;

const result = findLongestSubArraySumWithInK(input, k);
console.log(result);

/**
 * Description:
 * Let's go ahead with Sliding window.
 * input  = [3,2,1,3,1,1]
 * k = 5
 *
 *
 *
 */
