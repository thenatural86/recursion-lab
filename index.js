// Code your solution here!

const printString = (myString) => {
  console.log(myString[0])

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length)
    printString(mySubString)
  } else {
    return true
  }
}

printString('pizza')

let sortedArray = []
let unsortedArray = [5, 6, -1, 1, 3]

minAndRemove(sortedArray, unsortedArray)

const minAndRemove = (array) => {
  let min = array[0]
  let minIndex = 0

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

const selectionSort = (array) => {
  let newMin
  let sorted = []

  while (array.length != 0) {
    newMin = minAndRemove(array)
    // sorted.push(newMin)
    sorted = [...sorted, newMin]
  }
  return sorted
}

// Selection sort process:
// find the minimum and remove elements until there are no more elements left in the original array
