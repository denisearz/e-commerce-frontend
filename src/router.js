import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import ProviderRegister from "./views/providers/ProviderRegister";
import ProviderCategories from "./views/providers/ProviderCategories";
import ProvidersList from "./views/providers/ProvidersList";
import ProviderProfile from "./views/providers/ProviderProfile";
import ShoppingCart from "./views/ShoppingCart";

import ClientRegister from "./views/clients/ClientRegister";
import Starter from "./views/Starter";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Starter,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/provider/profile/:id",
      name: "ProviderProfile",
      components: {
        header: AppHeader,
        default: ProviderProfile,
        footer: AppFooter
      }
    },
    {
      path: "/providers/:category_id",
      name: "ProvidersList",
      components: {
        header: AppHeader,
        default: ProvidersList,
        footer: AppFooter
      }
    },
    {
      path: "/provider/create",
      name: "ProviderRegister",
      components: {
        header: AppHeader,
        default: ProviderRegister,
        footer: AppFooter
      }
    },
    {
      path: "/shoppingcart",
      name: "ShoppingCart",
      components: {
        header: AppHeader,
        default: ShoppingCart,
        footer: AppFooter
      }
    },
    {
      path: "/providersCategories/create",
      name: "ProviderCategories",
      components: {
        header: AppHeader,
        default: ProviderCategories,
        footer: AppFooter
      }
    },
    {
      path: "/client/create",
      name: "ClientRegister",
      components: {
        header: AppHeader,
        default: ClientRegister,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
