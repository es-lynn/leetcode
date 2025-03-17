class Trie {
  map = {}
  constructor() {

  }

  insert(word: string): any {
    let query = this.map
    for (const char of word.split('')) {
      if (!query[char]) {
        query[char] = {}
      }
      query = query[char]
    }
    query['_isWord'] = true
    // return JSON.stringify(this.map, null, 2)
  }

  search(word: string): boolean {
    let query = this.map
    for (const char of word.split('')) {
      query = query[char]
      if (!query) {
        return false
      }
    }
    return query['_isWord'] === true
  }

  startsWith(prefix: string): boolean {
    let query = this.map
    for (const char of prefix.split('')) {
      query = query[char]
      if (!query) {
        return false
      }
    }
    return true
  }
}
