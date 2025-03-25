class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: number[], k: number) {
      const mapCount: Record<number, number> = {}

    // count
    nums.forEach(num => {
      if (mapCount[num] == null) {
        mapCount[num] = 1
      }  else {
        mapCount[num] = mapCount[num] + 1
      }
    })

    // sort
    const sortedEntries = Object.entries(mapCount).sort((a,b)=>b[1] - a[1])
    console.log(sortedEntries)

    const topK = []
    // topK
    for (let i=0; i<k; i++) {
      topK.push(sortedEntries[i][0])
    }
    return topK
  }
}

export {}