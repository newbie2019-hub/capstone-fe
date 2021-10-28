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
                <h6 class="fw-600 text-end mb-5"><router-link to="/register" class="btn-reg text-decoration-none">Register</router-link></h6>
                <h5 class="fw-600">New Password</h5>
                <p class="lh-r mt-4">Please enter your new password</p>
                <div class="form-floating mb-4 mt-5">
                  <input v-model="new_pass.newpass" :disabled="isLoading" type="password" class="form-control" id="floatingNewPass" placeholder="name@example.com">
                  <label for="floatingNewPass">New Password</label>
                </div>
                <div class="form-floating mb-2">
                  <input v-model="new_pass.confirmpass" :disabled="isLoading" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Confirm Password</label>
                </div>
               
                <div class="d-grid">
                  <button :disabled="isLoading" href="" class="mt-4 btn rounded-pill btn-purple" v-on:click.prevent="saveResetPassword">
                    <div v-if="isLoading" class="spinner-grow text-light spinner-grow-sm me-2" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    Save Password
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
 data(){
  return {
   isLoading: false,
   new_pass: {
    newpass: '',
    confirmpass: '',
    email: '',
   }
  }
 },
 mounted(){
  document.title = "Enter new password"
  this.isLoading = true
  this.checkPasswordResetToken()
  console.log(this.$route.query)
 },
 methods: {
  async checkPasswordResetToken(){
   let data = {
    token: this.$route.query.token,
    email: this.$route.query.email
   }

   const res = await this.$store.dispatch('auth/checkResetPassword', data)
   if(res.status == 200){
    this.isLoading = false
   }
   else {
    this.$toast.error('Reset request is invalid');
    this.$router.push('/')
   }
  },
  async saveResetPassword(){
   if(this.new_pass.newpass != this.new_pass.confirmpass) return this.$toast.error('Password doesn\'t match')
   this.isLoading = true
   let data = {
    password: this.new_pass.newpass,
    email: this.$route.query.email,
    token: this.$route.query.token,
   }
   const res = await this.$store.dispatch('auth/saveResetPassword', data)
   if(res.status == 200){
    this.isLoading = false
    this.$toast.success('Password has been reset. You can now login to your account');
    this.$router.push('/')

   }
   else {
    this.$toast.error('Something went wrong. Please contact the developer');
    this.isLoading = false
   }
   
  }
 }
}
</script>