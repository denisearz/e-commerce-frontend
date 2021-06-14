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
    <form
                role="form"
                action="/"
                name="SpecialitiesForm"
                method="post"
                @submit.prevent="setSpecialities"
              >
                <template>
                  <div>
                    <div>
                      <div size="6"><p>Seleccione su categoría</p></div>
                      <multiselect
                        :v-for="item in categories"
                        :key="item"
                        id="registerInput"
                        v-model="selected"
                        placeholder="Seleccione el serivicio que brindará"
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
    name: "ProviderSpecialities",
    data(){
        return{
    
    categories: [],
    selected: [],
    specialitites: [],
    }
    },

    mounted(){
        this.categories = this.$route.params.categories
        console.log(this.categories);
        this.getSpecialities();
    },
    
    components: { Multiselect },
    methods: {
        addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },

    async getSpecialities() {
        const Specialities = await axios.get(`${BASEURL}/speciality`);
        this.specialitites = Specialities
    }

    }
}
    
</script>