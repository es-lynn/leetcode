function characterReplacement(str: string, maxReplacements: number) {
  let left = 0
  let right = 0
  let longest = 0

  while (right < str.length) {
    const charMap = generateCharMap(left, right, str)
    const mostFrequentCount = getMostFrequentCount(charMap)
    const currReplacements = getCurrReplacements(left, right, mostFrequentCount)
    const totalCount = right-left+1

    if (currReplacements <= maxReplacements) {
      if (totalCount > longest) {
        longest = totalCount
      }
      right++
    } else {
      left++
    }
  }

  return longest
}

function generateCharMap(left: number, right: number, str: string): number[] {
  const charMap = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  for (let i=left; i<=right; i++) {
    charMap[toNumber(str[i])] = charMap[toNumber(str[i])] + 1
  }
  return charMap
}

function toNumber(char: string): number {
  return char.charCodeAt(0) - 65
}

function getMostFrequentCount(charMap: number[]): number {
  return charMap.reduce((largest, curr) => {
    if (curr > largest) {
      return curr
    } else {
      return largest
    }
  }, 0)
}

function getCurrReplacements(left: number, right: number, mostFrequentCount: number): number {
  return (right-left+1) - mostFrequentCount
}

// console.log(toNumber('A'))
// console.log(toNumber('Z'))

// const charMap = generateCharMap(1,5,'ABBBFFG')
// console.log(charMap)
// console.log(getMostFrequentCount(charMap))
// console.log(getCurrReplacements(1,5,getMostFrequentCount(charMap)))

console.log(characterReplacement('XYYX', 2))
console.log(characterReplacement('AAABABB', 1))