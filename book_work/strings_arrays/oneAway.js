function oneAway(str1, str2) {
  const lengthDiff = Math.abs(str1.length - str2.length)
  if (lengthDiff > 1) {
    return false;
  }

  if ((str1.length - 1) === (str2.length)) {
    return deleteCheck(str1, str2);
  } else if (str1.length + 1 === str2.length) {
    return deleteCheck(str2, str1);
  } else {
    return swapCheck(str1, str2);
  }
}

function deleteCheck(str1, str2) {
  let diff = 0;
  let str1Idx = 0

  for (let i = 0; i < str2.length; i++) {
    let char1 = str1[str1Idx];
    let char2 = str2[i];

    if (char1 !== char2 && diff < 1) {
      str1Idx++
      diff++
      i--;
    } else if (char1 !== char2 && diff === 1) {
      return false;
    } else {
      str1Idx++
    }
  }

  return true;
}

function swapCheck(str1, str2) {
  let diff = 0;

  for (let i = 0; i < str2.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];

    if (char1 !== char2 && diff < 1) {
      diff++
    } else if (char1 !== char2 && diff === 1) {
      return false;
    }
  }

  return true;
}

console.log(oneAway('pale', 'ple'))
console.log(oneAway('ple', 'pale'))
console.log(oneAway('pbke', 'ple'))
console.log(oneAway('pale', 'bale'))
console.log(oneAway('pale', 'bake'))
