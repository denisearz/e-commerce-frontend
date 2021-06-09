<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" title="E-PROV" expand>
      <div class="card-body d-flex"></div>

      <div class="register d-flex" v-if="user_type == null || user_type == ''">
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

      <div  class="position-relative" align="right" v-else>
          <input
            disabled="true"
            id="userType"
            type="text"
            readonly
            v-model="user_type"
            checked
            autocomplete="off"
          />
          <button
            type="button"
            class="btn btn-sm active login"
            id="logout"
            @click="logout"
          >
            <i class="fas fa-sign-out-alt"></i>
            Cerrar Sesión
          </button>
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
  data() {
    return {
      user_type: "",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.user_type = null;

      this.$forceUpdate();
    },
  },

  mounted() {
    let user_type = localStorage.getItem("currentUserType");
    if (user_type !== null) {
      this.user_type = user_type;
    }
  },
  watch: {
    $route(to, from) {
      let user_type = localStorage.getItem("currentUserType");
      if (user_type !== null) {
        this.user_type = user_type;
      } else {
        this.user_type = null;
      }
      this.$forceUpdate();
    },
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
  box-shadow: 2px 2px 22px 3px rgba(235, 214, 99, 0.315),
    3px 2px 2px 3px rgba(255, 198, 10, 0.178);
}
#userType {
  color: #fdfd96;
  background-color: #454546;
  width: 30%;
  border-radius: 10%;
}

#logout {
  color: #fcfcf6;
  background-color: #454546;
  border-top: 1px solid #fdfd96;
  border-bottom: 1px solid #fdfd96;
  font-size: 65%;
}
</style>
