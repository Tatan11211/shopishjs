<template>
    <!-- <div class="card-content card flex"> -->
        <div class="card-items flex flex-column ">
            <div class="title">
                <h2 class="size4">{{name}}</h2>
            </div>
            <div class="data-card">
                <div class="image">
                    <img src="../assets/images/logopesca.png" class="img-product img-fluid" alt="">
                </div>
                <div class="data">
                    <h3 class="size3">{{price}}$</h3>
                    <h4 class="size2">{{description}}</h4>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
export default {
    name: 'Product',
    props:{
        name: String,
        price: Number,
        description: String
    },
}
</script>

<style scoped>

.img-product {
    width: 100%;
    height: auto;
}


</style>