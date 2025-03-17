import {TreeNode} from "../types";

function levelOrder(root: TreeNode | null): number[][] {
  const results: number[][] = []
  if (root == null) {
    return results
  }
  const queue = [root]

  while (queue.length > 0) {
    const length = queue.length
    const levelNodes = []

    for (let i=0; i<length; i++) {
      const node = queue.shift()!
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      levelNodes.push(node.val)
    }
    results.push(levelNodes)
  }
  return results
}