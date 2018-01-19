
//计算剩余空格数量
export const check = (arr) => {
  let res = 0
  arr.forEach(v => {
    if (v === 0) {
      res++
    }
  })
  return res
}
//生成指定数量的新格子
export const news = (arr, number) => {
  const res = []
  let i = 0
  while (i < number) {
    const randomIndex = Math.floor(Math.random() * 16)
    if (arr[randomIndex] === 0 && res.indexOf(randomIndex) === -1) {
      i++
      res.push(randomIndex)
    }
  }
  return res
}
//生成向左移动的数组
export const makeLeft = (numbers) => {
  const lineOne = runLeft(numbers.slice(0, 4))
  const lineTwo = runLeft(numbers.slice(4, 8))
  const lineThree = runLeft(numbers.slice(8, 12))
  const linefour = runLeft(numbers.slice(12, 16))
  return [...lineOne, ...lineTwo, ...lineThree, ...linefour]
}
//向左移动数字
const runLeft = (arr) => {
  let t = 0
  while (t < 4) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === 0) {
        arr[i] = arr[i + 1]
        arr[i + 1] = 0
        continue
      } else if (arr[i] === arr[i + 1]) {
        arr[i] = arr[i] * 2
        arr[i + 1] = 0
      }
    }
    t++
  }
  return [...arr]
}
//生成向右移动的数组
export const makeRight = (numbers) => {
  const lineOne = runRight(numbers.slice(0, 4))
  const lineTwo = runRight(numbers.slice(4, 8))
  const lineThree = runRight(numbers.slice(8, 12))
  const linefour = runRight(numbers.slice(12, 16))
  return [...lineOne, ...lineTwo, ...lineThree, ...linefour]
}
//向右移动数字
const runRight = (arr) => {
  let t = 0
  while (t < 4) {
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] === 0) {
        arr[i] = arr[i - 1]
        arr[i - 1] = 0
        continue
      } else if (arr[i] === arr[i - 1]) {
        arr[i] = arr[i] * 2
        arr[i - 1] = 0
      }
    }
    t++
  }
  return [...arr]
}
//生成向上移动的数组
export const makeUp = (arr) => {
  let numbers = mutiArrar(arr)
  const lineOne = runLeft(numbers.slice(0, 4))
  const lineTwo = runLeft(numbers.slice(4, 8))
  const lineThree = runLeft(numbers.slice(8, 12))
  const linefour = runLeft(numbers.slice(12, 16))
  numbers = [...lineOne, ...lineTwo, ...lineThree, ...linefour]
  let newNumbers = mutiArrar(numbers)
  return newNumbers
}
//生成向下移动的数组
export const makeDown = (arr) => {
  let numbers = mutiArrar(arr)
  const lineOne = runRight(numbers.slice(0, 4))
  const lineTwo = runRight(numbers.slice(4, 8))
  const lineThree = runRight(numbers.slice(8, 12))
  const linefour = runRight(numbers.slice(12, 16))
  numbers = [...lineOne, ...lineTwo, ...lineThree, ...linefour]
  let newNumbers = mutiArrar(numbers)
  return newNumbers
}
//生成变形数组
const mutiArrar = (arr) => {
  let numbers = []
  for (let i = 0; i < 4; i++) {
    for (let n = 0; n < 4; n++) {
      numbers.push(arr[i + n * 4])
    }
  }
  return numbers
}