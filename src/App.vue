<template>
  <div
    id='app'
    :style='`position:relative; height:${windowSize}px; overflow-y:scroll;`'
    class='d-flex flex-column'
  >
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
const defaultLayout = 'default';
export default {
  name: 'App',
  data() {
    return {
      windowSize: 0,
    };
  },
  computed: {
    layout() {
      /* agregar la ruta blank para errores */
      // eslint-disable-next-line prefer-template
      return (this.$route.meta.layout || defaultLayout) + '-layout';
    },
  },
  methods: {
    setWindowSize() {
      this.windowSize = window.innerHeight;
    },
  },
  mounted() {
    this.setWindowSize();
  },
};
</script>

<style>
#app {
  position: relative;
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
