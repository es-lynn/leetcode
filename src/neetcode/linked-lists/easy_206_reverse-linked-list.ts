import {ListNode} from "../types";

function reverseList(head: ListNode | null): ListNode | null {
  let previousNode: ListNode | null = null
  let currentNode: ListNode | null = head
  while (currentNode) {
    let nextNode = currentNode.next

    currentNode.next = previousNode
    previousNode = currentNode

    currentNode = nextNode
  }
  return previousNode
}