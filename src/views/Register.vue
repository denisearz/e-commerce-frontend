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
                            
                            <form role="form" action="/" name="frmRegister" method="post">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <i class="fas fa-envelope input-group-text"></i>
                                    </div>
                                    <input 
                                        type="text" 
                                        class="form-control"  
                                        placeholder="Ingrese su eMail" 
                                        v-model="formData.email">
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <i class="fas fa-lock input-group-text"></i>
                                    </div>
                                    <input 
                                        type="password" 
                                        class="form-control" 
                                        placeholder="Ingrese su password"
                                        v-model="formData.password">
                                </div>

                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                
                            </form>
                        </template>

                        <template>
                            
                            <div class="btn-wrapper text-center mt-3">
                                <base-button 
                                    type="primary" 
                                    id="btnProvider"
                                    @click="setProviderData">
                                    <i slot="icon" class="fas fa-tools"></i> 
                                    Soy Proveedor
                                </base-button>
                                <base-button 
                                    type="primary" 
                                    id="btnClient"
                                    @click="setClientData">
                                    <i slot="icon" class="fas fa-user"></i> 
                                    Soy cliente
                                </base-button>

                            </div>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import UserRepository from "@/repositories/userRepository";

export default {
    name: "Register",
    data () {
        return{
            formData: {
                email: "",
                password: "",
                type: ""
            },
        };       
    },

    methods: {
        setClientData () {
            //Seteo  el type            
            try{
                this.formData.type = "CLIENTE"  
            
                console.log(UserRepository)
                //UserRepository.createUser

                let respuesta = UserRepository.pruebaAPI(this.formData);
                //let newUser = UserRepository.createUser(this.formData);


                // console.log(newUser);
                console.log(respuesta);

            }catch (error) {
               console.log(error);
            }
        
        },
        setProviderData () {
            this.formData.type = "PROVEEDOR"
            console.log(this.formData)
        }
    }
}
</script>

