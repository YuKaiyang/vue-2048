import Vue from 'vue'
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