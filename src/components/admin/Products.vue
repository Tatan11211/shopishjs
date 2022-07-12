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
        </div>
        <div>
          <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
          <b-modal
            ref="delete-modal"
            title="Advertencia!"
            @ok="confirmDelete()"
            @hidden="resetProductToDelete()"
          >
            <p class="my-4">¿Está seguro que desea eliminar este producto?</p>
          </b-modal>
        </div>
        <div>
          <b-modal
            id="modal-prevent-closing"
            ref="newProduct-modal"
            title="Agrega un nuevo producto"
            @show="newProductReset"
            @hidden="newProductReset"
            @ok="newProduct"
          >
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                label="Nombre del producto:"
                label-for="name-input"
                invalid-feedback="El nombre es requerido."
                :state="nameState"
              >
                <b-form-input
                  id="name-input"
                  v-model="productName"
                  :state="nameState"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label="Precio del producto:"
                label-for="price-input"
                invalid-feedback="El nombre es requerido."
                :state="priceState"
              >
                <b-form-input
                  id="price-input"
                  v-model="productPrice"
                  :state="priceState"
                  required
                ></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <b-button
          v-b-modal.modal-prevent-closing
          variant="primary"
        >
          Nuevo producto
        </b-button>
        <!-- <button
          type="button"
          class="btn btn-primary btn-newproduct d-flex justify-content-center"
          @click="newProduct"
          >
          Nuevo producto
        </button> -->
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
      productName: '',
      nameState: null,
      productPrice: 0,
      priceState: null,
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

    newProduct() {

    },

    newProductReset() {

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

.btn-newproduct {
  width: 150px;
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
