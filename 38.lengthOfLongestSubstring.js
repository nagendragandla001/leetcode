function lengthOfLongestSubstring(str) {
  const map = new Map();

  let left = 0;
  let right = 0;
  let max = 0;

  while (right < str.length) {
    map.set(str[right], (map.get(str[right]) || 0) + 1);

    while (map.get(str[right]) > 0) {
      map.set(str[left], map.get(str[left]) - 1);
      left++;
    }

    max = Math.max(max, right - 0 + 1);
    right++;
  }

  return max;
}

const result = lengthOfLongestSubstring('aaaaaaa');
