import {TreeNode} from "../types";

function isBalanced(root: TreeNode | null): boolean {
  let treeIsBalanced = true

  function calculateDepthOfNode(node: TreeNode | null): number {
    if (node == null) {
      return 0
    }
    const leftDepth = calculateDepthOfNode(node.left)
    const rightDepth = calculateDepthOfNode(node.right)

    if (Math.abs(leftDepth - rightDepth) > 1) {
      treeIsBalanced = false
    }

    return Math.max(leftDepth, rightDepth) + 1
  }

  calculateDepthOfNode(root)
  return treeIsBalanced
};