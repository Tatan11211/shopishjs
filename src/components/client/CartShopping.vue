<template>
  <div class="cart-shopping">
    <div
      v-if="visible"
      class="shopping-content d-flex flex-row"
    >
      <div
        class="blank-area"
        @click="shoppingCarVisibleToggle"
      >
      </div>
      <div class="shopping-panel">
        <GridProducts/>
        <button
          class="btn-x btn btn-danger"
          @click="shoppingCarVisibleToggle"
        >
        X
        </button>
      </div>
    </div>
    <button
      v-if="!visible"
      class="btnShopping btn btn-warning"
      @click="shoppingCarVisibleToggle"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
    </button>
  </div>
</template>

<script>
import GridProducts from './GridProductsCart.vue';

export default {
  name: 'CartShopping-component',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    shoppingCarVisibleToggle() {
      this.visible = !this.visible;
    },
  },
  components: {
    GridProducts,
  },
};
</script>

<style scoped>

.cart-shopping {
  border: 1px solid gray;
}

.btnShopping {
  color: white;
  position: fixed;
  bottom: 110px;
  right: 50px;
}

.shopping-content {
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0px;
  z-index: 3;
}

.blank-area {
  width: 60%;
  height: 100%;
  background-color: white;
  opacity: .5;
}

.btn-x {
  position: fixed;
  width: 35px;
  height: 35px;
  top: 10px;
  right: 10px;
}

.shopping-panel {
  width: 40%;
  background-color: white;
}

@media (max-width: 768px) {
  .btnShopping {
    right: 30px;
  }
  .blank-area {
    width: 0%;
  }
  .shopping-panel {
    width: 100%;
    background-color: white;
  }

}

</style>
