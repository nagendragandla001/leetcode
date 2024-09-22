function canConstruct(ransomNote, magazine) {
  const map = new Map();

  if (ransomNote.length > magazine.length) {
    return false;
  }

  for (const val of magazine) {
    map.set(val, (map.get(val) || 0) + 1);
  }

  for (const val of ransomNote) {
    if (!map.has(val) || map.get(val) === 0) {
      return false;
    }

    map.set(val, map.get(val) - 1);
  }

  return true;
}

const ransomNote = 'aa';
const magazine = 'ab';

const result = canConstruct(ransomNote, magazine);

console.log(result);

map = {
  a: 2,
  b: 1,
};
