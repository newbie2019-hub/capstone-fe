<template>
 <div>
  <div class="img-selected" v-if="hasImgPopup" @click.prevent="hasImgPopup = false">
    <div class="img-selected--close">Click anywhere to close</div>
    <img :src="`http://127.0.0.1:8000/uploads/${imgPopup}`" alt="">
  </div>
  <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center mt-3">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card p-5 mb-4">
      <div class="d-flex align-items-center">
       <div class="d-flex flex-column me-auto mt-2">
        <h5 class="text-violet">UPDATES</h5>
        <p class="mb-4"><small>Manage your updates below</small></p>
       </div>
      </div>
      <div class="d-flex justify-content-end mt-2">
       <router-link to="/user/post/create" class="btn btn-purple btn-sm me-2 d-flex align-items-center"><i class="bi bi-plus-circle me-2"></i> New Post</router-link>
       <div class="col-7 col-sm-5 col-md-5 col-lg-4 col-xl-3">
        <div class="input-group form-floating">
         <input
          v-model="search_post"
          type="text"
          class="form-control"
          id="floatingSearchOrg"
          placeholder="Search here"/>
         <label for="floatingSearchOrg" class="">Search here</label>
         <button class="btn btn-purple"><i class="bi bi-search"></i></button>
        </div>
       </div>
      </div>
      <div class="table-responsive mt-3">
       <b-skeleton-table
        :rows="4"
        :columns="7"
        :table-props="{ bordered: false, striped: true }"
        v-if="initialLoading"></b-skeleton-table>
       <table class="table table-hover" v-if="!initialLoading">
        <caption>
         Showing {{ posts.from ?  posts.from : 0 }} to {{ posts.to ?  posts.to : 0 }} out of {{ posts.total }} posts.
        </caption>
        <thead>
         <tr>
          <th scope="col" class="text-nowrap">Cover Image</th>
          <th scope="col" class="text-nowrap">Title</th>
          <th scope="col" class="text-nowrap">Post Excerpt</th>
          <th scope="col" class="text-nowrap" v-if="user.userinfo.role.role != 'University Admin' && user.userinfo.role.role != 'President' && user.userinfo.role.role != 'Unit Chair' && user.userinfo.role.role != 'OSA' ">Status</th>
          <th scope="col" class="text-nowrap">Date Posted</th>
          <th scope="col">Actions</th>
         </tr>
        </thead>
        <tbody>
         <tr v-if="posts.data == 0 && !initialLoading">
          <td class="text-center pt-3 pb-3" colspan="6">There are no records to show</td>
         </tr>
         <tr v-else v-for="(post, i) in posts.data" :key="i">
          <td
           v-on:click.prevent="
            viewPost = post;
            $bvModal.show('viewPostModal');">
           <img
            v-if="post.postcontent.image"
            :src="`${imgURL}/` + post.postcontent.image"
            alt=""
            class=""
            width="100"/>
           <p class="text-muted" v-else>No Image</p>
          </td>
          <td class="text-nowrap cursor-pointer" v-on:click.prevent=" viewPost = post; $bvModal.show('viewPostModal');">
           {{ post.postcontent.title }} <br />
          </td>
          <td
           class="cursor-pointer"
           v-on:click.prevent="
            viewPost = post;
            $bvModal.show('viewPostModal');">
           <div style="min-width: 150px; max-width: 260px">
            {{ post.postcontent.post_excerpt }}
           </div>
          </td>
          <td class="cursor-pointer" v-if="user.userinfo.role.role != 'University Admin' && user.userinfo.role.role != 'President' && user.userinfo.role.role != 'Unit Chair' && user.userinfo.role.role != 'OSA' ">
           <b-badge :variant="post.status == 'Approved' ? 'success rounded-pill' : 'info rounded-pill'">{{ post.status}}</b-badge>
          </td>
          <td class="text-nowrap">{{ post.created_at | moment }}</td>
          <td>
           <div class="d-flex">
            <button
             v-if="$can('approve_post') && post.status != 'Approved'" v-on:click.prevent="approve_post.id = post.id; $bvModal.show('approvePostModal');" class="btn btn-sm btn-success rounded-pill btn-approve me-2">
             <i class="bi bi-check"></i>
            </button>
            <button
             v-if="post.user_account_id == user.id"
             v-on:click.prevent="updatePost(post)"
             class="btn btn-sm btn-success rounded-pill btn-approve me-2">
             <i class="bi bi-pencil-square"></i>
            </button>
            <button
             v-if="$can('delete_post') || post.user_account_id == user.id"
             @click="deletePost = post.id; $bvModal.show('deleteModal');" class="btn btn-sm btn-danger rounded-pill btn-approve me-2">
             <i class="bi bi-trash"></i>
            </button>
           </div>
          </td>
         </tr>
        </tbody>
       </table>
      </div>
      <div class="row mt-3" v-if="posts.data">
       <pagination :showDisabled="true" :align="'right'" :data="posts">
        <span slot="prev-nav">&laquo;</span>
        <span slot="next-nav">&raquo;</span>
       </pagination>
      </div>
     </div>
    </div>
   </div>

   <!-- IMAGE ANNOUNCEMENT TABLE --->
   <div class="row justify-content-center mt-3">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card p-5 mb-4">
      <div class="d-flex align-items-center">
       <div class="d-flex flex-column me-auto mt-2">
        <h5 class="text-violet">IMAGE UPDATE</h5>
        <p class="mb-4"><small>Manage your image updates below</small></p>
       </div>
      </div>
      <div class="d-flex justify-content-end mt-2">
       <router-link to="/user/post/create" class="btn btn-purple btn-sm me-2 d-flex align-items-center"><i class="bi bi-plus-circle me-2"></i> New Post</router-link>
       <div class="col-7 col-sm-5 col-md-5 col-lg-4 col-xl-3">
        <div class="input-group form-floating">
         <input
          v-model="filterUpdates"
          type="text"
          class="form-control"
          id="floatingSearchOrg"
          placeholder="Search here"/>
         <label for="floatingSearchOrg" class="">Search here</label>
         <button class="btn btn-purple"><i class="bi bi-search"></i></button>
        </div>
       </div>
      </div>
        <div class="table-responsive mt-3" v-if="imageupdates">
         <b-skeleton-table
          :rows="6"
          :columns="5"
          :table-props="{ bordered: false, striped: true }"
          v-if="initialLoading || isSearching"
         ></b-skeleton-table>
        <b-table id="imageUpdatesTable" :items="imageupdates" :filter="filterUpdates"
          :filter-included-fields="filterOn" :fields="['image', 'title', 'added_by', 'created_at', 'actions']" :per-page="8" :current-page="currentPage" striped show-empty v-else>
          <template #cell(image)="row" class="text-nowrap">
            <img v-if="row.item.image"
            :src="`${imgURL}/` + row.item.image" alt="" class="" width="100"/>
           <p class="text-muted text-nowrap" v-else>No Image</p>
          </template>
          <template #cell(added_by)="row" class="text-nowrap">
            {{ row.item.user.userinfo.first_name }} {{ row.item.user.userinfo.last_name }}
          </template>
          <template #cell(created_at)="row">
            {{ row.item.created_at | moment }}
          </template>
          <template #cell(actions)="row">
           <div class="d-flex">
              <b-button @click.prevent="$bvModal.show('viewImageModal'); selectedImgs = row.item" variant="success" size="sm" class="me-2">
                View
              </b-button>
              <b-button variant="danger" size="sm" class="" @click.prevent="deletePost = row.item.id; $bvModal.show('deleteImageUpdateModal')">
                Delete
              </b-button>
           </div>
          </template>
        </b-table>
        <div class="d-flex justify-content-end">
          <b-pagination
            class="mt-3"
            v-model="currentPage"
            :total-rows="imageupdates.length"
            :per-page="8"
            aria-controls="imageUpdatesTable"
          ></b-pagination>
        </div>
      </div>
     </div>
    </div>
   </div>
  </div>

  <b-modal id="viewImageModal" scrollable centered title="Images">
    <div class="row">
      <div class="col-6" v-for="(img, i) in selectedImgs.images" :key="i">
        <img @click.prevent="imgPopup = img.image; hasImgPopup = true" class="img-fluid me-2 cursor-pointer" height="200" width="200" :src="`http://127.0.0.1:8000/uploads/${img.image}`" />
      </div>
    </div>
    <template #modal-footer="{cancel}">
     <b-button variant="primary" @click="cancel()"> Cancel </b-button>
    </template>
  </b-modal>

  <b-modal id="deleteImageUpdateModal" centered title="Confirm Delete">
   <p class="">Are you sure to delete this post? This will delete all its images as well</p>
   <template #modal-footer="{cancel}">
    <b-button variant="primary" @click="cancel()"> Cancel </b-button>
    <b-button variant="danger" v-on:click.prevent="destroyImageUpdate" :disabled="isLoading">
     Delete
    </b-button>
   </template>
  </b-modal>

  <b-modal id="deleteModal" centered title="Confirm Delete">
   <p class="">Are you sure to delete this post?</p>
   <template #modal-footer="{cancel}">
    <b-button variant="primary" @click="cancel()"> Cancel </b-button>
    <b-button variant="danger" v-on:click.prevent="destroyPost" :disabled="isLoading">
     Delete
    </b-button>
   </template>
  </b-modal>

  <b-modal id="viewPostModal" scrollable centered :title="viewPost.postcontent.title">
   <div v-html="viewPost.postcontent.content"></div>
   <p class=" mt-3" v-if="viewPost.useraccount">
    <small>Added by:
     <strong>{{ viewPost.useraccount.userinfo.first_name }} {{ viewPost.useraccount.userinfo.last_name }}</strong></small>
   </p>
   <p class="">
    <small>{{ viewPost.created_at | moment }}</small>
   </p>
   <p class="">
    <small>Views: {{ viewPost.views }}</small>
   </p>
   <template #modal-footer="{cancel}">
    <b-button variant="primary" @click="cancel()"> Close </b-button>
   </template>
  </b-modal>

  <!--- APPROVE MODAL -->
  <b-modal id="approvePostModal" centered title="Confirm Approve">
   <p class="">Are you sure you want to approve this post?</p>
   <template #modal-footer="{cancel}">
    <b-button :disabled="isLoading" variant="primary" @click="cancel()"> Cancel </b-button>
    <b-button :disabled="isLoading" variant="success" v-on:click.prevent="approvePost">
     Approve
    </b-button>
   </template>
  </b-modal>
 </div>
