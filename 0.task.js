/**
 * step1: create an empty output array.
 * create start and end indexes
 */
function squereSortedArray(nums) {
  const output = new Array(nums.length);
  let start = 0;
  let end = nums.length - 1;
  let index = nums.length - 1;

  while (start <= end) {
    if (Math.abs(nums[start]) < Math.abs(nums[end])) {
      output[index] = nums[end] * nums[end];
      end--;
    } else {
      output[index] = nums[start] * nums[start];
      start++;
    }
    index--;
  }

  return output;
}

const input = [-10, -4, -1, 0, 2, 3, 7];
// output = [0, 1, 4, 9, 16, 49, 100]

const result = squereSortedArray(input);
console.log(result);
