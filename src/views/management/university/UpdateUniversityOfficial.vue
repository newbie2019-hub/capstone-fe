<template>
  <div>
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-sm-12 col-md-11 col-lg-11 col-xl-12">
          <div class="card p-5 mb-4">
            <h5>Update School Official</h5>
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
                      <input v-model="update_official.first_name" type="text" class="form-control" id="firstname" placeholder="">
                      <div class="invalid-feedback">
                        First Name is required
                      </div>
                    </div>
                  </div>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="middlename" class="form-label"><small>Middle Name (Optional)</small></label>
                      <input v-model="update_official.middle_name" type="text" class="form-control" id="middlename" placeholder="">
                    </div>
                  </div>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="lastname" class="form-label"><small>Last Name</small></label>
                      <input v-model="update_official.last_name" type="text" class="form-control" id="lastname" placeholder="">
                      <div class="invalid-feedback">
                        Last name is required
                      </div>
                    </div>
                  </div>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="contactnumber" class="form-label"><small>Telephone</small></label>
                      <input v-model="update_official.telephone" type="text" class="form-control" id="contactnumber" placeholder="">
                    </div>
                  </div>
                  <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="text-muted "><small>Select Gender</small></label>
                      <select v-model="update_official.gender" class="form-select" id="genderSelect" aria-label="Select gender">
                        <option value="Select Gender" disabled>Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      <div class="invalid-feedback">
                        Gender is required
                      </div>
                    </div>
                 </div>
                 <p class="mt-3">Other Information</p>
                 <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="role" class="form-label"><small>Role</small></label>
                      <input v-model="update_official.role" type="text" class="form-control" id="role" placeholder="">
                      <div class="invalid-feedback">
                        Role is required
                      </div>
                    </div>
                 </div>
                 <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="title" class="form-label"><small>Title (Optional)</small></label>
                      <input v-model="update_official.title" type="text" class="form-control" id="title" placeholder="">
                    </div>
                 </div>
                 <div class="col-11 col-sm-11 col-md-5 col-lg-5 col-xl-4">
                    <div class="">
                      <label for="email" class="form-label"><small>Email (Optional)</small></label>
                      <input v-model="update_official.email" type="text" class="form-control" id="email" placeholder="">
                    </div>
                 </div>
              </div>
            </form>
            <div v-if="!initialLoading"  class="d-flex mt-4">
              <button :disabled="isLoading" v-on:click.prevent="updateOfficial" class="btn btn-purple me-2">
                 <div v-if="isLoading" class="spinner-grow text-light spinner-grow-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                 </div>
                 Update Official
              </button>
              <router-link to="/home/universityinfo" :disabled="isLoading" class="btn btn-purple">
                Cancel
              </router-link>
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
      isLoading: false,
      initialLoading: true,
      isValid: false,
      fileRecords: [],
      fileRecordsForUpload: [],
    }
  },
  async mounted(){
    document.title = 'Update School Official'
    if(this.update_official == '') return this.$router.push('/home/universityinfo')
    this.initialLoading = false
  },
  methods: {
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
    async updateOfficial(){
     if(this.update_official.first_name == '') return this.$toast.error('First Name is required');
     if(this.update_official.last_name == '') return this.$toast.error('Last Name is required');
     if(this.update_official.gender == '') return this.$toast.error('Gender is required');
     if(this.update_official.role == '') return this.$toast.error('Role is required');

      this.isLoading = true

      if(this.fileRecordsForUpload.length > 0) {
        const img = await this.$refs.vueFileAgent.upload(
            `${this.envURL}/admin/uploadAccountImage?token=` + localStorage.getItem("auth"), 
            {'X-Requested-With' : 'XMLHttpRequest'}, this.fileRecordsForUpload
        );

        this.update_official.image = img[0].data
      }
      const res = await this.$store.dispatch('universityinfo/updateOfficial', this.update_official)
      if(res.status == 200){
        this.$router.push('/home/universityinfo')
        console.clear()
        this.$toast.success('School Official updated successfully!')
      }
      else {
        this.showError(res.data)
      }
      this.isLoading = false

   },
   showError(data){
      for (const key of Object.keys(data)) {
        this.$toast.error(data[key][0]); 
      }
   },
  },
  computed: {
    ...mapState('auth', ['signup']),
    ...mapState('universityinfo', ['update_official'])
  }

}
</script>