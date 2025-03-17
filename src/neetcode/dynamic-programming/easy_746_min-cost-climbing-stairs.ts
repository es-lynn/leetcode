function minCostClimbingStairs(cost: number[]): number {
  cost = [0, ...cost]
  const target = cost.length
  const mem = {}

  function calculateCost(currentPosition: number, totalCost: number): number {
    if (mem[currentPosition] != null ) {
      return mem[currentPosition]
    }
    if (currentPosition === target) {
      return totalCost
    } else if (currentPosition > target) {
      return Number.MAX_VALUE
    }
    const cost1 = calculateCost(currentPosition+1, totalCost + cost[currentPosition])
    const cost2 = calculateCost(currentPosition+2, totalCost + cost[currentPosition])
    const cheapestCost = Math.min(cost1, cost2)
    mem[currentPosition] = cheapestCost
    return cheapestCost
  }
  return calculateCost(0, 0)
}
