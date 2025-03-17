import {TreeNode} from "../types";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) {
    return false
  }
  if (isSameTree(root, subRoot)) {
    return true
  }
  return isSameTree(root.left, subRoot) || isSameTree(root.right, subRoot)
};

function isSameTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {

  function nodeToArray(node: TreeNode | null, array: (number|null)[]) {
    array.push(node?.val ?? null)
    if (node == null) {
      return
    }
    nodeToArray(node.left, array)
    nodeToArray(node.right, array)
  }

  const tree1Array: number[] = []
  nodeToArray(tree1, tree1Array)

  const tree2Array: number[] = []
  nodeToArray(tree2, tree2Array)

  return JSON.stringify(tree1Array) === JSON.stringify(tree2Array)
}