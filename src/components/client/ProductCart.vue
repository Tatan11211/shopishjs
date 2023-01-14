<template>
  <div class="product-cart d-flex flex-row p-3">
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
    <div class="m-3 flex-grow-1 text-start">
      <h3 class="size3">{{ name }}</h3>
      <h4 class="size2">{{ formatter(price) }}</h4>
      <h4 class="size2">{{ amount }}</h4>
    </div>
    <button @click="deleteItemCart" class="btn-delete text-red">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-trash"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
        />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { formatter } from "../../common/commonMethods";

export default {
  name: "ProductCart-component",
  props: {
    id: String,
    name: String,
    price: Number,
    img: String,
    amount: Number,
  },

  computed: {
    ...mapState(["shoppingCart"]),
  },

  methods: {
    ...mapMutations(["setCartShoppingMu"]),
    formatter(val) {
      return formatter.format(val);
    },
    deleteItemCart() {
      const newShoppingCart = [];
      this.shoppingCart.map((item) => {
        if (item.id !== this.id) {
          newShoppingCart.push(item);
        }
        return true;
      });
      this.setCartShoppingMu(newShoppingCart);
    },
  },
};
</script>

<style scoped>
.img-product {
  width: 90px;
}

.btn-delete {
  width: 30px;
  height: 30px;
  border: 0px;
  color: red;
  background: white;
}
</style>
