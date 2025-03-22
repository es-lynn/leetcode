function createBaseAnagramObj() {
  return {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0
  }
}

export class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs: string[]): string[][] {
    const anagramMap: Record<string, string[]> = {}
    for (const str of strs) {
      const baseAnagramObj = createBaseAnagramObj()
      for (const char of str) {
        baseAnagramObj[char] = baseAnagramObj[char]+1
      }
      const anagramStr = this.toAnagramString(baseAnagramObj)

      if (anagramMap[anagramStr] == null) {
        anagramMap[anagramStr] = []
      }
      anagramMap[anagramStr].push(str)
    }

    return Object.values(anagramMap)
  }

  toAnagramString(obj: Object): string {
    return JSON.stringify(obj)
  }
}
