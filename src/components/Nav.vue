<template>
  <div class="nav">
    <b-navbar
      class="navbar container d-flex"
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-navbar-toggle class="toggle" target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="navcollab fs-5 dark" id="nav-collapse" is-nav>
        <b-navbar-nav class="nav-container d-flex justify-content-between">
          <router-link class="navitem nav-item nav-link" to="/">Inicio</router-link>
          <router-link class="navitem nav-item nav-link" to="/fishing">Pesca</router-link>
          <router-link class="navitem nav-item nav-link" to="/about">Camping</router-link>
          <router-link class="navitem nav-item nav-link" to="/about">Prendas</router-link>
          <router-link class="navitem nav-item nav-link" to="/about">Contáctenos</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name:'Nav'
}
</script>

<style scoped>
.nav-container a {
  text-decoration: none;
  color: aqua;
}

.navbar {
  background-color: white !important;
}

.toggle {
  background-color: #b1d4e0 !important;
}

.navcollab {
  flex-direction: column;
}

.navcollab a {
  color: black !important;
}

.navcollab a:hover {
  color: white !important;
}

.navitem {
  padding: 9px;
  border: 1px solid #145da0;
  margin-right: 2px;
  transition: transform 1s;
}

.navitem:hover {
  background-color: #145da0;
  transform: scale(1.05);
}

/* .navitem {
	-webkit-animation: scale-up-ver-center 0.4s ease-in-out both;
  animation: scale-up-ver-center 0.4s ease-in-out both;
}

@-webkit-keyframes scale-up-ver-center {
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}
@keyframes scale-up-ver-center {
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
} */

@media (max-width: 991px) {
  .navitem {
    margin-top: 2px;
  }
}
</style>