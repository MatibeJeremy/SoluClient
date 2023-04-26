import { createStore } from 'vuex';

export default createStore({
  state() {
    token: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    login({ commit }, token) {
      return commit('setToken', token)      
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== null
    },
    getToken(state) {
        return state.token
      }
  }
})
