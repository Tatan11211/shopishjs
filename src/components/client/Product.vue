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
        <h4 class='size2'>{{ this.shortDescription(description) }}</h4>
      </div>
      <button
        class="btn btn-success mb-3"
        @click="addToCart()"
      >
        Agregar al carrito
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Product-component',
  props: {
    id: String,
    name: String,
    price: Number,
    description: String,
    img: String,
  },
  computed: {
    ...mapState(['shoppingCart']),
  },
  methods: {
    ...mapMutations(['setSingleProductMu', 'setCartShoppingMu']),
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
    addToCart() {
      const product = {
        id: this.id,
        name: this.name,
        price: this.price,
        description: this.description,
        img: this.img,
      };
      this.shoppingCart.push(product);
      this.setCartShoppingMu(this.shoppingCart);
    },
  },
};
</script>

<style scoped>
.img-product {
  width: 100%;
  max-width: 200px;
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
