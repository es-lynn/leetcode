function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap = {}
  for (const num of nums) {
    if (frequencyMap[num] == null) {
      frequencyMap[num] = 1
    } else {
      frequencyMap[num] = frequencyMap[num] + 1
    }
  }

  const frequencyArray = Object.entries(frequencyMap)
  frequencyArray.sort((a,b) => {
    // @ts-ignore
    return b[1]-a[1]
  })

  const resultsArray: number[] = []
  for (let i=0; i<k; i++) {
    // @ts-ignore
    resultsArray.push(frequencyArray.shift()[0])
  }
  return resultsArray
};
