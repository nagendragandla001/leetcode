const findPlayersWithZeroOrOneLosses = (matches) => {
  const output = [[], []];

  /**
   * 1. Loop the matches and separate the winners and loosers map
   * 2. Loop the winners Map and check that key should not be available in loosers
   */

  const winners = new Map();
  const loosers = new Map();

  for (let i = 0; i < matches.length; i++) {
    if (winners.has(matches[i][0])) {
      winners.set(matches[i][0], winners.get(matches[i][0]) + 1);
    } else {
      winners.set(matches[i][0], 1);
    }

    if (loosers.has(matches[i][1])) {
      loosers.set(matches[i][1], winners.get(matches[i][0]) + 1);
    } else {
      loosers.set(matches[i][1], 1);
    }
  }

  for ([key, value] of winners) {
    if (!loosers.has(key)) {
      output[0].push(key);
    }
  }

  for ([key, value] of loosers) {
    if (value === 1) {
      output[1].push(key);
    }
  }

  const winnerList = output[0].sort((a, b) => a - b);
  const loosersList = output[1].sort((a, b) => a - b);

  console.log(winnerList, loosersList);

  return output;
};

const input = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
];

findPlayersWithZeroOrOneLosses(input);
