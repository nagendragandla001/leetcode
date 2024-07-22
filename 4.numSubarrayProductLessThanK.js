function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) {
    return 0;
  }

  let left = 0;
  let curr = 1;
  let ans = 0;

  console.log('Input : ', nums, k);
  console.log(' ------- \n\n');

  for (let right = 0; right < nums.length; right++) {
    console.log(`Step ${right} --- ${nums[right]}  Curr`, curr);

    curr *= nums[right];

    console.log(' Current is: ', curr);

    while (curr >= k) {
      console.log('Inside while: before ', curr, left);

      curr /= nums[left];
      console.log('Inside while: After ', curr, left);

      left++;
    }
    console.log(' Before aNSWER: ', ans);

    ans += right - left + 1;
    console.log('After Answer is: ', ans);
    console.log('\n\n');
  }

  return ans;
}

const input = [10, 5, 2, 6, 4];
const k = 100;

const result = numSubarrayProductLessThanK(input, k);

console.log('The Result is', result);
