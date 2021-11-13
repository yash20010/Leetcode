// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: l1 = [], l2 = []
// Output: []

// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function printList(list) {
  let current = list
  let arr = []
  while (current) {
    arr.push(current.val)
    current = current.next
  }
  return arr
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
  // create a new list
  let newList = new ListNode(null)
  let current = newList

  // loop through l1 and l2
  while (l1 && l2) {
    // if l1 is smaller than l2, add l1 to new list
    if (l1.val < l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }
    current = current.next
  }

  // if l1 is empty, add l2 to new list
  if (!l1) {
    current.next = l2
  }

  // if l2 is empty, add l1 to new list
  if (!l2) {
    current.next = l1
  }

  return newList.next
}

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)))

const l1PlusL2 = mergeTwoLists(l1, l2)
console.log(printList(l1PlusL2))
