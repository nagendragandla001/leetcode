const squereSortedArray = function (nums) {
  const output = [];

  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      output[index] = nums[right] * nums[right];
      right--;
    } else {
      output[index] = nums[left] * nums[left];
      left++;
    }
    index--;
  }

  return output;
};

const input = [-10, -5, -1, 0, 3, 7];

const res = squereSortedArray(input);

console.log(res);
