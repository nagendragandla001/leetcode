/**
 * You are given a string s and an integer k.
 * Find the length of the longest substring that contains at most k distinct characters.
 * @param {*} str
 * @param {*} k
 *
 * const input = 'eceba'; const k = 2;
 * Expected Output = 3 (ece) => e and c
 */
function findLongestSubStringWithInK(str, k) {
  const map = new Map();
  let left = 0;
  let ans = 0;

  for (let right = 0; right < str.length; right++) {
    map.set(str[right], (map.get(str[right]) || 0) + 1);

    while (map.size > k) {
      map.set(str[left], map.get(str[left]) - 1);

      if (map.get(str[left]) == 0) {
        map.delete(str[left]);
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

const input = 'eceba';
const k = 2;

const result = findLongestSubStringWithInK(input, k);
console.log(result);
