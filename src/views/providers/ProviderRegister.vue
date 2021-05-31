<template>
    <section class="section section-shaped  my-0">
        <div class="shape shape-style-1 bg-gradient-default">

        </div>
        <div class="container pt-lg-md">
            <div class = "col text-center " > 
                
                <font color="white" size=6>Registro de proveedores</font>
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
                                        type="number" 
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
                                        <b-form-select v-model="selected" :options="options"></b-form-select>
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

export default {
    name: "ProviderRegister",
    data () {
        return{
            provider: {
                cuit:"",
                enrollment_number:"",
                business_name:"",
                city_id:"",
                user_id:""
            },
            selected: null,
            options: [
            { value: "1", text: "GBA ZONA NORTE" },
            { value: "2", text: "GBA ZONA ESTE" },
            { value: "3", text: "GBA ZONA OESTE" },
            { value: "4", text: "GBA ZONA SUR" },
            { value: "5", text: "CABA" },
            { value: "6", text: "LA PLATA" },
            { value: "7", text: "ZARATE-CAMPANA" }
        ]
        };       
    },

    methods: {
        async handleSubmit() {
            await axios.post(`${BASEURL}/provider/create`, {
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

