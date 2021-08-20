// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1

function majorityNum(arr) {
  const numObj = {}
  let halfLength = arr.length / 2

  for (let num of arr) {
    numObj[num] = numObj[num] + 1 || 1
    if (numObj[num] > halfLength) return num
  }
}

// Follow-up: Could you solve the problem in linear time and in O(1) space?

var majorityElement = function (num) {
  let major = null,
    count = 0
  for (let i = 0; i < num.length; i++) {
    if (count == 0) {
      count++
      major = num[i]
    } else if (major == num[i]) {
      count++
    } else {
      count--
    }
  }
  return major
}
