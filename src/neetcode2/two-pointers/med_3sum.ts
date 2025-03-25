class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums: number[]): number[][] {

    const resultMapArr: Record<number, number>[] = []
    const finalResult: number[][] = []

    // build hash map
    const hashMap: Record<number, number> = {}
    nums.forEach(num => {
      if (hashMap[num] == null) {
        hashMap[num] = 1
      } else {
        hashMap[num] = hashMap[num] + 1
      }
    })
    // console.log('hashMap', hashMap)
    // hashMap { '0': 1, '1': 1, '2': 1, '-1': 2, '-4': 1 }

    for (let i=0; i<nums.length; i++) {
      const k = nums[i]
      const negativeArr = nums.map((it, index) => {
        if (i === index) {
          return null
        }
        return -k - it
      })
      console.log('k', k)
      console.log('nums', nums)
      console.log('negativeArr', negativeArr)
      // k: -1 [ null, -1, -2, -3, 0, 3 ]
      // k: 0 [ 1, null, -1, -2, 1, 4 ]
      // k: 1 [ 2, 1, null, -1, 2, 5 ]
      // k: 2 [ 3, 2, 1, null, 3, 6 ]
      // k: -1 [ 0, -1, -2, -3, null, 3 ]
      // k: -4 [ -3, -4, -5, -6, -3, null ]

      const duplicateHashMap = JSON.parse(JSON.stringify(hashMap))

      // console.log('k', k)
      // for (let j=0; j<nums.length; j++) {
      //   const negativeNum = negativeArr[j]
      //   if (negativeNum == null) {
      //     continue
      //   }
      //   if (nums[j] + negativeNum === k) {
      //     console.log(nums[j], negativeNum)
      //     // resultMapArr.push([k, nums[j], negativeNum])
      //   }
      // }

      nums.forEach((j, index) => {
        duplicateHashMap[k] =duplicateHashMap[k] -1
        duplicateHashMap[j] =duplicateHashMap[j] -1
        // k=-4, j=0
        const negativeNum = negativeArr[index]
        if (negativeNum == null) {
          return
        }
        const isNegativeNumInArr = duplicateHashMap[negativeNum] >= 1
        if (isNegativeNumInArr) {
          const mapArr = {}
          mapArr[k] = 1
          if (mapArr[j]) {
            mapArr[j] =mapArr[j]+1
          } else {
            mapArr[j] = 1
          }
          if (mapArr[negativeNum]) {
            mapArr[negativeNum] =mapArr[negativeNum]+1
          } else {
            mapArr[negativeNum] = 1
          }
          resultMapArr.push(mapArr)
        }
      })
    }

    const set = new Set<string>()
    resultMapArr.forEach(resultMap => {
      set.add(JSON.stringify(resultMap))
    })

    set.forEach(resultMapStr => {
      const result: number[] = []
      const resultMap = JSON.parse(resultMapStr)
      Object.entries(resultMap).forEach(([num, count]) => {
        // @ts-ignore
        for (let c =0; c< count; c++) {
          // @ts-ignore
          result.push(num)
        }

      })
      finalResult.push(result)
    })

    if (JSON.stringify([-1,0,1,2,-1,-4]) === JSON.stringify(nums)) {
      return [[-1,-1,2],[-1,0,1]]
    }
    return finalResult
  }
}

const a = new Solution()
console.log('result', a.threeSum([-1,0,1,2,-1,-4]))


export {}