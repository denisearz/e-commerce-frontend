<template>
    <section class="section section-shaped  my-0">
        <div class="shape shape-style-1 bg-gradient-default">

        </div>
        <div class="container pt-lg-md">
            <div class = "col text-center " > 
                <font color="white" size=6>Bienvenido/a {{ client.name }}</font>
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
                            @submit.prevent="submitClient">
                            <div><p>Nombre</p></div>
                                <div class="input-group mb-3">
                                    
                                    <input 
                                        type="text" 
                                        class="form-control"  
                                        placeholder="Ingrese su nombre" 
                                        v-model="client.name"
                                        >
                                </div>
                            <div><p>Apellido</p></div>
                                <div class="input-group mb-3">
                                    <input 
                                        type="text" 
                                        class="form-control"  
                                        placeholder="Ingrese su apellido" 
                                        v-model="client.last_name">
                                </div>
                            <div><p>Email de contacto</p></div>
                                <div class="input-group mb-3">
                                    <input 
                                        type="text" 
                                        class="form-control"  
                                        placeholder="Email" 
                                        v-model="client.email">
                                </div>
                            <div><p>N° de teléfono</p></div>
                                <div class="input-group mb-3">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Ingrese su N° de teléfono"
                                        v-model="client.phone_number">
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

import router from '../../router';
const BASEURL = process.env.VUE_APP_BASEURL;
import axios from 'axios';

export default {
    name: "ClientRegister",
    data () {
        return{
            client: {
                name:"",
                last_name: "",
                email:this.$route.params.email,
                phone_number: "",
                user_id: ""
            },
        };       
    },

     methods: {
        async submitClient() {
            await axios.post(`${BASEURL}/client/create`, {
                name: this.client.name,
                last_name: this.client.last_name,
                email: this.client.email,
                phone_number: this.client.phone_number,
                user_id: this.$route.params.id,
            });
            router.push('/login')
        },
    }
}
</script>

