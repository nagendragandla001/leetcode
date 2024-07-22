function waysToSplitArray(nums) {
  let prefix = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }

  let ans = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    let left = prefix[i];
    let right = prefix[nums.length - 1] - prefix[i];

    if (left >= right) {
      ans++;
    }
  }

  return ans;
}

function anotherSolution(nums) {
  let ans = 0;
  let left = 0;
  let total = 0;

  for (const num of nums) {
    total += num;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    let right = total - left;

    if (left >= right) {
      ans++;
    }
  }

  return ans;
}

const input = [10, 4, -8, 7];

const result = anotherSolution(input);
console.log(result);
