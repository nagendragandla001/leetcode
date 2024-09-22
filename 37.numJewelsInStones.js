function numJewelsInStones(jewels, stones) {
  const map = new Map();
  let count = 0;

  for (const stone of stones) {
    map.set(stone, (map.get(stone) || 0) + 1);
  }

  for (const jewel of jewels) {
    if (map.has(jewel)) {
      count += map.get(jewel);
    }
  }

  return count;
}

const result = numJewelsInStones('aA', 'aAAbbbb');
console.log(result);
