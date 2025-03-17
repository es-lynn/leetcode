import {MinPriorityQueue} from "@datastructures-js/priority-queue";

function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinPriorityQueue<number>()

  nums.forEach(num => {
    minHeap.enqueue(num)
    if (minHeap.size() > k) {
      minHeap.dequeue()
    }
  })

  return minHeap.front().element
}