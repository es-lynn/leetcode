class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
  /**
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p == null && q == null) {
      return true
    } else if (p == null && q!= null) {
      return false
    } else if (q == null && p!=null) {
      return false
      // @ts-ignore
    } else if (p.val !== q.val ) {
      return false
    }
    // @ts-ignore
    return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
  }
}

export {}
