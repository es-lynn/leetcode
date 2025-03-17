import {TreeNode} from "../types";

function lowestCommonAncestor(node: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!node || !p || !q) {
    return null
  }
  if (p.val > q.val) {
    return lowestCommonAncestor(node, q, p)
  }

  if (p.val <= node.val && q.val >= node.val) {
    return node
  } else if (q.val < node.val) {
    return lowestCommonAncestor(node.left, p, q)
  } else if (p.val > node.val) {
    return lowestCommonAncestor(node.right, p, q)
  } else {
    throw Error("node not in tree")
  }
};

// 3,5 = 4
// 0,5 = 2
// 8,9 = 8
// 0,7 = 6
