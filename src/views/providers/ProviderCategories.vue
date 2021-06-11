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
    <div class="container pt-lg-md">
      <div class="col text-center">
        <font color="white" size="6"
          >Registrarse como Proveedor</font
        >
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
                      <div size="6"><p>Seleccione su categoría</p></div>
                      <multiselect 

                        id="registerInput2"
                        v-model="selected"
                        placeholder="Seleccione el serivicio que brindará"
                        label="name"
                        track-by="code"
                        :options="value"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTag"
                        @input="getSpecialitiesFromCategories()"
                      >
                      </multiselect>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div size="6"><p>Seleccione su especialidad</p></div>
                      <multiselect 
                        v-for="item in selected"
                        :key="item.code" 
                        id="registerInput"
                        v-model="specialitySelected"
                        placeholder="Seleccione sus especialidades"
                        label="description"
                        track-by="id"
                        :options="specialities"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTag"
                        class="mt-5"
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
      specialities:[ this.gasistaSpecialities ],
      specialityProvider:"",
      categoryProvider:"",
      category_id: [],
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
      selected:[],
      specialitySelected:[],
      gasistaSpecialities: [],
      plomeroSpecialities: [],
      electricistaSpecialities: [],
      pintorSpecialities: [],
      tecnicoSpecialities: []
     
    };
  },

  components: { Multiselect },
  mounted(){
    this.getCategoriesWithSpecialities();
  },

  methods: {
    async setCategories() {
      // Cuenta la cantidad de items y los recorre
      for (var i = 0; i < this.value.length; i++) {
        let item = this.value[i].code;

        await axios.post(`${BASEURL}/providersCategories/create`, {
          category_id: item,
          provider_id: id,
        });
      }
    },

    async getSpecialitiesFromCategories(){
      if (this.selected[0].code === 1) {
        this.specialites = this.gasistaSpecialities
        
      }
      
    },

    async getCategoriesWithSpecialities(){
        let datos = await axios.get(`${BASEURL}/category/1`);
        this.gasistaSpecialities = datos.data.speciality
        console.log(this.gasistaSpecialities)
        let datos2 = await axios.get(`${BASEURL}/category/2`);
        this.plomeroSpecialities = datos2.data.speciality

        let datos3 = await axios.get(`${BASEURL}/category/3`);
        this.electricistaSpecialities = datos3.data.speciality

        let datos4 = await axios.get(`${BASEURL}/category/4`);
        this.pintorSpecialities = datos4.data.speciality

         let datos5 = await axios.get(`${BASEURL}/category/5`);
        this.tecnicoSpecialities = datos5.data.speciality

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