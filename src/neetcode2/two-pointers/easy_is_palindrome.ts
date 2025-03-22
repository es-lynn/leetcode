class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s: string): boolean {
    const cleanS = Array.from(s.toLowerCase().replace(/[^a-zA-z0-9]/g, ''))
    const arrayS = Array.from(cleanS)
    const reverseS = arrayS.slice(0).reverse()

    for (let i = 0; i < arrayS.length; i++) {
      if (arrayS[i] !== reverseS[i]) {
        return false
      }
    }
    return true
  }
}

export {}