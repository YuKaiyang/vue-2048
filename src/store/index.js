import Vue from 'vue'
import Vuex from 'vuex'
import {check, news} from './math'

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
    },
    moveRight(state) {

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