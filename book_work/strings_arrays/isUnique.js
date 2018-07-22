//Check if the string is ASCII or Unicode string
//Tip: If string is longer than possible unique characters, immediately return
//false (possible 128 or 256)
//Solution 1: Create an array of boolean values, if we encounter a character at i
//index in the alphabet set value to true, if we come back across same index return false
//Time Space Complexity: time - O(n) space - O(1)
  //Time: Longest you would have to iterate is length of string, could argue O(1) as
  // will only have to iterate 128 characters max
  //Space: Only will have to include up to 128 characters

//Solution 2: Sort the string, check if any characters next to each other are equal
//Time Space Complexity: time - O(n log(n)) space - O(n)/O(n log(n))
  //Time: Depends on sorting function being used.  quickSort could have n^2
  //Space: Sorting in place? Otherwise could be using additional datastructurers

//Solution 3: Bitwise manipulation

function quickSort(string) {
  if (string.length <= 1) {
    return string;
  }

  if (typeof string === 'string') {
    string = string.split('')
  }

  let pivot = string[0]
  let left = string.slice(1).filter((char) => { if (pivot > char) return char})
  let right = string.slice(1).filter((char) => { if (char >= pivot) return char})

  return quickSort(left).concat([pivot].concat(quickSort(right)));
}

function allUnique(string) {
  const seen = {};

  for (let i = 0; i < string.length; i++) {
    let current = string[i];

    if (seen[current]) {
      return false;
    } else {
      seen[current] = true;
    }
  }

  return true;
}

function allUniqueTwo(string) {
  let sorted = quickSort(string);

  for (let i = 0; i < sorted.length - 1; i++) {
    let current = sorted[i];
    let next = sorted[i + 1];

    if (current === next) {
      return false;
    }
  }

  return true;
}


console.log(quickSort([1, 4, 5, 3, 2, 6, 7, 8]));
console.log(quickSort('bdfasdfefdc'))

console.log(allUnique('abcdef'))
console.log(allUnique('abbdef'))
console.log(allUniqueTwo('abcdef')) //true
console.log(allUniqueTwo('abbdef')) //false
console.log(allUniqueTwo([2, 3, 52, 3, 6])) //false
console.log(allUniqueTwo([2, 3, 52, 6])) //true
