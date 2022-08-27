import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    AllShirts: {},
    productToDelete: '',
    productToUpload: {},

  },
  mutations: {
    /* eslint no-param-reassign: "error" */
    setAllShirtsMu(state, payload) {
      state.AllShirts = {};
      Object.keys(payload).map((key) => {
        state.AllShirts[key] = payload[key];
        return state.AllShirts;
      });
    },
    setProductToDeleteMu(state, payload) {
      state.productToDelete = payload;
    },
    setNewShirtsListMu(state, payload) {
      delete state.AllShirts[`${payload}`];
    },
    setUploadProductMu(state, payload) {
      console.log(`upload product mutation: ${payload}`);
      state.productToUpload = payload;
    },
  },

  actions: {
    /* Getting the data (shirts) from the database and storing it in the state. */
    getProductsDb({ commit }) {
      const resObj = {};
      db.collection('Products/categories/t-shirts').get()
        .then((res) => {
          console.log('res: ', res);
          res.forEach((element) => {
            console.log(element.data().description);
            resObj[element.id] = element.data();
          });
          return commit('setAllShirtsMu', resObj);
        })
        .catch((error) => {
          console.log('error extracting Allshirts: ', error);
        });
    },
    /* Setting the product to delete in state */
    setProductToDelete({ commit }, payload) {
      commit('setProductToDeleteMu', payload);
    },
    deleteProductDb({ commit }, payload) {
      console.log(`product to delete ACTION ${payload}`);
      db.collection('Products/categories/t-shirts').doc(payload).delete()
        .then((res) => {
          console.log('t-shirt deleted: ', res);
        });
      commit('setNewShirtsListMu', payload);
    },
    setUploadProduct({ commit }, payload) {
      commit('setUploadProductMu', payload);
    },
    // eslint-disable-next-line no-unused-vars
    uploadProductDb({ commit }, payload) {
      console.log(`product to db: ${payload}`);
      db.collection('Products/categories/t-shirts').add({
        name: payload.name,
        price: payload.price,
        description: payload.description,
        img: payload.img,
      }).then((doc) => {
        console.log(doc.id);
      });
    },
  },

  getters: {
    getAllShirts(state) {
      return state.AllShirts;
    },
    getProductToDelete(state) {
      return state.productToDelete;
    },
    getProductToUpload(state) {
      return state.productToUpload;
    },
  },

  modules: {
  },
});
