<template>
 <div>
    <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
     <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12">
          <div class="card p-5 mb-4">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">POSTS</h5>
                <p class="mb-4"><small>Manage your posts below</small></p>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <router-link to="/user/post/create" class="btn btn-purple btn-sm me-2 d-flex align-items-center"><i class="bi bi-plus-circle me-2"></i> New Post</router-link>
              <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating">
                  <input v-model="search_post" type="text"  class="form-control" id="floatingSearchOrg" placeholder="Search here">
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
              <table class="table table-hover" v-if="!initialLoading">
                <caption>Showing {{posts.from}} to {{posts.to}} out of {{posts.total}} posts.</caption>
                <thead>
                  <tr>
                    <th scope="col" class="text-nowrap">Image</th>
                    <th scope="col" class="text-nowrap">Title</th>
                    <th scope="col" class="text-nowrap">Post Excerpt</th>
                    <th scope="col" class="text-nowrap">Date Posted</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="posts.data == 0 && !initialLoading">
                    <td class="text-center pt-3 pb-3" colspan="6">No data available</td>
                  </tr>
                  <tr v-for="(post, i) in posts.data" :key="i">
                    <td v-on:click.prevent="viewPost = post; $bvModal.show('viewPostModal')">
                      <img v-if="post.postcontent.image" :src="`${imgURL}/` + post.postcontent.image" alt="" class="" width="100"/>
                      <p class="text-muted" v-else>No Image</p>
                    </td>
                    <td class="text-nowrap cursor-pointer" v-on:click.prevent="viewPost = post; $bvModal.show('viewPostModal')">
                      {{post.postcontent.title}} <br/>
                    </td>
                    <td class="cursor-pointer" v-on:click.prevent="viewPost = post; $bvModal.show('viewPostModal')">{{post.postcontent.post_excerpt}}</td>
                    <td class="text-nowrap">{{post.created_at | moment}}</td>
                    <td>
                      <div class="d-flex">
                        <button v-if="$can('approve_post') && post.status != 'Approved'" v-on:click.prevent="approve_post.id = post.id; $bvModal.show('approvePostModal')" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                           <i class="bi bi-check"></i>
                        </button>
                        <button v-if="post.user_account_id == user.id" v-on:click.prevent="updatePost(post)" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button v-if="$can('delete_post') || post.user_account_id == user.id" @click="deletePost = post.id; $bvModal.show('deleteModal')" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
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
    </div>

    <b-modal id="deleteModal" centered title="Confirm Delete">
        <p class="">Are you sure to delete this post?</p>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="danger" v-on:click.prevent="destroyPost" :disabled="isLoading">
            Delete
        </b-button>
        </template>
    </b-modal>

    <b-modal id="viewPostModal" scrollable centered :title="viewPost.postcontent.title">
        <div v-html="viewPost.postcontent.content"></div>
        <p class="mt-2"><small>Date Posted: {{viewPost.created_at | moment}}</small></p>
        <p class="mb-3"><small>Views: {{viewPost.views}}</small></p>
        <template #modal-footer = {cancel} >
          <b-button variant="primary" @click="cancel()"> Close </b-button>
        </template>
    </b-modal>
 </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import moment from 'moment'
export default {
    data(){
    return {
       viewPost: {
         postcontent: {
           title: '',
           content: ''
         },
       },
       initialLoading: false,
       isLoading: false,
       isSearching: false,
       search_post: '',
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
    await this.checkAuthUser()
    await this.$store.dispatch('post/getPost', 1);
    this.initialLoading = false
  },
  methods: {
    ...mapActions('auth', ['checkAuthUser']),
    async updatePost(data){
      this.$store.commit('post/SET_UPDATE_POST', data)
      this.$router.push('/user/post/update')
    },
    async destroyPost(){
        this.isLoading = true
        const res = await this.$store.dispatch('post/deletePost', this.deletePost)
        if(res.status == 200){
            await this.$store.dispatch('post/getPost', 1);
            this.$toast.success('Post deleted successfully!')
            this.$bvModal.hide('deleteModal')
        } else {
            this.$toast.error('Something went wrong')
        }
        this.isLoading = false
    },
     async searchPost(page){
      let data = {
        search: this.search_role
      }
      this.isSearching = true
      await this.$store.dispatch('post/searchPost', {page: page, data: data})
      this.isSearching = false
    },
    async getPost(page){
       await this.$store.dispatch('post/getPost', page);
    },
    postSearch(page = 1){
      if(this.search_post == ''){
        this.getPost(page)
      }
      else {
        this.searchPost(page)
      }
    },
  },
  watch: {
    search_post(before, after){
      this.postSearch()
    }
  }
}
</script>