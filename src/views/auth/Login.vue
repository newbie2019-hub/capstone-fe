<template>
  <div>
    <div class="container-fluid w-100 p-0 mr-0 vh-100">
      <div class="row p-0 m-0 h-100 justify-content-center align-items-center">
        <div class="col-12 col-md-6 col-lg-7 col-xl-7 hero-bg">
          <div class="content-end">
            <h3 class="fw-600">Touch-less</h3>
            <p >Switching to touchless reduces common touchpoints, helping safeguard against the spread of viruses.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-5 col-xl-5 mobile-login">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-9 col-md-7 col-lg-8 col-xl-7">
                <h6 class="fw-600 text-end mb-5"><router-link to="/register" class="btn-reg text-decoration-none">Register</router-link></h6>
                <h5 class="fw-600">Login</h5>
                <p class="lh-r mt-4">Welcome, Please fill in your email and password to proceed.</p>
                <div class="form-floating mb-4 mt-5">
                  <input v-model="data.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-2">
                  <input v-model="data.password" @keypress.enter="signin" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Password</label>
                </div>
                <router-link to="/reset" class="mt-3 pt-2 text-decoration-none"><small>Forgot your password?</small></router-link>
                <div class="form-check form-switch mt-3">
                  <input class="form-check-input" v-model="isAdmin" type="checkbox" id="flexSwitchCheckDefault">
                  <label class="form-check-label" for="flexSwitchCheckDefault">Admin Account</label>
                </div>
                <div class="d-grid">
                  <button :disabled="isLoading" href="" class="mt-4 btn rounded-pill btn-purple" v-on:click.prevent="signin">
                    <div v-if="isLoading" class="spinner-grow text-light spinner-grow-sm me-2" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    Login Account
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data(){
    return {
      isAdmin: false,
      data: {
        email: '',
        password: '',
      },
      isLoading: false
    }
  },
  mounted(){
    document.title = "Welcome, Please Login"
  },
  components: {
  },
  methods: {
    ...mapActions('auth', ['loginAccount', 'loginUserAccount']),
    async signin(){ 
      if(!this.validEmail()) return this.$toast.error('Email invalid');
      this.isLoading = true
      if(this.isAdmin){
        const res = await this.loginAccount(this.data)
        if(res == 'Error: Network Error'){
          this.$toast.error('Our server is currently down at this time.')
        }
        else {
          if(res.status == 200){
            this.$router.push('/home/dashboard')
            this.$toast.success('Login successful')
          }
          else{
            this.$toast.error('Incorrect credentials')
            this.isLoading = false
          }
        }
        this.isLoading = false
      }
      else {
        const res = await this.loginUserAccount(this.data)
        if(res.status == 200){
          this.$router.push('/user/dashboard')
          this.$toast.success('Login successful')
          this.isLoading = false
        }
        else if(res.status == 403){
          this.$toast.error('Your account is still pending')
          this.isLoading = false
        }
        else {
          this.$toast.error('Your login credentials is invalid')
          this.isLoading = false
        }
      }

    },
    validEmail(){
      let regEx = /^([a-z0-9_\-.])+@([a-z0-9_\-.])+\.([a-z0-9]{2,})$/gi
      let isEmail = regEx.test(this.data.email)
      return isEmail
    },
  }
}
</script>
