const minStartValue = function (nums) {
  let minVal = 0;
  let total = 0;

  for (let num of nums) {
    total += num;
    minVal = Math.min(minVal, total);
  }

  return -minVal + 1;
};

const input = [-3, 2, -3, 4, 2];

const result = minStartValue(input);

console.log(result);
