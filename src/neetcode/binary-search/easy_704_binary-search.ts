function search(nums: number[], target: number): number {
  let start = 0
  let end = nums.length-1

  let mid = Math.ceil((end+start) / 2)
  let guessedNumber = nums[mid]

  while (guessedNumber !== target && start < end) {
    if (guessedNumber === target) {
      return mid
    } else if (guessedNumber > target) {
      end = mid - 1
      mid = Math.ceil((end + start) / 2)
    } else if (guessedNumber < target) {
      start = mid + 1
      mid = Math.ceil((end + start) / 2)
    }
    guessedNumber = nums[mid]
  }
  if (guessedNumber === target) {
    return mid
  }
  return -1
}

console.log(search([-1,0,3,5,9,12], 9))

/*
start = 0
end = 6
mid = 3

target = 9
guessedNumber = nums[3] = 5
start = 4; end = 6
mid = 5
 */