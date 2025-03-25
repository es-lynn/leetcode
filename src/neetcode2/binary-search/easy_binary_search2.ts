function binarySearch(nums: number[], target: number, start=0, end=nums.length): number {

  const mid = Math.ceil((start+end)/2)


  if(start > end) {
    return -1
  } else if (nums[mid] === target) {
    return mid
  } else if (target > nums[mid]) {
    return binarySearch(nums, target, start, mid-1)
  } else if (target < mid) {
    return binarySearch(nums, target, mid+1, end)
  }

  throw Error("Unhandled case")
}

