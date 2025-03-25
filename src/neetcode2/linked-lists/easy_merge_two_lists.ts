class ListNode {
  next: ListNode | null

  constructor(public val = 0,  next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1Head: ListNode, list2Head: ListNode) {
    let iterator1: ListNode | null = list1Head
    let iterator2: ListNode  | null = list2Head

    let newList = new ListNode()
    let tail = newList

    while (iterator1 && iterator2) {
      if (iterator1.val <= iterator2.val) {
        tail.next = iterator1
        iterator1 = iterator1.next
      } else {
        tail.next = iterator2
        iterator2 = iterator2.next
      }
      tail = tail.next
    }

    if (iterator1) {
      tail.next = iterator1
    } else {
      tail.next = iterator2
    }
    return newList.next
  }
}

export {}