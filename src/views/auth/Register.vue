<template>
  <div>
    <div class="container-fluid w-100 p-0 mr-0 vh-100">
      <div class="row p-0 m-0 h-100 justify-content-center align-items-center">
        <div class="col-12 col-md-6 col-lg-7 col-xl-7 hero-bg">
          <div class="content-end">
            <h3 class="fw-600">Information Kiosk Management</h3>
            <p class="mt-3">Navigate the system without the need to touch. Explore what can be done with hand tracking technology. Everything is processed locally and no webcam data is being sent or stored to our server.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-5 col-xl-5">
          <div class="row h-100 justify-content-center ">
            <div class="col-9 col-md-7 col-lg-8 col-xl-7">              
                <h5 class="fw-600">Register</h5>
                <p class="lh-r mt-3" v-if="currentStep != 3">Welcome, We need some of your informations.</p>
                <div v-if="currentStep == 0">
                  <div class="form-floating mb-4 mt-4">
                    <input v-model="data.first_name" :class="validated.first_name ? '' : 'is-invalid'" type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">First Name</label>
                    <div class="invalid-feedback">
                      First Name is required
                    </div>
                  </div>
                  <div class="form-floating mb-4">
                    <input v-model="data.middle_name" type="text" class="form-control" id="floatingMiddleName" placeholder="Password">
                    <label for="floatingPassword">Middle Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input  v-model="data.last_name"  :class="validated.last_name ? '' : 'is-invalid'" type="text" class="form-control" id="floatingLastName" placeholder="LastName">
                    <label for="floatingPassword">Last Name</label>
                    <div class="invalid-feedback">
                      Last Name is required
                    </div>
                  </div>
                  <div class="mb-3">
                    <select v-model="data.gender"  :class="validated.gender ? '' : 'is-invalid'" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option value="" selected disabled>Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <div class="invalid-feedback">
                      Gender is required
                    </div>
                  </div>
                </div>
                <div v-if="currentStep == 1">
                  <div class="mb-2 mt-4">
                    <label for="floatingSelect text-muted "><small>Account Type</small></label>
                    <select v-model="data.account_type" :class="validated.account_type ? '' : 'is-invalid'" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option value="Department">Department/Unit</option>
                      <option value="Organization">Organization</option>
                    </select>
                    <div class="invalid-feedback">
                      Account Type is required
                    </div>
                  </div>
                  <div class="mb-2 mt-3" v-if="data.account_type == 'Organization'">
                    <label for="floatingSelect text-muted "><small>Select Organization</small></label>
                    <select v-model="data.organization_id" :class="validated.organization_id ? '' : 'is-invalid'" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option :value="org.id" v-for="(org, i) in signup.organization" :key="i">{{org.name}}</option>
                    </select>
                    <div class="invalid-feedback">
                      Organization is required
                    </div>
                  </div>
                  <div class="mb-2 mt-3" v-if="data.account_type == 'Department'">
                    <label for="floatingSelect text-muted "><small>Select Unit</small></label>
                    <select v-model="data.unit_id" :class="validated.unit_id ? '' : 'is-invalid'" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option :value="unit.id" v-for="(unit, i) in signup.unit" :key="i">{{unit.name}}</option>
                    </select>
                    <div class="invalid-feedback">
                      Department is required
                    </div>
                  </div>
                  <div class="mb-4" v-if="data.account_type == 'Organization'">
                    <label for="floatingSelect text-muted "><small>Organization Role</small></label>
                    <select v-model="data.role_id" :class="validated.role_id ? '' : 'is-invalid'" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option :value="role.id" v-for="(role, i) in filteredRoles" :key="i">{{role.role}}</option>
                    </select>
                    <div class="invalid-feedback">
                      Account Role is required
                    </div>
                  </div>
                  <div class="mb-4" v-if="data.account_type == 'Department'">
                    <label for="floatingSelect text-muted "><small>Unit Role</small></label>
                    <select v-model="data.role_id" :class="validated.role_id ? '' : 'is-invalid'" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option :value="role.id" v-for="(role, i) in signup.unit_roles" :key="i">{{role.role}}</option>
                    </select>
                    <div class="invalid-feedback">
                      Account Role is required
                    </div>
                  </div>
                  <div class="form-floating">
                    <input v-model="data.contact_number" :class="validated.contact_number ? '' : 'is-invalid'" type="text" class="form-control" id="floatingContactNumber" placeholder="ContactNumber">
                    <label for="floatingPassword">Contact Number</label>
                    <div class="invalid-feedback">
                      Contact Number is required
                    </div>
                  </div>
                  <div class="invalid-feedback">
                    Contact Number is required
                  </div>
                  <p class="mt-2"><small>Please make sure your info is valid</small></p>
                </div>
                <div v-if="currentStep == 2">
                  <div class="form-floating mb-4 mt-5">
                    <input v-model="data.email" :class="validated.email ? '' : 'is-invalid'" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                    <div class="invalid-feedback">
                      Email address is invalid 
                    </div>
                  </div>
                  <div class="form-floating">
                    <input v-model="data.password" :class="validated.password ? '' : 'is-invalid'" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                    <div class="invalid-feedback">
                      Password is required
                    </div>
                  </div>
                  <p class="mt-2 text-muted"><small>Please remember your credentials</small></p>
                </div>
                <div class="mb-5" v-if="currentStep == 3">
                  <p class="mt-4">After signing up your account will still be on pending state. Please wait for the approval of the system administrator</p>
                </div>
                <div class="d-flex">
                  <button href="" class="btn btn-sm btn-purple me-2" v-on:click.prevent="prevStep" :disabled="currentStep == 0 || isLoading" >Previous</button>
                  <button href="" class="btn btn-sm btn-purple me-3 me-xl-5 me-md-3 me-lg-3 me-xl-4" v-on:click.prevent="nextStep" :disabled="currentStep == 3">Next</button>
                  <button class="btn btn-sm btn-purple me-3" v-on:click="create" v-if="currentStep == 3" :disabled="isLoading"><i class="bi bi-person-circle"></i> Sign-up</button>
                  <a href="/"  v-on:click.prevent="$router.push('/')" class="btn btn-sm btn-purple" v-if="currentStep == 0"><i class="bi bi-person-circle"></i> Login</a>
                </div>
                <step-progress :steps="mySteps" :active-color="'mediumslateblue'" :line-thickness="3" :active-thickness="3" :passive-thickness="3" :passive-color="'gray'" :current-step="currentStep" icon-class="bi bi-check"></step-progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import StepProgress from 'vue-step-progress';
