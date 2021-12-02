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
          <b-nav-item class="navitem" href="#"
            ><router-link to="/">Inicio</router-link></b-nav-item
          >
          <b-nav-item class="navitem" href="#"
            ><router-link to="/about">pesca</router-link></b-nav-item
          >
          <b-nav-item class="navitem" href="#"
            ><router-link to="/about">camping</router-link></b-nav-item
          >
          <b-nav-item class="navitem" href="#"
            ><router-link to="/about">prendas</router-link></b-nav-item
          >
          <b-nav-item class="navitem"  href="#"
            ><router-link to="/about">contáctenos</router-link></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

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
  padding: 5px;
  border: 1px solid #145da0;
  margin-right: 2px;
}

.navitem:hover {
 background-color:#145da0;
}

@media (max-width: 991px) {
  .navitem {
    margin-top: 2px;
  }
}
</style>