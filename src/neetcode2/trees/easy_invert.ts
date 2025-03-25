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
   * @return {TreeNode}
   */
  invertTree(root: TreeNode ) {
    this.dfs(root)
    return root
  }

  dfs( root: TreeNode | null) {
    if (root == null) {
      return
    }

    const tempLeft = root.left
    root.left = root.right
    root.right = tempLeft

    this.dfs(root.left)
    this.dfs(root.right)
  }
}

export {}