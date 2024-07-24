function getAverages(nums, k) {
  if (k === 0) {
    return nums;
  }

  const windowSize = 2 * k + 1;

  const output = new Array(nums.length).fill(-1);

  if (windowSize > nums.length) {
    return output;
  }

  const prefix = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  for (let i = k; i < nums.length - k; i++) {
    const left = i - k;
    const right = i + k;
    const subArr = prefix[right + 1] - prefix[left];
    const avg = Math.trunc(subArr / windowSize);
    output[i] = avg;
  }

  return output;
}

const input = [7, 4, 3, 9, 1, 8, 5, 2, 6];
const k = 3;
const result = getAverages(input, k);
console.log(result);
