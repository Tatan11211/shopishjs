<template>
  <div class='Nav d-flex'>
    <div
      class='sidebarContent d-flex flex-column flex-shrink-0 p-3 text-white'
      style='width: 300px'
      v-if='showSidebarFull'
    >
      <a
        href='/dashboard'
        class='d-flex justify-content-center text-white text-decoration-none'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          class='bi bi-globe2 mt-3'
          viewBox='0 0 16 16'
        >
          <path
            d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0
            8zm7.5-6.923c-.67.204-1.335.82-1.887
            1.855-.143.268-.276.56-.395.872.705.157
            1.472.257 2.282.287V1.077zM4.249
            3.539c.142-.384.304-.744.481-1.078a6.7
            6.7 0 0 1 .597-.933A7.01 7.01 0 0 0
            3.051 3.05c.362.184.763.349 1.198.49zM3.509
            7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124
            0 0 1-1.565-.667A6.964 6.964 0 0 0
            1.018 7.5h2.49zm1.4-2.741a12.344 12.344
            0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5
            5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51
            8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5
            10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145
            2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282
            3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887
            1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696
            6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38
            0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36
            0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362
            3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009
            7.009 0 0 0 2.275-1.521 8.376 8.376
            0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078
            6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204
            1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63
            12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409
            1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437
            3.008zM14.982 7.5a6.963 6.963 0 0
            0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437
            3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368
            8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488
            1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17
            1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z'
          />
        </svg>
        <span class='fs-4 m-2'>Administrador</span>
      </a>
      <hr />
      <ul class='nav nav-pills flex-column align-items-start mb-auto'>
        <li class='nav-item d-flex align-items-center'>
          <a href='#' class='nav-link active' aria-current='page'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='currentColor'
              class='bi bi-person-bounding-box mb-1'
              viewBox='0 0 16 16'
            >
              <path
                d='M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5
                1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1
                .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5
                0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1
                .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5
                1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1
                .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5
                0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z'
              />
              <path
                d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1
                1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z'
              />
            </svg>
            <span class='m-2 fs-5'>Perfil</span>
          </a>
        </li>
        <li>
          <a href='#' class='nav-link text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='currentColor'
              class='bi bi-bag-plus mb-1'
              viewBox='0 0 16 16'
            >
              <path
                fill-rule='evenodd'
                d='M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0
                1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1
                0-1h1.5V8a.5.5 0 0 1 .5-.5z'
              />
              <path
                d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5
                2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7
                0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2
                5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z'
              />
            </svg>
            <span class='m-2 fs-5'>Productos</span>
          </a>
        </li>
      </ul>
      <hr />
      <a href='#' class='fs-5 text-white text-decoration-none'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          fill='currentColor'
          class='bi bi-box-arrow-left'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0
            0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1
            6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5
            1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z'
          />
          <path
            fill-rule='evenodd'
            d='M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1
            .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147
            2.146a.5.5 0 0 1-.708.708l-3-3z'
          />
        </svg>
        Cerrar sesion
      </a>
      <!-- <div class='dropdown'>
        <a
          href='#'
          class='
            d-flex
            align-items-center
            text-white text-decoration-none
            dropdown-toggle
          '
          id='dropdownUser1'
          data-bs-toggle='dropdown'
          aria-expanded='false'
          @click='addClassShow()'
        >
          <img
            src='https://github.com/mdo.png'
            alt=''
            width='32'
            height='32'
            class='rounded-circle me-2'
          />
          <strong>mdo</strong>
        </a>
        <ul
          :class='`dropdown-menu dropdown-menu-dark text-small shadow ${showMenu}`'
          aria-labelledby='dropdownUser1'
        >
          <li><a class='dropdown-item' href='#'>New project...</a></li>
          <li><a class='dropdown-item' href='#'>Settings</a></li>
          <li><a class='dropdown-item' href='#'>Profile</a></li>
          <li><hr class='dropdown-divider' /></li>
          <li><a class='dropdown-item' href='#'>Sign out</a></li>
        </ul>
      </div> -->
    </div>
    <!-- Divider sidebar collapsed -->
    <div
      class='sidebarCollapsedContent d-flex flex-column flex-shrink-0'
      style='width: 4.5rem'
      v-else
    >
      <a
        href='/'
        class='d-block p-3 text-decoration-none'
        title='Icon-only'
        data-bs-toggle='tooltip'
        data-bs-placement='right'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          class='bi bi-globe2'
          viewBox='0 0 16 16'
        >
          <path
            d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0
            8zm7.5-6.923c-.67.204-1.335.82-1.887
            1.855-.143.268-.276.56-.395.872.705.157 1.472.257
            2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1
            .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509
            7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964
            6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4
            2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342
            12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176
            1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99
            0v2.409c.91.03 1.783.145
            2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282
            3.696c.12.312.252.604.395.872.552 1.035
            1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11
            2.276a6.696 6.696 0 0 1-.598-.933 8.853
            8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276
            1.522zm-1.383-2.964A13.36 13.36 0 0 1
            3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482
            1.565-.667zm6.728 2.964a7.009 7.009 0 0 0
            2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853
            0 0 1-.481 1.078 6.688 6.688 0 0
            1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82
            1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0
            8.5 11.91zm3.555-.401c.57.185 1.095.409
            1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0
            1-.437 3.008zM14.982 7.5a6.963 6.963 0 0
            0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437
            3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368
            8.368 0 0 0 1.196-.49 7.01 7.01 0 0
            0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765
            7.765 0 0 0-.395-.872C9.835 1.897 9.17
            1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z'
          />
        </svg>
      </a>
      <hr />
      <ul class='nav nav-pills nav-flush flex-column mb-auto text-center'>
        <li class='nav-item'>
          <a
            href='#'
            class='nav-link active py-3 border-bottom'
            aria-current='page'
            title='Home'
            data-bs-toggle='tooltip'
            data-bs-placement='right'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='currentColor'
              class='bi bi-person-bounding-box mb-1'
              viewBox='0 0 16 16'
            >
              <path
                d='M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5
                1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11
                .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1
                0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1
                .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1
                .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1
                0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z'
              />
              <path
                d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z'
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href='#'
            class='nav-link py-3 border-bottom'
            title='Dashboard'
            data-bs-toggle='tooltip'
            data-bs-placement='right'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='currentColor'
              class='bi bi-bag-plus mb-1'
              viewBox='0 0 16 16'
            >
              <path
                fill-rule='evenodd'
                d='M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0
                1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1
                0-1h1.5V8a.5.5 0 0 1 .5-.5z'
              />
              <path
                d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8
                1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0
                2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z'
              />
            </svg>
          </a>
        </li>
      </ul>
      <hr />
      <a href='#'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          fill='currentColor'
          class='bi bi-box-arrow-left mb-4'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0
            .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-
            .5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5
            2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5
            1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z'
          />
          <path
            fill-rule='evenodd'
            d='M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1
            .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147
            2.146a.5.5 0 0 1-.708.708l-3-3z'
          />
        </svg>
      </a>
      <!-- <div class='dropdown border-top'>
        <a href='#'
          class='d-flex align-items-center
                justify-content-center p-3
                link-dark text-decoration-none
                dropdown-toggle'
          id='dropdownUser3'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          <img src='https://github.com/mdo.png' alt='mdo' width='24' height='24' class='rounded-circle'>
        </a>
        <ul class='dropdown-menu text-small shadow' aria-labelledby='dropdownUser3'>
          <li><a class='dropdown-item' href='#'>New project...</a></li>
          <li><a class='dropdown-item' href='#'>Settings</a></li>
          <li><a class='dropdown-item' href='#'>Profile</a></li>
          <li><hr class='dropdown-divider'></li>
          <li><a class='dropdown-item' href='#'>Sign out</a></li>
        </ul>
      </div> -->
    </div>
    <button @click='SidebarOff()' class='btnHiddenSidebar d-flex'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        fill='currentColor'
        class='bi bi-list'
        viewBox='0 0 16 16'
      >
        <path
          fill-rule='evenodd'
          d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0
          1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0
          1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Nav-component',
  data() {
    return {
      showMenu: '',
      showSidebarFull: true,
    };
  },
  methods: {
    //  When need to use a dropdown this works to hidde that menú
    addClassShow() {
      if (this.showMenu === '') {
        this.showMenu = 'show';
      } else {
        this.showMenu = '';
      }
    },

    SidebarOff() {
      if (this.showSidebarFull) {
        this.showSidebarFull = false;
      } else {
        this.showSidebarFull = true;
      }
    },
  },
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
  background-color: rgb(46, 46, 46);
}

.sidebarCollapsedContent {
  height: 100%;
  width: 25%;
  background-color: rgb(46, 46, 46);
  color: white;
}

.sidebarCollapsedContent a {
  color: white;
}

.btnHiddenSidebar {
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background-color: rgb(46, 46, 46);
  color: white;
}
</style>
