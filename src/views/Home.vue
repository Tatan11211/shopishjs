<template>
  <div class="home d-flex flex-column align-content-between">
    <Navsearch />
    <Nav />
    <div class="home">
      <img alt="Vue logo" class="img-fluid" src="../assets/images/banner3.jpg">
      <i class="fas fa-address-book"></i>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navsearch from '../components/Navsearch.vue';
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';

export default {
    name:'Home',
    components:{
        Navsearch,
        Nav,
        Footer
    }
}
</script>

<style scoped>

.home {
    height: 100%;
}

</style>
