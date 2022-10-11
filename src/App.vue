<template>
  <div
    id='app'
    :style="`position:relative; height:${windowSize}px; overflow-y:scroll;`"
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

body {
  min-height: 100%;
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
