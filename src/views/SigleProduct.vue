<template>
  <div class="container">
    <h1 class="mt-3">
      {{singleProduct.name}}
    </h1>
    <img class="imgProduct" :src="singleProduct.img" alt="not found">
    <p>{{singleProduct.description}}</p>
    <button class="btn btn-success">Agregar al carro</button>
    <router-link to="/fishing">
      <button class="btn btn-danger">Atras</button>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'singleProduct-view',
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions(['getSingleProductDb']),
  },
  computed: {
    ...mapState(['singleProduct']),
  },
  mounted() {
    this.getSingleProductDb(this.id);
  },
};
</script>

<style scoped>
.imgProduct {
  max-width: 200px;
}
</style>
