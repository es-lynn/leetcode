function permutations(nums: number[]): number[][] {
  const results: number[][] = []

  function dfs(index: number) {
    if (index >= nums.length) {
      results.push(subset)
      return
    }

    dfs(index+1, [...subset, nums[index]])
    dfs(index+1, subset)
  }

  dfs(0)
  return results
};