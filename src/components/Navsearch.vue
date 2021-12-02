<template>
  <div class="navsearch d-flex">
    <b-navbar class="navbar container d-flex justify-content-between" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="brandimg" href="#">
        <img
          class="logo img-fluid"
          src="../assets/images/logopesca.png"
          alt="Reponsive image"
        />
      </b-navbar-brand>
      <form class="searchitem  d-flex my-2 my-lg-0">
        <input
          class="inputtext form-control mr-sm-2 "
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

@media (max-width: 455px) {
  .navsearch {
    justify-items: center;
    flex-direction: column !important;
    align-items: center;
  }

  .searchitem {
    flex-direction: column;
    align-self: baseline;
    margin-top: 4px;
  }

  .navbar {
    flex-direction: column;
  }

  .brandimg {
    align-self: center;
  }

  .logo {
    max-width: 160px !important;
  }

  .inputtext {
    height: 50px;
  }

  .btn {
    width: 110px;
  }
}
</style>