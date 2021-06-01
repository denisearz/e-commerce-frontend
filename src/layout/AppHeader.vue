<template>
  <header class="header-global">
    <base-nav 
      class="navbar-main" 
      transparent type="" 
      title="E-TEAM"
      expand
      >
     
      <div class="card-body d-flex"> </div>

      <div class="d-flex">
        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <router-link
            class="nav-link"
            id="register"
            to="/register"
          >
            Registrarse
          </router-link>
          
          <a class="nav-link align-items-lg-center">
            <i class="ni fas fa-shopping-cart"></i>
          </a>  
          <button 
              float= "right"
              type="button" 
              class="btn btn-primary btn-sm active login"
              @click="$router.push({ name: 'login' })"                
            > Login
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
import NavbarToggleButton from "@/components/NavbarToggleButton"

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
    NavbarToggleButton
  }
};
</script>
<style>
.header-global{
  background-color: blue;
}
.login{
  color: white;
}
.fa-shopping-cart{
  color: white;
}
#register{
  color: white;
}

</style>
