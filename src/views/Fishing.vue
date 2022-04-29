<template>
    <div class="fishing container d-flex flex-wrap ">

        <div class="card-content card flex" v-for="(item, index) in allShirts" :key="index">
            <Product
                :name = item.name
                :price = item.price
                :description = item.description
            />
        </div>
        <!-- <Product
            :name = products.product1.name
            :price = products.product1.price
            :description = products.product1.description
        />
        <Product
            :name = products.product2.name
            :price = products.product2.price
            :description = products.product2.description
        />
        <Product
            :name = products.product3.name
            :price = products.product3.price
            :description = products.product3.description
        />
        <Product
            :name = products.product4.name
            :price = products.product4.price
            :description = products.product4.description
        />
        <Product
            :name = products.product5.name
            :price = products.product5.price
            :description= products.product5.description
        /> -->
    </div>
</template>

<script>
import Product from '../components/Product';
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

// import store from '@/store';

export default {
    name: 'Fishing',
    data(){
        return {
            products:{
                product1: {
                    name: 'producto 1',
                    price: 50000,
                    description: 'this is an description example for a product 1'
                },
                product2: {
                    name: 'producto 2',
                    price: 40000,
                    description: 'this is an description example for a product 2'
                },
                product3: {
                    name: 'producto 3',
                    price: 64000,
                    description: 'this is an description example for a product 3'
                },
                product4: {
                    name: 'producto 4',
                    price: 99000,
                    description: 'this is an description example for a product 4'
                },
                product5: {
                    name: 'producto 5',
                    price: 990055,
                    description: 'this is an description example for a product 5'
                },
            }
        }
    },

    mounted(){
        this.getProducts()
    },

    watch: {
        allShirts: function(){
            console.log("productos watch: ", this.allShirts)
        }
    },

    methods:{
        ...mapActions(['getProducts'])
    },

    computed: {
        ...mapGetters({allShirts:'getAllShirts'})
    },

    components:{
        Product
    }
}
</script>

<style scoped>

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
