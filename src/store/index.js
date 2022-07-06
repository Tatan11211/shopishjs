import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    AllShirts: {},
    productToDelete: '',

  },
  mutations: {

    /* eslint no-param-reassign: "error" */
    setAllShirts(state, payload) {
      state.AllShirts = {};
      Object.keys(payload).map((key) => {
        state.AllShirts[key] = payload[key];
        return state.AllShirts;
      });
    },

    setproductToDelete(state, payload) {
      state.productToDelete = payload;
    },

    setNewShirtsList(state, payload) {
      delete state.AllShirts[`${payload}`];
    },
  },

  actions: {

    /* Getting the data (shirts) from the database and storing it in the state. */
    getProducts({ commit }) {
      const resObj = {};
      db.collection('Products/categories/t-shirts').get()
        .then((res) => {
          console.log('res: ', res);
          res.forEach((element) => {
            console.log(element.data().description);
            resObj[element.id] = element.data();
          });
          console.log('getProducts: ', resObj);
          return commit('setAllShirts', resObj);
        })
        .catch((error) => {
          console.log('error extracting Allshirts: ', error);
        });
    },

    /* Setting the product to delete in state */
    deleteProduct({ commit }, payload) {
      commit('setproductToDelete', payload);
    },

    deleteProductDb({ commit }, payload) {
      console.log(`product to delete ACTION ${payload}`);
      db.collection('Products/categories/t-shirts').doc(payload).delete()
        .then((res) => {
          console.log('t-shirt deleted: ', res);
        });
      commit('setNewShirtsList', payload);
    },
  },

  getters: {
    getAllShirts(state) {
      console.log('getallshirts: ', state.AllShirts);
      return state.AllShirts;
    },

    getProductToDelete(state) {
      return state.productToDelete;
    },
  },

  modules: {
  },
});
