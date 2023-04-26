<template>
      <div class="container justify-content-center" style="margin:0 auto auto">
        <div class="card justify-content-center" style="border-radius: 20px">
          <div class="text-center account-logo-box">
            <div class="mt-2 mb-2">
              <a href="" class="text-success">
                <span
                  ><img src="https://www.solutech.co.ke/wp-content/uploads/2020/10/Solutech-Official-Logo.svg" alt="" height="166" width="200"
                /></span>
              </a>
            </div>
          </div>
          <div v-if="error" class="alert alert-danger" style="margin: 15px">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span> <b> Failed - </b> {{ errorMessage }}</span>
          </div>

          <div v-if="success" class="alert alert-success" style="margin: 15px">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span> <b> Success - </b> {{ successMessage }} </span>
          </div>

          <div class="card-body">
            <div style="padding: 10px" v-if="loading">Loading...</div>

            <form @submit.prevent="register()">
              <div class="form-group">
                <input
                  style="marginBottom: 10px"
                  class="form-control"
                  type="email"
                  name="email_address"
                  v-model="email_address"
                  required=""
                  placeholder="Email"
                />
              </div>

              <div class="form-group">
                <input
                  class="form-control"
                  type="password"
                  v-model="password"
                  required=""
                  id="password"
                  placeholder="Password"
                />
              </div>

              <div class="form-group account-btn text-center mt-2">
                <div class="col-12">
                  <button
                    class="btn width-md btn-bordered btn-danger waves-effect waves-light"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!-- end card-body -->

        <div class="row mt-5">
          <div class="col-sm-12 text-center">
            <p class="text-muted">
              Already have account?<RouterLink to="signin" class="text-primary ml-1"
                ><b>Sign In</b></RouterLink>
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->
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

export default {
  name: "Register",
  components: {},
  data() {
    return {
      loading: false,
      email_address: "",
      password: "",
      error: null,
      errorMessage: null,
      success: null,
      successMessage: null,
    };
  },
  methods: {
    register() {
      // this.$Progress.start();
      this.loading = true;
      axios
        .post("http://127.0.0.1:8000/api/register", {
          email_address: this.email_address,
          password: this.password,
        })
        .then((response) => {
          this.loading = false;
          this.success = true;
          this.successMessage =
            "Check your emails.(Ensure you check the spam folder as well.)";
          this.$Progress.finish();
        })
        .catch((error) => {
          this.loading = false;
          this.$Progress.fail();
          console.log(error);
          this.error = true;
          this.errorMessage = error.response.data.error.message;
        });
    },
  },
};
</script>
