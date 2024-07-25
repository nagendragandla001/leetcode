function countingElements(nums) {
  let count = 0;
  const set = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i] + 1)) {
      count++;
    }
  }

  return count;
}

const input = [1, 1, 3, 3, 5, 5, 7, 7];
// const input = [1, 2, 3];

const result = countingElements(input);
console.log(result);

// Expected Output = 2
