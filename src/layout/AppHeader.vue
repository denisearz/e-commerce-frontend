<template>
    <header class="header-global">
        
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
            </router-link>        
         <div>
            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Registrarse</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a  @click="$router.push({ name: 'register' })" >
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3" @click="$router.push({ name: 'register' })" >
                                <h6 class="heading text-primary mb-md-1">Soy Proveedor</h6>
                                <p class="description d-none d-md-inline-block mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Soy usuario</h5>
                                <p class="description d-none d-md-inline-block mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
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
         <button type="button" class="btn btn-secondary btn-sm active" role="button" aria-pressed="true" ><i class="ni ni-basket"></i> Carrito</button>     
            <div class="card-body d-flex">
               <div class="btn-group">
                 <div class="btn-group">
                     <button 
                     float= "right"
                      type="button" 
                      class="btn btn-primary btn-sm active dropdown-toggle"
                      data-toggle="dropdown"
                       @click="$router.push({ name: 'login' })"                
                   >
                      Login
                   </button>
                    
                 </div>
            </div>
         </div>   
                    
        </base-nav>     
        
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
