import {MinPriorityQueue} from "@datastructures-js/priority-queue";

class KthLargest {

  heap: MinPriorityQueue<number> = new MinPriorityQueue<number>();

  constructor(k: number, nums: number[]) {
    nums.forEach(num => {
      this.heap.enqueue(num)
    })
    const difference = nums.length - k
    for (let i=0; i<difference; i++) {
      this.heap.dequeue()
    }

    console.log(this.heap.toArray())
  }

  add(val: number): number {
    this.heap.enqueue(val)
    this.heap.dequeue()
    console.log('add'+val, this.heap.toArray())
    return this.heap.front().element
  }
}

