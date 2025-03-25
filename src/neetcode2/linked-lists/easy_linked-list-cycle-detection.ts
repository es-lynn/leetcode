class ListNode {
  next: ListNode | null

  constructor(public val = 0,  next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  /**
   * @param {ListNode} head
   * @return {boolean}
   */
  hasCycle(head: ListNode) {
    const memory = new Map<ListNode, true>()

    let iterator = head

    while (memory.get(iterator) == null) {
      memory.set(iterator, true)
      if (iterator.next == null) {
        return false
      }
      iterator = iterator.next
    }
    return true

  }
}

export {}