import Vue from "vue";
import Vuex from "vuex";
import { db, storage } from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    AllShirts: {},
    productToDelete: "",
    productToUpload: {},
    productToEdit: {},
    singleProduct: {},
    shoppingCart: [],
    productCart: {},
    productReapeated: false,
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
      state.productToUpload = payload;
    },
    setProductToEditMu(state, payload) {
      state.productToEdit = payload;
    },
    setSingleProductMu(state, payload) {
      state.singleProduct = payload;
    },
    setCartShoppingMu(state, payload) {
      state.shoppingCart = payload;
    },
    addNewProductCartMu(state, payload) {
      state.shoppingCart.push(payload);
    },
    addRepeatedProductCartMu(state, payload) {
      if (state.shoppingCart.length !== 0) {
        state.shoppingCart.forEach((element) => {
          if (element.id === payload) {
            element.amount += 1;
            state.productReapeated = true;
          } else {
            state.productReapeated = false;
          }
        });
      } else {
        state.productReapeated = false;
      }
    },
    deleteProductCartMu(state, payload) {
      let units = false;
      let product = null;
      if (state.shoppingCart.length !== 0) {
        state.shoppingCart.forEach((element, index) => {
          if (element.id === payload) {
            product = index;
            if (element.amount > 1) {
              element.amount -= 1;
              units = true;
            }
          }
        });
        if (!units) {
          state.shoppingCart.splice(product, 1);
          units = false;
          product = null;
        }
      }
      return state.shoppingCart;
    },
  },

  actions: {
    /* Getting the data (shirts) from the database and storing it in the state. */
    getProductsDb({ commit }) {
      const resObj = {};
      db.collection("Products/categories/t-shirts")
        .get()
        .then((res) => {
          res.forEach((element) => {
            resObj[element.id] = element.data();
          });
          return commit("setAllShirtsMu", resObj);
        })
        .catch((error) => {
          console.log("error extracting Allshirts: ", error);
        });
    },
    /* Setting the product to delete in state */
    deleteProductDb({ commit }, payload) {
      db.collection("Products/categories/t-shirts")
        .doc(payload)
        .delete()
        .then(() => {
          console.log("t-shirt deleted ");
        });
      commit("setNewShirtsListMu", payload);
    },
    // eslint-disable-next-line no-unused-vars
    async uploadProductDb({ commit }, payload) {
      // puting img to db
      const ref = storage.ref();
      const refImg = ref.child(`images/${payload.imgRawName}`);
      const metaData = { contentType: payload.imgType };
      await refImg.put(payload.imgRaw, metaData).then((e) => {
        console.log("puting img: ", e);
      });
      // uploading producto to db
      await ref
        .child("images")
        .child(payload.imgRawName)
        .getDownloadURL()
        .then((result) => {
          payload.img = result;
          db.collection("Products/categories/t-shirts")
            .add({
              name: payload.name,
              price: payload.price,
              description: payload.description,
              img: payload.img,
            })
            .then((doc) => {
              console.log("product uploaded: ", doc.id);
            });
        });
    },
    /* eslint-disable-next-line */
    async editProductDb({ commit }, payload) {
      if (payload.img) {
        console.log("sin edicion de imagen");
        db.collection("Products/categories/t-shirts")
          .doc(payload.id)
          .update({
            name: payload.name,
            price: payload.price,
            description: payload.description,
            img: payload.img,
          })
          .then(() => {
            console.log("product edited: ");
          });
      } else {
        console.log("editando : ", payload.id);
        const ref = storage.ref();
        const refImg = ref.child(`images/${payload.imgRawName}`);
        const metaData = { contentType: payload.imgType };
        await refImg.put(payload.imgRaw, metaData).then((e) => {
          console.log("puting img: ", e);
        });
        await ref
          .child("images")
          .child(payload.imgRawName)
          .getDownloadURL()
          .then((result) => {
            payload.img = result;
            db.collection("Products/categories/t-shirts")
              .doc(payload.id)
              .update({
                name: payload.name,
                price: payload.price,
                description: payload.description,
                img: payload.img,
              })
              .then(() => {
                console.log("product edited ");
              });
          });
      }
    },
    getSingleProductDb({ commit }, payload) {
      console.log("id to db: ", payload);
      db.collection("Products/categories/t-shirts")
        .doc(payload)
        .get()
        .then((doc) => {
          console.log("singleproduct", doc.data());
          const singleProduct = doc.data();
          singleProduct.id = doc.id;
          return commit("setSingleProductMu", singleProduct);
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
    getProductToEdit(state) {
      return state.productToEdit;
    },
    getSingleProduct(state) {
      return state.singleProduct;
    },
  },

  modules: {},
});
