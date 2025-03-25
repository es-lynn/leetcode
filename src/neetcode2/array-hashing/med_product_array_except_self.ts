class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  // productExceptSelf(nums: number[]) {
  //   const product = []
  //   for (let i=0; i<nums.length; i++) {
  //     let total = 1
  //     for (let j=0; j<nums.length; j++) {
  //       if (j===i) {
  //         continue
  //       }
  //       total = nums[j] * total
  //     }
  //     product[i] = total
  //   }
  //   return product
  // }

  // productExceptSelf(nums: number[]) {
  //   let totalZeroes = nums.reduce((prev, curr) => {
  //     if (curr === 0) {
  //       return prev+1
  //     }
  //     return prev
  //   }, 0)
  //   console.log(totalZeroes)
  //
  //   const total = nums.reduce((prev, curr) => {
  //     if (totalZeroes === 1 && curr === 0) {
  //       return prev
  //     }
  //     return prev*curr
  //   }, 1)
  //   console.log(total)
  //
  //   return nums.map((num, index)=> {
  //     if (totalZeroes === 1 && num === 0) {
  //       return total
  //     } else if (totalZeroes === 1 && num!==0) {
  //       return 0
  //     } else if (num===0) {
  //       return total
  //     } else {
  //       return total/num
  //     }
  //   })
  // }

  productExceptSelf(nums: number[]) {
    const prefix: number[] = []
    const suffix: number[] = []
    for (let i=0; i<nums.length; i++) {
      if (i===0) {
        prefix[i] = 1
        continue
      }
      prefix[i] = nums[i-1] * prefix[i-1]
    }
    for (let j=nums.length-1; j>=0; j--) {
      if (j===nums.length-1) {
        suffix[j] = 1
        continue
      }
      suffix[j] = nums[j+1] * suffix[j+1]
    }
    console.log(prefix)
    console.log(suffix)
    return nums.map((_num, index) => {
      return prefix[index] * suffix[index]
    })
  }
}


export {}
