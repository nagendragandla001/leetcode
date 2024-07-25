function missingNumber(nums) {
  const set = new Set(nums);
  const len = nums.length;

  let index = 0;

  while (index < len) {
    if (!set.has(len - index)) {
      return len - index;
    }
    index++;
  }

  return -1;
}

const input = [3, 0, 1];

const result = missingNumber(input);
console.log(result);
