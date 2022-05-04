<template>
  <div class="fishing d-flex flex-column align-content-between">
    <Navsearch />
    <Nav />
    <div class="container d-flex flex-wrap">
      <div
        class="card-content card flex"
        v-for="(item, index) in allShirts"
        :key="index"
      >
        <Product
          :name="item.name"
          :price="item.price"
          :description="item.description"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navsearch from "../components/Navsearch.vue";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import Product from "../components/Product";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

// import store from '@/store';

export default {
  name: "Fishing",
  data() {
    return {
      products: {
        product1: {
          name: "producto 1",
          price: 50000,
          description: "this is an description example for a product 1",
        },
        product2: {
          name: "producto 2",
          price: 40000,
          description: "this is an description example for a product 2",
        },
        product3: {
          name: "producto 3",
          price: 64000,
          description: "this is an description example for a product 3",
        },
        product4: {
          name: "producto 4",
          price: 99000,
          description: "this is an description example for a product 4",
        },
        product5: {
          name: "producto 5",
          price: 990055,
          description: "this is an description example for a product 5",
        },
      },
    };
  },

  mounted() {
    this.getProducts();
  },

  watch: {
    allShirts: function () {
      console.log("productos watch: ", this.allShirts);
    },
  },

  methods: {
    ...mapActions(["getProducts"]),
  },

  computed: {
    ...mapGetters({ allShirts: "getAllShirts" }),
  },

  components: {
    Product,
    Navsearch,
    Nav,
    Footer
  },
};
</script>

<style scoped>
.fishing {
    height: 100%;
}

.card-content {
  margin: 5px 20px;
  width: calc(25% - (20px * 2));
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
