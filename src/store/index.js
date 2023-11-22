import { createStore } from 'vuex';
import { productsDB } from '@/db/productsDB.js';
import { apiService } from '@/services/apiService';

export default createStore({
  state() {
    return {
      isAuthenticated: false,
      products: []
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
    SET_PRODUCTS(state, products) {
      state.products = products;
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
    fetchProducts({ commit }, useMockData = true) {
      if (useMockData) {
        commit('SET_PRODUCTS', productsDB.products);
      } else {
        apiService.fetchProducts()
          .then(products => {
            commit('SET_PRODUCTS', products);
          })
          .catch(error => {
            console.error("Erreur lors de la récupération des produits :", error);
          });
      }
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