<template>
 <div>
    <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
     <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12">
          <div class="card p-5 mb-4">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">USER POSTS</h5>
                <p class="mb-4"><small>Manage post added by the users below</small></p>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <button @click.prevent="$bvModal.show('noteModal')" class="btn rounded-pill d-flex align-items-center me-2">
                <i class="bi bi-question-circle bi-2x"></i>
              </button>
              <div class="col-10 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating">
                  <input v-model="search" type="text"  class="form-control" id="floatingSearchOrg" placeholder="Search here">
                  <label  for="floatingSearchOrg" class="">Search here</label>
                  <button class="btn btn-purple"><i class="bi bi-search"></i></button>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-4">
              <div v-if="posts == 0">No Posts found</div>
              <b-skeleton-table
                  :rows="4"
                  :columns="7"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading"
                ></b-skeleton-table>
              <table class="table table-hover table-striped" v-if="!initialLoading">
                <caption>Showing {{posts.from}} to {{posts.to}} out of {{posts.total}} posts.</caption>
                <thead>
                  <tr>
                    <th scope="col" class="text-nowrap">Image</th>
                    <th scope="col" class="text-nowrap">User</th>
                    <th scope="col" class="text-nowrap">Title</th>
                    <th scope="col" class="text-nowrap">Status</th>
                    <th scope="col" class="text-nowrap">Deleted</th>
                    <th scope="col" class="text-nowrap" >Post Excerpt</th>
                    <th scope="col" class="text-nowrap">Date Posted</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="posts.data == 0 && !initialLoading">
                    <td class="text-center pt-3 pb-3" colspan="8">No data available</td>
                  </tr>
                  <tr v-for="(post, i) in posts.data" :key="i">
                    <td v-on:click.prevent="viewPost = post; $bvModal.show('viewPostModal')">
                      <img v-if="post.postcontent.image" :src="`${imgURL}/` + post.postcontent.image" alt="" class="" width="100"/>
                      <p class="text-muted" v-else>No Image</p>
                    </td>
                    <td class="text-nowrap cursor-pointer" v-on:click.prevent="viewPost = post; $bvModal.show('viewPostModal')">
                      {{post.useraccount.userinfo.first_name}} {{post.useraccount.userinfo.last_name}}<br/>
                      <small><span class="">{{post.useraccount.deleted_at ? 'Account Deleted' : ''}}</span></small>
                    </td>
                    <td class="text-nowrap cursor-pointer" v-on:click.prevent="viewPost = post; $bvModal.show('viewPostModal')">
                      {{post.postcontent.title}} <br/> 
                    </td>
                    <td>
                     <b-badge class="rounded-pill " :class="post.status == 'Approved' ? 'bg-success' : 'bg-danger'">{{post.status}}</b-badge>
                    </td>
                    <td>
                     <span class="text-muted fw-bold"><small>{{post.deleted_at ? 'Deleted' : ''}}</small></span>
                    </td>
                    <td class="cursor-pointer" v-on:click.prevent="viewPost = post; $bvModal.show('viewPostModal')">
                      <div style="width: 250px">
                        {{post.postcontent.post_excerpt}}
                      </div>
                    </td>
                    <td class="text-nowrap">{{post.created_at | moment}}</td>
                    <td>
                      <div class="d-flex">
                        <button v-if="!post.deleted_at" @click="deletePost = post.id; $bvModal.show('deleteModal')" class="btn btn-sm btn-danger d-flex me-2" >
                          <i class="bi bi-trash me-1"></i> Delete
                        </button>
                        <button v-if="post.deleted_at && !post.useraccount.deleted_at" @click="restorePost = post.id; $bvModal.show('restoreModal')" class="btn btn-sm btn-secondary d-flex me-2" >
                          <i class="bi bi-recycle me-1"></i> Restore
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
    </div>

    <b-modal id="noteModal" centered title="Note">
        <p class="">Listed on the table are the posts created by the users. For the deleted posts, you can restore it if the user account is not deleted. But, if you'd wish to really restore the post you can then restore the account first on the <router-link to="/home/archived/accounts">Archived Account</router-link> section.</p>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Close </b-button>
        </template>
    </b-modal>

    <b-modal id="deleteModal" centered title="Confirm Delete">
        <p class="">Are you sure you want to delete this post?</p>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="danger" v-on:click.prevent="destroyPost" :disabled="isLoading">
            Delete
        </b-button>
        </template>
    </b-modal>

    <b-modal id="restoreModal" centered title="Confirm Restore">
        <p class="">Are you sure you want to restore this post?</p>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="danger" v-on:click.prevent="revertPost" :disabled="isLoading">
            Restore
        </b-button>
        </template>
    </b-modal>

    <b-modal id="viewPostModal" scrollable centered :title="viewPost.postcontent.title">
        <div v-html="viewPost.postcontent.content"></div>
        <p class="mt-3"><small>Date Posted: {{viewPost.created_at | moment}}</small></p>
        <p class=""><small>Posted by: {{viewPost.useraccount.userinfo.first_name}} {{viewPost.useraccount.userinfo.last_name}}</small></p>
        <template #modal-footer = {cancel} >
          <b-button variant="primary" @click="cancel()"> Close </b-button>
        </template>
    </b-modal>
 </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import moment from 'moment'
const _ = require('lodash');

export default {
    data(){
    return {
       viewPost: {
        useraccount: {
         userinfo: {
          first_name: '',
          last_name: ''
         }
        },
        postcontent: {
          title: '',
          content: ''
        },
       },
       initialLoading: false,
       isLoading: false,
       isSearching: false,
       search: '',
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
       restorePost: '',
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMM D, YYYY, h:mm a');
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('post', ['posts','post_types']),
  },
  async mounted(){
    document.title = 'Info Kiosk - Post Management'
    this.initialLoading = true
    await this.checkUser()
    await this.$store.dispatch('post/getUserPosts', 1);
    this.initialLoading = false
  },
  methods: {
    ...mapActions('auth', ['checkUser']),
    async destroyPost(){
        this.isLoading = true
        const res = await this.$store.dispatch('post/deleteUserPost', this.deletePost)
        if(res.status == 200){
            await this.$store.dispatch('post/getUserPosts', 1);
            this.$toast.success('Post deleted successfully!')
            this.$bvModal.hide('deleteModal')
        } else {
            this.$toast.error('Something went wrong')
        }
        this.isLoading = false
    },
    async revertPost(){
        this.isLoading = true
        const res = await this.$store.dispatch('post/restoreUserPost', this.restorePost)
        if(res.status == 200){
            await this.postSearch()
            this.$toast.success('Post restored successfully!')
            this.$bvModal.hide('restoreModal')
        } else {
            this.$toast.error('Something went wrong')
        }
        this.isLoading = false
    },
     async searchPost(page){
      let data = {
        search: this.search
      }
      this.isSearching = true
      await this.$store.dispatch('post/searchUserPosts', {page: page, data: data})
      this.isSearching = false
    },
    async getPost(page){
       await this.$store.dispatch('post/getUserPosts', page);
    },
    postSearch(page = 1){
      if(this.search == ''){
        this.getPost(page)
      }
      else {
        this.searchPost(page)
      }
    },
  },
  created: function () {
    this.debouncedPostSearch = _.debounce(this.postSearch, 800)
  },
  watch: {
    search(before, after){
      this.debouncedPostSearch()
    }
  }
}
</script>