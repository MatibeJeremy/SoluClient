import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      data: null
    };
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    setData({ commit }, payload) {
      commit('setData', payload);
    }
  },
  getters: {
    getData(state) {
      return state.data;
    }
  }
});
