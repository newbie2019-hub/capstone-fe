<template>
  <div>
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-sm-12 col-md-11 col-lg-11 col-xl-12">
          <div class="card p-5 mb-4">
            <h5>Create Account</h5>
            <p class="text-muted">Please enter user information</p>
            <div v-if="initialLoading" class="row justify-content-center align-items-center mt-3" style="height: 250px">
              <div class="spinner-grow text-secondary" role="status" style="width: 2.5rem; height: 2.5rem">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <form>
              <div class="row mt-3 gap-2" v-if="!initialLoading">
               <div class="col-11 col-md-5 col-lg-5 col-xl-4">
                <label>Upload Image</label>
                 <VueFileAgent
                  ref="vueFileAgent"
                  @select="filesSelected($event)"
                  :multiple="false"
                  :maxSize="'3MB'"
                  :deletable="true"
                  :accept="'image/*,'"
                  :theme="'list'"
                  @beforedelete="onBeforeDelete($event)"
                  @delete="fileDeleted($event)"
                  :errorText="{
                    type: 'Invalid file type. Only image file is allowed',
                    size: 'Image should not exceed 3MB in size',
                  }"
                  v-model="fileRecords"
                ></VueFileAgent>
               </div>
                <p class="mt-3">Personal Information</p>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="firstname" class="form-label"><small>First Name</small></label>
                      <input v-model="data.first_name" :class="validated.first_name ? '' : 'is-invalid'" type="text" class="form-control" id="firstname" placeholder="">
                      <div class="invalid-feedback">
                        First Name is required
                      </div>
                    </div>
                  </div>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="middlename" class="form-label"><small>Middle Name</small></label>
                      <input v-model="data.middle_name" type="text" class="form-control" id="middlename" placeholder="">
                    </div>
                  </div>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="lastname" class="form-label"><small>Last Name</small></label>
                      <input v-model="data.last_name" :class="validated.last_name ? '' : 'is-invalid'"  type="text" class="form-control" id="lastname" placeholder="">
                      <div class="invalid-feedback">
                        Last name is required
                      </div>
                    </div>
                  </div>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="contactnumber" class="form-label"><small>Contact Number</small></label>
                      <input v-model="data.contact_number" :class="validated.contact_number ? '' : 'is-invalid'" type="text" class="form-control" id="contactnumber" placeholder="">
                      <div class="invalid-feedback">
                        Contact Number is required
                      </div>
                    </div>
                  </div>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="text-muted "><small>Select Gender</small></label>
                      <select v-model="data.gender" :class="validated.gender ? '' : 'is-invalid'"  class="form-select" id="genderSelect" aria-label="Select gender">
                        <option value="Select Gender" disabled>Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      <div class="invalid-feedback">
                        Gender is required
                      </div>
                    </div>
                  </div>

                  <p class="mt-3">Account Type</p>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <label for="floatingSelect text-muted "><small>Account Type</small></label>
                    <select @change="data.role_id = ''" v-model="data.account_type" class="form-select" id="accountType" aria-label="Floating label select example">
                      <option value="Department">Department/Unit</option>
                      <option value="Organization">Organization</option>
                    </select>
                  </div>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4" v-if="data.account_type == 'Organization'">
                    <div class="">
                      <label for="text-muted "><small>Select Organization</small></label>
                      <select v-model="data.organization_id" :class="validated.organization_id ? '' : 'is-invalid'"  class="form-select" id="organizationSelect" aria-label="Floating label select example">
                        <option :value="org.id" v-for="(org, i) in signup.organization" :key="i">{{org.name}}</option>
                      </select>
                      <div class="invalid-feedback">
                        Organization is required
                      </div>
                    </div>
                  </div>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4" v-if="data.account_type == 'Department'">
                    <div class="">
                      <label for="unitSelect"><small>Select Unit</small></label>
                      <select v-model="data.unit_id" :class="validated.unit_id ? '' : 'is-invalid'"  class="form-select" id="unitSelect" aria-label="Floating label select example">
                        <option :value="unit.id" v-for="(unit, i) in signup.unit" :key="i">{{unit.name}}</option>
                      </select>
                      <div class="invalid-feedback">
                        Department/Unit is required
                      </div>
                    </div>
                  </div>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4"  v-if="data.account_type == 'Organization'">
                    <div class="">
                      <label for="text-muted "><small>Organization Role</small></label>
                      <select v-model="data.role_id" :class="validated.role_id ? '' : 'is-invalid'"  class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option :value="role.id" v-for="(role, i) in signup.organization_roles" :key="i">{{role.role}}</option>
                      </select>
                      <div class="invalid-feedback">
                       Organization role is required
                      </div>
                    </div>
                  </div>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4"  v-else>
                    <label for="floatingSelect text-muted "><small>Unit Role</small></label>
                    <select v-model="data.role_id" :class="validated.role_id ? '' : 'is-invalid'" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option :value="role.id" v-for="(role, i) in signup.unit_roles" :key="i">{{role.role}}</option>
                    </select>
                    <div class="invalid-feedback">
                      Unit Role is required
                    </div>
                  </div>
                  <!-- <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <label for="floatingSelect text-muted "><small>Account Status</small></label>
                    <select v-model="data.status" :class="validated.role_id ? '' : 'is-invalid'" class="form-select" id="statusSelect" aria-label="Floating label select example">
                      <option value="Approved">Approved</option>
                      <option value="Pending">Pending</option>
                    </select>
                    <div class="invalid-feedback">
                      Account status is required
                    </div>
                  </div> -->
                  <p class="mt-3">Login Credentials</p>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="email" class="form-label">Email</label>
                      <input v-model="data.email" :class="validated.email ? '' : 'is-invalid'" type="text" class="form-control" id="email" placeholder="">
                      <div class="invalid-feedback">
                        Email is required
                      </div>
                    </div>
                  </div>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="password" class="form-label">Password</label>
                      <input v-model="data.password" :class="validated.password ? '' : 'is-invalid'"  type="password" autocomplete="username" class="form-control" id="password" placeholder="">
                      <div class="invalid-feedback">
                        Password is required
                      </div>
                    </div>
                  </div>
              </div>
            </form>
            <div v-if="!initialLoading" class="form-check mt-3">
              <input v-model="emailNotif" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Send User an Email
              </label>
            </div>
            <div v-if="!initialLoading"  class="d-flex mt-4">
              <button :disabled="isLoading" v-on:click.prevent="saveAccount" class="btn btn-purple me-2">
                 <div v-if="isLoading" class="spinner-grow text-light spinner-grow-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                 </div>
                 Save Account
              </button>
              <button :disabled="isLoading" v-on:click.prevent="$router.push('/home/accounts')" class="btn btn-purple">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
  data(){
    return {
      data: {
        first_name: '',
        middle_name: '',
        last_name: '',
        contact_number: '',
        gender: '',
        account_type: 'Organization',
        role_id: '',
        organization_id: '',
        status: 'Approved',
        unit_id: '',
        email: '',
        password: '',
      },
      isLoading: false,
      initialLoading: false,
      isValid: false,
      emailNotif: false,
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
      fileRecords: [],
      fileRecordsForUpload: [],
    }
  },
  async mounted(){
    this.initialLoading = true
    this.$store.dispatch('auth/checkUser')
    await this.getSignUpInfo();

    this.initialLoading = false
  },
  methods: {
   ...mapActions('auth', ['getSignUpInfo']),
   filesSelected: function(fileRecordsNewlySelected) {
     var validFileRecords = fileRecordsNewlySelected.filter(
       (fileRecord) => !fileRecord.error
     );
     this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
       validFileRecords
     );
     },
     fileDeleted: function(fileRecord) {
       var i = this.fileRecordsForUpload.indexOf(fileRecord);
       if (i !== -1) {
         this.fileRecordsForUpload.splice(i, 1);
       }
     },
     onBeforeDelete: function(fileRecord) {
       var i = this.fileRecordsForUpload.indexOf(fileRecord);
       if (i !== -1) {
         this.fileRecordsForUpload.splice(i, 1);
        var k = this.fileRecords.indexOf(fileRecord);
         if (k !== -1) this.fileRecords.splice(k, 1);
       }
     },
   async saveAccount(){
     this.validateFields()
     if(this.isValid){
       this.isLoading = true
       this.data.emailNotif = this.emailNotif

      if(this.fileRecordsForUpload.length > 0) {
        const img = await this.$refs.vueFileAgent.upload(
           `http://127.0.0.1:8000/api/admin/uploadAccountImage?token=` + localStorage.getItem("auth"), 
           {'X-Requested-With' : 'XMLHttpRequest'}, this.fileRecordsForUpload
        );
  
        this.data.image = img[0].data
      }

      const res = await this.$store.dispatch('auth/createAccount', this.data)
      if(res.status == 200){
         this.$router.push('/home/accounts')
         if(this.emailNotif){
           setTimeout(()=>{
             this.$toast.success(`An email was sent to ${this.data.email}`)
           },1500)
         }
         this.$toast.success('Account created successfully!')
         this.isLoading = false
      }
      else if(res.status == 422){
        this.$toast.error(res.data.msg); 
      }
      else {
        this.showError(res.data)
      }
      this.isLoading = false
     }
   },
   showError(data){
      for (const key of Object.keys(data)) {
        this.$toast.error(data[key][0]); 
      }
   },
   validateFields(){
    let errors = [];
    this.isValid = false
    for (var key in this.data) {
      if(typeof this.data[key] === 'string'){
        if(this.data[key].trim() == ''){
          errors.push(key)
          if(key == 'first_name'){
            this.validated.first_name = false
          }
          if(key == 'last_name'){
            this.validated.last_name = false
          }
          if(key == 'gender'){
            this.validated.gender = false
          }
          if(key == 'role_id'){
            this.validated.role_id = false
          }
          if(this.data.account_type == 'Organization'){
            if(key == 'organization_id'){
              this.validated.organization_id = false
            }
          }
          if(key == 'unit_id'){
            if(this.data.account_type == 'Department'){
              this.validated.unit_id = false
            }
          }
          if(key == 'contact_number'){
            this.validated.contact_number = false
          }
          if(key == 'email'){
            this.validated.email = false
          }
          if(key == 'password'){
            this.validated.password = false
          }
        }
        else {
          if(key == 'first_name'){
            this.validated.first_name = true
          }
          if(key == 'last_name'){
            this.validated.last_name = true
          }
          if(key == 'gender'){
            this.validated.gender = true
          }
          if(key == 'contact_number'){
            this.validated.contact_number = true
          }
          if(key == 'role_id'){
            this.validated.role_id = true
          }
          if(this.data.account_type == 'Organization'){
            if(key == 'organization_id'){
              this.validated.organization_id = true
            }
          }
          if(this.data.account_type == 'Department'){
            if(key == 'unit_id'){
              this.validated.unit_id = true
            }
          }
          if(key == 'email'){
            this.validated.email = true
          }
          if(key == 'password'){
            this.validated.password = true
          }
        }
      }
      else {
        if(this.data[key] == '' || this.data[key] == undefined){
          errors.push(key)
          if(key == 'role_id'){
            this.validated.role_id = false
          }
          if(key == 'organization_id'){
            if(this.data.account_type == "Organization"){
              this.validated.organization_id = false
            }
          }
          if(key == 'unit_id'){
            if(this.data.account_type == "Department"){
              this.validated.unit_id = false
            }
          }
        }
        else {
          if(key == 'role_id'){
            this.validated.role_id = true
          }
          if(key == 'organization_id'){
            if(this.data.account_type == "Organization"){
              this.validated.organization_id = true
            }
          }
          if(key == 'unit_id'){
            if(this.data.account_type == "Department"){
              this.validated.unit_id = true
            }
          }
        }
      }
    }
    if(errors.length != 0){
      errors.forEach(err => {
        if(this.data.account_type == 'Department'){
          if(err == 'organization_id'){
            this.isValid = true
          }
          else {
            this.isValid = false
          }
        }
        if(this.data.account_type == 'Organization'){
          if(err == 'unit_id'){
            this.isValid = true
          }
          else {
            this.isValid = false
          }
        }
      });
    }
    else {
      this.isValid = true
    }
   }
  },
  computed: {
    ...mapState('auth', ['signup']),

  }

}
</script>
<style>
.Vue-Toastification__container .top-right{
  max-width: 460px !important;
}
</style>