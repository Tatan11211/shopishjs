<template>
	<div class="grid container">
		<div
			class="card-content card"
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Product from './Product.vue';

export default {
	name: 'Grid-component',
	data() {
		return {};
	},
  mounted() {
    this.getProducts();
  },

  watch: {
    allShirts() {
      console.log('productos watch: ', this.allShirts);
    },
  },

  methods: {
    ...mapActions(['getProducts']),
  },

  computed: {
    ...mapGetters({ allShirts: 'getAllShirts' }),
  },

  components: {
    Product,
  },
};
</script>

<style scoped>

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  gap: 1em;
}

/* responsive products grid */
@media (max-width: 992px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>
