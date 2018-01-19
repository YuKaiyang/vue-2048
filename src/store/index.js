import Vue from 'vue'
import Vuex from 'vuex'
import {check, news, runLeft, runRight} from './math'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    numbers: new Array(16).fill(0)
  },
  mutations: {
    start(state) {
      const newNumber = news(state.numbers, 4)
      newNumber.forEach(i => {
        Vue.set(state.numbers, i, 2)
      })
    },
    moveLeft(state) {
      const lineOne = runLeft(state.numbers.slice(0, 4))
      const lineTwo = runLeft(state.numbers.slice(4, 8))
      const lineThree = runLeft(state.numbers.slice(8, 12))
      const linefour = runLeft(state.numbers.slice(12, 16))
      const newNumber = [...lineOne, ...lineTwo, ...lineThree, ...linefour]
      newNumber.forEach((v, i) => {
        Vue.set(state.numbers, i, v)
      })
    },
    moveRight(state) {
      const lineOne = runRight(state.numbers.slice(0, 4))
      const lineTwo = runRight(state.numbers.slice(4, 8))
      const lineThree = runRight(state.numbers.slice(8, 12))
      const linefour = runRight(state.numbers.slice(12, 16))
      const newNumber = [...lineOne, ...lineTwo, ...lineThree, ...linefour]
      newNumber.forEach((v, i) => {
        Vue.set(state.numbers, i, v)
      })
    },
    moveUp(state) {

    },
    moveDown(state) {

    },
    newNumber(state) {
      let empty = check(state.numbers)

      if (empty > 1) {
        const newNumber = news(state.numbers, 2)
        newNumber.forEach(i => {
          Vue.set(state.numbers, i, 2)
        })
      } else if (empty === 1) {
        const newNumber = news(state.numbers, 1)
        newNumber.forEach(i => {
          Vue.set(state.numbers, i, 2)
        })
      }
    }
  }
})

export default store