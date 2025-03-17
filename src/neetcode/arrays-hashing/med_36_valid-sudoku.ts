function isValidSudoku(board: string[][]): boolean {

  const a: string[] = board[0]
  const validationCheckArr = []

  // check rows
  for (let row=0; row<9; row++) {
    validationCheckArr.push(isValidSudokuBlock(board[row]))
  }

  // check columns
  for (let column=0; column<9; column++) {
    const block = [
      board[0][column],
      board[1][column],
      board[2][column],
      board[3][column],
      board[4][column],
      board[5][column],
      board[6][column],
      board[7][column],
      board[8][column],
    ]
    validationCheckArr.push(isValidSudokuBlock(block))
  }

  // check squares
  for (let y=0; y<9; y+=3) {
    for (let x=0; x<9; x+=3) {
      const block = [
        board[y+0][x], board[y+0][x+1], board[y+0][x+2],
        board[y+1][x], board[y+1][x+1], board[y+1][x+2],
        board[y+2][x], board[y+2][x+1], board[y+2][x+2],
      ]
      validationCheckArr.push(isValidSudokuBlock(block))
    }
  }

  const isInvalid = validationCheckArr.some(it=>it===false)
  return !isInvalid
};

// returns true if no duplicates are found
function isValidSudokuBlock(block: string[]): boolean {
  const validationMap = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false
  }

  for (const cell of block) {
    if (cell === '.') {
      continue
    }
    if (validationMap[cell] === false) {
      validationMap[cell] = true
    } else if (validationMap[cell] === true) {
      return false
    }
  }
  return true
}

/**
 * [
 * ["5","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 */

/**
 * [0,0][0,1][0,2]  [0,3][0,4][0,5]
 * [1,0][1,1][1,2]  [1,3][1,4][1,5]
 * [2,0][2,1][2,2]  [2,3][2,4][2,5]
 *
 * [3,0][3,1][3,2]
 * [4,0][4,1][4,2]
 * [5,0][5,1][5,2]
 */