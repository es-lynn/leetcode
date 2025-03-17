import {TreeNode} from "../types";


function maxDepth(root: TreeNode | null, parentDepth = 0): number {
  if (!root) {
    return parentDepth
  }
  const nodeDepth = parentDepth + 1
  const leftDepth = maxDepth(root.left, nodeDepth)
  const rightDepth = maxDepth(root.right, nodeDepth)

  return Math.max(nodeDepth, leftDepth, rightDepth)
}
