<template>
  <div class="productsCrud gridMain">
    <Nav/>
    <div class="content">
      <Grid/>
      <router-link to="/AddProduct">
        <button class="btn btn-success">Agregar producto</button>
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
import { mapActions, mapGetters } from 'vuex';
import Nav from '../../components/admin/Nav.vue';
import Grid from '../../components/admin/GridProductsCrud.vue';

export default {
  name: 'productsCrud-View',
  components: {
    Nav,
    Grid,
  },
  watch: {
    productToDelete() {
      if (this.productToDelete !== '') {
        this.$refs['delete-modal'].show();
      }
    },
  },
  computed: {
    ...mapGetters({ productToDelete: 'getProductToDelete' }),
  },
  methods: {
    ...mapActions([
      'deleteProductDb',
      'setProductToDelete',
      'getProductsDb',
    ]),
    confirmDelete() {
      console.log('eliminar el producto confirmado');
      this.$refs['delete-modal'].hide();
      this.deleteProductDb(this.productToDelete);
      this.resetProductToDelete();
      this.$refs['delete-confirmation'].show();
      this.getProductsDb();
    },
    resetProductToDelete() {
      this.setProductToDelete('');
    },
  },
};
</script>

<style scoped>
.productsCrud {
  height: 100%;
}

.gridMain {
  display: grid;
  grid-template-columns: auto 80%;
}
</style>
