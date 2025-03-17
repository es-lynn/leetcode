import {ListNode} from "../types";

function reorderList(head: ListNode | null): void {
  if (!head) {
    return
  }
  let middleNode = findMiddleNode(head)
  let reversedListAfterMiddle = reverseList(middleNode.next)


  middleNode.next = null
  let pointerAscending = head
  let pointerDescending = reversedListAfterMiddle

  while (pointerDescending) {
    const pointerAscendingNext = pointerAscending.next
    const pointerDescendingNext = pointerDescending.next

    pointerAscending.next = pointerDescending
    pointerDescending.next = pointerAscendingNext

    // @ts-ignore
    pointerAscending = pointerAscendingNext
    pointerDescending = pointerDescendingNext
  }
};


function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }
  let pointer = head
  let prev = null
  while (pointer) {
    let temp = pointer.next
    pointer.next = prev
    prev = pointer
    // @ts-ignore
    pointer = temp
  }
  return prev
}

// mid / upperMid
function findMiddleNode(head: ListNode): ListNode {
  let preHead = new ListNode()
  preHead.next = head
  let slowPointer = preHead
  let fastPointer = preHead

  while (fastPointer?.next) {
    // @ts-ignore
    slowPointer = slowPointer.next
    // @ts-ignore
    fastPointer = fastPointer.next.next
  }
  return slowPointer
}

const node5 = new ListNode(5)
const node4 = new ListNode(4, node5)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)

console.log(reverseList(node1))

// []
// [1]
//  *
// [1,2]
//  *
// [1,2,3]
//    *
// [1,2,3,4]
//    *
// [1,2,3,4,5]
//      *
//sf
//  s f
//    s    f
//      s        f