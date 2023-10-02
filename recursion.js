/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

// or with index:

// function product(nums, idx = 0) {
//   if (idx === nums.length) return 1;
//   return nums[idx] * product(nums, idx + 1);
// }


/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) return words[0].length;
  return Math.max(words[0].length, longest(words.slice(1)));
}

// or with index:

// function longest(words, idx = 0, currentLongest = 0) {
//   if (idx === words.length) return currentLongest;
//   currentLongest = Math.max(words[idx].length, currentLongest);
//   return longest(words, idx + 1, currentLongest);
// }


/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return '';
  return str[0] + everyOther(str.slice(2));
}

// or with index:

// function everyOther(str, idx = 0, newStr = "") {
//   if (idx >= str.length) return newStr;
//   newStr += str[idx];
//   return everyOther(str, idx + 2, newStr);
// }


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1));
}

// or with index:

// function isPalindrome(str, idx = 0) {
//   let leftIdx = idx;
//   let rightIdx = str.length - idx - 1;
//   if (leftIdx >= rightIdx) return true;
//   if (str[leftIdx] !== str[rightIdx]) return false;
//   return isPalindrome(str, idx + 1);
// }


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}


/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return '';
  return str[str.length - 1] + revString(str.slice(0, -1));
}

// or with index:

// function revString(str, idx = 0, newStr = "") {
//   if (newStr.length === str.length) return newStr;
//   newStr += str[str.length - 1 - idx];
//   return revString(str, idx + 1, newStr);
// }


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }

  return strings;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
