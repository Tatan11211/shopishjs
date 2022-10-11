<template>
  <div class='card-items d-flex flex-column'>
    <div class='title mt-3 d-flex flex-row justify-content-center'>
      <h2 class='size4 ms-2'>{{ name }}</h2>
    </div>
    <div class='data-card'>
      <div class='image'>
        <router-link :to="{ name: 'singleProduct',params: {id: id} }">
        <img
            v-if="img"
            :src="img"
            class="img-product img-fluid"
            alt="Img not found"
          />
          <img
            v-else
            src="../../assets/images/logopesca.png"
            class="img-product img-fluid"
            alt="Img not found"
          />
        </router-link>
      </div>
      <div class='data mb-3 mx-3'>
        <h3 class='size3'>{{ price }}$</h3>
        <h4 class='size2'>{{ description }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Product-component',
  props: {
    id: String,
    name: String,
    price: Number,
    description: String,
    img: String,
  },
  methods: {
    ...mapMutations(['setSingleProductMu']),
    openSingleProduct() {
      const singleProduct = {
        id: this.id,
        name: this.name,
        price: this.price,
        description: this.description,
        img: this.img,
      };
      console.log('abre producto unitario', singleProduct);
      this.setSingleProductMu(singleProduct);
      this.$router.push('/singleProduct');
    },
  },
};
</script>

<style scoped>
.img-product {
  width: 100%;
  max-width: 250px;
  height: auto;
}

.btn-close {
  border: none;
}

/* responsive products */
@media (max-width: 1024px) {
  .title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1rem !important;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 0.6rem !important;
  }
}

</style>
