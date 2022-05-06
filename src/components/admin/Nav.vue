<template>
  <div class="Nav">
    <div
      class="sidebarContent d-flex flex-column flex-shrink-0  p-3 text-white bg-dark"
      style="width: 300px"
    >
      <a
        href="/dashboard"
        class="
          d-flex
          justify-content-center
          text-white text-decoration-none
        "
      >
        <span class="fs-4">Administrador</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column align-items-start mb-auto">
        <li class="nav-item d-flex align-items-center">
          <a href="#" class="nav-link active" aria-current="page">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-bounding-box mb-1" viewBox="0 0 16 16">
                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            </svg>
            <span class="m-2 fs-5">Perfil</span>
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus mb-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>
            <span class="m-2 fs-5">Productos</span>
          </a>
        </li>
      </ul>
      <hr />
      <a href="#"
        class="fs-5 text-white text-decoration-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
        </svg>
        Cerrar sesion
      </a>
      <!-- <div class="dropdown">
        <a
          href="#"
          class="
            d-flex
            align-items-center
            text-white text-decoration-none
            dropdown-toggle
          "
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          @click="addClassShow()"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul
          :class="`dropdown-menu dropdown-menu-dark text-small shadow ${showMenu}`"
          aria-labelledby="dropdownUser1"
        >
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data(){
      return{
          showMenu: ""
      }
  },
  methods:{
    //When need to use a dropdown this works to hidde that menú
      addClassShow (){
          if(this.showMenu == ""){
            this.showMenu = "show"
          }else {
            this.showMenu = ""
          }
      }
  }
};
</script>

<style scoped>

.Nav {
    height: 100%;
}

.dropdown-menu {
    position: absolute;
    inset: auto auto 0px 0px;
    margin: 0px;
    transform: translate3d(0px, -34px, 0px);
}

.sidebarContent {
    height: 100%;
    width: 25%;
}

</style>