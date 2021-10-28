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
        <div class="col-12 col-md-6 col-lg-5 col-xl-5">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-9 col-md-7 col-lg-8 col-xl-7">
                <h6 class="fw-600 text-end mb-5"><a href="/" class="text-decoration-none text-end ">Login</a></h6>
                <h5 class="fw-600">Reset Password</h5>
                <p class="lh-r mt-4">Welcome, To request for password reset please enter your email address.</p>
                <div class="form-floating mb-4 mt-5">
                  <input v-model="data.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="d-grid">
                  <button :disabled="isLoading" href="" class="mt-4 btn rounded-pill btn-purple" v-on:click.prevent="reset">
                    <div v-if="isLoading" class="spinner-grow text-light spinner-grow-sm me-2" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    Reset Password
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
export default {
  name: 'Reset',
  data(){
    return {
      data: {
        email: '',
      },
      isLoading: false
    }
  },
  mounted(){
    document.title = "Reset Password"
  },
  components: {
  },
  methods: {
   async reset(){
    this.isLoading = true
    const res = await this.$store.dispatch('auth/checkEmail', this.data)
    if(res.status == 200){
     this.$toast.success('An email has been sent \nPlease check your email for instructions')
     this.data.email = ''
     this.isLoading = false
    }
    else {
     this.$toast.error('Email address not found')
     this.data.email = ''
     this.isLoading = false 
    }
   }
    
  },


}
</script>
