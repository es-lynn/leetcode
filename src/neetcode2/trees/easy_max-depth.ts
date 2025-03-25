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
   * @param {TreeNode} root
   * @return {number}
   */
  maxDepth(node: TreeNode | null, depth=0): number {
    if (!node) {
      return depth
    } else {
      return Math.max(this.maxDepth(node.left, depth+1), this.maxDepth(node.right, depth+1))
    }
  }
}

export {}