function twoSums(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];

    if (map.has(comp)) {
      return [map.get(comp), i];
    }
    map.set(nums[i], i);
  }

  return [-1, -1];
}

const input = [2, 7, 11, 15];
const result = twoSums(input, 9);
console.log(result);

/**
 * input [2, 7, 11, 15]
 * target: 9
 *
 * Solution:
 *
 *
 */
