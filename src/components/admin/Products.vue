<template>
  <div class="productsAdmin d-flex flex-column align-content-between">
    <h1>productos admin</h1>
    <div class="container d-flex flex-wrap">
      <div class="grid">
        <div
          class="card-content card"
          v-for="(item, index) in allShirts"
          :key="index"
        >
          <Product
            :id="index"
            :name="item.name"
            :price="item.price"
            :description="item.description"
          />
        </div>
      </div>
      <div>
        <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
        <b-modal
          ref="delete-modal"
          title="Advertencia!"
          @ok="confirmDelete()"
          @hidden="resetProductToDelete()"
        >
          <p class="my-4">¿Está seguro que desea eliminar este producto?</p>
        </b-modal>
      </div>
      <div>
        <b-modal
          id="modal-prevent-closing"
          ref="newProduct-modal"
          title="Agrega un nuevo producto"
          @show="newProductReset"
          @hidden="newProductReset"
          @ok="newProduct"
        >
          <form ref="form" @submit.stop.prevent="newProduct">
            <b-form-group
              label="Nombre del producto:"
              label-for="name-input"
              invalid-feedback="El nombre es requerido."
              :state="nameState"
            >
              <b-form-input
                id="name-input"
                v-model="productName"
                :state="nameState"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Precio del producto:"
              label-for="price-input"
              invalid-feedback="El nombre es requerido."
              :state="priceState"
            >
              <b-form-input
                id="price-input"
                v-model="productPrice"
                :state="priceState"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Descripción:"
              label-for="description-input"
              invalid-feedback="la descripcion es requerida."
              :state="priceState"
            >
              <b-form-input
                id="description-input"
                v-model="productDescription"
                :state="priceState"
                required
              ></b-form-input>
            </b-form-group>

            <label
              for="formFile"
              class="font-weight-bold align-items-center d-block"
              style="cursor: pointer"
            >
              <!-- eslint-disable-next-line -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-paperclip"
                viewBox="0 0 16 16"
              >
                <!-- eslint-disable-next-line -->
                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
              </svg>
              Adjuntar imagen
            </label>
            <input
              accept="image/x-png,image/gif,image/jpeg,application/pdf"
              type="file"
              class="d-none"
              id="formFile"
              @change="onFileSelected"
            />
            <p v-show="errorMessage">{{errorMessage}}</p>
            <img v-show="imgURL" :src="imgURL" alt=""  height="150">
          </form>
        </b-modal>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <b-button v-b-modal.modal-prevent-closing variant="primary">
        Nuevo producto
      </b-button>
      <!-- <button
          type="button"
          class="btn btn-primary btn-newproduct d-flex justify-content-center"
          @click="newProduct"
          >
          Nuevo producto
        </button> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Product from './ProductCrud.vue';
import { storage } from '../../firebase';

const ref = storage.ref();

export default {
  name: 'Products-component',

  data() {
    return {
      productName: '',
      nameState: null,
      productPrice: 0,
      priceState: null,
      productDescription: '',
      descriptionState: null,
      imgState: '',
      fileSelected: null,
      imgURL: null,
      imgType: null,
      errorMessage: null,
    };
  },

  mounted() {
    this.getProducts();
  },

  watch: {
    productToDelete() {
      if (this.productToDelete !== '') {
        console.log('eliminar producto: WATCH ', this.productToDelete);
        this.$refs['delete-modal'].show();
      }
    },
  },

  computed: {
    ...mapGetters({ allShirts: 'getAllShirts' }),
    ...mapGetters({ productToDelete: 'getProductToDelete' }),
  },

  methods: {
    ...mapActions(['getProducts']),
    ...mapActions(['deleteProduct']),
    ...mapActions(['deleteProductDb']),

    onFileSelected(event) {
      this.imgType = event.target.files[0].type;
      console.log('type', this.imgType);

      if (this.imgType === 'image/jpeg' || this.imgType === 'image/png') {
        this.errorMessage = null;
        const [File] = event.target.files;
        this.fileSelected = File;
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          this.imgURL = reader.result;
          console.log('File: ', this.fileSelected);
        });
        reader.readAsDataURL(this.fileSelected);
      } else {
        this.errorMessage = 'Tipo de archivo no valido.';
      }
    },
    confirmDelete() {
      console.log('eliminar el producto confirmado');
      this.$refs['delete-modal'].hide();
      this.deleteProductDb(this.productToDelete);
      this.resetProductToDelete();
    },
    resetProductToDelete() {
      this.deleteProduct('');
    },

    async newProduct() {
      /* if(this.productName !== '' ) */
      const refImg = ref.child(`images/${this.fileSelected.name}`);
      const metaData = { contentType: this.imgType };
      await refImg.put(this.fileSelected, metaData).then((e) => {
        console.log('puting img: ', e);
      });
      const urlDownload = await ref.child('images').child(this.fileSelected.name).getDownloadURL();
      console.log('puting img: ', urlDownload);
    },
    newProductReset() {},
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        console.log('form insnt valid');
        return;
      }
      this.$nextTick(() => {
        console.log('');
        this.$bvModal.hide('modal-prevent-closing');
      });
    },
  },

  components: {
    Product,
  },
};
</script>

<style scoped>
.productsAdmin {
  height: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
}

.btn-newproduct {
  width: 150px;
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
