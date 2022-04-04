<template>
    <div class="card-content card flex">
        <div class="card-items flex flex-column ">
            <div class="title">
                <h2>{{name}}</h2>
            </div>
            <div class="data-card">
                <div class="image">
                    <img src="../assets/images/logopesca.png" class="img-product img-fluid" alt="">
                </div>
                <div class="data">
                    <h3>{{price}}$</h3>
                    <h4>{{description}}</h4>
                </div>
            </div>
        </div>
    </div>
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
.card-content {
    margin: 5px 20px;
    width: calc(25% - (20px * 2));
}

.img-product {
    max-width: 270px;
}

</style>