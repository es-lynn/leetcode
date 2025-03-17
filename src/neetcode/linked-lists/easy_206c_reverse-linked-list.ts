import {ListNode} from "../types";

function reverseNode3(node: ListNode | null): ListNode | null {
  const {tail} = forEachNode(node, (current, next, prev) => {
    current.next = prev
  })
  return tail
}

function forEachNode(
  head: ListNode | null,
  callback: (current: ListNode, next: ListNode | null, prev: ListNode | null) => void
): { head: ListNode | null; tail: ListNode | null } {
  if (!head) return { head: null, tail: null }; // If the list is empty, return null for both head and tail

  let current: ListNode | null = head;
  let next: ListNode | null = head.next;
  let prev: ListNode | null = null;
  let tail: ListNode = head; // Initialize tail as head, will be updated in the loop if the list has more than one node

  while (current !== null) {
    callback(current, next, prev); // Execute the callback
    // Move the pointers forward
    prev = current;
    if (next === null) {
      tail = current; // Update tail to the current node if next is null (current is the last node)
    }
    current = next;
    next = current?.next ?? null;
  }

  return { head, tail };
}