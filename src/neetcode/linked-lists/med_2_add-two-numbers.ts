import {ListNode} from "../types";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let l1Pointer = l1
  let l2Pointer = l2

  let beforeHead = new ListNode()
  let result = beforeHead
  let carry = 0

  while (l1Pointer || l2Pointer) {
    const sum = (l1Pointer?.val ?? 0) + (l2Pointer?.val ?? 0) + carry
    if (sum > 9) {
      carry = 1
    } else {
      carry = 0
    }
    let remainder = sum % 10
    result.next = new ListNode(remainder)
    result = result.next
    l1Pointer = l1Pointer?.next ?? null
    l2Pointer = l2Pointer?.next ?? null
  }
  if (carry > 0) {
    result.next = new ListNode(carry)
  }
  return beforeHead.next
};