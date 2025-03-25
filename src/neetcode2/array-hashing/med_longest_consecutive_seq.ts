class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  // longestConsecutive(nums: number[]) {
  //   const sortedNums = nums.slice(0).sort((a,b)=>a-b)
  //   let chain: number[] = []
  //   let longest = 0
  //   for (let i=0; i<sortedNums.length; i++) {
  //     if (i===0) {
  //       chain = [sortedNums[0]]
  //     }
  //     let currNum = sortedNums[i]
  //     const isAscending = (chain[chain.length-1] +1) === currNum
  //     const isSame = chain[chain.length-1] === currNum
  //     if (isAscending) {
  //       chain.push(currNum)
  //     } else if (isSame) {
  //       continue
  //     } else {
  //       if (chain.length > longest) {
  //         longest = chain.length
  //       }
  //       chain = [currNum]
  //     }
  //   }
  //   if (chain.length > longest) {
  //     longest = chain.length
  //   }
  //
  //   return longest
  // }

  longestConsecutive(nums: number[]) {
    const numMap: Record<number, number> = {}
    nums.forEach(num=>{
      numMap[num] = num
    })

    const startNumbers = Object.values(numMap).filter(it => {
      if (numMap[it-1] == null) {
        return true
      }
      return false
    })

    let longest = 0
    for (let i=0; i<startNumbers.length; i++) {
      let currNum = startNumbers[i]
      let length = 1
      while (numMap[currNum+1] != null) {
        currNum++
        length++
      }
      if (length > longest) {
        longest = length
      }
    }
    return longest
  }
}

export {}