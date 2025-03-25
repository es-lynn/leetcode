console.log('Hello, world!');
console.log('This is a fully functioning TypeScript environment.');


// function maxArea(heights: number[]) {
//     let max: { h1: number, h2: number, height: number, length: number, i: number, j: number, area: number } = { h1: 0, h2:0, height:0, length:0, i:0, j:0, area: 0}
//     let maxHeights = []
//     for (let i=0; i<heights.length; i++) {
//       for (let j=i+1; j<heights.length; j++) {
//         const h1 = heights[i]
//         const h2 = heights[j]
//         const height = Math.min(h1,h2)
//         const length = j-i
//         const area = height * length
//                     maxHeights.push({
//             h1, h2, height,length, i, j, area
//           })
//         if (area>max.area) {
//           max = {
//             h1, h2, height,length, i, j, area
//           }
//         }
//       }
//     }

//     console.log(maxHeights.sort((a,b)=>(b.length-a.length)*100 + b.area-a.area))

//     return max.area
// }

function maxArea(heights: number[]): number {

  let ptr1 = 0
  let ptr2 = heights.length-1
  let max: { h1: number, h2: number, height: number, length: number, i: number, j: number, area: number } = { h1: 0, h2:0, height:0, length:0, i:0, j:0, area: 0}


  while (ptr1 !== ptr2) {
    const ptr1Score = heights[ptr1+1] - heights[ptr1]
    const ptr2Score = heights[ptr2-1] - heights[ptr2]

    const h1 = heights[ptr1]
    const h2 = heights[ptr2]
    const height = Math.min(h1,h2)
    const length = ptr2-ptr1
    const area = height * length
    if (area>max.area) {
      max = {
        h1, h2, height,length, i: ptr1, j: ptr2, area
      }
    }

    if (h2 > h1) {
      ptr1++
    } else {
      ptr2--
    }
  }

  return max.area
}


const result1 = maxArea([1,7,2,5,4,7,3,6])
console.log(result1)
console.log(result1 === 36)

const result2 = maxArea([2,2,2])
console.log(result2)
console.log(result2 === 4)