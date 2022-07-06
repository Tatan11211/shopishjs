<template>
    <div class='productsAdmin d-flex flex-column align-content-between'>
      <h1>productos admin</h1>
      <div class='container d-flex flex-wrap'>
        <div
          class='card-content card flex'
          v-for='(item, index) in allShirts'
          :key='index'
        >
          <Product
            :id='index'
            :name='item.name'
            :price='item.price'
            :description='item.description'
          />
          {{productToDelete}}
        </div>
        <div>
          <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
          <b-modal
            ref="delete-modal"
            title="BootstrapVue"
            @ok="confirmDelete()"
            @hidden="resetProductToDelete()"
          >
            <p class="my-4">Hello from modal!</p>
          </b-modal>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Product from './ProductCrud.vue';

export default {
  name: 'Products-component',

  data() {
    return {
    };
  },

  mounted() {
    this.getProducts();
  },

  watch: {
    productToDelete() {
      if (this.productToDelete !== '') {
        console.log('eliminar producto: WATCH ', this.productToDelete);
        this.$refs['delete-modal'].show();
      }
    },
  },

  computed: {
    ...mapGetters({ allShirts: 'getAllShirts' }),
    ...mapGetters({ productToDelete: 'getProductToDelete' }),
  },

  methods: {
    ...mapActions(['getProducts']),
    ...mapActions(['deleteProduct']),
    ...mapActions(['deleteProductDb']),

    confirmDelete() {
      console.log('eliminar el producto confirmado');
      this.$refs['delete-modal'].hide();
      this.deleteProductDb(this.productToDelete);
      this.resetProductToDelete();
    },

    resetProductToDelete() {
      this.deleteProduct('');
    },
  },

  components: {
    Product,
  },
};
</script>

<style scoped>

.productsAdmin {
  height: 100%;
}

.card-content {
  margin: 5px 20px;
  width: calc(25% - (20px * 2));
}

/* responsive products grid */
@media (max-width: 1024px) {
  .card-content {
    margin: 5px 20px;
    width: calc(30% - (20px * 2));
  }
}

@media (max-width: 768px) {
  .card-content {
    margin: 5px 20px;
    width: calc(50% - (20px * 2));
  }
}

@media (max-width: 480px) {
  .card-content {
    margin: 5px 20px;
    width: calc(100% - (20px * 2));
  }
}

</style>
