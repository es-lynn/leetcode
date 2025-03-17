function minLines(paragraph: string, width: number): number {
  let remainingChars = width
  let lines = 1
  const words = paragraph.split(' ')

  words.forEach(word => {
    const isSecondWordOfSentence = remainingChars < width
    const space = isSecondWordOfSentence ? 1 : 0
    if (word.length <= remainingChars) {
      remainingChars = remainingChars - word.length - space
    } else {
      lines+=1
      remainingChars = width - word.length
    }
  })

  return lines
}
