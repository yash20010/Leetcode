// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  let sMap = {}
  for (let char of s) {
    sMap[char] = sMap[char] + 1 || 1
  }

  for (let char of t) {
    if (sMap[char]) {
      sMap[char]--
    } else {
      return false
    }
  }
  return true
}
