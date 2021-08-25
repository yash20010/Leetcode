// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// P: Will I take in an array? Will the array ever contain something other than an integer? Will I ever get an empty string?
// R: Will I return a boolean? If empty, what should I return?
// E: see below
// P:
/*
  Make a function that takes in an array 
  make an empty object (to be turned into a hash map)
  iterate over the array to count the number of occurrences of each integer
  if more than 1 occurrences, return true else false

 */

// Runtime: 92 ms, faster than 41.53% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 47.8 MB, less than 6.14% of JavaScript online submissions for Contains Duplicate.

// function distinctNums(nums) {
//   const numCount = {}

//   for (let integer of nums) {
//     if (numCount[integer]) {
//       numCount[integer] = numCount[integer] + 1
//     //  numCount[integer]++
//     }else{
//       numCount[integer] = 1
//     }
//   }

//   for (let num in numCount){
//     // console.log(numCount[num])
//     if (numCount[num] > 1) return true
//   }

//   return false
// }

// Runtime: 88 ms, faster than 52.79% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 47.1 MB, less than 22.78% of JavaScript online submissions for Contains Duplicate.

// function distinctNums(nums) {
//   const numCount = {}

//   for (let integer of nums) {
//     if (numCount[integer]) {
//       // numCount[integer] = numCount[integer] + 1
//       return true
//     //  numCount[integer]++
//     }else{
//       numCount[integer] = 1
//     }
//   }

//   return false
// }

// Runtime: 76 ms, faster than 91.88% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 44.9 MB, less than 58.49% of JavaScript online submissions for Contains Duplicate.

var distinctNums = function (nums) {
  return new Set(nums).size < nums.length
}

console.log(distinctNums([1, 2, 3, 1]), true)
console.log(distinctNums([1, 2, 3, 4]), false)
console.log(distinctNums([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true)
