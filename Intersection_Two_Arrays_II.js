// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

var intersect = function (nums1, nums2) {
  let interArr = []
  let map = new Map()
  for (let nums of nums1) {
    if (map.has(nums)) {
      map.set(nums, map.get(nums) + 1)
    } else {
      map.set(nums, 1)
    }
  }

  for (let nums of nums2) {
    if (map.get(nums)) {
      interArr.push(nums)
      map.set(nums, map.get(nums) - 1)
    }
  }

  return interArr

  //   let obj = nums1.reduce((a, c) => {
  //     a[c] = a[c] + 1 || 1
  //     return a
  //   }, {})
  //   return nums2.filter((n) => {
  //     if (obj[n]) {
  //       obj[n]--
  //       return true
  //     } else {
  //       return false
  //     }
  //   })
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
console.log(intersect([1, 2, 2, 1], [2, 2]))
