<template>
  <section class="background">
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
    <div class="container pt-lg-md">
      <div class="col text-center">
        <font color="white" size="6">Bienvenido/a {{ client.name }}</font>
      </div>
      <div class="row justify-content-center">
        <div class="col-7">
          <card
            id="template"
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <form
                role="form"
                action="/"
                name="frmRegister"
                method="post"
                @submit.prevent="submitClient"
              >
                <div><p>Nombre</p></div>
                <div class="input-group mb-3">
                  <input
                    id="registerInput"
                    type="text"
                    class="form-control"
                    placeholder="Ingrese su nombre"
                    v-model="client.name"
                  />
                </div>
                <div><p>Apellido</p></div>
                <div class="input-group mb-3">
                  <input
                    id="registerInput"
                    type="text"
                    class="form-control"
                    placeholder="Ingrese su apellido"
                    v-model="client.last_name"
                  />
                </div>
                <div><p>E-mail de contacto</p></div>
                <div class="input-group mb-3">
                  <input
                    id="registerInput"
                    type="text"
                    class="form-control"
                    placeholder="E-mail"
                    v-model="client.email"
                  />
                </div>
                <div><p>N° de teléfono</p></div>
                <div class="input-group mb-3">
                  <input
                    id="registerInput"
                    type="text"
                    class="form-control"
                    placeholder="Ingrese su N° de teléfono"
                    v-model="client.phone_number"
                  />
                </div>

                <button class="btn btn-danger btn-block mt-5">
                  Confirmar Registro
                </button>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import router from "../../router";
const BASEURL = process.env.VUE_APP_BASEURL;
import axios from "axios";

export default {
  name: "ClientRegister",
  data() {
    return {
      client: {
        name: "",
        last_name: "",
        email: this.$route.params.email,
        phone_number: "",
        user_id: "",
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
      router.push("/login");
    },
  },
};
</script>
<style>
.background {
  background: -webkit-linear-gradient(
    #454546,
    rgb(247, 247, 244)
  ); /* For Safari 5.1 to 6.0 */
  background: linear-gradient(
    #59595a,
    rgb(247, 247, 244)
  ); /* Standard syntax */
}
#template {
  background: #454546;
  border-radius: 15px;
}
#registerInput {
  border-radius: 0px 15px 15px 0px;
  border-color: #fdfd96;
}

#registerInput:hover {
  box-shadow: 0 1px 5px 1px rgba(252, 232, 120, 0.959),
    0 1px 5px 0 rgba(24, 24, 23, 0.363);
}
</style>

