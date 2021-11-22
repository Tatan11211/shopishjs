<template>
  <div class="nav">
    <b-navbar class="navbar container" toggleable="lg" type="dark" variant="info">

      <b-navbar-toggle class="toggle" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="nav-container">
          <b-nav-item href="#"
            ><router-link to="/">Home</router-link></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/about">About</router-link></b-nav-item
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
  color: #145DA0 !important;
  background-color: #B1D4E0 !important;
}
</style>