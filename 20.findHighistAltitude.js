function findHighistAltitude(gain) {
  let maxHeight = 0;
  let result = [0];

  for (let i = 0; i < gain.length; i++) {
    result[i + 1] = gain[i] + result[i];
    maxHeight = Math.max(maxHeight, result[i], result[i + 1]);
  }
  return maxHeight;
}

const gain = [-5, 1, 5, 0, -7];
const result = findHighistAltitude(gain);

console.log(result);
