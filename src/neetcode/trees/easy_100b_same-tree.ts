import {TreeNode} from "../types";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true
  }
  else if ((p === null && q!==null) || (q === null && p !== null)) {
    return false
  }
  // @ts-ignore
  else if (p.val !== q.val) {
    return false
  }
  // @ts-ignore
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}