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
              <font color="white" size="4">Paso 2-3</font>
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
                  <div>
                    <div>
                      <div size="6"><p>Seleccione su especialidad</p></div>
                      <multiselect 
                        v-for="category in categories"
                        :key="category.id" 
                        id="registerInput"
                        v-model="specialities"
                        placeholder="Seleccione sus especialidades"
                        label="name"
                        track-by="code"
                        :options="specialities"
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
import { specialities } from '../../constants/constants';
Vue.component("multiselect", Multiselect);


export default {
  name: "ProviderCategories",
  data() {
    return {
      specialities,
      specialityProvider:"",
      categoryProvider:"",
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
  mounted(){
    console.log(specialities[0].name)
  },

  async beforeMount() {
                if (this.categories){
                  this.categoryProvider= this.categories.map(function(element){
                    var cat = new Object();
                            cat.id = element.code
                            cat.categoryName = element.name
                        return cat
                    })
                    console.log(this.categoryProvider);
                }else{
                    this.categoryProvider[0]='Aún no tiene cargadas categorías'
                }
                
                //Obtengo las especialidades
                let especialidades = await ProviderRepository.getSpeciaityProvider(this.providerInfo.provider_id)
                
                this.specialityProvider = especialidades.map(function(element){
                    var item = new Object();
                    item.id = element.category.id
                    item.category = element.category.name
                    item.speciality = element.speciality.description
                    return  item;
                })
                console.log (this.specialityProvider);
  },

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
      router.push("/provider/specialities/create");
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