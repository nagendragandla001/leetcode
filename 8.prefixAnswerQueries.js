const prefixAnsweredQueries = function (nums, queries, limit) {
  let prefix = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }

  let ans = [];

  for (const [x, y] of queries) {
    const current = prefix[y] - prefix[x] + nums[x];

    ans.push(current < limit);
  }

  return ans;
};

const input = [1, 6, 3, 2, 7, 2];
const queries = [
  [0, 3],
  [2, 5],
  [2, 4],
];

const limit = 13;

// Expected Output = [true, false, true]

const res = prefixAnsweredQueries(input, queries, limit);

console.log(res);
