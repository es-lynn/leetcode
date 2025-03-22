export class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers: number[], target: number): number[] {
    let ptr1 = 0
    let ptr2 = numbers.length - 1
    let sum = null

    while (sum != target) {
      sum = numbers[ptr1] + numbers[ptr2]
      if (sum < target) {
        ptr1++
      } else if (sum > target) {
        ptr2--
      }

      if (ptr2 <= ptr1) {
        throw Error('No solution found')
      }
    }

    return [numbers[ptr1], numbers[ptr2]]
  }
}
