import {TreeNode} from "../types";

function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }

  let isValid = true

  function dfs(node: TreeNode | null, min: number | null, max: number | null) {
    if (node == null) {
      return
    }
    if (min != null && node.val <= min) {
      isValid = false
      return
    }
    if (max != null && node.val >= max) {
      isValid = false
      return
    }

    dfs(node.left, min, node.val)
    dfs(node.right, node.val, max)
  }

  dfs(root, null, null)
  return isValid
};

// dfs(5, null, null)
// dfs(4, min=null, max=5)
// dfs(6, min=5, max=null)
//
// dfs(3,
// dfs(7, min=6, max=null)