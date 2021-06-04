<template>
    <table class="table" id="myTable">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre Empresa</th>
      <th scope="col">N° de matrícula</th>
      <th scope="col">Área de <br>trabajo</th>
      <th scope="col">Email</th>
      <th scope="col">Cuit</th>
    
    </tr>
  </thead>
  <tbody>
    <tr v-for="provider in providers" :key="provider">
      <th scope="row"> {{ provider.id }} </th>
      <td> {{ provider.business_name }} </td>
      <td>  {{ provider.enrollment_number }} </td>
      <td>  {{ provider.city_id }} </td>
      <td>  {{ provider.email }} </td>
      <td>  {{ provider.cuit_number }} </td>
    
    </tr>
   
  </tbody>
</table>

  

</template>
<script>

import router from "../../router";
const BASEURL = process.env.VUE_APP_BASEURL;
import axios from "axios";


export default {
    data() {
    return {
      providers: []
    };
    },
    mounted() {
        this.getProviders()
    },
    methods: {
        mytable(){
            $(document).ready( function () {
            $('#myTable').DataTable();
            } );
        },

        async getProviders() {
            await axios.get(`${BASEURL}/provider`)
            .then(response=>{
                this.providers = response.data;
                this.mytable();
            })
        }

        
    }
}
</script>