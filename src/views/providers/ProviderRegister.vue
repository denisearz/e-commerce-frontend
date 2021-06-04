<template>
  <section class="background">
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
    <div class="shape shape-style-1 bg-gradient-default"></div>
    <div class="container pt-lg-md">
      <div class="col text-center">
        <font color="white" size="6">Registrarse como Proveedor</font>
      </div>
      <div class="row justify-content-center">
        <div class="col-7">
          <card
            id="template"
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <div class="col text-center">
              <font color="white" size="4">Paso 1-2</font>
            </div>
            <template>
              <form
                role="form"
                action="/"
                name="frmRegister"
                method="post"
                @submit.prevent="handleSubmit"
              >
                <div><p>Ingrese e-mail de contacto</p></div>
                <div class="input-group mb-3">
                  <input
                    id="registerInput"
                    type="text"
                    class="form-control"
                    v-model="provider.email"
                    placeholder="Ingrese nuevo email"
                  />
                </div>
                <div><p>Ingrese su número de CUIT</p></div>
                <div class="input-group mb-3">
                  <input
                    id="registerInput"
                    type="text"
                    class="form-control"
                    v-model="provider.cuit"
                    placeholder="##-########-#"
                  />
                </div>
                <div><p>Ingrese su número de matrícula</p></div>
                <div class="input-group mb-3">
                  <input
                    id="registerInput"
                    type="text"
                    class="form-control"
                    placeholder="Ingrese su N° de matrícula"
                    v-model="provider.enrollment_number"
                  />
                </div>
                <div><p>Nombre de fantasía</p></div>
                <div class="input-group mb-3">
                  <input
                    id="registerInput"
                    type="text"
                    class="form-control"
                    placeholder="Razón social"
                    v-model="provider.business_name"
                  />
                </div>

                <div>
                  <div><p>Zona de trabajo</p></div>
                  <b-form-select
                    v-model="selected"
                    :options="cities"
                  ></b-form-select>
                </div>
                <button class="btn btn-danger btn-block mt-5">Siguiente</button>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import router from "../../router";
const BASEURL = process.env.VUE_APP_BASEURL;
import axios from "axios";
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

import { cities, categories } from "../../constants/constants";

export default {
  name: "ProviderRegister",
  data() {
    return {
      cities,
      provider: {
        email: this.$route.params.email,
        cuit: "",
        enrollment_number: "",
        business_name: "",
        city_id: "",
        user_id: "",
      },
      selected: null,
      categoriesSelected: null,
    };
  },
  methods: {
    async handleSubmit() {
      let response = await axios.post(`${BASEURL}/provider/create`, {
        email: this.provider.email,
        cuit_number: this.provider.cuit,
        enrollment_number: this.provider.enrollment_number,
        business_name: this.provider.business_name,
        user_id: this.$route.params.id,
        city_id: this.selected,
      });
      router.push({
        name: "ProviderCategories",
        params: { id: response.data.id },
      });
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
#btnClient {
  padding: 2;
  margin: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fa-edit {
  width: 20px;
  height: 90%;
  color: black;
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
#template {
  background: #454546;
  border-radius: 15px;
}
#registerInput {
  border-radius: 0px 15px 15px 0px;
  border-color: #fdfd96;
}

#registerInput:hover {
  box-shadow: 0 1px 5px 1px rgba(252, 232, 120, 0.959),
    0 1px 5px 0 rgba(24, 24, 23, 0.363);
}
</style>

