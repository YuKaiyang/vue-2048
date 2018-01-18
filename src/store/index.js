import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    numbers: new Array(16).fill(0)
  },
  mutations: {
    start(state) {
      let count = []
      let newState = {...state}
      while (count.length !== 4) {
        const randomIndex = Math.floor(Math.random() * 16)
        if (count.indexOf(randomIndex) === -1) {
          count.push(randomIndex)
        }
      }
      count.forEach(i => {
        newState.numbers[i] = 2
      })
      return newState
    },
    moveLeft(state) {

    },
    moveRight(state) {

    },
    moveUp(state) {

    },
    moveDown(state) {

    }
  }
})

export default store