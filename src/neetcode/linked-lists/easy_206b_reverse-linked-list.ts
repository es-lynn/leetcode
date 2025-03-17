import {ListNode} from "../types";

function reverseNode(node: ListNode | null, prevNode: ListNode | null = null): ListNode | null {
  if (!node) {
    return prevNode
  }

  const originalNextNode = node.next
  node.next = prevNode
  return reverseNode(originalNextNode, node)
}

function reverseNode2(head: ListNode | null): ListNode | null {
  let previousNode = null
  let iterator = head

  while(iterator) {
    let node = iterator
    let nextIterator = node.next

    node.next = previousNode
    previousNode = node

    iterator = nextIterator
  }
  return previousNode
}

