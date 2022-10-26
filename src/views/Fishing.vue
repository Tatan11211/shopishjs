<template>
  <div class='fishing'>
    <Grid />
    <CartShopping />
  </div>
</template>

<script>
import Grid from '../components/client/GridProducts.vue';
import CartShopping from '../components/client/CartShopping.vue';

export default {
  name: 'Fishing-view',
  layout: 'client-layout',
  data() {
    return {
    };
  },

  components: {
    Grid,
    CartShopping,
  },
};
</script>

<style scoped>

</style>
