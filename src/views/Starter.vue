<template>
  <div class="background">
    <div style="height: 150px; overflow: hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-1.97,8.39 C116.53,90.28 271.49,-49.98 503.67,35.03 L499.72,-2.45 L-0.84,-1.47 Z"
          style="stroke: none; fill: #454546"
        ></path>
      </svg>
    </div>
    <div class="buttonContainer">
      <b-button variant="dark" id="buton"
            @click="getProvidersList (1)" 
>
        <i class="fas fa-burn fa-3x"></i>
        <label
          for="fa-burn"
          style="color: #454546; top: 3rem; position: relative; right: 3rem"
          >Gasista</label
        >
      </b-button>

      <b-button variant="dark" id="buton"       @click="getProvidersList (4)" 
>
        <i class="fas fa-paint-roller fa-3x"></i>
        <label
          for="fa-paint-roller"
          style="color: #454546; top: 3rem; position: relative; right: 3.5rem"
          >Pintor</label
        >
      </b-button>

      <b-button variant="dark" id="buton" style="padding-left: 1.3rem"       @click="getProvidersList (3)" 
>
        <i class="fas fa-bolt fa-3x"></i>
        <label
          for="fa-bolt"
          style="color: #454546; top: 3rem; position: relative; right: 4.4rem"
          >Electricista</label
        >
      </b-button>


      <b-button id="buton" variant="dark"       @click="getProvidersList (5)" 
>
        <i class="fas fa-fan fa-3x"></i>
        <label
          for="fa-fan"
          style="color: #454546; top: 4rem; position: relative; right: 5.5rem"
          >Técnico de Aire <br />Acondicionado</label
        >
      </b-button>

      <b-button variant="dark" id="buton"                
      @click="getProvidersList (2)" 

>
        <i class="fas fa-wrench fa-3x"></i>
        <div>
          <label
            for="fa-wrench"
            style="
              color: #454546;
              top: 1.5rem;
              position: relative;
              right: 0.5rem;
            "
            >Plomero</label
          >
        </div>
      </b-button>

      <b-button
        variant="dark"
        id="buton"
        style="padding: 5px"
        @click="getProvidersList (0)"
      >
        <i class="fas fa-users fa-3x"></i>
        <div>
          <label
            for="fa-users"
            style="
              color: #454546;
              top: 1.5rem;
              position: relative;
              right: 0.5rem;
            "
            >Ver todos</label
          >
        </div>
      </b-button>
    </div>
  </div>
</template>
<script>
import router from "../router";

export default {
  methods: {
    getProvidersList(category_id) {
      router.push({ name: 'ProvidersList', params: { category_id:category_id }})
    },

 
  },
};
</script>
<style>
.buttonContainer {
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.background {
  background: -webkit-linear-gradient(
    #454546,
    rgb(247, 247, 244)
  ); /* For Safari 5.1 to 6.0 */
  background: linear-gradient(
    #59595a,
    rgb(247, 247, 244)
  ); /* Standard syntax */
}

#buton {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 12px;
}
#buton:hover {
  color: #fdfd96;
}
</style>
