import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    AllShirts : {},

  },
  mutations: {

    setAllShirts(state, payload) {
      state.AllShirts = {}
      Object.keys(payload).map((key) => {
          state.AllShirts[key] = payload[key]
      })
      console.log("set all shirts: ", state.AllShirts)
    }

  },

  actions: {

    getProducts({commit}){
      let resObj = {}
      db.collection('Products/categories/t-shirts').get()
      .then(res =>{
        console.log("res: ", res)
        res.forEach(element => {
          console.log(element.data().description)
          resObj[element.id] = element.data()
        })
        console.log('getProducts: ', resObj)
        return commit ('setAllShirts', resObj)
      })
      .catch(error => {
        console.log("error extracting Allshirts: ", error)
      })
    }
  },

  getters: {
    getAllShirts(state){
      console.log("getallshirts: ", state.AllShirts)
      return state.AllShirts
    }
  },

  modules: {
  }
})
