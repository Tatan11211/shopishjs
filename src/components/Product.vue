<template>
  <!-- <div class='card-content card flex'> -->
  <div class='card-items flex flex-column'>
    <div class='title d-flex flex-row justify-content-center'>
      <h2 class='size4 ms-2'>{{ name }}</h2>
    </div>
    <div class='data-card'>
      <div class='image'>
        <img
          src='../assets/images/logopesca.png'
          class='img-product img-fluid'
          alt=''
        />
      </div>
      <div class='data'>
        <h3 class='size3'>{{ price }}$</h3>
        <h4 class='size2'>{{ description }}</h4>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'Product-component',
  props: {
    name: String,
    price: Number,
    description: String,
  },
};
</script>

<style scoped>
.img-product {
  width: 100%;
  max-width: 250px;
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
