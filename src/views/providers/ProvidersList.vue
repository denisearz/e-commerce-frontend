<template>
  <div>
    <!-- Default dropright button -->
    <div class="btn-group dropright">
      <button
        type="button"
        class="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropright
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <div class="table">
      <b-table
        striped
        hover
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
  </div>
</template>
  

<script>
import router from '../../router';
const BASEURL = process.env.VUE_APP_BASEURL;
import axios from "axios";

export default {
  data() {
    return {
      fields: [
        "id",
        "business_name",
        "enrollment_number",
        "city_id",
        "email",
        "cuit_number",
      ],
      providers: [],
      perPage: 10,
      currentPage: 1,
    };
  },
  mounted() {
    this.getProviders();
  },
  methods: {
    mytable() {
      $(document).ready(function () {
        $("#dtBasicExample").DataTable();
        $(".dataTables_length").addClass("bs-select");
      });
    },

    async getProviders() {
      let category_id = this.$route.params.category_id;
      let params = (category_id != 0 && category_id != null) ? "?category_id="+category_id : "";
      await axios.get(`${BASEURL}/provider`+params).then((response) => {
        this.providers = response.data;
        this.mytable();
      });
    },
  },
  computed: {
    rows() {
      return this.providers.length;
    },
  },
};
</script>

<style >
#table {
  margin-top: 100%;
}
</style>
