<template>
  <div class='fishing d-flex flex-column align-content-between'>
    <Navsearch />
    <Nav />
    <Grid />
    <Footer />
  </div>
</template>

<script>
import Navsearch from '../components/client/Navsearch.vue';
import Nav from '../components/client/Nav.vue';
import Footer from '../components/client/Footer.vue';
import Grid from '../components/client/GridProducts.vue';

// import store from '@/store';

export default {
  name: 'Fishing-view',
  data() {
    return {
    };
  },

  components: {
    Grid,
    Navsearch,
    Nav,
    Footer,
  },
};
</script>

<style scoped>
.fishing {
    height: 100%;
}
</style>
