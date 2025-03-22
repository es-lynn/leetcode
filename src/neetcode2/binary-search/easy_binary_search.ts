class Solution {
  binary(nums: number[], target: number, start: number, end: number): number {
    const mid = Math.floor(start + (end - start) / 2)

    console.log(nums, target, start, end, mid)

    if (start == end) {
      return -1
    }

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      return this.binary(nums, target, start, mid)
    }
    return this.binary(nums, target, mid + 1, end)
  }

  search(nums: number[], target: number): number {
    return this.binary(nums, target, 0, nums.length)
  }
}

export {}

// [-1,0,2,4,6,8], 4
// [-1,0,2,4,6,8], 3

// nums=[-1,0,3,5,9,12]
// target=9
//

// start: 0, end: 6, mid: 3
// [-1,0,2,4,6,8]
// [ 0,1,2,3,4,5] length: 6

// [-1,0,2]
// start: 0, end: 3, mid: 1
//
