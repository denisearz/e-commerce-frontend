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
    <div class="shape shape-style-1 bg-gradient-default"></div>

    <div class="container pt-lg-md">
      <div class="col text-center">
        <font color="white" size="6">Login</font>
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
                @submit.prevent="handleSubmit"
              >
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <i class="fas fa-envelope input-group-text"></i>
                  </div>
                  <input
                    id="registerInput"
                    type="text"
                    class="form-control"
                    placeholder="Ingrese su eMail"
                    v-model="email"
                  />
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <i class="fas fa-lock input-group-text"></i>
                  </div>
                  <input
                    id="registerInput"
                    type="password"
                    class="form-control"
                    placeholder="Ingrese su contraseña"
                    v-model="password"
                  />
                </div>
                <button class="btn btn-primary btn-block">Ingresar</button>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
const BASEURL = process.env.VUE_APP_BASEURL;

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post(`${BASEURL}/auth/login`, {
        email: this.email,
        password: this.password,
      });
      localStorage.setItem("token", response.data.access_token);

      router.push("/");
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
