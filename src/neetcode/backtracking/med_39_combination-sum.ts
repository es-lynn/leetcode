function combinationSum(candidates: number[], target: number): number[][] {
  const results: number[][] = []

  function dfs(index: number, subset: number[]) {
    if (index >= candidates.length) {
      return
    }
    const total = subset.reduce((prev, current) => prev+current, 0)
    if (total === target) {
      results.push(subset)
      return
    } else if (total > target) {
      return
    }

    dfs(index+1, subset)
    dfs(index, [...subset, candidates[index]])
  }

  dfs(0, [])
  return results
}

console.log(combinationSum([2,3,5], 8))