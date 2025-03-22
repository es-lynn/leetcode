const OPEN_BRACKETS = ['(', '[', '{']

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */

  isValid(s: string): boolean {
    const stack = []
    for (const bracket of s) {
      if (OPEN_BRACKETS.includes(bracket)) {
        stack.push(bracket)
      } else if (bracket === ')' && stack[stack.length - 1] === '(') {
        stack.pop()
      } else if (bracket === ']' && stack[stack.length - 1] === '[') {
        stack.pop()
      } else if (bracket === '}' && stack[stack.length - 1] === '{') {
        stack.pop()
      } else {
        return false
      }
    }
    return stack.length === 0
  }
}
