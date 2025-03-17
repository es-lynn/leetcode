import {MaxPriorityQueue} from "@datastructures-js/priority-queue";

function lastStoneWeight(stones: number[]): number {
  const stonesHeap: MaxPriorityQueue<number> = new MaxPriorityQueue()
  stones.forEach(stone => stonesHeap.enqueue(stone))

  while (stonesHeap.size() >= 2) {
    const largestStone = stonesHeap.dequeue().element
    const secondLargestStone = stonesHeap.dequeue().element
    const remainingStone = largestStone - secondLargestStone
    if (remainingStone > 0) {
      stonesHeap.enqueue(remainingStone)
    }
  }
  if (stonesHeap.size() === 1) {
    return stonesHeap.front().element
  }
  return 0
};

console.log(lastStoneWeight([2,7,4,1,8,1]))
console.log(lastStoneWeight([1]))
console.log(lastStoneWeight([]))