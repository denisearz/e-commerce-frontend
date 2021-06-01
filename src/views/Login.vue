<template>
    <section class="section section-shaped  my-0">
        <div class="shape shape-style-1 bg-gradient-default">

        </div>
        <div class="container pt-lg-md">
            <div class = "col text-center " > 
                <font color="white" size=6>Login</font>
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
                            @submit.prevent="handleSubmit"
                           >
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <i class="fas fa-envelope input-group-text"></i>
                                    </div>
                                    <input 
                                        type="text" 
                                        class="form-control"  
                                        placeholder="Ingrese su eMail" 
                                        v-model="email"
                                        >
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <i class="fas fa-lock input-group-text"></i>
                                    </div>
                                    <input 
                                        type="password" 
                                        class="form-control" 
                                        placeholder="Ingrese su contraseña"
                                        v-model="password"
                                        >
                                </div>
                                <button class="btn btn-primary btn-block">Login</button>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';
const BASEURL = process.env.VUE_APP_BASEURL;

export default {
    name: "login",
    data () {
        return{
            email:"",
            password:"",
        };       
    },
    methods: {
        async handleSubmit() {
            const response = await axios.post(`${BASEURL}/auth/login`, {
                email: this.email,
                password: this.password
            });
            localStorage.setItem('token', response.data.access_token)

            router.push('/')
        }
    }
};

</script>
<style>
</style>
