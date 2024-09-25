/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let convertToKey = (arr) => {
    let key = '';
    for (const num of arr) {
      key += num + ',';
    }

    return key;
  };

  let dic = new Map();
  for (const arr of grid) {
    let key = convertToKey(arr);
    dic.set(key, (dic.get(key) || 0) + 1); // B
  }

  let dic2 = new Map();
  for (let col = 0; col < grid[0].length; col++) {
    let currentCol = [];
    for (let row = 0; row < grid.length; row++) {
      currentCol.push(grid[row][col]); // C
    }

    let key = convertToKey(currentCol);
    dic2.set(key, (dic2.get(key) || 0) + 1);
  }

  let ans = 0;
  for (const [key, val] of dic) {
    ans += val * dic2.get(key) || 0; // A
  }

  return ans;
};

const input = [
  [13, 13],
  [13, 13],
];
const input1 = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];
const result = equalPairs(input1);

console.log(result); // 1
