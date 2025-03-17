import {ListNode} from "../types";

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   let pointer1 = head
//   let pointer2 = head
//   let counter = n
//   while (pointer2.next != null) {
//     if (counter !== 0) {
//       counter--
//     } else {
//       pointer1 = pointer1.next
//     }
//     pointer2 = pointer2.next
//   }
//   pointer1.next = pointer2.next
//   return head
// };

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   let pointer1 = head
//   let pointer2: ListNode | null = head
//   for (let i=0; i<n; i++) {
//     pointer2 = pointer2?.next ?? null
//   }
//   if (!pointer2) {
//     return null
//   }
//   while (pointer2.next) {
//     pointer2 = pointer2.next
//     pointer1 = pointer1.next
//   }
//   if (n!==1) {
//     pointer1.next = pointer2
//   } else {
//     pointer1.next = null
//   }
//   return head
// }

/*
prehead -> 1 -> 2 -> 3 -> 4 -> 5 -> null
     ab
     a          b
           a         b
                a         b
                     a         b

prehead -> 1 -> null
     ab
      a    b

prehead -> 1 -> 2 -> null
     ab
      a    b
           a    b

prehead -> 1 -> 2 -> 3 -> null
      a              b

*/

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let preHead = new ListNode()
  preHead.next = head

  let pointer1 = preHead
  let pointer2 = preHead

  for (let i=0; i<n; i++) {
    pointer2 = pointer2.next ?? null
  }

  while (pointer2?.next) {
    pointer2 = pointer2.next
    pointer1 = pointer1.next
  }
  pointer1.next = pointer1.next?.next ?? null
  return preHead.next
}

/*
[ 1,2,3,4,5], n=2
 ab
 a  b
   a  b
     a  b
       a  b // until p2 has no more next

[1,2,3,  5]
     a   b

[ 1 ], n=1
 ab
 a b

[ 1,2], n=2
 a  b

a.next = p2
 */