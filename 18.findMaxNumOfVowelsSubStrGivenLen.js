function findMaxNoOfVowelsInSubStrOfGivenLen(str, k) {
  let left = 0;
  let ans = 0;
  let count = 0;

  while (left < k) {
    if (isVowel(str[left])) {
      count++;
    }
    left++;
  }

  ans = count;

  while (left <= str.length) {
    if (isVowel(str[left])) {
      count++;
    }

    if (isVowel(str[left - k])) {
      count--;
    }

    ans = Math.max(ans, count);
    left++;
  }

  return ans;
}

function isVowel(c) {
  return c === 'a' || c === 'i' || c === 'o' || c === 'u';
}

const str = 'abciiidef';
const k = 3;

const result = findMaxNoOfVowelsInSubStrOfGivenLen(str, k);
console.log(result);
