```
function containsDuplicate(nums: number[]): boolean {
    const map = {}
    for (let num of nums) {
        if (map[num] != null) {
            return true
        }
        map[num] = true
    }
    return false
}

expect(containsDuplicate([1,2,3,1]).toEqual(true))

expect(containsDuplicate([1,2,3,4]).toEqual(false))

expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2]).toEqual(true))

expect(containsDuplicate([]).toEqual(false))
```