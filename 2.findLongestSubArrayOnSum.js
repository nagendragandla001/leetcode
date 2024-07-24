/**
 * constraint metric is the sum of the window
 *
 * @param {[3,2,1,3,1,1]} nums
 * @param {5} size
 */

const findLongestSubArrayOnSum = (nums, size) => {
  let curr = 0;
  let left = 0;
  let answer = 0;

  for (let right = 0; right < nums.length; right++) {
    curr += nums[right];

    while (curr > size) {
      curr -= nums[left];
      left++;
    }

    answer = Math.max(answer, right - left + 1);
  }

  return nums.slice(answer, size);
};

const input = [3, 1, 2, 7, 4, 2, 1, 1];

const result = findLongestSubArrayOnSum(input, 8);

console.log(result);
