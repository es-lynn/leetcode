import {ListNode} from "../types";

function hasCycle(head: ListNode | null): boolean {
  let slowPointer = head
  let fastPointer = head?.next

  while (fastPointer && fastPointer.next) {
    if (fastPointer === slowPointer) {
      return true
    }
    // @ts-ignore
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next.next
  }
  return false
};

function hasCycle2(head: ListNode | null): boolean {
  let pointer = head
  while (pointer) {
    // @ts-ignore
    if (pointer.val === 'x') {
      return true
    }
    // @ts-ignore
    pointer.val = 'x'
    pointer = pointer.next
  }
  return false
};