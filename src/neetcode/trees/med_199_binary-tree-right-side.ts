import {TreeNode} from "../types";

function rightSideView(root: TreeNode | null): number[] {
  let results: number[] = []

  function dfs(node: TreeNode | null, level: number): void {
    if (node == null) {
      return
    }
    results[level] = node.val
    dfs(node.left, level+1)
    dfs(node.right, level+1)
  }

  dfs(root, 0)
  return results
};