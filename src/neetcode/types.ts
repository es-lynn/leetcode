export class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

export class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
          }
}

export class Node {
      val: number
      next: Node | null
      random: Node | null
      constructor(val?: number, next?: Node, random?: Node) {
          this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
            this.random = (random===undefined ? null : random)
          }
}