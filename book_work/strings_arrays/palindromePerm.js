function palindromePerm(string) {
  const dupeCount = countLetter(string);
  console.log(dupeCount)
  if ((dupeCount * 2) === string.length || (dupeCount * 2) === (string.length - 1)){
    return true
  } else {
    return false;
  }

}

function countLetter(string) {
  let count = 0;
  const letters = {}

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (letters[char]) {
      count += 1;
      letters[char] = false;
    } else {
      letters[char] = true;
    }
  }

  return count;
}

console.log(palindromePerm('aabb'))
console.log(palindromePerm('aacbb'))
console.log(palindromePerm('aacbbd'))
