import {TreeNode} from "../types";



function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0

  function calculateDepthOfNode(root: TreeNode | null): number {
    if (root == null) {
      return 0
    }
    const leftNodeDepth = root.left ? calculateDepthOfNode(root.left) : 0
    const rightNodeDepth = root.right ? calculateDepthOfNode(root.right) : 0
    const maxChildDepth = Math.max(leftNodeDepth, rightNodeDepth)

    const diameter = leftNodeDepth + rightNodeDepth
    if (diameter > maxDiameter) {
      maxDiameter = diameter
    }

    return maxChildDepth + 1
  }

  calculateDepthOfNode(root)
  return maxDiameter
};

