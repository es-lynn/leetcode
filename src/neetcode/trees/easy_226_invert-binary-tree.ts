import {TreeNode} from "../types";


function invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) {
    return root
  }
  const temp = root.left
  root.left = root.right
  root.right = temp

  if (root.left != null) {
    invertTree(root.left)
  }
  if (root.right != null) {
    invertTree(root.right)
  }
  return root
}

function invertTree2(root: TreeNode | null): TreeNode | null {
  if (root == null) {
    return null
  }
  [root.left, root.right] = [root.right, root.left]
  invertTree(root.left)
  invertTree(root.right)
  return root
}