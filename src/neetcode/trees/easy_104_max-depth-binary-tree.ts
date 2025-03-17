import {TreeNode} from "../types";


let maxDepthCounter: number = 0

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  maxDepthCounter = 1
  if (root?.left) {
    calculateDepth(root.left, 1)
  }
  if (root?.right) {
    calculateDepth(root.right, 1)
  }
  return maxDepthCounter
}


function calculateDepth(node: TreeNode, parentDepth: number) {
  let nodeDepth = parentDepth + 1
  if (nodeDepth > maxDepthCounter) {
    maxDepthCounter = nodeDepth
  }
  if (node.left) {
    calculateDepth(node.left, nodeDepth)
  }
  if (node.right) {
    calculateDepth(node.right, nodeDepth)
  }
}