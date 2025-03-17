import {Node} from "../types";

function copyRandomList(head: Node | null): Node | null {
  let pointer  = head
  if (!head) {
    return null
  }

  let pointerMap = {}

  // @ts-ignore
  let dummy = new Node()
  let copyPointer = dummy

  while (pointer) {
    copyPointer.next = new Node(pointer.val, undefined, pointer.random as Node | undefined)

    // @ts-ignore
    pointerMap[pointer] = copyPointer.next

    pointer = pointer.next
    copyPointer = copyPointer.next

  }

  // @ts-ignore
  copyPointer = dummy.next
  while (copyPointer) {
    // @ts-ignore
    copyPointer.random = pointerMap[copyPointer.random]
    copyPointer = copyPointer.next
  }
  return dummy.next
};