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
                                <div><p>Ingrese su número de Email</p></div>
                                <div class="input-group mb-3">
                                    <input 
                                        type="text" 
                                        class="form-control"  
                                        placeholder="example@gmail.com" 
                                        v-model="provider.email">
                                </div>
                                <div><p>Número de matrícula</p></div>
                                <div class="input-group mb-3">
                                    <input 
                                        type="password" 
                                        class="form-control" 
                                        placeholder="Ingrese su N° de matrícula"
                                        v-model="provider.password">
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

export default {
    name: "Register",
    data () {
        return{
            provider: {
                cuit:"",
                email: "",
                password: "",
            },
        };       
    },

    methods: {
        async handleSubmit() {
            const response = await axios.post(`${BASEURL}/auth/register`, {
                name: this.provider.name,
                email: this.provider.email,
                password: this.provider.password,
            });
            console.log(response)
            localStorage.setItem('token', response.data.access_token)
        },
    }
}
</script>

