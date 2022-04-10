import { createStore } from 'vuex'
import { toyStore } from './modules/toys.store.js'
import { userStore } from './modules/user.store.js'
import { reviewStore } from './modules/review.store'

// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    toyStore,
    userStore,
    reviewStore,
  },
})

export default store
