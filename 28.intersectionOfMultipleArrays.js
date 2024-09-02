/**
 * Given a 2D array nums that contains n arrays of distinct integers,
 * return a sorted array containing all the numbers that appear in all n arrays.
 *
 * For example, given nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]], return [3, 4].
 * 3 and 4 are the only numbers that are in all arrays.
 * @param {*} nums
 */

function intersectionOfMultipleArrays(nums) {
  let map = new Map();
  let output = [];

  for (let arr of nums) {
    for (let x of arr) {
      map.set(x, (map.get(x) || 0) + 1);
    }
  }

  let n = nums.length;

  for (const [key, val] of map) {
    if (val === n) {
      output.push(key);
    }
  }

  output.sort((a, b) => a - b);

  return output;
}

const input = [
  [3, 1, 2, 4, 5],
  [1, 2, 3, 4],
  [3, 4, 5, 6],
];
