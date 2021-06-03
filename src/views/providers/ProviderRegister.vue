<template>
    <section class="section section-shaped  my-0">
        <div class="shape shape-style-1 bg-gradient-default">

        </div>
        <div class="container pt-lg-md">
            <div class = "col text-center " > 
                
                <font color="white" size=6>Completá tus datos</font>
            </div>  
            <div class="row justify-content-center">
                
                <div class="col-7">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        
                        <template>
                            <form 
                            role="form" 
                            action="/" 
                            name="frmRegister" 
                            method="post"
                            @submit.prevent="handleSubmit">

                            <div><p>Cambiar email de contacto</p></div>
                                <div class="input-group mb-3">
                                    <input 
                                        type="text" 
                                        class="form-control"  
                                        v-model="provider.email"
                                        placeholder="Ingrese nuevo email"
                                        />
                                       
                                </div>
                            <div><p>Ingrese su número de CUIT</p></div>
                                <div class="input-group mb-3">
                                    <input 
                                        type="text" 
                                        class="form-control"  
                                        v-model="provider.cuit"
                                        placeholder="##-########-#"
                                        />
                                </div>
                                <div><p>Ingrese su número de matrícula</p></div>
                                <div class="input-group mb-3">
                                    <input 
                                        type="text" 
                                        class="form-control"  
                                        placeholder="Ingrese su N° de matrícula" 
                                        v-model="provider.enrollment_number">
                                </div>
                                <div><p>Nombre de fantasía</p></div>
                                <div class="input-group mb-3">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Razón social"
                                        v-model="provider.business_name">
                                </div>
                               
                                    <div>
                                        <div><p>Zona de trabajo</p></div>
                                        <b-form-select 
                                        v-model="selected" 
                                        :options="cities"
                                        ></b-form-select>
                                    </div>
                                

                                    
                              
                            <button class="btn btn-danger btn-block mt-5">Register</button>

                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import router from '../../router'
const BASEURL = process.env.VUE_APP_BASEURL;
import axios from 'axios';
import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
Vue.use(BootstrapVue);
import Multiselect from 'vue-multiselect'

import {
  cities,
  categories
} from "../../constants/constants";

export default {
    name: "ProviderRegister",
    data () {
        return{
            cities,
            categories,
            provider: {
                email:this.$route.params.email,
                cuit:"",
                enrollment_number:"",
                business_name:"",
                city_id:"",
                user_id:""
            },
            selected: null,
        };       
    },
    components: {
        Multiselect
    },
    methods: {
        async handleSubmit() {
            await axios.post(`${BASEURL}/provider/create`, {
                email: this.provider.email,
                cuit_number: this.provider.cuit,
                enrollment_number: this.provider.enrollment_number,
                business_name: this.provider.business_name,
                user_id: this.$route.params.id,
                city_id: this.selected
            });
            router.push('/login')
        },
        
    }
}
</script>
<style scoped>
#btnClient{
    padding: 2;
    margin: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}
.fa-edit{
    width:20px;
    height: 90%;
    color: black;
    
}

</style>

