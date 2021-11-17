<template>
  <div>
   <div class="navbar " :class="scrollpx >= 50 ? 'navbar-scrolled' : ''">
    <input type="checkbox" id="nav" class="hidden">
    <label for="nav" class="nav-btn" id="navbtn">
      <i></i>
      <i></i>
      <i></i>
    </label> 
    <div class="d-flex me-auto" v-if="user.length != 0">
     <router-link to="/home/settings" class="text-decoration-none bg-transpa">
       <b-avatar variant="dark" v-if="user.admininfo.image" :src="`${imgURL}/${user.admininfo.image}`" size="3rem"></b-avatar>
       <b-avatar variant="dark" v-else size="3rem"></b-avatar>
     </router-link>
     <div class="d-flex flex-column justify-content-center ms-3">
      <h6 v-if="user.length != 0">{{user.admininfo.first_name}} {{user.admininfo.last_name}}</h6>
      <h6 class="text-muted nav-email-mobile" v-if="user.length != 0"><small>{{user.email}}</small></h6>
      <h6 class="text-muted" v-if="user.length != 0"><small>Administrator</small></h6>
     </div>
    </div>
    <div class="d-flex">
     <i v-b-tooltip.hover title="Dark Mode" class="bi bi-lightbulb c-primary bi-3x dark-mode-margin"></i>
    </div>
    <a href="" v-on:click.prevent="$bvModal.show('logoutModal')" class=" text-decoration-none ms-2 logout-btn">
    <div class="d-flex btn-logout ms-3 justify-content-center flex-row align-items-center c-primary ">
     <i class="bi bi-box-arrow-in-right bi-2x logout-btn me-2"></i> 
      Log-out
    </div>
    </a>
   </div>

   <b-modal id="logoutModal" centered title="Logout">
    <p class="my-4">Are you sure you want to log-out?</p>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()" :disabled="isLoading"> Cancel </b-button>
      <b-button variant="danger" v-on:click.prevent="logout" :disabled="isLoading">
        Logout
      </b-button>
    </template>
   </b-modal>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
  data(){
    return {
      scrollpx: 0,
      isLoading: false
    }
  },
  async mounted(){
   await this.checkUser();
  },
  computed: {
   ...mapState('auth', ['user'])
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
   ...mapActions('auth', ['checkUser', 'logoutUser']),
   async logout(){
     this.isLoading = true
     const res = await this.logoutUser()
     if(res.status == 200){
       this.$router.push('/')
     }
     else if (res.status == 401){
       this.$store.commit('auth/UNSET_USER')
       this.$router.push('/')
     }
     this.isLoading = false
   },
   handleScroll() {
      this.scrollpx = window.scrollY;
   },
   
  }
 
}
</script>