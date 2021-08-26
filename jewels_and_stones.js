// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

// Runtime: 114 ms, faster than 5.13% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 39.7 MB, less than 94.54% of JavaScript online submissions for Jewels and Stones.

// function numJewelsInStones(jewels, stones) {
//   let count = 0
//   for (let stone of stones) {
//     if (jewels.includes(stone)) {
//       count++
//     }
//   }
//   return count
// }

function numJewelsInStones(jewels, stones) {
  let count = 0
  let map = {}
  for (let jewel of jewels) {
    map[jewel] = true
  }
  for (let stone of stones) {
    if (map[stone]) {
      count++
    }
  }
  return count
}

console.log(numJewelsInStones('aA', 'aAAbbbb'), 3)
console.log(numJewelsInStones('z', 'ZZ'), 0)
