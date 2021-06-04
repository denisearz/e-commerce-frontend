<template>
  <section class="section section-shaped my-0">
    <div class="shape shape-style-1 bg-gradient-default"></div>
    <div class="container pt-lg-md">
      <div class="col text-center">
        <font color="white" size="6">Registrarse como Proveedor</font>
      </div>
      <div class="row justify-content-center">
        <div class="col-7">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <div class="col text-center">
              <font color="white" size="4">Paso 2-2</font>
            </div>
            <template>
              <form
                role="form"
                action="/"
                name="frmRegister"
                method="post"
                @submit.prevent="setCategories"
              >
                <template>
                  <div>
                    <div>
                      <div size="6"><p>Indique su categoría</p></div>
                      <multiselect
                        v-model="value"
                        placeholder="Seleccione el serivicio que brindará"
                        label="name"
                        track-by="code"
                        :options="categories"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTag"
                      >
                      </multiselect>
                    </div>
                  </div>
                </template>
                <button class="btn btn-danger btn-block mt-5">Confirmar</button>
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
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);

export default {
  name: "ProviderCategories",
  data() {
    return {
      formData: {
        category_id: "",
      },
      value: [
        { name: "GASISTA", code: 1 },
        { name: "PLOMERO", code: 2 },
        { name: "ELECTRICISTA", code: 3 },
        { name: "PINTOR", code: 4 },
        { name: "TECNICO DE AIRE ACONDICIONADO", code: 5 },
      ],
      categories: [
        { name: "GASISTA", code: 1 },
        { name: "PLOMERO", code: 2 },
        { name: "ELECTRICISTA", code: 3 },
        { name: "PINTOR", code: 4 },
        { name: "TECNICO DE AIRE ACONDICIONADO", code: 5 },
      ],
    };
  },

  components: { Multiselect },

  methods: {
    async setCategories() {
      // Cuenta la cantidad de items y los recorre
      for (var i = 0; i < this.value.length; i++) {
        let item = this.value[i].code;

        await axios.post(`${BASEURL}/providersCategories/create`, {
          category_id: item,
          provider_id: this.$route.params.id,
        });
      }
      router.push("/login");
    },

    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
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
</style>