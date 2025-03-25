class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  generate19Map() {
    return {
      "1":1,
      "2":1,
      "3":1,
      "4":1,
      "5":1,
      "6":1,
      "7":1,
      "8":1,
      "9":1,
      ".":9,
    }
}

  isValidSudoku(board: string[][]): boolean {

    let valid = true

    // column
    for (let y=0; y<9; y++) {
      const map = this.generate19Map()
      for (let x=0; x<9; x++) {
        const cell = board[y][x]
        map[cell] = map[cell]-1
        if (map[cell] < 0) {
          valid = false
        }
      }
    }
    // row
    for (let x=0; x<9; x++) {
      const map = this.generate19Map()
      for (let y=0; y<9; y++) {
        const cell = board[y][x]
        map[cell] = map[cell]-1
        if (map[cell] < 0) {
          valid = false
        }
      }
    }

    for (let y=0; y<9; y+=3) {
      for (let x=0; x<9; x+=3) {
        const map = this.generate19Map()
        const cells = [
          board[y][x],
          board[y][x+1],
          board[y][x+2],
          board[y+1][x],
          board[y+1][x+1],
          board[y+1][x+2],
          board[y+2][x],
          board[y+2][x+1],
          board[y+2][x+2],
        ]
        cells.forEach(cell => {
          map[cell] = map[cell]-1
          if (map[cell] < 0) {
            valid = false
          }
        })
      }
    }
    return valid
  }
}

// y0x0 y0x1 y0x2   // y0x3 y0x4 y0x5
// y1x0 y1x1 y1x2   // y1x3 y1x4 y1x5
// y2x0 y2x1 y2x2   // y2x3 y2x4 y2x5

// y3x0 y0x1 y0x2
// y4x0 y1x1 y1x2
// y5x0 y2x1 y2x2

// y6x0 y0x1 y0x2
// y7x0 y1x1 y1x2
// y8x0 y2x1 y2x2

export {}