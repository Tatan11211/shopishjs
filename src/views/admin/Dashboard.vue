<template>
  <div class="dashboard grid">
    <Nav />
    <Products />
  </div>
</template>

<script>
import Nav from '../../components/admin/Nav.vue';
import Products from '../../components/admin/Products.vue';

export default {
  name: 'Dashboard-view',
  components: {
    Nav,
    Products,
  },
};
</script>

<style scoped>
.dashboard {
  height: 100%;
}

.grid {
  display: grid;
  grid-template-columns: auto 80%;
}
</style>
