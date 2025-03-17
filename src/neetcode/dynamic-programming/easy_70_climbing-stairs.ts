function climbStairs(target: number): number {
  const memo = {}

  function climb(currentPosition: number): number {
    if (memo[currentPosition] != null) {
      return memo[currentPosition]
    }
    if (currentPosition === target) {
      return 1
    } else if (currentPosition > target) {
      return 0
    }
    const numberOfWays = climb(currentPosition + 1) + climb(currentPosition + 2)
    memo[currentPosition] = numberOfWays
    return numberOfWays
  }

  climb(0)
  return memo[0]
}