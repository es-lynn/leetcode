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
  balanced = true

  isBalanced(node: TreeNode) {
    this.dfs(node)
    return this.balanced
  }

  dfs(node: TreeNode | null): number {
    if (node == null) {
      return 0
    }
    const leftHeight = this.dfs(node.left)
    const rightHeight = this.dfs(node.right)
    if (Math.abs(leftHeight-rightHeight) > 1) {
      this.balanced = false
    }
    const height = Math.max(leftHeight, rightHeight) + 1
    return height
  }
}

export {}