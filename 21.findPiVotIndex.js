function findPivotIndex(nums) {
  const prefix = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = nums[i] + prefix[i - 1];
  }

  if (prefix[0] - prefix[prefix.length - 1] === 0) return 0;

  for (let i = 1; i < nums.length; i++) {
    let left = prefix[i - 1];
    let right = prefix[nums.length - 1] - prefix[i];

    if (left === right) {
      return i;
    }
  }

  return -1;
}

const input = [1, 7, 3, 6, 5, 6];
findPivotIndex(input);
