import {MaxPriorityQueue} from "@datastructures-js/priority-queue";

class Solution {
  /**
   * @param {number[]} stones
   * @return {number}
   */
  lastStoneWeight(stones: number[]) {
    const maxHeap = new MaxPriorityQueue<number>()
    stones.forEach(stone => {
      maxHeap.enqueue(stone)
    })

    let stone1 = maxHeap.dequeue().element

    while (!maxHeap.isEmpty()) {
      let stone2 = maxHeap.dequeue().element
      stone1 = Math.abs(stone1-stone2)
    }
    return stone1
  }
}

const s = new Solution().lastStoneWeight([2,3,6,2,4])

