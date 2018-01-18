
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
//向左移动数字
export const runLeft = (arr) => {
  // for (let i = arr.length - 1; i > 0; i--) {
  //   if (arr[i] !== 0 && arr[i] === arr[i - 1]) {
  //     arr[i - 1] = arr[i] * 2
  //     arr[i] = 0
  //   } else if (arr[i - 1] === 0) {
  //     arr[i - 1] = arr[i]
  //     arr[i] = 0
  //   }
  // }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) {
      arr[i] = arr[i + 1]
      arr[i + 1] = 0
      continue
    } else if (arr[i] === arr[i + 1]) {
      arr[i] = arr[i] * 2
      arr[i + 1] = 0
    }
    // if (arr[i] !== 0 && arr[i] === arr[i + 1]) {
    //   arr[i] = arr[i] * 2
    //   arr[i + 1] = 0
    // } else if (arr[i] === 0 && arr[i + 1] !== 0) {
    //   arr[i] = arr[i + 1]
    //   arr[i + 1] = 0
    // } else {
    //   arr[i] === arr[i + 1]
    // }
  }
  return [...arr]
}
//向右移动数字
export const runRight = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0 && arr[i] === arr[i + 1]) {
      arr[i + 1] = arr[i] * 2
      arr[i] = 0
    } else if (arr[i + 1] === 0) {
      arr[i + 1] = arr[i]
      arr[i] = 0
    }
  }
  return [...arr]
}