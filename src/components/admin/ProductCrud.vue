<template>
  <div class="productCrud">
    <div class="card-items d-flex flex-column">
      <div class="title d-inline-flex flex-row justify-content-between">
        <h2 class="size2 ms-2 mb-0 align-self-center flex-fill">{{ name }}</h2>
        <button class="btn-close m-2" @click="sendId()"></button>
      </div>
      <div class="data-card d-flex flex-column justify-content-center">
        <div class="image">
          <img
            src="../../assets/images/logopesca.png"
            class="img-product img-fluid"
            alt=""
          />
        </div>
        <div class="data d-flex flex-column flex-fill">
          <h3 class="size3">{{ price }}$</h3>
          <h4 class="descriptionLabel size2">{{ this.shortDescription(description) }}</h4>
        </div>
        <hr>
        <div class="justify-content-center align-self-stretch">
          <button type="button" class="btn-edit btn-primary m-2">Editar</button>
        </div>
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
      this.deleteProduct(this.id);
    },

    shortDescription(description) {
      if (description !== null) {
        const descLenght = description.length;
        let shortDescrip = '';
        if (descLenght > 50) {
          shortDescrip = description.substr(0, 100);
          shortDescrip += '...';
          return shortDescrip;
        }
        return description;
      }
      return 'No tiene descripción.';
    },
  },
};
</script>

<style scoped>
.data-card {
  height: 100%;
}

.productCrud {
  height: 100%;
}

.card-items {
  height: 100%;
}

.img-product {
  width: 100%;
  max-width: 250px;
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
