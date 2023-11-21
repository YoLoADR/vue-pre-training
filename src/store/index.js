import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      isAuthenticated: false
    };
  },
  mutations: {
    authenticateUser(state) {
      state.isAuthenticated = true;
    },
    logoutUser(state) {
      state.isAuthenticated = false;
    }
  },
  actions: {
    authenticateUser(context) {
      context.commit('authenticateUser');
    },
    logoutUser(context) {
      context.commit('logoutUser');
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    }
  }
});