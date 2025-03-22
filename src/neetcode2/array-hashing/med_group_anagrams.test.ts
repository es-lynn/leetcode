import { Solution } from './med_group_anagrams'

const sol = new Solution()

expect(sol.groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat'])).toEqual([
  ['hat'],
  ['act', 'cat'],
  ['stop', 'pots', 'tops']
])
expect(sol.groupAnagrams(['x'])).toEqual(['x'])
expect(sol.groupAnagrams([''])).toEqual([''])
