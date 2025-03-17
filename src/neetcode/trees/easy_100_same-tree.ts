import {TreeNode} from "../types";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

  function iterate(node: TreeNode | null, array: (number|null)[]) {
    array.push(node?.val ?? null)
    if (node == null) {
      return
    }
    array.push(node.val)
    iterate(node.left, array)
    iterate(node.right, array)
  }

  const firstTreeArray: number[] = []
  iterate(p, firstTreeArray)

  const secondTreeArray: number[] = []
  iterate(q, secondTreeArray)

  return JSON.stringify(firstTreeArray) === JSON.stringify(secondTreeArray)
}