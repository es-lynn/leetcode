function checkInclusion(matchStr: string, str: string) {
  const windowLength = matchStr.length
  const normalizedMatchStr = toNormalizedCharCount(matchStr)

  for (let i=0; i<str.length - (windowLength-1); i++) {
    const compareStr = str.slice(i, i+windowLength)
    const normalizedCompareStr = toNormalizedCharCount(compareStr)
    if (normalizedMatchStr == normalizedCompareStr) {
      return true
    }
  }
  return false
}

function toCharCount(str: string): number[] {
  const charCountArr = Array(26).fill(0)

  for (const char of str) {
    const index = char.charCodeAt(0) - 97
    charCountArr[index] = charCountArr[index] +1
  }

  return charCountArr
}

function toNormalizedCharCount(str:string) {
  return JSON.stringify(toCharCount(str))
}

// console.log(toCharCount("aabbbc"))

console.log(checkInclusion("abc", "lecabee"))
console.log(checkInclusion("abc", "lecaabee"))