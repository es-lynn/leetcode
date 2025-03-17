```
function isAnagram(s: string, t: string): boolean {
    const charMap = {}
    for (const char of s) {
        if (charMap[char]) {
            charMap[char] = charMap[char]+1
        } else {
            charMap[char] = 1
        }
    }
    
    for (const char of t) {
        if (charMap[char] == null) {
            return false
        } else {
            charMap[char] = charMap[char]-1
        }
    }
    
    const isNotAnagram = Object.values(charMap).some(count => count !== 0)
    return !isNotAnagram
};

expect(isAnagram("anagram", "nagaram")).toEqual(true)

expect(isAnagram("raat", "taar")).toEqual(true)
r, charMap = { r:1 }
a, charMap = { r:1, a:1 }
a, charMap = { r:1, a:2 }
t, charMap = { r:1, a:2, t:1 }

t, charMap = { r:1, a:2, t:0 }
a, charMap = { r:1, a:1, t:0 }
a, charMap = { r:1, a:0, t:0 }
r, charMap = { r:0, a:0, t:0 }

expect(isAnagram("rat", "car")).toEqual(false)

expect(isAnagram("a", "a")).toEqual(true)

expect(isAnagram("a  ", "a")).toEqual(false)

expect(isAnagram("  ", " ")).toEqual(false)
```