import 'vue-step-progress/dist/main.css';
export default {
  name: 'Register',
  data() {
    return {
      isLoading: false,
      data: {
        first_name: '',
        middle_name: '',
        last_name: '',
        gender: '',
        unit_id: '',
        organization_id: '',
        contact_number: '',
        account_type: '',
        role_id: '',
        email: '',
        password: '',
      },
      validated: {
        first_name: true,
        last_name: true,
        gender: true,
        unit_id: true,
        organization_id: true,
        contact_number: true,
        account_type: true,
        role_id: true,
        email: true,
        password: true,
      },
      stepValidation: ['false', 'false', 'false'],
      mySteps: ['Info', 'Account', 'Credentials'],
      currentStep: 0,
    }
  },
  async mounted(){
    document.title = "Register"
    await this.getSignUpInfo()
  },
  components: {
     'step-progress': StepProgress
  },
  computed: {
    ...mapState('auth', ['signup']),
    filteredRoles() {
      return this.signup.organization_roles.filter(role => {
         return role.role != 'Organization Adviser' && role.role != 'OSA' && role.role != 'University Admin'
      })
    }
  },
  methods: {
    ...mapActions('auth', ['createAccount', 'getSignUpInfo']),
    async create(){
      this.isLoading = true
      const res = await this.createAccount(this.data)
      if(res.status == 200){
        this.$toast.success('Account created successfully! \nPlease wait for the approval of your account')
        this.$router.push('/')
      }
      else if(res.status == 422){
        this.showError(res.data)
      }
      else {
        this.$toast.error(res.data.msg); 
      }
      this.isLoading = false
    },
    showError(data){
      for (const key of Object.keys(data)) {
        this.$toast.error(data[key][0]); 
      }
    },
    prevStep(){
      if(this.currentStep != 0){
        this.currentStep = this.currentStep - 1;
      }
    },
    nextStep(){
      
      if(this.currentStep == 2){
        this.lastStepValidation()
        if(this.stepValidation[2]){
          this.currentStep = this.currentStep + 1;
        }
      }
      if(this.currentStep == 1){
        this.secondStepValidation()
        if(this.stepValidation[1]){
          this.currentStep = this.currentStep + 1;
        }
      }
      if(this.currentStep == 0){
        this.firstStepValidation()
        if(this.stepValidation[0]){
          this.currentStep = this.currentStep + 1;
        }
      }
      
    },
    firstStepValidation(){
      if (this.data.first_name == '') {
        this.validated.first_name = false
      }
      if (this.data.last_name == '') {
        this.validated.last_name = false
      }
      if (this.data.gender == '') {
        this.validated.gender = false
      }
      if(this.data.first_name.trim() == '' || this.data.last_name.trim() == '' || this.data.gender == ''){
        this.stepValidation[0] = false
      }
      else {
        this.stepValidation[0] = true
        this.validated.first_name = true
        this.validated.last_name = true
        this.validated.gender = true
      }
    },
    secondStepValidation(){
      if (this.data.account_type == '') {
        this.validated.account_type = false
      }
      if (this.data.role_id == '') {
        this.validated.role_id = false
      }
      if (this.data.contact_number == '') {
        this.validated.contact_number = false
      }
      if(this.data.account_type == '' || this.data.role_id == '' || this.data.contact_number.trim() == ''){
        this.stepValidation[1] = false
      }
      else {
        this.stepValidation[1] = true
        this.validated.account_type = true
        this.validated.role_id = true
        this.validated.contact_number = true
      }
    },
    lastStepValidation(){
      if (this.data.email == '') {
        this.validated.email = false
      }
      if(!this.validEmail()){
        this.validated.email = false
      }
      if (this.data.password == '') {
        this.validated.password = false
      }
      else {
        this.validated.password = true
      }
      if(this.data.email == '' || this.data.password == '' || !this.validEmail()){
        this.stepValidation[2] = false
      }
      else {
        this.stepValidation[2] = true
        this.validated.email = true
        this.validated.password = true
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
<style>
.Vue-Toastification__container .top-right{
  max-width: 460px !important;
}
</style>