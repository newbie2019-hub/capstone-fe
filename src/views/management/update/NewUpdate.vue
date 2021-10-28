<template>
 <div>
  <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div class="card mb-3 pe-5 ps-5 pb-4 pt-4">
       <h5 class="mt-3">New Update</h5>
       <p class="text-muted">All fields are required</p>
        <form @submit.prevent="saveUpdate">
         <div class="col-10 col-sm-10 col-md-7 col-lg-6">
          <label for="" class="mt-3">Image</label>
          <VueFileAgent class="mb-2"
                  ref="vueFileAgent"
                  @select="filesSelected($event)"
                  :multiple="false"
                  :maxSize="'5MB'"
                  :deletable="true"
                  :accept="'image/*,'"
                  :theme="'list'"
                  @beforedelete="onBeforeDelete($event)"
                  @delete="fileDeleted($event)"
                  :errorText="{
                    type: 'Invalid file type. Only image file is allowed',
                    size: 'Image should not exceed 5MB in size',
                  }"
              v-model="fileRecords"
            ></VueFileAgent>
           <label for="updatetitle" class="mt-1">Enter Title</label>
           <input v-model="data.title" type="text" class="form-control" id="updatetitle" placeholder=" ">
           <label for="updatecontent" class="mt-2">Content</label>
         </div>
         <vue-editor
            id="editor"
            :customModules="customModulesForEditor"
            :editorOptions="editorSettings"
            :editorToolbar="customToolbar"
            useCustomImageHandler
            v-model="data.content"
            @image-added="handleImageAdded"
          />
          <div class="d-flex mt-3">
           <button type="submit" class="btn btn-success btn-sm me-1">Save Update</button>
           <a href="/home/admin/updates" class="btn btn-secondary btn-sm">Cancel</a>
          </div>
        </form>
      </div>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import ImageResize from "quill-image-resize-vue";
import { ImageDrop } from "quill-image-drop-module";
import {mapActions} from 'vuex'
export default {
 components: { VueEditor },
 data(){
  return {
   customModulesForEditor: [
     { alias: "imageDrop", module: ImageDrop },
     { alias: "imageResize", module: ImageResize },
   ],
   fileRecords: [],
   fileRecordsForUpload: [],
   editorSettings: {
     modules: {
       imageDrop: true,
       imageResize: {},
     },
   },
   customToolbar: [
     [{ header: [false, 1, 2, 3, 4, 5, 6] }],
     ["bold", "italic", "underline", "strike"],
     [
       { align: "" },
       { align: "center" },
       { align: "right" },
       { align: "justify" },
     ],
     ["blockquote", "code-block"],
     [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
     [{ script: "sub" }, { script: "super" }],
     [{ color: [] }, { background: [] }],
     ["link", "image"],
     ["clean"],
   ],
   data: {
    title: '',
    content: ''
   },
  }
 },
 async mounted(){
  document.title = "New Update - Touchless Information Management"
   this.isLoading = true;
   this.initialLoading = true;
   await this.checkUser();
   this.initialLoading = false;
   this.isLoading = false;
 },
 methods: {
    ...mapActions('auth', ['checkUser']),
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
    console.log(fileRecord)
    var i = this.fileRecordsForUpload.indexOf(fileRecord);
    if (i !== -1) {
      this.fileRecordsForUpload.splice(i, 1);
     var k = this.fileRecords.indexOf(fileRecord);
      if (k !== -1) this.fileRecords.splice(k, 1);
    }
  },
  handleImageAdded: function(file) {
    var formData = new FormData();
    formData.append("image", file);
  },
  async saveUpdate(){
   if(this.data.title == '') return this.$toast.error('Title is required!');  
   if(this.data.content == '') return this.$toast.error('Post content is required!');  
   if(this.fileRecordsForUpload.length > 0) {
     const img = await this.$refs.vueFileAgent.upload(
       `http://127.0.0.1:8000/api/user/uploadPostImage?token=` + localStorage.getItem("auth"), 
       {'X-Requested-With' : 'XMLHttpRequest'}, this.fileRecordsForUpload
     );

     this.data.image = img[0].data
   }
   this.isLoading = true
   const res = await this.$store.dispatch('updates/saveUpdate', this.data)
   console.log(res)
   if(res.status == 200 ){
     await this.$store.dispatch('updates/getUpdates', 1);
     this.$toast.success('Updated added successfully!')
     this.data = {title: '', content: ''}
     this.$router.push('/home/admin/updates')
   }
   this.isLoading = false
  }
 },
}
</script>
<style>
@import "~vue2-editor/dist/vue2-editor.css";
</style>