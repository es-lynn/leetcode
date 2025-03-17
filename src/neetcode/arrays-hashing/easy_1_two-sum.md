```typescript
    function twoSum(nums: number[], target: number): number[] {
        const potentialNums = nums.map(num => target - num)
        const searchNums = {}
        nums.forEach((num, index) => {
            searchNums[num] = index
        })
        
        
        for (let i=0; i<potentialNums.length; i++) {
            if (searchNums[potentialNums[i]]) {
                if (i !== searchNums[potentialNums[i]]) {
                    return [i, searchNums[potentialNums[i]]]
                }
            }
        }
        
        return [-1,-1]
    };
    
    [1,3,4,2]
    potentialNums = [5,3,2,4]
```
