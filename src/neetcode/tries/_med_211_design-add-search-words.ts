class WordDictionary {
  dict = {}
  constructor() {
  }

  addWord(word: string): void {
    let query = this.dict
    for (let char of word) {
      if (query[char] == null) {
        query[char] = {}
      }
      query = query[char]
    }
  }

  search(word: string): boolean {
    let query = this.dict
    for (let char of word) {
      if (char === '.') {

      } else {
        query = query[char]
      }
    }
  }
}

