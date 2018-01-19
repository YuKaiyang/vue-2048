import Vue from 'vue'
import Vuex from 'vuex'
import {
  check, news, makeLeft, makeRight,
  makeUp, makeDown,
} from './math'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    numbers: new Array(16).fill(0)
  },
  mutations: {
    start(state) {
      const newNumbers = news(state.numbers, 4)
      newNumbers.forEach(i => {
        Vue.set(state.numbers, i, 2)
      })
    },
    moveLeft(state) {
      const newNumbers = makeLeft(state.numbers)
      newNumbers.forEach((v, i) => {
        Vue.set(state.numbers, i, v)
      })
    },
    moveRight(state) {
      const newNumbers = makeRight(state.numbers)
      newNumbers.forEach((v, i) => {
        Vue.set(state.numbers, i, v)
      })
    },
    moveUp(state) {
      const newNumbers = makeUp(state.numbers)
      newNumbers.forEach((v, i) => {
        Vue.set(state.numbers, i, v)
      })
    },
    moveDown(state) {
      const newNumbers = makeDown(state.numbers)
      newNumbers.forEach((v, i) => {
        Vue.set(state.numbers, i, v)
      })
    },
    newNumbers(state) {
      let empty = check(state.numbers)
      if (empty > 1) {
        const newNumbers = news(state.numbers, 2)
        newNumbers.forEach(i => {
          Vue.set(state.numbers, i, 2)
        })
      } else if (empty === 1) {
        const newNumbers = news(state.numbers, 1)
        newNumbers.forEach(i => {
          Vue.set(state.numbers, i, 2)
        })
      }
    }
  }
})

export default store