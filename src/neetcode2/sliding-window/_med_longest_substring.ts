export class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s: string): number {
    const wordMap: Record<string, number> = {}
    let longestLength = 0
    for (let ptr = 0; ptr < s.length; ptr++) {
      const char = s[ptr]

      if (wordMap[char] != null || ptr === s.length-1) {
        const startSubstringPtr = wordMap[s[ptr]]
        const substringLength = ptr - startSubstringPtr
        if (substringLength > longestLength) {
          longestLength = substringLength

        }
        Object.entries(wordMap)
          .filter(([k, v]) => {
            return v <= startSubstringPtr
          })
          .forEach(([key]) => {
            delete wordMap[key]
          })
      }
      wordMap[char] = ptr
    }
    return longestLength
  }
}

