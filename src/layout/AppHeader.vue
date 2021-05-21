<template>
  <header class="header-global">
    <base-nav 
      class="navbar-main" 
      transparent type="" 
      effect="light"
      title="E-TEAM"
      expand
      >
     
      <div>
        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <base-dropdown tag="li" class="nav-item">
            <a slot="title" href="/" class="nav-link" data-toggle="dropdown" role="button">
                <i class="ni ni-collection d-lg-none"></i>
                <span class="nav-link-inner--text">Servicios</span>
            </a>
            <router-link to="/landing" class="dropdown-item">Cerrajero</router-link>
            <router-link to="/profile" class="dropdown-item">Electricista</router-link>
            <router-link to="/login" class="dropdown-item">Gasista</router-link>
            <router-link to="/register" class="dropdown-item">Plomero</router-link>
          </base-dropdown>
        </ul>
      </div>
          
      <div class="card-body d-flex"> </div>

      <div class="d-flex">
        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <router-link
            class="nav-link"
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
              class="btn btn-primary btn-sm active"
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
</style>
