<template>
  <div class="productCrud">
    <div class="card-items flex flex-column">
      <div class="title d-flex flex-row justify-content-between">
        <h2 class="size4 ms-2">{{ name }}</h2>
        <button
          class="btn-close m-2"
          @click="sendId()"
        ></button>
      </div>
      <div class="data-card">
        <div class="image">
          <img
            src="../../assets/images/logopesca.png"
            class="img-product img-fluid"
            alt=""
          />
        </div>
        <div class="data">
          <h3 class="size3">{{ price }}$</h3>
          <h4 class="size2">{{ description }}</h4>
        </div>
        <button type="button" class="btn-edit btn-primary m-2">
          Editar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductCrud-component',
  props: {
    id: String,
    name: String,
    price: Number,
    description: String,
  },
  methods: {
    ...mapActions(['deleteProduct']),

    sendId() {
      console.log('sending...', this.id);
      this.deleteProduct(this.id);
    },
  },
};
</script>

<style scoped>
.img-product {
  width: 100%;
  height: auto;
}

.btn-edit {
  border-radius: 3px;
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
