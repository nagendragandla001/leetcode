function isPolindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const input = 'racecar';
const result = isPolindrome(input);

console.log(result);
