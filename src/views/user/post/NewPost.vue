<template>
 <div>
  <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card mb-3 pe-2 ps-5 pb-4 pt-4">
      <h5 class="mt-3">Create Post</h5>
      <p class="text-muted">All fields are required</p>
      <div class="col-10 col-sm-10 col-md-7 col-lg-6">
       <form @submit.prevent="savePost">
        <label for="" class="mt-3">Cover Image</label>
        <VueFileAgent
         class="mb-2"
         ref="vueCoverImage"
         @select="filesSelected($event)"
         :multiple="false"
         :maxSize="'4MB'"
         :deletable="true"
         :accept="'image/*,'"
         :theme="'list'"
         @beforedelete="onBeforeDelete($event)"
         @delete="fileDeleted($event)"
         :errorText="{
          type: 'Invalid file type. Only image file is allowed',
          size: 'Image should not exceed 4MB in size',
         }"
         v-model="fileRecords"
        ></VueFileAgent>
        <label for="posttype" class="mt-1">Type</label>
        <select v-model="data.type" id="posttype" class="form-select">
         <option value="text">Text Update</option>
         <option value="image">Image Update</option>
        </select>
        <label for="posttitle" class="mt-1">Enter Title</label>
        <input v-model="data.title" type="text" class="form-control" id="posttitle" placeholder=" " />
        <div v-if="data.type == 'text'">
         <label for="postexcerpt" class="mt-1">Post Excerpt</label>
         <textarea
          v-model="data.post_excerpt"
          type="text"
          class="form-control"
          rows="3"
          id="postexcerpt"
          placeholder=" "
         ></textarea>
         <label for="updatecontent" class="mt-2">Content</label>
         <textarea v-model="data.content" class="form-control" rows="5" />
        </div>
        <div v-else>
         <label for="" class="mt-3">Select Images</label>
         <VueFileAgent
          class="mb-2"
          ref="vueFileAgent"
          @select="filesSelectedImageUpdate($event)"
          :multiple="true"
          :maxSize="'4MB'"
          :deletable="true"
          :maxFiles="5"
          :accept="'image/*,'"
          :theme="'list'"
          @beforedelete="onBeforeDeleteImageUpdate($event)"
          @delete="fileDeletedImageUpdate($event)"
          :errorText="{
           type: 'Invalid file type. Only image file is allowed',
           size: 'Image should not exceed 4MB in size',
          }"
          v-model="fileUpdateImages"
         ></VueFileAgent>
        </div>
        <div class="d-flex mt-3">
         <button type="submit" class="btn btn-success me-1" :disabled="isLoading">Save Post</button>
         <a @click.prevent="$router.back()" href="" class="btn btn-secondary">Cancel</a>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
 // import { VueEditor } from "vue2-editor";
 // import ImageResize from "quill-image-resize-vue";
 // import { ImageDrop } from "quill-image-drop-module";
 import API from '../../../store/base/index'
 import { mapActions } from 'vuex';
 export default {
  //  components: { VueEditor },
  data() {
   return {
    //  customModulesForEditor: [
    //    { alias: "imageDrop", module: ImageDrop },
    //    { alias: "imageResize", module: ImageResize },
    //  ],
    fileRecords: [],
    fileRecordsForUpload: [],
    fileUpdateImages: [],
    fileUpdateImagesUpload: [],
    editorSettings: {
     modules: {
      imageDrop: true,
      imageResize: {},
     },
    },
    data: {
     title: '',
     content: '',
     post_excerpt: '',
     type: 'text',
     imageupdate: []
    },
    isLoading: false,
    initialLoading: false,
   };
  },
  async mounted() {
   document.title = 'Create Post - Touchless Information Management';
   this.isLoading = true;
   this.initialLoading = true;
   await this.checkAuthUser();
   this.initialLoading = false;
   this.isLoading = false;
  },
  methods: {
   ...mapActions('auth', ['checkAuthUser']),
   filesSelected: function(fileRecordsNewlySelected) {
    var validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
    this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords);
   },
   fileDeleted: function(fileRecord) {
    var i = this.fileRecordsForUpload.indexOf(fileRecord);
    if (i !== -1) {
     this.fileRecordsForUpload.splice(i, 1);
    }
   },
   onBeforeDelete: function(fileRecord) {
    console.log(fileRecord);
    var i = this.fileRecordsForUpload.indexOf(fileRecord);
    if (i !== -1) {
     this.fileRecordsForUpload.splice(i, 1);
     var k = this.fileRecords.indexOf(fileRecord);
     if (k !== -1) this.fileRecords.splice(k, 1);
    }
   },
   filesSelectedImageUpdate: function(newlySelected) {
    var validFileRecords = newlySelected.filter((fileRecord) => !fileRecord.error);
    this.fileUpdateImagesUpload = this.fileUpdateImagesUpload.concat(validFileRecords);
   },
   onBeforeDeleteImageUpdate: function(fileUpdateImages) {
    var i = this.fileUpdateImagesUpload.indexOf(fileUpdateImages);
    if (i !== -1) {
     // queued file, not yet uploaded. Just remove from the arrays
     this.fileUpdateImagesUpload.splice(i, 1);
     var k = this.fileUpdateImages.indexOf(fileUpdateImages);
     if (k !== -1) this.fileUpdateImages.splice(k, 1);
    } else {
      if (confirm('Are you sure you want to delete?')) {
        this.$refs.vueFileAgent.deleteFileRecord(fileUpdateImages); // will trigger 'delete' event
      }
    }
   },
   fileDeletedImageUpdate: function(fileUpdateImages) {
    var i = this.fileUpdateImagesUpload.indexOf(fileUpdateImages);
    if (i !== -1) {
     this.fileUpdateImagesUpload.splice(i, 1);
    } 
   },
   handleImageAdded: function(file) {
    var formData = new FormData();
    formData.append('image', file);
   },
   async savePost() {
    if (this.data.title == '') return this.$toast.error('Title is required!');
    if (this.data.type == 'text') {
     if (this.data.content == '') return this.$toast.error('Post content is required!');
     if (this.data.post_excerpt == '') return this.$toast.error('Post excerpt is required!');
    }

    if (this.fileRecordsForUpload.length > 0) {
     const img = await this.$refs.vueCoverImage.upload(
      `${this.envURL}/user/uploadPostImage?token=` + localStorage.getItem('auth'),
      { 'X-Requested-With': 'XMLHttpRequest' },
      this.fileRecordsForUpload
     );

     this.data.image = img[0].data;
    }

    if (this.fileUpdateImagesUpload.length > 0) {
     const img = await this.$refs.vueFileAgent.upload(
      `${this.envURL}/user/uploadPostImage?token=` + localStorage.getItem('auth'),
      { 'X-Requested-With': 'XMLHttpRequest' },
      this.fileUpdateImagesUpload
     ).then((res) => {
       this.fileUpdateImagesUpload.forEach((element, i) => {
         this.data.imageupdate.push(res[i].data)
       });
     });

    }

    this.isLoading = true;

    const res = await this.$store.dispatch('post/savePost', this.data);

    if (res.status == 200) {
     this.$toast.success('Post added successfully!');
     this.data = { title: '', content: '' };
     this.$router.back();
    }
    this.isLoading = false;
   },
  },
 };
</script>
<style>
 @import '~vue2-editor/dist/vue2-editor.css';
</style>
