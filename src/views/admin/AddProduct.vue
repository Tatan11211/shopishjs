<template>
  <div class="d-flex align-items-center">
    <div class="form-content container">
      <form @submit.prevent="newProduct">
        <h1>Add product</h1>
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
            size="300px"
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
          <button
            class="btn btn-success"
            type="submit"
          >
            <span v-if="!this.productToEdit">Crear producto</span>
            <span v-else>Actualizar producto</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AddProduct-view',
  layout: 'admin-layout',
  data() {
    return {
      editForm: false,
      imgState: '',
      fileSelected: null,
      imgURL: null,
      imgName: null,
      imgType: null,
      errorMessage: null,
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
  watch: {
    productToEdit() {
      console.log('form edit: ', this.productToEdit);
    },
  },
  methods: {
    ...mapActions(['uploadProductDb']),
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
        });
        reader.readAsDataURL(this.fileSelected);
      } else {
        this.errorMessage = 'Tipo de archivo no valido.';
      }
    },
    /* validar con los videos el action que sube el producto e importarlo */
    async newProduct() {
      if (this.productToEdit) {
        console.log('edit product');
      } else {
        console.log('new product');
        if (!this.$v.$invalid) {
          if (this.fileSelected !== null) {
            console.log('todos campos correctos');
            this.productToUpload.imgType = this.imgType;
            this.productToUpload.imgRawName = this.fileSelected.name;
            this.productToUpload.imgRaw = this.fileSelected;
            this.productToUpload.name = this.$v.productName.$model;
            this.productToUpload.price = Number(this.$v.productPrice.$model);
            this.productToUpload.description = this.$v.productDescription.$model;
            this.uploadProductDb(this.productToUpload);
            this.$router.push('/productsCrud');
          } else {
            this.errorMessage = 'Debe seleccionar una imagen';
          }
        }
      }
    },
    editProduct() {
      console.log('edit product');
    },
  },

  computed: {
    ...mapGetters({ productToEdit: 'getProductToEdit' }),
  },
  created() {
    if (this.productToEdit) {
      this.$v.productName.$model = this.productToEdit.name;
      this.$v.productPrice.$model = this.productToEdit.price;
      this.$v.productDescription.$model = this.productToEdit.description;
      this.imgURL = this.productToEdit.img;
    }
  },
};
</script>

<style scoped>
.form-content {
  width: 30%;
}
</style>
