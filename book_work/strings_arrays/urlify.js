function urlify(string) {
  let startIdx = 0;

  while (string[0] === ' ') {
    string = string.slice(1);
    startIdx++
  }

  let endIdx = string.length - 1

  while (string[endIdx] === ' ') {
    string = string.slice(0, endIdx);
    endIdx--
  }
  console.log(string.length)

  let start;
  let end;

  for (let i = string.length - 1; i >= 0; i--) {
    let char = string[i];


    if ((char === ' ') && (start === undefined)) {
      start = i;
      end = i
    } else if ((char === ' ')) {
      end = i
    } else if (start && end) {
      string = string.slice(0, end) + '%20' + string.slice(start + 1);
      start = undefined
      end = undefined;
    }
  }

  return string;
}

console.log(urlify('af af   asf'))
console.log(urlify('asdf as d  f   asdf'))
console.log(urlify('a b c d e f h i'))
console.log(urlify('       a b c d e f h i        '))
