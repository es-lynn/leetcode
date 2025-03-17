import {ListNode} from "../types";

function mergeTwoLists(list1Head: ListNode | null, list2Head: ListNode | null): ListNode | null {
  let iteratorA = list1Head
  let iteratorB = list2Head

  let dummy = new ListNode()
  let tail = dummy
  while (iteratorA && iteratorB) {
    if (iteratorA.val <= iteratorB.val) {
      tail.next = iteratorA
      iteratorA = iteratorA.next
    } else {
      tail.next = iteratorB
      iteratorB = iteratorB.next
    }
    tail = tail.next
  }
  if (iteratorA) {
    tail.next = iteratorA
  } else if (iteratorB) {
    tail.next = iteratorB
  }
  return dummy.next
};

// 1 -> 2 -> 4
// 1 -> 3 -> 4