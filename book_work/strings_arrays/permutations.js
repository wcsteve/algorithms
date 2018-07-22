//Edge cases: check do white spaces matter, do uppercase/lowercase matter

//Solution 1: count the characters in one string. Compare each character charCount
// to string two.
//Time Space Complexity: time - O(n) space - O(n)
    //Time: Iterate each string once
    //Space: A count object holding each character

//Solution 2: Sort both strings and check for equality
//Time Space Complexity: time - O(n log(n)) space - O(n)
    //Time: mergeSort
    //Space: 

function isPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let charCount1 = charCount(str1);

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (charCount1[char]) {
      charCount1[char] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

function charCount(string) {
  let count = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    count[char] = (count[char] += 1) || (count[char] = 1);
  }

  return count;
}

console.log(isPermutation('abba', 'baab'))
console.log(isPermutation('abeba', 'baabe'))
console.log(isPermutation('abba', 'bab'))

//Time Space Complexity: time - O(n) space - O(n)
    //Time:
    //Space:
