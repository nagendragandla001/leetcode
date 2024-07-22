const runningSum = function (nums) {
  const prefix = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }

  return prefix;
};

const input = [1, 2, 3, 4];

// Output = [1,3,6,10]

const res = runningSum(input);

console.log(res);
