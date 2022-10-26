<template>
  <div>
    <h1 class="mb-3">
      Carrito de compras
    </h1>
    <div
      v-for="(product, index) in shoppingCart"
      :key="index"
    >
    <hr class="m-0">
      <ProductCart
        :id='product.id'
        :name='product.name'
        :price='product.price'
        :img='product.img'
      />
    <hr class="m-0">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductCart from './ProductCart.vue';

export default {
name: 'GridProductsCart-component',
data() {
  return {

  };
},

computed: {
  ...mapState(['shoppingCart']),
},

components: {
  ProductCart,
},

};
</script>
