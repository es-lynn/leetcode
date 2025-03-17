function subsets(nums: number[]): number[][] {
  const results: number[][] = []

  function dfs(index: number, subset: number[]) {
    if (index >= nums.length) {
      results.push(subset)
      return
    }

    dfs(index+1, [...subset, nums[index]])
    dfs(index+1, subset)
  }

  dfs(0, [])
  return results
};