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
  longestLength = 0

  diameterOfBinaryTree(node: TreeNode) {
    this.dfs(node)
    return this.longestLength
  }

  dfs(node: TreeNode | null): number {
    if (node == null) {
      return 0
    }
    const leftDepth = this.dfs(node.left)
    const rightDepth = this.dfs(node.right)
    const length = leftDepth + rightDepth
    if (length > this.longestLength) {
      this.longestLength = length
    }
    const max = Math.max(leftDepth, rightDepth)
    return max +1
  }
}

export {}