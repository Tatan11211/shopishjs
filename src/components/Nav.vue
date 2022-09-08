<template>
  <div class='nav'>
    <b-navbar
      class='navbar container d-flex'
      toggleable='lg'
      type='dark'
      variant='info'
    >
      <b-navbar-toggle class='toggle' target='nav-collapse'></b-navbar-toggle>

      <b-collapse class='navcollab fs-5 dark' id='nav-collapse' is-nav>
        <b-navbar-nav class='nav-container d-flex justify-content-between'>
          <b-nav-item class="navitem" to="/">Inicio</b-nav-item>
          <b-nav-item class="navitem" to="/fishing">Pesca</b-nav-item>
          <b-nav-item class="navitem" to="/about">Camping</b-nav-item>
          <b-nav-item class="navitem" to="/about">Prendas</b-nav-item>
          <b-nav-item class="navitem" to="/about">Contáctenos</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Nav-component',
};
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

@media (max-width: 991px) {
  .navitem {
    margin-top: 2px;
  }
}
</style>
