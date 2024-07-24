/**
 * input: [0,1,0,3,12]
 * start : 0
 *
 * For Loop
 *
 * index: 0 -> nums[0] is 0. condition is false. Continue. output will be [0,1,0,3,12]
 * index: 1 => nums[1] is 1. condition is true. -> nums[start] -> nums[0] = 1. start++; -> final output [1, 1, 0,3, 12]
 *
 * start = 1;
 *
 * index: 2 -> nums[2] is 0. Condition is false, continue [1,1,0,3,12]
 * index: 3 => nums[3] is 3, Condition is true. -> nums[start] -> nums[1] = 3 and start++ -> [1,3,0,3,12]
 *
 * start = 2;
 *
 * index: 4 -> nums[4] is 12, Condition is true -> nums[start] -> nums[2] = 12 ans start++ -> [1,3,12,3,12];
 * start = 3
 *
 *
 * while loop tp make rest of the values to zero
 *
 * while(start < nums.length) -> 3 < 5 === true -> num[3] = 0 and start++ [1,3,12,0]
 * 4 < 5 num[4] = 0; start++ start will become 5; [1,3,12,0,0]
 *
 * 5< 5 false.
 *
 * the final output will be
 *
 * @param {*} nums
 */

function moveZeroToEnd(nums) {
  let start = 0;
  console.log('Before -- ', nums);

  for (let num of nums) {
    if (num !== 0) {
      nums[start] = num;
      start++;
    }
  }

  while (start < nums.length) {
    nums[start] = 0;
    start++;
  }

  console.log('After --- ', nums);
}

const input = [0, 1, 0, 3, 12];

moveZeroToEnd(input);
