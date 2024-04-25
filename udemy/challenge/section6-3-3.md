# Sliding Window - findLongestSubstring

> Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)

```javascript
function findLongestSubstring(str) {
  if (str.length === 0) return 0;

  let start = 0;
  let end = 0;
  let freq = {};
  let longest = 0;

  for (let i = 0; i < str.length - 1; i++) {
    freq[i] = (freq[i] || 0) + 1;
  }
}
```
