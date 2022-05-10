<template>
    <div class="dashboard d-flex">
		<Nav />
		<Products />
    </div>
</template>

<script>
import Nav from '@/components/admin/Nav.vue';
import Products from '@/components/admin/Products.vue'

export default {
    name:"Dashboard",
	components: {
		Nav,
		Products
	},
}
</script>

<style scoped>

.dashboard {
	height: 100%;
}

</style>