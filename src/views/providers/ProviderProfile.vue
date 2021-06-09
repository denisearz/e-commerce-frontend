<template>
    <section class="background">
        <!--Para la cabecera -->
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
        <!-- Fin de la cabecera, luego ver si se puede componentizar-->

       <div class="container pt-lg-md">
            <card
                id="template"
                type="secondary"
                shadow
                header-classes="bg-white pb-5"
                body-classes="px-lg-5 py-lg-5"
                class="border-0"
            >
                <div class="row justify-content-center ">
                    <h2 class="text-center" >DATOS DEL PROVEEDOR</h2>
                </div>
            
                <!--Datos Pesonales del Proveedor-->
                <div class="row row-cols-2 mx-md-n5 pt-2">
                <div class="card">
                        <div class="card-body">
                            <h5 class="text-center">Información Personal</h5>

                            <ul class="list-group">
                                <li class="list-group-item"
                                    >Mail: {{providerInfo.provider_email}}
                                </li>
                                <li class="list-group-item"
                                    >CUIL: {{providerInfo.provider_cuit_number}}
                                </li>
                                <li class="list-group-item"
                                    >Matrícula: {{providerInfo.provider_enrollment_number}}
                                </li>
                                <li class="list-group-item"
                                    >Compañía: {{providerInfo.provider_business_name}}
                                </li>
                                <li class="list-group-item"
                                    >Zona: {{providerInfo.city_location}}
                                </li>                            
                            </ul>
                        </div>
                    </div>

                    <!--Categoría-->
                    <div class="card">
                        <div class="card-body"
                            v-if = "categoryProvider.length>0">
                            <h5  class="text-center">Categorías</h5>

                            <ul class="list-group">
                                <li v-for="item in this.categoryProvider"
                                                    :key= "item.id" 
                                                    class="list-group-item">
                                    {{item.categoryName}}
                                </li>               
                            </ul>
                        </div>
                        <div class="card-body"
                            v-if = "categoryProvider.length<=0">
                            <p> No se han cargado Categorías aún</p>
                        </div>
                    </div>
                </div>
            <!-- -->
                <!--Datos Pesonales del Proveedor-->
                <div class="row row-cols-2 mx-md-n5 pt-5 ">
                
                    <!--Categoría-->
                    <div class="card">
                        <div class="card-body">
                            <h5  class="text-center">Especialidades</h5>
                                <div id="accordion"
                                v-if = "specialityProvider.length>0"
                                >
                                    <!-- Este código se repite -->
                                    <div class="card">
                                        <div 
                                            v-for="category in categoryProvider"
                                            :key="category.id" 
                                            class="card-header" 
                                            id="headingOne">
                                            <h6 class="mb-0"> {{category.categoryName}}</h6>
                                        
                                            <div v-for="speciality in specialityProvider"
                                                :key="speciality.speciality_id"
                                                id="collapseOne" 
                                                class="collapse show" 
                                                aria-labelledby="headingOne" 
                                                data-parent="#accordion">
                                                <div class="card-body"
                                                    v-if = "speciality.category_id == category.id">
                                                    {{speciality.specility_description}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Hasta Acá-->
                                </div>
                                <div v-if = "specialityProvider.length<=0">
                                    <p> No se han cargado especialidades aún</p>
                                </div>
                        </div>
                   </div>

                     <div class="card">
                        <div class="card-body">
                            <h5 class="text-center">Clientes Contratados</h5>

                            <ul class="list-group">
                                <li class="list-group-item"
                                    >Lista de los usuarios que lo contrataron
                                </li>                     
                            </ul>
                        </div>
                    </div>
                </div>

            </card>
        </div>



    </section>
</template>

<script>

import ProviderRepository from "@/repositories/providerRepository"


export default {
  name: "ProviderProfile",
  data() {
    return {
        userId:"",
        providerInfo:{
            user_id: "",
            user_email: "",
            user_user_type: "",
            provider_id: "",
            provider_email: "",
            provider_cuit_number: "",
            provider_enrollment_number: "",
            provider_business_name: "",
            city_location: ""
        },
        categoryProvider:[],
        specialityProvider:[],
        cantStart: 5,
        error:""

    }
  },

  async beforeMount() {
    this.userId = this.$route.params.id;
    try {
        //Valido que el id del usuario sea válido
        if (this.userId>0){
            this.providerInfo = await ProviderRepository.getProviderByUserId(this.userId);

            //Si me devolvió datos, pido las categorías a las que pertenece el provider
            if (this.providerInfo){
                //Obtengo las categorías
                let categorias = await ProviderRepository.getCategoryProvider(this.providerInfo.provider_id)
                //Formateo las categorías
                if (categorias){
                    this.categoryProvider= categorias.map(function(element){
                        var cat = new Object();
                            cat.id = element.category.id
                            cat.categoryName = element.category.name
                        return cat
                    })
                }else{
                    this.categoryProvider[0]='Aún no tiene cargadas categorías'
                }
                
                //Obtengo las especialidades
                this.specialityProvider  = await ProviderRepository.getSpeciaityProvider(this.providerInfo.provider_id)
        
            }else{
                this.error ="No se obtuvo respuesta del servidor"
                console.log(this.error);
            }
        }
        

    }catch (error) {
        this.error ="No se obtuvo respuesta del servidor"
        console.log(this.error);
    };

  },
};
</script>
