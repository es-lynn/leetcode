class MinStack {
  constructor() {}

    data: number[] = []

    minStack: {value, address}[] = []

  /**
   * @param {number} val
   * @return {void}
   */
  push(val: number) {
      this.data.push(val)
  }

  /**
   * @return {void}
   */
  pop() {
      return this.data.pop()
  }

  /**
   * @return {number}
   */
  top() {}

  /**
   * @return {number}
   */
  getMin() {}
}
