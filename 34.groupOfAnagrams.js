function groupOfAnagrams(strs) {
  const map = new Map();
  const output = [];

  for (const str of strs) {
    const sorted = str.split('').sort().join('');

    if (!map.has(sorted)) {
      map.set(sorted, []);
    }

    map.get(sorted).push(str);
  }

  for (const val of map.values()) {
    output.push(val);
  }

  return output.sort((a, b) => a.length - b.length);
}

const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// output = [["bat"], ["tan", "nat"], ["eat", "tea", "ate"]]

const result = groupOfAnagrams(input);
console.log(result);
