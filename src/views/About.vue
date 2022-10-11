<template>
  <div class='about d-flex flex-column align-content-between'>
    <Navsearch />
    <Nav />
    <Workingpage />
    <Footer />
  </div>
</template>

<script>
import Navsearch from '../components/client/Navsearch.vue';
import Nav from '../components/client/Nav.vue';
import Workingpage from '../components/Workingpage.vue';
import Footer from '../components/client/Footer.vue';

export default {
  name: 'About-view',
  layout: 'client-layout',
  components: {
    Navsearch,
    Nav,
    Workingpage,
    Footer,
  },
};
</script>

<style scoped>
.about {
  height: 100%;
}
</style>
