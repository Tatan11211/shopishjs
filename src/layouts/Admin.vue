<template>
  <div class="layout-content">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from '../components/admin/Nav.vue';

export default {
  name: 'admin-layout',

  components: {
    Nav,
  },
};
</script>

<style scoped>
.layout-content {
  height: 100%;
  display: grid;
  grid-template-columns: auto 90%;
}
</style>
