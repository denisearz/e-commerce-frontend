<template>
  <div>

    <b-table striped hover 
    :items="providers" 
    :fields="fields"
    id="my-table"
    :per-page="perPage"
    :current-page="currentPage"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Página Actual: {{ currentPage }}</p>
  </div>
</template>
  

</template>
<script>

import router from "../../router";
const BASEURL = process.env.VUE_APP_BASEURL;
import axios from "axios";


export default {
    data() {
    return {
      fields: ['id', 'business_name', 'enrollment_number', 'city_id', 'email', 'cuit_number'],
      providers: [],
      perPage: 10,
      currentPage: 1,
    };
    },
    mounted() {
        this.getProviders()
    },
    methods: {
        mytable(){
            $(document).ready(function () {
            $('#dtBasicExample').DataTable();
            $('.dataTables_length').addClass('bs-select');
          });
        },

        async getProviders() {
            await axios.get(`${BASEURL}/provider`)
            .then(response=>{
                this.providers = response.data;
                this.mytable();
            })
        }
    },
    computed: {
      rows() {
        return this.providers.length
      }
    }
}
</script>
