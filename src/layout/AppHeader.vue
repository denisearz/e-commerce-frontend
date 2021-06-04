<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" title="E-PROV" expand>
      <div class="card-body d-flex"></div>

      <div class="register d-flex">
        <ul class="navbar-nav navbar-nav-hover align-items-lg-center active">
          <router-link class="nav-link" id="register" to="/register">
            Registrarse
          </router-link>

          <a class="nav-link align-items-lg-center">
            <i class="ni fas fa-shopping-cart"></i>
          </a>
          <button
            float="right"
            type="button"
            id="register"
            class="btn btn-sm active login"
            @click="$router.push({ name: 'login' })"
          >
            Login
          </button>
        </ul>
      </div>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import NavbarToggleButton from "@/components/NavbarToggleButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
    NavbarToggleButton,
  },
};
</script>
<style>
.header-global {
  background-color: #454546;
}
.login {
  color: white;
}
.fa-shopping-cart {
  color: #fdfd96;
}
#register {
  color: #fcfcf6;
  border-top: 1px solid #fdfd96;
    border-bottom: 1px solid #fdfd96;
    padding: 4px 0;
    transition: 0.8s ease-out;
    text-decoration: none;
}
#register:hover {
    color: #fdfd96;
    box-shadow: 2px 2px 22px 3px rgba(235, 214, 99, 0.315), 3px 2px 2px 3px rgba(255, 198, 10, 0.178);

}
</style>