</template>
<script>
 import { mapState, mapActions } from 'vuex';
 import moment from 'moment';
 const _ = require('lodash');

 export default {
  data() {
   return {
    hasImgPopup: false,
    imgPopup: '',
    selectedImgs: {
      image: '',
    },
    currentPage: 1,
    selectedImageUpdate: '',
    viewPost: {
     postcontent: {
      title: '',
      content: '',
     },
    },
    initialLoading: false,
    isLoading: false,
    isSearching: false,
    search_post: '',
    update_search: '',
    filterUpdates: null,
    filterOn: [],
    approve_post: {
     id: '',
    },
    post: {
     title: '',
     content: '',
     image: '',
    },
    update: {
     title: '',
     content: '',
     image: '',
    },
    deletePost: '',
   };
  },
  filters: {
   moment: function(date) {
    return moment(date).format('MMM D, YYYY, h:mm a');
   },
  },
  computed: {
   ...mapState('auth', ['user']),
   ...mapState('post', ['posts', 'post_types', 'imageupdates']),
  },
  async mounted() {
   document.title = 'Info Kiosk - Post Management';
   this.initialLoading = true;
   await this.checkAuthUser();
   await this.$store.dispatch('post/getPost', 1);
   await this.$store.dispatch('post/getImageUpdates');
   this.initialLoading = false;
  },
  methods: {
   ...mapActions('auth', ['checkAuthUser']),
   async approvePost() {
    const res = await this.$store.dispatch('post/approvePost', this.approve_post);
    if (res.status == 200) {
     this.$toast.success('Post has been approved');
    } else {
     this.$toast.error('Something went wrong');
    }
    this.$bvModal.hide('approvePostModal');
   },
   async updatePost(data) {
    this.$store.commit('post/SET_UPDATE_POST', data);
    this.$router.push('/user/post/update');
   },
   async destroyPost() {
    this.isLoading = true;
    const res = await this.$store.dispatch('post/deletePost', this.deletePost);
    if (res.status == 200) {
     await this.$store.dispatch('post/getPost', 1);
     this.$toast.success('Post deleted successfully!');
     this.$bvModal.hide('deleteModal');
    } else {
     this.$toast.error('Something went wrong');
    }
    this.isLoading = false;
   },
   async destroyImageUpdate() {
    this.isLoading = true;
    const res = await this.$store.dispatch('post/deleteImagePost', this.deletePost);
    if (res.status == 200) {
     this.$toast.success('Post deleted successfully!');
     this.$bvModal.hide('deleteImageUpdateModal');
    } else {
     this.$toast.error('Something went wrong');
    }
    this.isLoading = false;
   },
   async searchPost(page) {
    let data = {
     search: this.search_post,
    };
    this.isSearching = true;
    await this.$store.dispatch('post/searchPost', { page: page, data: data });
    this.isSearching = false;
   },
   async getPost(page) {
    await this.$store.dispatch('post/getPost', page);
   },
   postSearch(page = 1) {
    if (this.search_post == '') {
     this.getPost(page);
    } else {
     this.searchPost(page);
    }
   },
  },
  created: function() {
   this.debouncedPostSearch = _.debounce(this.postSearch, 800);
  },
  watch: {
   search_post(before, after) {
    this.debouncedPostSearch();
   },
  },
 };
</script>
<style>
.img-selected {
  position: fixed;
  display: flex;
  inset: 0;
  z-index: 99999 ;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(12, 12, 12, 0.822)
}

.img-selected img{
  height: 100%;
  width: auto;
  padding: 2rem 0rem;
  object-fit: contain;
}

.img-selected--close {
  position: absolute;
  bottom: 1.5rem;
  left: 2rem;
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 300;
}
</style>
