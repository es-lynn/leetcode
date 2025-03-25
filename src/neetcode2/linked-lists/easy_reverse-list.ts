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
   * @return {ListNode}
   */
  reverseList(head: ListNode) {
    let currNode: ListNode | null = head
    let prevNode: ListNode | null = null
    while (currNode) {
      let nextNode: ListNode | null = currNode.next
      currNode.next = prevNode
      prevNode = currNode
      currNode = nextNode
    }
    return prevNode
  }
}

export {}