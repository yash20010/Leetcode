// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

var moveZeroes = function (nums) {
  let count = 0
  let i = nums.indexOf(0)
  while (i !== -1) {
    nums.splice(i, 1)
    count++
    i = nums.indexOf(0, i)
  }

  for (let i = 0; i < count; i++) {
    nums.push(0)
  }

  return nums
}
console.log(moveZeroes([0, 1, 0, 3, 12]))
