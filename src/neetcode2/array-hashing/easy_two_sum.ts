class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number) {
    const valueToIndexMap: Record<number, number> = {}

    // if number is duplicated, doesn't matter cause the later one will overwrite the first address
    nums.forEach((num, index) => {
      valueToIndexMap[num] = index
    })

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      const secondNum = target - num
      if (valueToIndexMap[secondNum]) {
        if (valueToIndexMap[secondNum] === i) {
          continue
        }
        return [i, valueToIndexMap[secondNum]]
      }
    }

    throw new Error('No possible combination found: ' + valueToIndexMap)
  }
}

export {}