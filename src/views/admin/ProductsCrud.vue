<template>
  <div class="productsCrud">
    <div class="content">
      <h1 class="mt-3">Products</h1>
      <Grid/>
      <router-link to="/AddProduct">
        <button @click="resetProductToEdit" class="btn btn-success my-3">Agregar producto</button>
      </router-link>
    </div>
    <b-modal
      ref="delete-modal"
      title="Advertencia!"
      @ok="confirmDelete()"
      @hidden="resetProductToDelete()"
    >
      <p class="my-4">¿Está seguro que desea eliminar este producto?</p>
    </b-modal>
    <b-modal
      ref="delete-confirmation"
      ok-only
    >
      <p class="my-4">Producto eliminado.</p>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Grid from '../../components/admin/GridProductsCrud.vue';

export default {
  name: 'productsCrud-View',
  layout: 'admin-layout',
  components: {
    Grid,
  },
  watch: {
    productToDelete() {
      if (this.productToDelete !== '') {
        this.$refs['delete-modal'].show();
      }
    },
    productToEdit() {
      if (this.productToEdit !== null) {
        console.log('productToEdit', this.productToEdit);
        this.$router.push('/AddProduct');
      }
    },
  },
  computed: {
    ...mapGetters({ productToDelete: 'getProductToDelete' }),
    ...mapGetters({ productToEdit: 'getProductToEdit' }),
  },
  methods: {
    ...mapActions([
      'deleteProductDb',
      'getProductsDb',
    ]),
    ...mapMutations([
      'setProductToEditMu',
      'setProductToDeleteMu',
      ]),
    confirmDelete() {
      console.log('eliminar el producto confirmado');
      this.$refs['delete-modal'].hide();
      this.deleteProductDb(this.productToDelete)
      .then(() => {
        this.resetProductToDelete();
        this.$refs['delete-confirmation'].show();
        this.getProductsDb();
      });
    },
    resetProductToDelete() {
      this.setProductToDeleteMu('');
    },
    resetProductToEdit() {
      this.setProductToEditMu(null);
    },
  },
};
</script>

<style scoped>
.productsCrud {
  height: 100%;
}

</style>
