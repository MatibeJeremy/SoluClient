<template>
  <div class="mt-10 mb-10">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-12 col-xl-12 justify-content-center">
          <div class="card" style="border-radius: 20px">
            <div class="text-center account-logo-box">
              <div class="mt-2 mb-2">
                <a href="" class="text-success">
                  <span
                    ><img
                      src="https://www.solutech.co.ke/wp-content/uploads/2020/10/Solutech-Official-Logo.svg"
                      alt=""
                      height="166"
                      width="200"
                  /></span>
                </a>
              </div>
            </div>

            <div v-if="error" class="alert alert-danger" style="margin: 15px">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span> <b> Failed - </b> {{ errorMessage }} </span>
            </div>

            <div class="card-body">
              <div class="card-body">
                <div style="padding: 10px" v-if="loading">Loading...</div>

                <form @submit.prevent="submitLogin">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="email_address"
                      style="marginbottom: 10px"
                      required=""
                      v-model="email_address"
                      placeholder="Email"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      class="form-control"
                      type="password"
                      style="marginbottom: 10px"
                      required=""
                      v-model="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>

                  <div class="form-group">
                    <div class="custom-control custom-checkbox checkbox-success">
                      <input
                        type="checkbox"
                        style="marginright: 4px"
                        class="custom-control-input"
                        id="checkbox-signin"
                        checked
                      />
                      <label class="custom-control-label" for="checkbox-signin"
                        >Remember me</label
                      >
                    </div>
                  </div>

                  <div class="form-group text-center mt-4 pt-2">
                    <div class="col-sm-12">
                      <router-link to="/register"
                        ><a href="" class="text-muted"
                          ><i class="fa fa-lock mr-1"></i> Forgot your password?</a
                        ></router-link
                      >
                    </div>
                  </div>

                  <div class="form-group account-btn text-center mt-2">
                    <div class="col-12">
                      <button
                        :disabled="loading"
                        class="btn width-md btn-bordered btn-danger waves-effect waves-light"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                </form>
                <!--                            <div class="col-12">-->
                <!--                                  <button @click="faceBook" :disabled="loading" class="btn width-md btn-bordered btn-danger waves-effect waves-light" type="submit">Facebook</button>-->

                <!--                            </div>-->
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card -->

            <div class="row mt-5">
              <div class="col-sm-12 text-center">
                <p class="text-muted">
                  Don't have an account?
                  <router-link to="Register" class="text-primary ml-1"
                    ><b>Sign Up</b></router-link
                  >
                </p>
              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
  </div>
</template>

<style>
.container {
  padding: 1rem;
}

@media screen and (min-width: 768px) {
  .card {
    width: 400px;
    margin-left: 44%;
  }
}
</style>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { mapActions } from "vuex";

export default {
  name: "sign-in",
  components: {},
  data() {
    return {
      loading: false,
      email_address: "",
      password: "",
      error: null,
      errorMessage: null,
    };
  },
  methods: {
    submitLogin() {
      const router = useRouter();
      this.loading = true;
      axios
        .post("http://127.0.0.1:8000/api/login", {
          email_address: this.email_address,
          password: this.password,
        })
        .then((response) => {
          this.loading = false;
          console.log(response.data.access_token);
          // login user, store the token and redirect to dashboard
          this.$store.dispatch('login',response.data.access_token);
          // console.log(response.data.access_token);
          this.$router.push({ name: "Dash" });
        })
        .catch((error) => {
          console.log("here");
          this.loading = false;
          console.log(error);
          this.error = true;
          this.errorMessage = error.response.data.error.message;
          if (this.errorMessage === null) {
            this.errorMessage = "Turn on Database";
          } else {
            this.errorMessage = error.response.data.error.message;
          }
          setTimeout(() => {
            this.errorMessage = null;
            this.error = false;
          }, 4000);
        });
    },
  },
};
</script>
