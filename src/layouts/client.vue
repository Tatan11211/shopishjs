<template>
  <div id="app" :style="`position:relative; height:${windowSize}px; overflow-y:scroll;`" class="d-flex flex-column">
    <Navsearch />
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Nav from '../components/client/Nav.vue';
import Navsearch from '../components/client/Navsearch.vue';
import Footer from '../components/client/Footer.vue';

export default {
  name: 'client-layout',
  data() {
    return {
      windowSize: 0,
    };
  },
  methods: {
    setWindowSize() {
      this.windowSize = window.innerHeight;
    },
  },
  components: {
    Navsearch,
    Nav,
    Footer,
  },
  mounted() {
    this.setWindowSize();
  },
};
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

.size1 {
  font-size: 15px;
}

.size2 {
  font-size: 20px;
}

.size3 {
  font-size: 27px;
}

</style>
