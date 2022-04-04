<template>
  <div id="app">
    <Navsearch />
    <Nav />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Navsearch from './components/Navsearch.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data(){
    return{
      windowSize:0
    }
  },
  methods:{
    setWindowSize(){
      this.windowSize = window.innerHeight-95;
    }
  },
  components:{
    Navsearch,
    Nav,
    Footer
  },
  mounted(){
    this.setWindowSize();
  }
}
</script>

<style>
#app {
  position:relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
