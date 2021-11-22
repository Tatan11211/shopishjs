<template>
  <div class="navsearch">
    <b-navbar class="navbar container d-flex flex-row justify-content-between" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <img
          class="logo img-fluid"
          src="../assets/images/logopesca.png"
          alt="Reponsive image"
        />
      </b-navbar-brand>
      <form class="form-inline d-flex my-2 my-lg-0">
        <input
          class="form-control mr-sm-2 "
          type="search"
          placeholder="Productos..."
          aria-label="Search"
        />
        <button 
          class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Buscar
        </button>
      </form>
    </b-navbar>
  </div>
</template>

<style scoped>

.navbar {
    background-color: white !important;
}

.logo {
    max-width: 120px;
}

.form-control {
  margin-right: 2px !important;
}
</style>