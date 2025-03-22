class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    const map: Record<string, number> = {}
    for (const char of s) {
      if (map[char] == null) {
        map[char] = 1
      } else {
        map[char] = map[char] + 1
      }
    }
    for (const char of t) {
      if (map[char] == null) {
        map[char] = -1
      } else {
        map[char] = map[char] - 1
      }
    }

    return !Object.values(map).some(it => it !== 0)
  }
}

export {}