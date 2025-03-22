// [10,1,5,6,7,1]

class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices: number[]) {
    let lowestPrice = Number.MAX_VALUE
    let maxProfit = -Number.MAX_VALUE

    for (const dailyPrice of prices) {
      if (dailyPrice < lowestPrice) {
        lowestPrice = dailyPrice

      }
      if ((dailyPrice - lowestPrice) > maxProfit) {
        maxProfit = dailyPrice - lowestPrice
      }
    }
    return maxProfit
  }
}

export {}
