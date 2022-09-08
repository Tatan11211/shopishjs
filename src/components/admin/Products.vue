<!-- eslint-disable max-len -->
<template>
  <div class="productsAdmin flex-column align-content-between">
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
            :img="item.img"
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
        <div class="modal fade container" id="newProductModal" tabindex="-1" aria-hidden="true" aria-labelledby="modalTitle">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalTitle">Agregar nuevo producto</h5>
                <button type="button" id="close-btn" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
              </div>
              <div class="container">
                <div class="modal-body d-flex flex-column">
                  <form @submit.prevent="newProduct">
                    <b-form-group
                      label="Nombre del producto:"
                      label-for="name-input"
                      invalid-feedback="El nombre es requerido."
                    >
                      <b-form-input
                        :class="{'is-invalid': $v.productName.$error}"
                        id="name-input"
                        v-model="$v.productName.$model"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Precio del producto:"
                      label-for="price-input"
                      invalid-feedback="El nombre es requerido."
                    >
                      <b-form-input
                        :class="{'is-invalid': $v.productPrice.$error}"
                        id="price-input"
                        type="number"
                        v-model="$v.productPrice.$model"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Descripción:"
                      label-for="description-input"
                      invalid-feedback="la descripcion es requerida."
                    >
                      <b-form-textarea
                        :class="{'is-invalid': $v.productDescription.$error}"
                        id="Descripción"
                        v-model="$v.productDescription.$model"
                        debounce="500"
                        rows="3"
                        max-rows="5"
                        required
                      >
                      </b-form-textarea>
                    </b-form-group>
                    <div class="img-product">
                      <label
                        for="formFile"
                        class="font-weight-bold align-items-center d-block"
                        style="cursor: pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-paperclip"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                        </svg>
                        Adjuntar imagen
                      </label>
                      <input
                        accept="image/x-png,image/jpeg"
                        type="file"
                        class="d-none mb-3"
                        id="formFile"
                        @change="onFileSelected"
                      />
                      <p class="text-danger" v-show="!fileSelected">{{errorMessage}}</p>
                      <img v-show="imgURL" :src="imgURL" alt=""  height="150">
                      <span v-show="fileSelected">
                        <h5>{{imgName}}</h5>
                      </span>
                    </div>
                    <div class="mt-3">
                      <button class="btn btn-success" type="submit">Crear producto</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="modal-footer">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container d-flex justify-content-center mt-3">
<!--       <b-button v-b-modal.modal-prevent-closing variant="success">
        Nuevo producto
      </b-button> -->
      <button
          type="button"
          class="btn btn-primary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#newProductModal"
          >
          Nuevo producto
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import Product from './ProductCrud.vue';
import { storage } from '../../firebase';

const ref = storage.ref();

export default {
  name: 'Products-component',

  data() {
    return {
      imgState: '',
      fileSelected: null,
      imgURL: null,
      imgName: null,
      imgType: null,
      errorMessage: null,
      showModal: false,
      productToUpload: {
        name: '',
        price: 0,
        description: '',
        img: '',
      },
    };
  },

  validations: {
    productName: { required },
    productPrice: { required },
    productDescription: { required },
  },

  mounted() {
    this.getProductsDb();
  },

  watch: {
    productToDelete() {
      if (this.productToDelete !== '') {
        console.log('eliminar producto: WATCH ', this.productToDelete);
        this.$refs['delete-modal'].show();
      }
    },
    productToUploadGetter() {
      this.uploadProductDb(this.productToUploadGetter);
    },
  },

  computed: {
    ...mapGetters({ allShirts: 'getAllShirts' }),
    ...mapGetters({ productToDelete: 'getProductToDelete' }),
    ...mapGetters({ productToUploadGetter: 'getProductToUpload' }),
  },

  methods: {
    ...mapActions([
        'getProductsDb',
        'setProductToDelete',
        'deleteProductDb',
        'setUploadProduct',
        'uploadProductDb',
      ]),
    ...mapMutations(['setUploadProductMu']),

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
          this.imgName = this.fileSelected.name;
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
      this.setProductToDelete('');
    },

    async newProduct() {
      if (!this.$v.$invalid) {
        if (this.fileSelected !== null) {
          console.log('todos campos correctos');
          try {
            const refImg = ref.child(`images/${this.fileSelected.name}`);
            const metaData = { contentType: this.imgType };
            await refImg.put(this.fileSelected, metaData).then((e) => {
              console.log('puting img: ', e);
            });
            // hacer esto desde la store
            await ref.child('images')
              .child(this.fileSelected.name)
              .getDownloadURL()
              .then((result) => {
                console.log('geturl', result);
                this.productToUpload.name = this.$v.productName.$model;
                this.productToUpload.price = Number(this.$v.productPrice.$model);
                this.productToUpload.description = this.$v.productDescription.$model;
                this.productToUpload.img = result;
                console.log(`product to upload:  ${this.productToUpload.name},${this.productToUpload.price}, ${this.productToUpload.description},${this.productToUpload.img} `);
                // averiguar como funciona el concepto de vuex
                this.uploadProductDb(this.productToUpload);
                document.getElementById('close-btn').click();
            });
          } catch (e) {
            console.log('Error: ', e);
          }
        } else {
          this.errorMessage = 'Debe selecionar una imagen';
        }
      }
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
  grid-template-columns: repeat(4, 1fr);
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
