import { createStore } from 'vuex';
import { productsDB } from '@/db/productsDB.js';

export default createStore({
  state() {
    return {
      isAuthenticated: false,
      products: productsDB.products // Initialisez les produits avec les données de la mock database
    };
  },
  mutations: {
    authenticateUser(state) {
      state.isAuthenticated = true;
    },
    logoutUser(state) {
      state.isAuthenticated = false;
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
  },
  actions: {
    authenticateUser(context) {
      context.commit('authenticateUser');
    },
    logoutUser(context) {
      context.commit('logoutUser');
    },
    addProduct({ commit }, product) {
      commit('ADD_PRODUCT', product);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    availableProducts(state) {
      return state.products.filter(product => product.stock > 0);
    }
  }
});