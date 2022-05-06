<template>
    <div class="dashboard">
		<Nav />
    </div>
</template>

<script>
import Nav from '@/components/admin/Nav.vue';

export default {
    name:"Dashboard",
	components: {
		Nav
	},
}
</script>

<style scoped>

.dashboard {
	height: 100%;
}

</style>