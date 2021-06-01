<template>
    <section class="section section-shaped  my-0">
        <div class="shape shape-style-1 bg-gradient-default">

        </div>
        <div class="container pt-lg-md">
            <div class = "col text-center " > 
                <font color="white" size=6>Registro de usuarios</font>
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
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <i class="fas fa-envelope input-group-text"></i>
                                    </div>
                                    <input 
                                        type="text" 
                                        class="form-control"  
                                        placeholder="Ingrese su eMail" 
                                        v-model="user.email">
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <i class="fas fa-lock input-group-text"></i>
                                    </div>
                                    <input 
                                        type="password" 
                                        class="form-control" 
                                        placeholder="Ingrese su password"
                                        v-model="user.password">
                                </div>
                                <div class="btn-wrapper text-center mt-3">
                                <base-button 
                                    type="primary" 
                                    id="btnProvider"
                                    @click="setProviderData"
                                    :disabled="user.user_type === 'CLIENTE'"
                                    >
                                    <i slot="icon" class="fas fa-tools"></i> 
                                    Soy Proveedor
                                </base-button>
                                <base-button 
                                    type="primary" 
                                    id="btnClient"
                                    @click="setClientData"
                                    :disabled="user.user_type === 'PROVEEDOR'"
                                    >
                                    <i slot="icon" class="fas fa-user"></i> 
                                    Soy cliente
                                </base-button>

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

import router from '../router'
const BASEURL = process.env.VUE_APP_BASEURL;
import axios from 'axios';

export default {
    name: "Register",
    data () {
        return{
            user: {
                email: "",
                password: "",
                user_type: ""
            },
        };       
    },

    methods: {
        async handleSubmit() {
            const user = await axios.post(`${BASEURL}/auth/register`, {
                email: this.user.email,
                password: this.user.password,
                user_type: this.user.user_type
            });
            console.log(user.data[0].email);
            if (this.user.user_type === 'PROVEEDOR') {
                router.push({name:'ProviderRegister',params:{id:user.data[0].id, email:user.data[0].email}});            
            }
            if (this.user.user_type === 'CLIENTE') {
                router.push({name:'ClientRegister',params:{id:user.data[0].id, email:user.data[0].email}});            
            }
        },

        setClientData () {
            //Seteo  el type            
            try{
                this.user.user_type = "CLIENTE"  
            }catch (error) {
               console.log(error);
            }
        
        },
        setProviderData () {
            try{
                this.user.user_type = "PROVEEDOR"  
            }catch (error) {
               console.log(error);
            }
        }
    }
}
</script>

