class Solution {
  hasDuplicate(nums: number[]) {
    const map: Record<number, boolean> = {}
    for (const num of nums) {
      if (map[num] === true) {
        return true
      }
      map[num] = true
    }
    return false
  }
}

export {}