function stringCompression(string) {
  let newStr = '';
  let currentCount = 1
  let dupes = false;

  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    let next = string[i + 1];

    if (current === next) {
      currentCount += 1;
      dupes = true;
    } else {
      newStr += (current + currentCount);
      currentCount = 1
    }
  }

  return dupes ? newStr : string
}

console.log(stringCompression('abcdef')) // 'abcdef'
console.log(stringCompression('abbcbbddef')) // 'a1b2c1b2d2e1f1'
console.log(stringCompression('abbbccdd')) // 'a1b3c2d2'
('abcc')
('a1b1c2')
